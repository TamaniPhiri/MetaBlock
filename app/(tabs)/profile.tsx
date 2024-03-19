import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Import for the icon

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profilePictureContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.profilePicture}
        />
      </View>

      {/* User Information */}
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>Chola Kuboko</Text>
        <Text style={styles.bio}>Software Engineer @MetaBlock Inc</Text>
      </View>
      <View style={styles.userInfoItems}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="envelope" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.userInfoText}>cholahkuboko@gmail.com</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.userInfoItems2}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="phone" size={20} color="black" />
        </TouchableOpacity>
        <Text style={styles.userInfoText}>0979054417</Text>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>Balance:</Text>
        <Text style={styles.balanceAmount}>$100.00</Text>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          padding: 5,
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text>Speciality</Text>
          <Text style={{ color: "gray", marginTop: 4 }}>Engineer</Text>
        </View>
        <View>
          <Text>Born</Text>
          <Text style={{ color: "gray", marginTop: 4 }}>1 July, 2015</Text>
        </View>
        <View>
          <Text>Height</Text>
          <Text style={{ color: "gray", marginTop: 4 }}>162cm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 30,
  },
  profilePictureContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userInfoContainer: {
    alignItems: "center",
    paddingTop: 4,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 16,
    color: "#888",
    paddingTop: 2,
  },
  userInfo1: {
    flexDirection: "row",
  },
  userInfoItem: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  userInfoItems: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 4,
  },

  userInfoItems2: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
  iconContainer: {
    paddingHorizontal: 5,
  },
  userInfoText: {
    flex: 1,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginTop: 10,
  },
  balanceText: {
    fontWeight: "bold",
  },
  balanceAmount: {
    marginLeft: 5,
  },
});

export default Profile;
