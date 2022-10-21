/* eslint-disable no-unused-vars */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async allRestaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurants(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async uploadReview(reviewData) {
    const response = await fetch(API_ENDPOINT.NEW_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
