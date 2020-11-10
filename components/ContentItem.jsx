import React from 'react';

import { Body, Container, Content, ListItem, Text, View, } from 'native-base';
import { StyleSheet } from 'react-native';
import { storeData } from '../redux/actions';
import { connect } from 'react-redux';

const ContentItem = ({ item, storeData, restaurantSelected }) => {

  // Store restaurant ID to redux state when pressed
  function onSelect() {
    storeData(item.id, 'restaurant')
  };

  return (
    <View style={[styles.container, { backgroundColor: restaurantSelected === item.id ? 'green' : null }]}>
      <ListItem style={styles.container} onPress={() => onSelect()}>
        <Body>
          <Text>
            {item.name}
          </Text>
        </Body>
      </ListItem>
    </View>
  )
}


const mapStateToProps = (state) => {
  return {
    restaurantSelected: state.restaurant
  }
}

// redux connecter which connect redux to this component
export default connect(
  mapStateToProps,
  { storeData }
)(ContentItem);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'transparent',
  },
});