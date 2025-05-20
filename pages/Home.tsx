import React from "react";
import { Text, View } from "react-native";
import Header from "../components/Header";
import Styles from "../styles/style";
import Footer from "../components/Footer";

const Home = ({ navigation }) => {
  return (
    <View style={Styles.container}>
      <Header navigation={navigation} />
      <Text>This is Home</Text>
      <Footer />
    </View>
  );
};

export default Home;
