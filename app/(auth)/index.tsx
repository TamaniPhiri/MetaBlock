import { Link } from "expo-router";
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
            Let's Get You Signed In!
          </Text>
          <Text style={{ fontFamily: "sans", color: "#d3d3d3" }}>
            Enter your information below
          </Text>
          <View style={{ gap: 12, width: "100%", marginVertical: 12 }}>
            <View style={{ width: "100%" }}>
              <TextInput
                style={{
                  borderColor: "yellow",
                  borderWidth: 1,
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
                  borderColor: "yellow",
                  borderWidth: 1,
                  width: "100%",
                  padding: 12,
                }}
                placeholder="Password"
                placeholderTextColor={"#d3d3d3"}
              />
            </View>
          </View>
          <Link asChild href={"/(tabs)/"} style={{ width: "100%" }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontFamily: "sans",
                  backgroundColor: "yellow",
                  width: "100%",
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </Link>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
