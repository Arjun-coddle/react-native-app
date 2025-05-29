import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../styles/notification";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/a-well.png")} style={styles.image} />
    </View>
  );
};

export default Notification;
