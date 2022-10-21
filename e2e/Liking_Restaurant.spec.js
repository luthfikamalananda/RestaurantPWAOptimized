const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/like');
});

Scenario('liking one restaurant', async (I) => {
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

  const likedRestoTitle = await I.grabTextFrom('.card a');

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});
