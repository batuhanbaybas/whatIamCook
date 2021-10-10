import React from 'react';
import {View, FlatList} from 'react-native';
import {LOOK_FULL_MEAL_DETAIL} from '../../API/common';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import DetailList from '../../Components/DetailList/DetailList';

const Detail = ({navigation, route}) => {
  //parametre çağırıldı
  const {idMeal} = route.params;
  //api ye istek atıldı
  const {data} = useFetchCategory(`${LOOK_FULL_MEAL_DETAIL}${idMeal}`);

  const renderFoodDetail = ({item}) => <DetailList mealDetail={item} />;
  return (
    <View>
      <FlatList data={data.meals} renderItem={renderFoodDetail} />
    </View>
  );
};

export default Detail;
