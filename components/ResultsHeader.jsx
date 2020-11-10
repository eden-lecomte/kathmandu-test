import React from 'react';

import { Body, Container, Content, ListItem, Text, View, } from 'native-base';
import { StyleSheet } from 'react-native';

const ResultsHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <ListItem style={styles.container}>
        <Body>
          <Text>
            Results
          </Text>
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