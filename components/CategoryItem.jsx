import React, { memo, useEffect } from 'react';

import { Body, CheckBox, Container, Content, Item, ListItem, Text, View, } from 'native-base';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { toggleDataByID } from '../redux/actions';
import { connect } from 'react-redux';

const CategoryItem = ({ item, categoriesChecked, toggleDataByID }) => {

  // Update checkbox to visually indicate if category is selected
  function isChecked() {
    return categoriesChecked.includes(item.categories.id);
  }

  // Add/remove ID from state to track which categories have been selected
  function toggleValue() {
    toggleDataByID(item.categories.id, 'categories')
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => toggleValue()}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox checked={isChecked()} onPress={() => toggleValue()} />
          <Text style={{ marginLeft: 20 }}>
            {item.categories.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

const mapStateToProps = (state) => {
  return {
    categoriesChecked: state.categories
  }
}

// redux connecter which connect redux to this component
export default connect(
  mapStateToProps,
  { toggleDataByID }
)(CategoryItem);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    height: 30,
    padding: 5,
    backgroundColor: 'transparent',
  },
});