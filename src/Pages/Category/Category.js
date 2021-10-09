import React from 'react';
import {View, FlatList} from 'react-native';
import {ALL_CATEGORY_API_URL} from '../../API/common';
import CategoryList from '../../Components/CategoryList/CategoryList';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';
import {styles} from './category.style';

const Category = () => {
  //fetch custom hook u çağırıldı
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
