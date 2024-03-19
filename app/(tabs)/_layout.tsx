import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "yellow",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          bottom: 6,
          borderRadius: 79,
          paddingBottom: 4,
        },
        tabBarLabelStyle: {
          margin: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "sans",
          },
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: "Scan",
          tabBarIcon: ({ color, size }) => (
            <Feather name="compass" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "sans",
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontFamily: "sans",
          },
        }}
      />
    </Tabs>
  );
}
