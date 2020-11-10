import React from 'react';

import { Body, CheckBox, Container, Content, ListItem, Text, View, } from 'native-base';
import { StyleSheet } from 'react-native';

const CategoryItem = ({ item }) => {
  console.log(item)
  return (
    <View style={styles.container}>
      <ListItem style={styles.container}>
        <CheckBox checked={true} />
        <Body>
          <Text>
            {item.categories.name}
          </Text>
        </Body>
      </ListItem>
    </View>
  )
}

export default CategoryItem;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
});