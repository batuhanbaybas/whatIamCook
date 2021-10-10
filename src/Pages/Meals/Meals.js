import React from 'react';
import {View, FlatList} from 'react-native';
import {FILTER_BY_CATEGORY_URL} from '../../API/common';
import MealList from '../../Components/MealList/MealList';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import {styles} from './meals.style';

const Meals = ({navigation, route}) => {
  const {strCategory} = route.params;
  const {data} = useFetchCategory(`${FILTER_BY_CATEGORY_URL}${strCategory}`);
  const handleMealSelect = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };

  const renderMealList = ({item}) => (
    <MealList onSelect={() => handleMealSelect(item.idMeal)} food={item} />
  );
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMealList} />
    </View>
  );
};

export default Meals;
