import React, { memo, useEffect } from 'react';

import { Body, CheckBox, Container, Content, Item, ListItem, Text, View, } from 'native-base';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { toggleDataByID } from '../redux/actions';
import { connect } from 'react-redux';

const CuisineItem = ({ item, cuisineChecked, toggleDataByID }) => {

  function isChecked() {
    return cuisineChecked.includes(item.cuisine.cuisine_id);
  }

  function toggleValue() {
    toggleDataByID(item.cuisine.cuisine_id, 'cuisine')
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => toggleValue()}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox checked={isChecked()} onPress={() => toggleValue()} />
          <Text style={{ marginLeft: 20 }}>
            {item.cuisine.cuisine_name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    cuisineChecked: state.cuisine
  }
}

// redux connecter which connect redux to this component
export default connect(
  mapStateToProps,
  { toggleDataByID }
)(CuisineItem);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 30,
    padding: 5,
    backgroundColor: 'transparent',
  },
});