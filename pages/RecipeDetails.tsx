import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/categoryfoods";

type FoodType = {
  id: number;
  name: string;
  steps: string[];
  img: string;
};

type RecipeType = {
  foods: FoodType[];
};

const RecipeDetails = ({ navigation }) => {
  const route = useRoute();
  const { recipe } = route.params as { recipe: RecipeType };

  const renderFoodItem = ({ item }: { item: FoodType }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("RecipeFoodDetails", { food: item })}
    >
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text numberOfLines={2} style={styles.steps}>
          {item.steps.join(" ")}
        </Text>
      </View>
      <Image source={{ uri: item.img }} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={recipe.foods}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderFoodItem}
      />
    </View>
  );
};

export default RecipeDetails;
