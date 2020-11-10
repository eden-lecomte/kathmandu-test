import { storeData } from "../redux/actions";
import { store } from "../redux/store";

// Search for restaurants based on Redux state filters
export async function getRestaurants() {

  // Clear current restaurant when fetching
  store.dispatch(storeData('', 'restaurant'));
  const state = store.getState();

  // Set query params to pass to Zomato
  const queryParameters = {
    entity_id: 90, // Christchurch
    entity_type: 'city',
    start: 0,
    count: 100,
  };

  // Apply filters if applicable
  if (state.cuisine && state.cuisine.length > 0) {
    queryParameters.cuisines = state.cuisine.join(',');
  };
  if (state.categories && state.categories.length > 0) {
    queryParameters.category = state.categories.join(',');
  };

  // Encode URL params
  const encodedParams = new URLSearchParams(queryParameters).toString();

  // Construct URL for request
  const url = `https://developers.zomato.com/api/v2.1/search?${encodedParams}`;

  const response = await fetch(url, {
    headers: {
      'user-key': 'ce9f0554d9f7c7a812bf7c1b75e29372',
      'Content-Type': 'application/jsonp'
    },
  });
  const json = await response.json()

  return json;
}

// Fetch Zomato categories
export async function getCategories() {

  const url = `https://developers.zomato.com/api/v2.1/categories`;

  const response = await fetch(url, {
    headers: {
      'user-key': 'ce9f0554d9f7c7a812bf7c1b75e29372',
      'Content-Type': 'application/jsonp'
    },
  });
  const json = await response.json()
  return json;
}

// Fetch Zomtato Cuisine
export async function getCuisine() {

  const queryParameters = {
    city_id: 90, // Christchurch
  };
  const encodedParams = new URLSearchParams(queryParameters).toString();

  const url = `https://developers.zomato.com/api/v2.1/cuisines?${encodedParams}`;

  const response = await fetch(url, {
    headers: {
      'user-key': 'ce9f0554d9f7c7a812bf7c1b75e29372',
      'Content-Type': 'application/jsonp'
    },
  });
  const json = await response.json()
  return json;
}

// Get details of a single restaurant by ID
export async function getRestaurant(id) {

  const queryParameters = {
    res_id: id,
  };
  const encodedParams = new URLSearchParams(queryParameters).toString();

  const url = `https://developers.zomato.com/api/v2.1/restaurant?${encodedParams}`;

  const response = await fetch(url, {
    headers: {
      'user-key': 'ce9f0554d9f7c7a812bf7c1b75e29372',
      'Content-Type': 'application/jsonp'
    },
  });
  const json = await response.json()
  return json;
}

