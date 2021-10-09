import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './categoryList.style';

const CategoryList = ({item}) => {
  console.log(`katogori: ${item}`);
  console.log('bişiler');
  return (
    <View style={styles.container}>
      <Text>{item.srtCategory}</Text>
    </View>
  );
};

export default CategoryList;
