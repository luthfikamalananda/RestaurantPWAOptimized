import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { renderResto } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <h2 class="menu__title" id="mainContent">Favorite Restaurants</h2>
    <div class="restaurant__list">`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    const restaurantContainer = document.querySelector('.restaurant__list');
    const mainContainer = document.querySelector('#main');

    if (restaurants.length === 0) {
      const noRestaurants = document.createElement('h2');
      noRestaurants.innerHTML = '<h2>BELUM ADA RESTAURANT YANG ANDA LIKE</h2>';
      noRestaurants.setAttribute('id', 'not-found');
      noRestaurants.style.textAlign = 'center';
      mainContainer.appendChild(noRestaurants);
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += renderResto(restaurant);
    });

    const footer = document.createElement('footer');
    footer.innerHTML = `<h2 class="menu__title">Follow Us</h2>
    <div id="followus">
      <p>Ikuti kami di sosial media untuk mendapatkan update - update terbaru dari seluruh restaurant terbaik di penjuru dunia</p>
    </div>
    <div id="footer">
      <p>&copy; Luthfi Kamal Ananda (f007x0032) - 2022 &copy; Copyright Dicoding Indonesia </p>
    </div>`;
    mainContainer.appendChild(footer);
  },
};

export default Like;
