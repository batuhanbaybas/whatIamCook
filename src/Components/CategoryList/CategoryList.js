import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';

import {styles} from './categoryList.style';

const CategoryList = ({category, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: category.strCategoryThumb,
          }}
        />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoryList;
