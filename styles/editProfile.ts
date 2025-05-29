import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 150,
    alignItems: "center",
    position: "relative",
  },
  whiteText: {
    color: "#fff",
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "#acadac",
    borderBottomWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    color: "#fff",
    marginTop: 25,
  },
  profile: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    top: 50,
    left: 0,
    gap: 30,
  },
  button: {
    width: "90%",
    marginTop: 50,
    backgroundColor: "#000",
    borderColor: "#acadac",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
});
