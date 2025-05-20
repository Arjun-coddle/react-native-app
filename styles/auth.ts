import { StyleSheet } from "react-native";

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  container: {
    // optional container styling
  },
  loginHead: {
    alignItems: "center",
    marginBottom: 20,
  },
  loginLogo: {
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  formContainer: {
    // padding or margin if needed
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 12,
    fontSize: 16,
  },
  signinLink: {
    marginBottom: 20,
  },
  signupLink: {
    color: "blue",
    textDecorationLine: "underline",
  },
  submitBtn: {
    backgroundColor: "blue",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  submitBtnText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  error: {
    color: "red",
    marginBottom: 8,
  },
  hr: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  head: {
    marginBottom: 15,
  },
  signinLinkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
