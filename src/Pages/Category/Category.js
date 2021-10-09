import React from 'react';
import {View, FlatList} from 'react-native';
// import Config from 'react-native-config';
import CategoryList from '../../Components/CategoryList/CategoryList';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import {styles} from './category.style';

const Category = () => {
  const ALL_CATEGORY_API_URL =
    'https://www.themealdb.com/api/json/v1/1/categories.php';
  //fetch hook u çğırıldı
  const {data} = useFetchCategory(ALL_CATEGORY_API_URL);
  console.log(data);
  const renderCategory = ({item}) => <CategoryList category={item} />;

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategory} />
    </View>
  );
};

export default Category;
