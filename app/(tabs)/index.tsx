import { View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 12 }}>
      <View>
        <Text style={{ fontFamily: "sans" }}>hello</Text>
      </View>
      <PagerView
        style={{ width: "100%", height: 150 }}
        overScrollMode={"always"}
        overdrag
        initialPage={0}
      >
        <View
          style={{
            backgroundColor: "yellow",
            padding: 12,
            borderRadius: 12,
          }}
          key="1"
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Entypo
              name="wallet"
              size={24}
              color="white"
              style={{
                backgroundColor: "black",
                width: "auto",
                padding: 6,
                borderRadius: 50,
              }}
            />
            <Text style={{ fontFamily: "sans" }}>Total Wallet Balance</Text>
            <Text style={{ fontFamily: "sans", fontWeight: "700" }}>ZMW</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View></View>
            <View style={{ backgroundColor: "#86efac" }}>
              <Text>+ 3.57%</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
          }}
          key="2"
        >
          <Text style={{ color: "white" }}>Second page</Text>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
          key="3"
        >
          <Text style={{ color: "white" }}>Third page</Text>
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

export default Home;
