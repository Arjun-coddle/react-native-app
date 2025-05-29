import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../styles/foodDeatiles";

type FoodType = {
  id?: number;
  name?: string;
  steps?: string[];
  img?: string;
};

const RecipeFoodDetails = () => {
  const route = useRoute();
  const { food } = route.params as { food: FoodType };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {food.img && (
          <>
            <Image source={{ uri: food.img }} style={styles.image} />
          </>
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{food.name}</Text>

        <View style={styles.divider} />

        <View style={styles.stepsContainer}>
          <Text style={styles.subTitle}>Cooking Steps</Text>

          {food.steps?.map((step, index) => (
            <View key={index} style={styles.stepCard}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>{index + 1}</Text>
              </View>
              <Text style={styles.stepText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default RecipeFoodDetails;
