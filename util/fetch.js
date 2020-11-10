
export async function getRestaurants(filter) {

  const queryParameters = {
    city_id: 90, // Christchurch
    entity_type: 'city',
    start: 0,
    count: 100,
  };
  const encodedParams = new URLSearchParams(queryParameters).toString();

  const url = `https://developers.zomato.com/api/v2.1/search?${encodedParams}`;

  const response = await fetch(url, {
    headers: {
      'user-key': 'ce9f0554d9f7c7a812bf7c1b75e29372',
      'Content-Type': 'application/jsonp'
    },
  });
  const json = await response.json()
  console.log(json);

  return json;
}


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
