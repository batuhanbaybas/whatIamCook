import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import CategoryList from '../../Components/CategoryList/CategoryList';
import useFetchCategory from '../../Hooks/FetchCategory/useFetchCategory';

const Category = () => {
  const {loading, error, data} = useFetchCategory(Config.ALL_CATEGORY_API_URL);
  console.log(data);
  const renderCategory = ({item}) => {
    return <CategoryList category={item} />;
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderCategory} />
    </View>
  );
};

export default Category;
