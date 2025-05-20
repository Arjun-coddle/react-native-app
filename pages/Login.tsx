import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import styles from "../styles/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "user@gmail.com" && password === "123") {
      setError("");
      navigation.navigate("home");
    } else {
      setError("Invalid credentials. Try again.");
    }
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.loginHead}>
          <Text style={styles.title}>Welcome to Cook Master</Text>
          <Text style={styles.subtitle}>Please enter your details</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <Text style={styles.label}>Password :</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <View style={styles.signinLink}>
            <Text>
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
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
