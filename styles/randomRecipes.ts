import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    borderRadius: 12,
    margin: 10,
  },
  gridContainer: {
    flexDirection: "row",
  },
  container: {
    width: 140,
    height: 100,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  imageBackground: {
    resizeMode: "cover",
    borderRadius: 12,
    opacity: 0.7,
  },
  whiteText: {
    marginTop: 10,
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
