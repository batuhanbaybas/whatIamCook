import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {styles} from './detailList.style';

const DetailList = ({mealDetail}) => {
  //youtube buton handler
  const handlePress = youtubeLink => {
    Linking.openURL(youtubeLink);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{mealDetail.strMeal}</Text>
      <Text style={styles.subtitle}>
        {mealDetail.strCategory}/{mealDetail.strArea}
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: mealDetail.strMealThumb,
        }}
      />
      <Text style={styles.ingredient_title}>Ingredient</Text>
      <View style={styles.ingredient_container}>
        <View>
          <Text style={styles.ingredient}>{mealDetail.strIngredient1}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient2}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient3}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient4}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient5}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient6}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient7}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient8}</Text>
          <Text style={styles.ingredient}>{mealDetail.strIngredient9}</Text>
        </View>
        <View>
          <Text style={styles.ingredient}>{mealDetail.strMeasure1}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure2}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure3}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure4}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure5}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure6}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure7}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure8}</Text>
          <Text style={styles.ingredient}>{mealDetail.strMeasure9}</Text>
        </View>
      </View>
      <Text style={styles.description_title}>Instructions</Text>
      <Text style={styles.description}>{mealDetail.strInstructions}</Text>
      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => handlePress(mealDetail.strYoutube)}
          activeOpacity={0.7}>
          <Text style={styles.button_text}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailList;
