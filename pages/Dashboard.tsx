import React from "react";
import { ScrollView, Text, View } from "react-native";
import CategoryList from "../components/CategoryList";
import styles from "../styles/dashboard";
import RandomRecipes from "../components/RandomRecipes";
import NextIcon from "../assets/NextIcon";

const Dashboard = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Popular food categories</Text>
      <CategoryList navigation={navigation} />

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Random Recipes</Text>
        <View style={{ paddingTop: 40 }}>
          <NextIcon />
        </View>
      </View>

      <RandomRecipes navigation={navigation} />
    </ScrollView>
  );
};

export default Dashboard;
