import { View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 12 }}>
      <PagerView
        style={{ width: "100%", height: 200 }}
        overScrollMode={"always"}
        overdrag
        initialPage={0}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "yellow",
          }}
          key="1"
        >
          <Text style={{ color: "white" }}>First page</Text>
          <Text>Swipe ➡️</Text>
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
