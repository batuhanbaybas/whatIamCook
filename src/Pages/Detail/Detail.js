import React from 'react';
import {View, FlatList} from 'react-native';
import {LOOK_FULL_MEAL_DETAIL} from '../../API/common';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import DetailList from '../../Components/DetailList/DetailList';
import {styles} from './detail.style';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const Detail = ({route}) => {
  //parametre çağırıldı
  const {idMeal} = route.params;
  //api ye istek atıldı
  const {data, error, loading} = useFetchCategory(
    `${LOOK_FULL_MEAL_DETAIL}${idMeal}`,
  );

  //error sayfası
  if (error) {
    return <Error />;
  }
  //loading sayfası
  if (loading) {
    return <Loading />;
  }

  const renderFoodDetail = ({item}) => <DetailList mealDetail={item} />;
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderFoodDetail} />
    </View>
  );
};

export default Detail;
