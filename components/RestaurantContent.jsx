import React, { memo, useEffect } from 'react';

import { Body, CheckBox, Container, Content, H2, H3, Icon, Item, Left, ListItem, Text, } from 'native-base';
import { ScrollView, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Image, View, Slider } from 'react-native';
import { toggleDataByID } from '../redux/actions';
import { connect } from 'react-redux';

const RestaurantContent = ({ item }) => {
  if (item.id) {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          {item.featured_image
            ? <View style={{ flex: 2 }}>
              <Image source={{ uri: item.featured_image }} style={{ flex: 1 }} />
            </View>
            : null}
          <View style={{ flex: 3, marginLeft: 50 }}>
            <View>
              <H2>{item.name}</H2>
              <Text>{item.location.address}</Text>
            </View>
            <ListItem noBorder>
              <Icon type="MaterialIcons" name={item.has_table_booking === 1 ? 'tick' : 'cancel'} />
              <Body>
                <Text>{item.has_table_booking === 1 ? 'Bookings available' : 'No bookings'}</Text>
              </Body>
            </ListItem>
            <ListItem noBorder>
              <Icon type="MaterialIcons" name={item.has_online_delivery === 1 ? 'tick' : 'cancel'} />
              <Body>
                <Text>{item.has_online_delivery === 1 ? 'Delivery available' : 'No delivery'}</Text>
              </Body>
            </ListItem>
            <View>
              <H3>Cuisines</H3>
              <Text>{item.cuisines}</Text>
            </View>
            <View>
              <H3>Phone number</H3>
              <Text>{item.phone_numbers}</Text>
            </View>
            <View>
              <H3>Opening Hours</H3>
              <Text>{item.timings}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
  return null;

}

// redux connecter which connect redux to this component
export default RestaurantContent;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    width: '100%',
    backgroundColor: '#e6e6e6',
  },
});