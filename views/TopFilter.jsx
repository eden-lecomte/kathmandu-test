import React, { useEffect, useReducer, useState } from 'react';

import { Container, Spinner, Text, View, } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import CategoryList from './CategoryList';
import CuisineList from './CuisineList';

const TopFilter = () => {

  return (
    <View style={styles.container}>
      <CategoryList />
      <CuisineList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
  },
  categoryContainer: {
    flex: 1,
    width: 0
  },
  cuisineContainer: {
    flex: 1,
  }
});

export default TopFilter;