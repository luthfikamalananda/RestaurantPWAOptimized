const assert = require('assert');

Feature('Unliking Restaurants');

Before((I) => {
  I.amOnPage('/#/like');
});

Scenario('unliking one restaurant', async (I) => {
  I.seeElement('#not-found');
  I.see('BELUM ADA RESTAURANT YANG ANDA LIKE', '#not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant__list');

  const firstResto = locate('.card a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__list');

  const unlikedRestaurantsTitle = await I.grabTextFrom('.card a');

  assert.strictEqual(firstRestoTitle, unlikedRestaurantsTitle);

  I.seeElement('.card a');
  await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/like');
  I.see('BELUM ADA RESTAURANT YANG ANDA LIKE', '#not-found');
});
