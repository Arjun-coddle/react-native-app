import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/profile";
import { useRoute } from "@react-navigation/native";
import UserIcon from "../assets/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

type StoredUser = {
  name: string;
  email: string;
  password: string;
};

const Profile = ({ navigation }) => {
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("user");
        const storedUser: StoredUser | null = jsonValue
          ? JSON.parse(jsonValue)
          : null;
        setUser(storedUser);
      } catch (e) {
        console.error("Failed to load user data:", e);
      }
    };

    getUserData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={{ width: 80, height: 80, borderRadius: 50, marginStart: 20 }}
        />
        <View>
          <Text
            style={{ ...styles.whiteText, fontSize: 22, fontWeight: "bold" }}
          >
            {user?.name}
          </Text>
          <Text style={{ ...styles.whiteText, fontSize: 12 }}>
            {user?.email}
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text style={{ color: "white", opacity: 0.6 }}>
          0 Followers 0 Following
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("edit-profile", { user: user })}
      >
        <Text
          style={{
            ...styles.whiteText,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Edit Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
