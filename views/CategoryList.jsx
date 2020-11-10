import React, { useEffect, useReducer, useState } from 'react';

import { Container, H3, Spinner, Text, } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { getCategories } from '../util/fetch';
import CategoryItem from '../components/CategoryItem';


const CategoryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {

      // Fetch list of categories
      const categoryItems = await getCategories();
      setItems(categoryItems.categories.slice(0, 7));
    }
    fetchData();

  }, []);

  return (
    <Container style={styles.container}>
      <FlatList
        data={items}
        ListHeaderComponent={() => <H3>Category</H3>}
        renderItem={({ item }) => <CategoryItem item={item} />}
        style={styles.flatlist}
        numColumns={1}
        ListEmptyComponent={() => <Spinner />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
    backgroundColor: '#fefefe',
  },
  flatlist: {
    flex: 1,
    padding: 0,
    margin: 0,
  }
});

export default CategoryList;