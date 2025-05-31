import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 15,
    paddingTop: 40,
  },
  whiteText: {
    color: "white",
  },
  button: {
    marginTop: 40,
    backgroundColor: "#000",
    borderColor: "#acadac",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    gap: 30,
  },
});
