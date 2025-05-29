import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import Styles from "../styles/style";
import Footer from "../components/Footer";
import Dashboard from "./Dashboard";

const Home = ({ route, navigation }) => {
  const { username } = route.params;
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} username={username} />
      <Dashboard navigation={navigation} />
      <Footer />
    </View>
  );
};

export default Home;
