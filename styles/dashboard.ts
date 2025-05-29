import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 25,
  },
  header: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
});
