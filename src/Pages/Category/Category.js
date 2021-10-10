import React from 'react';
import {View, FlatList} from 'react-native';
import {ALL_CATEGORY_API_URL} from '../../API/common';
import CategoryList from '../../Components/CategoryList/CategoryList';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import {styles} from './category.style';

const Category = ({navigation}) => {
  //fetch custom hook u çağırıldı
  const {data, error, loading} = useFetchCategory(ALL_CATEGORY_API_URL);
  //handle navigation
  const handleCategorySelect = strCategory => {
    navigation.navigate('Meals', {strCategory});
  };
  //error sayfası
  if (error) {
    return <Error />;
  }
  //loading sayfası
  if (loading) {
    return <Loading />;
  }
  //kategorileri listeleme
  const renderCategory = ({item}) => (
    <CategoryList
      onSelect={() => handleCategorySelect(item.strCategory)}
      category={item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Category;
