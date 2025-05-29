import React from "react";
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import styles from "../styles/randomRecipes";
import randomRecipes from "../data/randomRecipes.json";

const RandomRecipes = ({ navigation }) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.card}>
        <View style={styles.gridContainer}>
          {randomRecipes.map((recipe) => (
            <TouchableOpacity
              key={recipe.id}
              onPress={() =>
                navigation.navigate("RecipeDetails", { recipe: recipe })
              }
            >
              <ImageBackground
                style={styles.container}
                source={{ uri: recipe.img }}
                imageStyle={styles.imageBackground}
              >
                <Text style={styles.whiteText}>{recipe.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default RandomRecipes;
