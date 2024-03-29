import { View, Text, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 12 }}>
      <View
        style={{
          paddingVertical: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "sans",
            color: "white",
            fontSize: 24,
            fontWeight: "500",
          }}
        >
          Hello Tamani!
        </Text>
        <TouchableOpacity>
          <Ionicons name="notifications" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <PagerView
        style={{ width: "100%", height: 170 }}
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
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <View>
              <Text style={{ fontFamily: "sans", fontSize: 32 }}>
                K 57.9896
              </Text>
              <Text style={{ fontFamily: "sans" }}>9.7545BTC</Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: "#86efac",
                  padding: 6,
                  borderRadius: 12,
                }}
              >
                + 5.57%
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 12,
              gap: 6,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                padding: 6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "gray",
              }}
            >
              <Text style={{ fontFamily: "sans" }}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                padding: 6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "gray",
              }}
            >
              <Text style={{ fontFamily: "sans" }}>Receive</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 12,
            borderRadius: 12,
            backgroundColor: "gray",
          }}
          key="2"
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
            <Text style={{ fontFamily: "sans", color: "white" }}>
              Total Wallet Balance
            </Text>
            <Text
              style={{ fontFamily: "sans", fontWeight: "700", color: "white" }}
            >
              ZMW
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <View>
              <Text
                style={{ fontFamily: "sans", fontSize: 32, color: "white" }}
              >
                K 1.9896
              </Text>
              <Text style={{ fontFamily: "sans", color: "white" }}>
                10.7545BTC
              </Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: "#86efac",
                  padding: 6,
                  borderRadius: 12,
                }}
              >
                + 1.57%
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 12,
              gap: 6,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                padding: 6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "white",
              }}
            >
              <Text style={{ fontFamily: "sans", color: "white" }}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                padding: 6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "white",
              }}
            >
              <Text style={{ fontFamily: "sans", color: "white" }}>
                Receive
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            padding: 12,
            borderRadius: 12,
            backgroundColor: "white",
          }}
          key="3"
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
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <View>
              <Text style={{ fontFamily: "sans", fontSize: 32 }}>
                K 34.9896
              </Text>
              <Text style={{ fontFamily: "sans" }}>7.7545BTC</Text>
            </View>
            <View>
              <Text
                style={{
                  backgroundColor: "#86efac",
                  padding: 6,
                  borderRadius: 12,
                }}
              >
                + 3.57%
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              marginTop: 12,
              gap: 6,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                padding: 6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "gray",
              }}
            >
              <Text style={{ fontFamily: "sans" }}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                padding: 6,
                borderWidth: 1,
                borderRadius: 12,
                borderColor: "gray",
              }}
            >
              <Text style={{ fontFamily: "sans" }}>Receive</Text>
            </TouchableOpacity>
          </View>
        </View>
      </PagerView>
    </SafeAreaView>
  );
};

export default Home;
