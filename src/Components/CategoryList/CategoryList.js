import React from 'react';
import {View, Text, Image} from 'react-native';

import {styles} from './categoryList.style';

const CategoryList = ({category}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: category.strCategoryThumb,
        }}
      />
      <Text style={styles.title}>{category.strCategory}</Text>
    </View>
  );
};

export default CategoryList;
