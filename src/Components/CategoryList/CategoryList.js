import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './categoryList.style';

const CategoryList = ({category}) => {
  return (
    <View style={styles.container}>
      <Text>{category.meal.strCategory}</Text>
    </View>
  );
};

export default CategoryList;
