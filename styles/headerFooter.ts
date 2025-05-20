import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "black",
    // paddingTop: 20,
  },
  nav: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    position: "relative",
  },
  whitetext: {
    color: "#fff",
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  notificationIcon: {
    position: "absolute",
    right: 30,
  },
  footer: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "black",
  },
  footerDiv: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
