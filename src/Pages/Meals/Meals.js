import React from 'react';
import {View, FlatList} from 'react-native';
import {FILTER_BY_CATEGORY_URL} from '../../API/common';
import MealList from '../../Components/MealList/MealList';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import {styles} from './meals.style';

const Meals = ({navigation, route}) => {
  //parametre çapırıldı
  const {strCategory} = route.params;
  //API a istek atıldı
  const {data, error, loading} = useFetchCategory(
    `${FILTER_BY_CATEGORY_URL}${strCategory}`,
  );
  const handleMealSelect = idMeal => {
    navigation.navigate('Detail', {idMeal});
  };
  //error sayfası
  if (error) {
    return <Error />;
  }
  //loading sayfası
  if (loading) {
    return <Loading />;
  }

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
