import React from 'react';
import {View, FlatList} from 'react-native';
import {LOOK_FULL_MEAL_DETAİL} from '../../API/common';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import DetailList from '../../Components/DetailList/DetailList';

const Detail = ({navigation, route}) => {
  const {idMeal} = route.params;
  const {data} = useFetchCategory(`${LOOK_FULL_MEAL_DETAİL}${idMeal}`);
  const renderFoodDerail = ({item}) => <DetailList detail={item} />;
  return (
    <View>
      <FlatList data={data.meals} renderItem={renderFoodDerail} />
    </View>
  );
};

export default Detail;
