import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/auth";

type StoredUser = {
  name: string;
  email: string;
  password: string;
};

const Login = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
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

  const handleLogin = () => {
    // navigation.navigate("home", { username: user?.name });
    if (
      (email === "user" && password === "123") ||
      (user && email === user.email && password === user.password)
    ) {
      setError("");
      navigation.navigate("home", { username: user?.name || "User" });
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/af/b7/22/afb7224738fdc84bd07e61e7ebc6e1a0.jpg",
      }}
      style={styles.image}
      resizeMode="cover"
    >
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={styles.loginHead}>
            <Text style={styles.title}>Welcome to Cook Master</Text>
            <Text style={styles.subtitle}>Please enter your details</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#B0B0B0" // Light gray placeholder
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter password"
              placeholderTextColor="#B0B0B0"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            {error ? <Text style={styles.error}>{error}</Text> : null}

            <View style={styles.signinLink}>
              <Text style={styles.subtitle}>
                Don't have an account?{" "}
                <Text
                  style={styles.signinLinkText}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  Sign up
                </Text>
              </Text>
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={handleLogin}>
              <Text style={styles.submitBtnText}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
