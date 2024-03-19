import { Link, useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const router = useRouter();
  const scrollRef = useRef<ScrollView | null>(null);

  const keyBoardDidShow = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 220, animated: true });
    }
  };

  const keyBoardDidHide = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ y: 0, animated: true });
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyBoardDidShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyBoardDidHide
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 12 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          ref={scrollRef}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
          bounces={false}
        >
          <Text style={{ fontFamily: "sans", fontSize: 28, color: "yellow" }}>
            Welcome Back!
          </Text>
          <Text style={{ fontFamily: "sans", color: "#d3d3d3" }}>
            Enter your information below
          </Text>
          <View style={{ gap: 12, width: "100%", marginVertical: 12 }}>
            <View style={{ width: "100%" }}>
              <TextInput
                style={{
                  borderColor: "rgba(255, 253, 175, 0.8)",
                  borderWidth: 0.5,
                  width: "100%",
                  padding: 12,
                }}
                placeholderTextColor={"#d3d3d3"}
                placeholder="Email"
              />
            </View>
            <View style={{ width: "100%" }}>
              <TextInput
                style={{
                  borderColor: "rgba(255, 253, 175, 0.8)",
                  borderWidth: 0.5,
                  width: "100%",
                  padding: 12,
                }}
                placeholder="Password"
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
          </View>
          <Link asChild href={"/(tabs)/"} style={{ width: "100%" }}>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/")}
              style={{
                backgroundColor: "yellow",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontFamily: "sans",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Link>
          <Link
            href={"/(auth)/register"}
            asChild
            style={{ marginVertical: 24 }}
          >
            <Text style={{ color: "white" }}>
              Don't have an account? Register
            </Text>
          </Link>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
