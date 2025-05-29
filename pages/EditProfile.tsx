import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/editProfile";
import { useRoute } from "@react-navigation/native";

type UserType = {
  name: string;
  email: string;
  password: string;
};

const EditProfile = ({ navigation }) => {
  const route = useRoute();
  const { user } = route.params as { user: UserType };

  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loveForCooking, setLoveForCooking] = useState("");
  const [location, setLocation] = useState("");

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
      <TextInput
        placeholder="Username"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Location"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={location}
        onChangeText={setLocation}
      />

      <TextInput
        placeholder="Your love for cooking"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={loveForCooking}
        onChangeText={setLoveForCooking}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("profile")}
      >
        <Text
          style={{
            ...styles.whiteText,
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
