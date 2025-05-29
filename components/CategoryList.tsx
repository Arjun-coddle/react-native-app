import React from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/cards";
import categories from "../data/categories.json";

const CategoryList = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.card}>
        <View style={styles.gridContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() =>
                navigation.navigate("CategoryFoods", { category: category })
              }
            >
              <ImageBackground
                style={styles.container}
                source={{ uri: category.img }}
                imageStyle={styles.imageBackground}
              >
                <Text style={styles.whiteText}>{category.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CategoryList;
