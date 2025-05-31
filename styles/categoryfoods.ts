import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 60,
    backgroundColor: "black",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#4f4e4d",
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#fff",
  },
  steps: {
    fontSize: 13,
    color: "#d1d1d1",
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 8,
  },
});
