import React, { useEffect, useReducer, useState } from 'react';

import { Container, Spinner, Text, } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { getCategories } from '../util/fetch';
import CategoryItem from '../components/CategoryItem';


function reducer(state, action) {
  switch (action.type) {
    case 'store':
      return { categories: action.value }
    case 'toggle':
      return { [action.id]: action.value };
    default:
      break;
  }
}

const TopFilter = () => {
  const [categories, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    async function fetchData() {

      // Fetch list of categories
      const categoryItems = await getCategories();
      dispatch({ type: 'store', value: categoryItems.categories });
    }
    fetchData();

  }, []);
  console.log(categories);
  return (
    <Container style={styles.container}>
      <FlatList
        // data={categories}
        ListHeaderComponent={() => <Text>Categories</Text>}
        renderItem={({ item }) => <CategoryItem item={item} />}
        style={styles.flatlist}
        ListEmptyComponent={() => <Spinner />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TopFilter;