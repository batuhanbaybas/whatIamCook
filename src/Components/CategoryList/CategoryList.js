import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './categoryList.style';

const CategoryList = ({category}) => {
  console.log(`katogori: ${category}`);
  console.log('bişiler');
  return (
    <View style={styles.container}>
      <Text>{category.strCategory}</Text>
    </View>
  );
};

export default CategoryList;
