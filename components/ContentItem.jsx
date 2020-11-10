import React from 'react';

import { Body, Container, Content, ListItem, Text, View, } from 'native-base';
import { StyleSheet } from 'react-native';

const ContentItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <ListItem style={styles.container}>
        <Body>
          <Text>
            {item.name}
          </Text>
        </Body>
      </ListItem>
    </View>
  )
}

export default ContentItem;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
});