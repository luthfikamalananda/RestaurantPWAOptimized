import { renderResto } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';

const Home = {

  async render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h2 class="hero__title">HUNGER APPS FOR THE HUNGRY</h2>
          <p class="hero__tagline">Bebaskanlah diri sendiri untuk menikmati makanan dengan venue best rating yang
          terletak di seluruh penjuru dunia</p>
      </div>
    </div>
    <h2 class="menu__title" id="mainContent">Explore Restaurant</h2>
    <div class="restaurant__list">`;
  },

  async afterRender() {
    const data = await RestaurantSource.allRestaurants();
    const restaurantContainer = document.querySelector('.restaurant__list');
    data.restaurants.forEach((menu) => {
      restaurantContainer.innerHTML += renderResto(menu);
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
