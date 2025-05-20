import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "80%",
    height: 700,
    paddingHorizontal: 30,
    paddingVertical: 35,
    backgroundColor: "black",
    position: "absolute",
    top: 55,
    left: 0,
    zIndex: 4,
  },
  list: {
    flex: 1,
    flexDirection: "column",
    gap: 25,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
