import { Stack } from "expo-router";

const AuthRoot = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="login">
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
    </Stack>
  );
};

export default AuthRoot;
