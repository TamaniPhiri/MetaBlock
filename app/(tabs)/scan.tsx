import { View, Text, Alert, StyleSheet, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { SafeAreaView } from "react-native-safe-area-context";

const Scan = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      try {
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status === "granted");
      } catch (error) {
        console.error("Error requesting camera permission:", error);
        Alert.alert("Error", "Failed to request camera permission");
      }
    };
    getBarCodeScannerPermissions();
  }, []);

   const handleBarCodeScanned = async ({ data }: { data: string }) => {
     try {
       const qrCodeData = JSON.parse(data);
       Alert.alert(qrCodeData);
    console.log(data);
     } catch (error: any) {
       console.log("error scanning qrcode:",error);
     } 
   };

  

  const renderCamera = () => {
    return (
      <View style={styles.cameraContainer}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned
          }
          style={styles.camera}
        />
      </View>
    );
  };


    if (hasPermission === null) {
      return <ActivityIndicator size="large" color={"yellow"} />;
    }

    if (hasPermission === false) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Camera permission not granted</Text>
        </View>
      );
    }
  return <SafeAreaView>{renderCamera()}</SafeAreaView>;
};

export default Scan;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "yellow",
    marginTop: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
  cameraContainer: {
    width: "100%",
    minHeight: "75%",
  },
  camera: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: "red",
  },
  errorContainer: {
    width: "100%",
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 12,
  },
  metaDataContainer: {
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  metaDataTitle: {
    textAlign: "center",
    fontSize: 20,
  },
  metaData: {
    textAlign: "center",
    fontSize: 18,
    textTransform: "capitalize",
  },
});