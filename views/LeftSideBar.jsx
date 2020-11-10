import React, { useEffect, useState } from 'react';

import { Container, Content, Spinner, Text, } from 'native-base';
import { Dimensions, FlatList, StyleSheet } from 'react-native';
import ContentItem from '../components/ContentItem';
import { getRestaurants } from '../util/fetch';
import ResultsHeader from '../components/ResultsHeader';
import { connect } from 'react-redux';


const LeftSideBar = ({ categories, cuisine }) => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      // Fetch list of restaurants
      const restaurants = await getRestaurants();
      setItems(restaurants.restaurants);
      setIsLoading(false);
    }
    fetchData();

  }, [categories, cuisine]); // Update only if categories or cuisine values change

  return (
    <Container style={styles.container}>
      {isLoading
        ? <Spinner />
        : <FlatList
          data={items}
          ListHeaderComponent={() => <ResultsHeader />}
          renderItem={({ item }) => <ContentItem item={item.restaurant} />}
          style={styles.flatlist}
          ListEmptyComponent={() => <Text>No results, adjust your filters</Text>}
        />
      }
    </Container>
  )
}


const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    cuisine: state.cuisine
  }
}

// redux connecter which connect redux to this component
export default connect(
  mapStateToProps,
  {}
)(LeftSideBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
  flatlist: {
    flex: 1,
    width: '100%',
    padding: 0,
    margin: 0,
  }
});
