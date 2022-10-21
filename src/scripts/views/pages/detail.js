import {
  renderDetail, renderMenu, renderReviewer, renderFormReview,
} from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import CONFIG from '../../globals/config';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import formReview from '../../utils/form-review-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Home = {

  async render() {
    return `
    <h2 class="menu__title" id="mainContent" tabindex="0">DETAIL RESTAURANT</h2>
    <div class="restaurant" id='restaurant'></div>
    <h2 class="menu__title" id="menu__detail" tabindex="0">MENU</h2>
    <div class="menu__list" id="menu__list"></div>
    <h2 class="menu__title" id="menu__detail" tabindex="0">REVIEW</h2>
    <div class="review__list" id="review__list"></div>
    <div id="formReviewer"></div>
    <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await RestaurantSource.detailRestaurants(url.id);

    const { foods } = data.restaurant.menus;
    const { drinks } = data.restaurant.menus;
    const { customerReviews } = data.restaurant;

    const restaurantContainer = document.querySelector('#restaurant');
    const menuContainer = document.querySelector('#menu__list');
    const reviewContainer = document.querySelector('#review__list');
    const reviewFormContainer = document.querySelector('#formReviewer');

    restaurantContainer.innerHTML += renderDetail(data.restaurant);
    foods.forEach((food) => {
      menuContainer.innerHTML += renderMenu(food.name, CONFIG.DUMMY_FOOD);
    });
    drinks.forEach((drink) => {
      menuContainer.innerHTML += renderMenu(drink.name, CONFIG.DUMMY_DRINK);
    });
    customerReviews.forEach((reviewer) => {
      reviewContainer.innerHTML += renderReviewer(reviewer);
    });
    reviewFormContainer.innerHTML += renderFormReview();
    const form = document.getElementById('form');
    await formReview(form, data.restaurant.id);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: data.restaurant.id,
        name: data.restaurant.name,
        pictureId: data.restaurant.pictureId,
        description: data.restaurant.description,
        city: data.restaurant.city,
        address: data.restaurant.address,
        rating: data.restaurant.rating,
      },
    });

    const footer = document.createElement('footer');
    footer.innerHTML = `<h2 class="menu__title">Follow Us</h2>
    <div id="followus">
      <p>Ikuti kami di sosial media untuk mendapatkan update - update terbaru dari seluruh restaurant terbaik di penjuru dunia</p>
    </div>
    <div id="footer">
      <p>&copy; Luthfi Kamal Ananda (f007x0032) - 2022 &copy; Copyright Dicoding Indonesia </p>
    </div>`;
    const mainContainer = document.querySelector('#main');
    mainContainer.appendChild(footer);
  },

};

export default Home;
