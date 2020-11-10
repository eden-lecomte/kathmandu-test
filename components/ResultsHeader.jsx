import React from 'react';

import { Body, Container, Content, ListItem, Text, View, H3 } from 'native-base';
import { StyleSheet } from 'react-native';

const ResultsHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <ListItem style={styles.container}>
        <Body>
          <H3>
            Results
          </H3>
        </Body>
      </ListItem>
    </View>
  )
}

export default ResultsHeader;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});