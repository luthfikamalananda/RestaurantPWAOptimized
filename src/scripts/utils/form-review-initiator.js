import RestaurantSource from '../data/restaurant-source';

const formReview = (form, idRestaurant) => {
  form.addEventListener('submit', async (e) => {
    const data = new FormData(e.target);

    const id = idRestaurant;
    const name = data.get('name');
    const review = data.get('review');

    const reviewData = {
      id,
      name,
      review,
    };

    await RestaurantSource.uploadReview(reviewData);
    window.location.reload();
  });
};

export default formReview;
