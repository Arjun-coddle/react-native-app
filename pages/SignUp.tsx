import React from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import styles from "../styles/auth";

const SignUp = ({ navigation }) => {
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
          />

          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
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

          <TouchableOpacity style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
