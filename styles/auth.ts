import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    // backgroundColor: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    // paddingHorizontal: 20,
  },
  container: {
    backgroundColor: "#2e2c28",
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    opacity: 0.9,
  },
  loginHead: {
    alignItems: "center",
    marginBottom: 30,
  },
  head: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
  },
  subtitle: {
    fontSize: 12,
    color: "#B0B0B0",
    marginTop: 8,
  },
  formContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "white",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#2A2A2A",
    color: "#FFFFFF",
  },
  signinLink: {
    marginVertical: 15,
    alignItems: "center",
  },
  signinLinkText: {
    color: "#1E90FF",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  submitBtn: {
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#c9c8c3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 3,
  },
  submitBtnText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
  error: {
    color: "#FF4D4D",
    marginBottom: 12,
    textAlign: "center",
  },
  hr: {
    height: 1,
    backgroundColor: "#333333",
    marginVertical: 20,
  },
});
