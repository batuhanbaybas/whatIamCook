import React from 'react';
import {View, FlatList} from 'react-native';
import {LOOK_FULL_MEAL_DETAIL} from '../../API/common';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import DetailList from '../../Components/DetailList/DetailList';
import {styles} from './detail.style';

const Detail = ({route}) => {
  //parametre çağırıldı
  const {idMeal} = route.params;
  //api ye istek atıldı
  const {data} = useFetchCategory(`${LOOK_FULL_MEAL_DETAIL}${idMeal}`);

  const renderFoodDetail = ({item}) => <DetailList mealDetail={item} />;
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderFoodDetail} />
    </View>
  );
};

export default Detail;
