import React, { useEffect, useReducer, useState } from 'react';

import { Container, H3, Spinner, Text, } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { getCategories, getCuisine } from '../util/fetch';
import CategoryItem from '../components/CategoryItem';
import CuisineItem from '../components/CuisineItem';




const CuisineList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {

      // Fetch list of categories
      const cuisineItems = await getCuisine();
      setItems(cuisineItems.cuisines.slice(0, 28));
    }
    fetchData();

  }, []);

  return (
    <Container style={styles.container}>
      <FlatList
        data={items}
        ListHeaderComponent={() => <H3>Cuisine</H3>}
        renderItem={({ item }) => <CuisineItem item={item} />}
        style={styles.flatlist}
        numColumns={4}
        ListEmptyComponent={() => <Spinner />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fefefe',
  },
  flatlist: {
    flex: 1,
    width: 600,
    padding: 0,
    margin: 0,
  }
});

export default CuisineList;