import { Dimensions, StyleSheet } from "react-native";

const { height } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: "100%",
    height: height,
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
