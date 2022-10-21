import CONFIG from '../../globals/config';

const renderDetail = (menu) => `
<h2 class="restaurant__title">${menu.name}</h2>
<img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${menu.pictureId}" alt="${menu.name}" />
<div class="restaurant__info">
  <h3>Informasi</h3>
  <h4>Letak Tempat</h4>
  <p>${menu.city}</p>
  <h4>Tema</h4>
  <p>${menu.categories[0].name}</p>
  <h4>Rating</h4>
  <p>${menu.rating}</p>
</div>
<div class="restaurant__description">
  <h3>Deskripsi</h3>
  <p>${menu.description}</p>
</div>`;

const renderMenu = (menu, image) => `
<div class="card">
<img class="img-fluid img-thumbnail lazyload"
data-src="${image}" alt="${menu}">
  <h3>${menu}</h3>
  <h4> Harga Rp${Math.floor(Math.random() * 100)}.000</h4>
</div>`;

const renderReviewer = (reviewer) => `
<div class="card">
  <h3 id='review__name'>${reviewer.name}</h3>
  <p id='review__date'>${reviewer.date}</p>
  <h4 id='review__content'>${reviewer.review}</h4>
</div>`;

const renderFormReview = () => `
<form id='form'>
  <label for="name">Nama</label>
  <input name='name' type='text'>
  <label for="review">Review</label>
  <input name='review' type='text'id='input__review'>
  <button type='submit'>Submit</button>
</form>`;

const renderResto = (menu) => `
  <div class="card">
      <p id="kota">Kota: ${menu.city}</p>
      <img class="img-fluid img-thumbnail lazyload"
      data-src="${CONFIG.BASE_IMAGE_URL}/${menu.pictureId}" alt="${menu.name}">
      <a href="/#/detail/${menu.id}">${menu.name}</a>
      <p id="rating">RATING :<span id="ratingNumber">⭐️ ${menu.rating}</span></p>
      <p id="description">${menu.description}</p>
  </div>`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export
{
  renderResto,
  renderDetail,
  renderMenu,
  renderReviewer,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  renderFormReview,
};
