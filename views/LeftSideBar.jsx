import React, { useEffect, useState } from 'react';

import { Container, Content, Spinner, Text, } from 'native-base';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import ContentItem from '../components/ContentItem';
import { getRestaurants } from '../util/fetch';
import ResultsHeader from '../components/ResultsHeader';


const LeftSideBar = ({ filter }) => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      // Fetch list of restaurants
      const restaurants = await getRestaurants(filter);
      setItems(prevItems => [...prevItems, ...restaurants.restaurants]);
      setIsLoading(false);
    }
    fetchData();

  }, []);

  return (
    <Container style={styles.container}>
      <FlatList
        data={items}
        ListHeaderComponent={() => <ResultsHeader />}
        renderItem={({ item }) => <ContentItem item={item.restaurant} />}
        style={styles.flatlist}
        ListEmptyComponent={() => <Spinner />}
      />
    </Container>
  )
}

export default LeftSideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fefefe',
  },
  flatlist: {
    flex: 1,
    width: '100%',
    padding: 0,
    margin: 0,
  }
});
