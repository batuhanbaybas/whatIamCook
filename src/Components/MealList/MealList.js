import React from 'react';

import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {styles} from './mailList.style';

const MealList = ({food, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: food.strMealThumb,
          }}
        />
        <Text style={styles.text}>{food.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealList;
