import React, { useEffect, useState } from 'react';

import { Container, Content, Spinner } from 'native-base';
import { connect } from 'react-redux';

import RestaurantContent from '../components/RestaurantContent';
import { getRestaurant } from '../util/fetch';

const MainContentArea = ({ itemId }) => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Run on load
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      // Fetch list of restaurants
      if (itemId) {
        const restaurant = await getRestaurant(itemId);
        setItem(restaurant);
      }

      setIsLoading(false);
    }
    fetchData();

    // Re-run any time itemId changes (when we get a new restaurant)
  }, [itemId]);

  if (itemId && itemId != '') {
    return (
      isLoading
        ? <Spinner />
        : <RestaurantContent item={item} />
    )
  }
  return null;

}

const mapStateToProps = (state) => {
  return {
    itemId: state.restaurant
  }
}

// redux connecter which connect redux to this component
export default connect(
  mapStateToProps,
  {}
)(MainContentArea);
