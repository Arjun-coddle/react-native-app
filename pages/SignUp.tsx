import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../styles/auth";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>(null);

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    try {
      const userData = {
        name,
        email,
        password,
      };
      await AsyncStorage.setItem("user", JSON.stringify(userData));
      Alert.alert("Success", "Account created!");
      navigation.navigate("Login");
    } catch (e) {
      Alert.alert("Error", "Failed to save user data.");
      console.error("AsyncStorage error:", e);
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>It's quick and easy</Text>
        </View>

        <View style={styles.hr} />

        <View style={styles.formContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            autoCapitalize="words"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <View style={styles.signinLink}>
            <Text>
              Already have an account?{" "}
              <Text
                style={styles.signinLinkText}
                onPress={() => navigation.navigate("Login")}
              >
                Sign in
              </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
