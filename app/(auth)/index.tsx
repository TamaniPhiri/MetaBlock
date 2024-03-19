import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontFamily: "sans", fontSize: 28, color: "yellow" }}>
        Let's Get You Signed In!
      </Text>
      <Text style={{ fontFamily: "sans", color: "#d3d3d3" }}>
        Enter your information below
      </Text>
      <Link asChild href={"/(tabs)/"}>
        <TouchableOpacity>
          <Text style={{ color: "white", fontFamily: "sans" }}>Home</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

export default Login;
