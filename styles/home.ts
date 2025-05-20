import { Dimensions, StyleSheet } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    height: screenHeight,
  },
});
