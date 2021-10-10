import React from 'react';
import {View, Text} from 'react-native';

const DetaiList = mealDetail => {
  console.log(mealDetail);
  return (
    <View>
      <Text>{mealDetail.strInstructions}</Text>
    </View>
  );
};

export default DetaiList;
