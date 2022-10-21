(()=>{"use strict";var n,r={756:(n,r,A)=>{A.d(r,{Z:()=>E});var t=A(537),e=A.n(t),i=A(645),o=A.n(i),a=A(667),p=A.n(a),d=new URL(A(541),A.b),s=new URL(A(403),A.b),l=o()(e()),C=p()(d),g=p()(s);l.push([n.id,"*{\n  margin: 0;\n  padding: 0;\n  font-family: 'Brush Script MT', cursive;\n  box-sizing: border-box;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 8px;\n  background-color: #fcb89b;\n  color: white;\n  z-index: 100;\n  text-transform: uppercase;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n.buttonnav {\n  display: none;\n}\n\n.nav__responsive{\n  display: grid;\n  grid-template-columns: 80% 20%;\n  text-align: center;\n}\n\n.nav__responsive li{\n  text-align: right; \n  margin-top: auto;\n  margin-bottom: auto;\n  list-style-type: none;\n}\n\n#hamburger{\n  padding: 15px 10px 15px 15px;\n  border: none;\n  background-color: white;\n}\n\n.nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px;\n  background-color: white;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  text-align: right;\n  display: grid;\n  grid-template-columns: 70% 10% 10% 10%;\n}\n\n.nav__item {\n  list-style-type: none;\n  width: 100%;\n  text-align: left;\n  margin-top: auto;\n  margin-bottom: auto;\n  text-transform: uppercase;\n}\n\n.nav__item__logo, .nav__item__logo__responsive{\n  text-align: left;\n  padding: 22px 35px;\n  font-size: 28px;\n  color: #ff2d08;\n}\n\n.nav a {\n  text-decoration: none;\n  color: #616161;\n  padding: 15px;\n}\n\n.nav a:hover {\n  font-weight: bold;\n  font-size: 18px;\n  color: #000;\n}\n\nbody{\n  background-color: #aaaaaa1c;\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  width: 100%;\n  text-align: center;\n  background-image: url("+C+");\n  background-position: center;\n  background-size: cover;\n}\n\n.hero__inner {\n  max-width: 100%;\n}\n\n.hero__title {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  color: #fff;\n  font-size: 56px;\n  font-weight: bold;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\n.hero__tagline {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  color: #fff;\n  margin-top: 16px;\n  font-size: 25px;\n  letter-spacing: 1px;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  \n}\n\n.menu__title{\n  text-align: center;\n  margin-top: 24px;\n  margin-bottom: 20px;\n}\n\n.menu__list{\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 10px;\n  margin:0 10%;\n  text-align: center;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  padding-top: 20px;\n}\n\n.menu__list > .card > img{\n  width: 25%;\n  height: 50%;\n  padding-top: 5px;\n}\n\n.menu__list > .card{\n  border-radius: 15px;\n}\n\n.restaurant__list{\n  display: grid;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  grid-gap: 10px;\n  grid-row-gap: 25px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  padding: 20px 0px;\n  margin: 0px 35px;\n}\n\n/* resto detail */\n\n.restaurant {\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n}\n \n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 750px;\n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n.review__list{\n  margin: 0 10%;\n  padding-top: 20px;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.review__list > .card > h3{\n  font-size: 20px;\n  text-transform: capitalize;\n}\n\n.review__list > .card > p{\n  padding-left: 0;\n  font-size: 15px;\n  color: #747474;\n}\n\n.review__list > .card > h4{\n  font-size: 18px;\n  margin-top: 5px;\n  font-weight: 500;\n  color: #000;\n}\n\n.review__list > .card {\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.card{\n  white-space: normal; \n  text-overflow: ellipsis; \n  overflow: hidden;\n  border-radius: 5px;\n  padding-bottom: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #ffff;\n}\n\n.card > #kota{\n  font-family: 'Brush Script MT', cursive;\n  position: absolute;\n  background-color: rgb(241, 241, 241);\n  padding: 7px;\n  font-size: 15px;\n  margin-left: 4px;\n  margin-top: 4px;\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 7px;\n}\n\n.card p, .card a{\n  font-family: Trebuchet MS, sans-serif;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.card > a{\n  padding: 20px;\n  display: block;\n  font-weight: bolder;\n  text-decoration: none;\n  color: #000;\n  padding-bottom: 10px;\n  font-size: 27px;\n}\n\n.card a:focus{\n  color: #71aefd;\n  font-weight: bolder;\n}\n\n.card a:hover{\n  color: #573636;\n  font-weight: bolder;\n  background-color: rgba(122, 121, 121, 0.582);\n}\n\n.card > #rating{\n  font-size: 14px;\n  font-weight: bold;\n}\n\n#ratingNumber{\n  display: inline;\n  font-weight: bolder;\n  text-decoration: none;\n  font-style: normal;\n  color: #000;\n  padding: 0;\n  padding-left: 5px;\n  font-size: 14px;\n}\n\n.card > #description{\n  text-align: justify;\n  padding-top: 10px;\n  font-size: 15px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\n.card img{\n  width: 100%;\n  height: 250px;\n}\n\n/* form */\n#formReviewer{\n  margin: 20px 10%;\n  background-color: #e7e6e6e0;\n  border-radius: 20px;\n  padding: 20px;\n}\n\n#form > #input__review {\n  height: 150px;\n}\n\ninput[type=text], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  /* border: 1px solid #ccc; */\n  border-radius: 20px;\n  box-sizing: border-box;\n}\n\nbutton[type=submit] {\n  width: 12%;\n  background-color: #f8d45e;\n  color: rgb(0, 0, 0);\n  font-weight: bold;\n  text-transform: uppercase;\n  border: none;\n  margin: 10px 0px;\n  padding: 15px 25px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\nbutton[type=submit]:hover {\n  background-color: #f15347;\n  color: white;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n#followus{\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  border-bottom: 1px solid rgba(138, 138, 138, 0.425);\n  padding: 20px;\n  color: rgb(73, 73, 73);\n  font-size: 14px;\n\n}\n\n#footer{\n  font-size: 14px;\n  margin-top: 10px;\n  color: rgb(73, 73, 73);\n}\n\nfooter{\n  margin: 0 35px;\n  text-align: center;\n  /* background-color: rgb(255, 215, 104);\n  color: rgb(59, 59, 59); */\n  font-size: 18px;\n  padding: 10px;\n  margin-top: 20px;\n}\n\n@media screen and (max-width: 650px) {\n  .hero{\n    background-image: url("+g+");\n  }\n}","",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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",sourcesContent:["*{\n  margin: 0;\n  padding: 0;\n  font-family: 'Brush Script MT', cursive;\n  box-sizing: border-box;\n}\n\n.skip-link {\n  position: absolute;\n  top: -40px;\n  left: 0;\n  padding: 8px;\n  background-color: #fcb89b;\n  color: white;\n  z-index: 100;\n  text-transform: uppercase;\n}\n\n.skip-link:focus {\n  top: 0;\n}\n\n.buttonnav {\n  display: none;\n}\n\n.nav__responsive{\n  display: grid;\n  grid-template-columns: 80% 20%;\n  text-align: center;\n}\n\n.nav__responsive li{\n  text-align: right; \n  margin-top: auto;\n  margin-bottom: auto;\n  list-style-type: none;\n}\n\n#hamburger{\n  padding: 15px 10px 15px 15px;\n  border: none;\n  background-color: white;\n}\n\n.nav {\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px;\n  background-color: white;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n.nav__list {\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  text-align: right;\n  display: grid;\n  grid-template-columns: 70% 10% 10% 10%;\n}\n\n.nav__item {\n  list-style-type: none;\n  width: 100%;\n  text-align: left;\n  margin-top: auto;\n  margin-bottom: auto;\n  text-transform: uppercase;\n}\n\n.nav__item__logo, .nav__item__logo__responsive{\n  text-align: left;\n  padding: 22px 35px;\n  font-size: 28px;\n  color: #ff2d08;\n}\n\n.nav a {\n  text-decoration: none;\n  color: #616161;\n  padding: 15px;\n}\n\n.nav a:hover {\n  font-weight: bold;\n  font-size: 18px;\n  color: #000;\n}\n\nbody{\n  background-color: #aaaaaa1c;\n}\n\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  width: 100%;\n  text-align: center;\n  background-image: url(\"../public/images/heros/hero-image_2.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n\n.hero__inner {\n  max-width: 100%;\n}\n\n.hero__title {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  color: #fff;\n  font-size: 56px;\n  font-weight: bold;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n}\n\n.hero__tagline {\n  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n  color: #fff;\n  margin-top: 16px;\n  font-size: 25px;\n  letter-spacing: 1px;\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\n  \n}\n\n.menu__title{\n  text-align: center;\n  margin-top: 24px;\n  margin-bottom: 20px;\n}\n\n.menu__list{\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 10px;\n  margin:0 10%;\n  text-align: center;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  padding-top: 20px;\n}\n\n.menu__list > .card > img{\n  width: 25%;\n  height: 50%;\n  padding-top: 5px;\n}\n\n.menu__list > .card{\n  border-radius: 15px;\n}\n\n.restaurant__list{\n  display: grid;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  grid-gap: 10px;\n  grid-row-gap: 25px;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  padding: 20px 0px;\n  margin: 0px 35px;\n}\n\n/* resto detail */\n\n.restaurant {\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px 16px;\n  margin-top: 10px;\n  padding-top: 10px;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n}\n \n.restaurant .restaurant__poster {\n  width: 100%;\n  max-width: 750px;\n}\n \n.restaurant .restaurant__info h4 {\n  margin: 8px 0;\n}\n\n.review__list{\n  margin: 0 10%;\n  padding-top: 20px;\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.review__list > .card > h3{\n  font-size: 20px;\n  text-transform: capitalize;\n}\n\n.review__list > .card > p{\n  padding-left: 0;\n  font-size: 15px;\n  color: #747474;\n}\n\n.review__list > .card > h4{\n  font-size: 18px;\n  margin-top: 5px;\n  font-weight: 500;\n  color: #000;\n}\n\n.review__list > .card {\n  padding: 10px;\n  border-radius: 10px;\n}\n\n.card{\n  white-space: normal; \n  text-overflow: ellipsis; \n  overflow: hidden;\n  border-radius: 5px;\n  padding-bottom: 10px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  background-color: #ffff;\n}\n\n.card > #kota{\n  font-family: 'Brush Script MT', cursive;\n  position: absolute;\n  background-color: rgb(241, 241, 241);\n  padding: 7px;\n  font-size: 15px;\n  margin-left: 4px;\n  margin-top: 4px;\n  font-size: 14px;\n  text-align: center;\n  font-weight: bold;\n  border-radius: 7px;\n}\n\n.card p, .card a{\n  font-family: Trebuchet MS, sans-serif;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.card > a{\n  padding: 20px;\n  display: block;\n  font-weight: bolder;\n  text-decoration: none;\n  color: #000;\n  padding-bottom: 10px;\n  font-size: 27px;\n}\n\n.card a:focus{\n  color: #71aefd;\n  font-weight: bolder;\n}\n\n.card a:hover{\n  color: #573636;\n  font-weight: bolder;\n  background-color: rgba(122, 121, 121, 0.582);\n}\n\n.card > #rating{\n  font-size: 14px;\n  font-weight: bold;\n}\n\n#ratingNumber{\n  display: inline;\n  font-weight: bolder;\n  text-decoration: none;\n  font-style: normal;\n  color: #000;\n  padding: 0;\n  padding-left: 5px;\n  font-size: 14px;\n}\n\n.card > #description{\n  text-align: justify;\n  padding-top: 10px;\n  font-size: 15px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n}\n\n.card img{\n  width: 100%;\n  height: 250px;\n}\n\n/* form */\n#formReviewer{\n  margin: 20px 10%;\n  background-color: #e7e6e6e0;\n  border-radius: 20px;\n  padding: 20px;\n}\n\n#form > #input__review {\n  height: 150px;\n}\n\ninput[type=text], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  /* border: 1px solid #ccc; */\n  border-radius: 20px;\n  box-sizing: border-box;\n}\n\nbutton[type=submit] {\n  width: 12%;\n  background-color: #f8d45e;\n  color: rgb(0, 0, 0);\n  font-weight: bold;\n  text-transform: uppercase;\n  border: none;\n  margin: 10px 0px;\n  padding: 15px 25px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n\nbutton[type=submit]:hover {\n  background-color: #f15347;\n  color: white;\n}\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #db0000;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}\n\n#followus{\n  border-top: 1px solid rgba(138, 138, 138, 0.425);\n  border-bottom: 1px solid rgba(138, 138, 138, 0.425);\n  padding: 20px;\n  color: rgb(73, 73, 73);\n  font-size: 14px;\n\n}\n\n#footer{\n  font-size: 14px;\n  margin-top: 10px;\n  color: rgb(73, 73, 73);\n}\n\nfooter{\n  margin: 0 35px;\n  text-align: center;\n  /* background-color: rgb(255, 215, 104);\n  color: rgb(59, 59, 59); */\n  font-size: 18px;\n  padding: 10px;\n  margin-top: 20px;\n}\n\n@media screen and (max-width: 650px) {\n  .hero{\n    background-image: url(\"../public/images/heros/hero-image_2-small.jpg\");\n  }\n}"],sourceRoot:""}]);const E=l},948:(n,r,A)=>{A.d(r,{Z:()=>a});var t=A(537),e=A.n(t),i=A(645),o=A.n(i)()(e());o.push([n.id,"@media screen and (min-width: 650px) {   \r\n    .restaurant {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .restaurant .restaurant__title {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n     \r\n    .restaurant .restaurant__description {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .nav__list {\r\n    grid-template-columns: 58% 14% 14% 14%;\r\n  }\r\n  .menu__list{\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  }\r\n  .restaurant{\r\n    margin: 0 8%;\r\n  }\r\n  .restaurant__list{\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n  .review__list{\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .nav__list {\r\n      grid-template-columns: 58% 14% 14% 14%;\r\n    }\r\n    .menu__list{\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    }\r\n    .restaurant{\r\n      margin: 0 8%;\r\n    }\r\n    .restaurant__list{\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    .review__list{\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 900px) {\r\n    .menu__list{\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n      row-gap: 20px;\r\n      margin: 0 5%;\r\n    }\r\n\r\n    #formReviewer{\r\n      margin: 25px 5%;\r\n    }\r\n\r\n    .restaurant__list{\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__list > .card{\r\n      padding-top: 15px;\r\n      padding-bottom: 0px;\r\n    }\r\n\r\n    .review__list{\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n      row-gap: 20px;\r\n      margin: 0 5%;\r\n    }\r\n\r\n    button[type=submit] {\r\n      width: 30%;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 800px) {   \r\n    .menu__list{\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 850px) {\r\n    .nav__list {\r\n      grid-template-columns: 40% 20% 20% 20%;\r\n    }\r\n    .hero__tagline{\r\n      font-size: 19px;\r\n    }\r\n    .hero__title{\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 650px) {\r\n    .nav__item__logo{\r\n      display: none;\r\n    }\r\n    \r\n    .buttonnav {\r\n      position: sticky;\r\n      top: 0;\r\n      z-index: 1;\r\n      display: block;\r\n      width: 100%;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      text-align: center;\r\n      background-color: white;\r\n    }\r\n    \r\n    .buttonnav a {\r\n      font-size: 24px;\r\n      text-decoration: none;\r\n      color: #616161;\r\n    }\r\n    \r\n    #drawer {\r\n      width: 250px;\r\n      position: absolute;\r\n      transform: translate(-300px, 0);\r\n      transition: transform 0.3s ease-in-out;\r\n      background-color:rgb(255, 255, 255);\r\n    }\r\n  \r\n    #drawer ul{\r\n      display: block;\r\n    }\r\n  \r\n    #drawer li{\r\n      padding:20px;\r\n    }\r\n  \r\n    #drawer a{\r\n      padding: 20px 128px 20px 0px;\r\n    }\r\n    \r\n    #drawer.open {\r\n      transform: translate(0,0);\r\n      position: fixed;\r\n      top: 0;\r\n      z-index: 1;\r\n    }\r\n    \r\n    #drawer li{\r\n      display: block;\r\n      border: 1px solid rgb(155, 155, 155);\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\n  \r\n    #hamburger {\r\n      font-size: 32px;\r\n      text-decoration: none;\r\n      color: #000000;\r\n      background-color: white;\r\n    }\r\n  \r\n    .restaurant__list{\r\n      padding: 10px 10px;\r\n      margin: 0 2%;\r\n      grid-template-columns: 1fr;\r\n    }\r\n\r\n    .restaurant{\r\n      margin: 0 4%;\r\n    }\r\n    \r\n    .menu__list{\r\n      grid-template-columns: 1fr;\r\n      row-gap: 20px;\r\n    }\r\n\r\n    .menu__list > .card{\r\n      padding-top: 15px;\r\n      padding-bottom: 0px;\r\n    }\r\n\r\n    .review__list{\r\n      grid-template-columns: 1fr;\r\n      row-gap: 20px;\r\n    }\r\n\r\n    button[type=submit] {\r\n      width: 50%;\r\n    }\r\n  \r\n    .nav__item__logo__responsive{\r\n      padding-left: 15px;\r\n    }\r\n  }","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;QACI,8BAA8B;IAClC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;AACJ;;AAEA;EACE;IACE,sCAAsC;EACxC;EACA;IACE,0CAA0C;EAC5C;EACA;IACE,YAAY;EACd;EACA;IACE,sCAAsC;EACxC;EACA;IACE,sCAAsC;EACxC;AACF;;AAEA;IACI;MACE,sCAAsC;IACxC;IACA;MACE,sCAAsC;IACxC;IACA;MACE,YAAY;IACd;IACA;MACE,kCAAkC;IACpC;IACA;MACE,sCAAsC;IACxC;EACF;;EAEA;IACE;MACE,sCAAsC;MACtC,aAAa;MACb,YAAY;IACd;;IAEA;MACE,eAAe;IACjB;;IAEA;MACE,8BAA8B;IAChC;;IAEA;MACE,iBAAiB;MACjB,mBAAmB;IACrB;;IAEA;MACE,kCAAkC;MAClC,aAAa;MACb,YAAY;IACd;;IAEA;MACE,UAAU;IACZ;EACF;;EAEA;IACE;MACE,8BAA8B;IAChC;EACF;;EAEA;IACE;MACE,sCAAsC;IACxC;IACA;MACE,eAAe;IACjB;IACA;MACE,eAAe;IACjB;EACF;;EAEA;IACE;MACE,aAAa;IACf;;IAEA;MACE,gBAAgB;MAChB,MAAM;MACN,UAAU;MACV,cAAc;MACd,WAAW;MACX,iBAAiB;MACjB,kBAAkB;MAClB,kBAAkB;MAClB,uBAAuB;IACzB;;IAEA;MACE,eAAe;MACf,qBAAqB;MACrB,cAAc;IAChB;;IAEA;MACE,YAAY;MACZ,kBAAkB;MAClB,+BAA+B;MAC/B,sCAAsC;MACtC,mCAAmC;IACrC;;IAEA;MACE,cAAc;IAChB;;IAEA;MACE,YAAY;IACd;;IAEA;MACE,4BAA4B;IAC9B;;IAEA;MACE,yBAAyB;MACzB,eAAe;MACf,MAAM;MACN,UAAU;IACZ;;IAEA;MACE,cAAc;MACd,oCAAoC;MACpC,WAAW;MACX,gBAAgB;IAClB;;IAEA;MACE,eAAe;MACf,qBAAqB;MACrB,cAAc;MACd,uBAAuB;IACzB;;IAEA;MACE,kBAAkB;MAClB,YAAY;MACZ,0BAA0B;IAC5B;;IAEA;MACE,YAAY;IACd;;IAEA;MACE,0BAA0B;MAC1B,aAAa;IACf;;IAEA;MACE,iBAAiB;MACjB,mBAAmB;IACrB;;IAEA;MACE,0BAA0B;MAC1B,aAAa;IACf;;IAEA;MACE,UAAU;IACZ;;IAEA;MACE,kBAAkB;IACpB;EACF",sourcesContent:["@media screen and (min-width: 650px) {   \r\n    .restaurant {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .restaurant .restaurant__title {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n     \r\n    .restaurant .restaurant__description {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .nav__list {\r\n    grid-template-columns: 58% 14% 14% 14%;\r\n  }\r\n  .menu__list{\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  }\r\n  .restaurant{\r\n    margin: 0 8%;\r\n  }\r\n  .restaurant__list{\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n  .review__list{\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .nav__list {\r\n      grid-template-columns: 58% 14% 14% 14%;\r\n    }\r\n    .menu__list{\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    }\r\n    .restaurant{\r\n      margin: 0 8%;\r\n    }\r\n    .restaurant__list{\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n    .review__list{\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 900px) {\r\n    .menu__list{\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n      row-gap: 20px;\r\n      margin: 0 5%;\r\n    }\r\n\r\n    #formReviewer{\r\n      margin: 25px 5%;\r\n    }\r\n\r\n    .restaurant__list{\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .menu__list > .card{\r\n      padding-top: 15px;\r\n      padding-bottom: 0px;\r\n    }\r\n\r\n    .review__list{\r\n      grid-template-columns: 1fr 1fr 1fr;\r\n      row-gap: 20px;\r\n      margin: 0 5%;\r\n    }\r\n\r\n    button[type=submit] {\r\n      width: 30%;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 800px) {   \r\n    .menu__list{\r\n      grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 850px) {\r\n    .nav__list {\r\n      grid-template-columns: 40% 20% 20% 20%;\r\n    }\r\n    .hero__tagline{\r\n      font-size: 19px;\r\n    }\r\n    .hero__title{\r\n      font-size: 40px;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 650px) {\r\n    .nav__item__logo{\r\n      display: none;\r\n    }\r\n    \r\n    .buttonnav {\r\n      position: sticky;\r\n      top: 0;\r\n      z-index: 1;\r\n      display: block;\r\n      width: 100%;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      text-align: center;\r\n      background-color: white;\r\n    }\r\n    \r\n    .buttonnav a {\r\n      font-size: 24px;\r\n      text-decoration: none;\r\n      color: #616161;\r\n    }\r\n    \r\n    #drawer {\r\n      width: 250px;\r\n      position: absolute;\r\n      transform: translate(-300px, 0);\r\n      transition: transform 0.3s ease-in-out;\r\n      background-color:rgb(255, 255, 255);\r\n    }\r\n  \r\n    #drawer ul{\r\n      display: block;\r\n    }\r\n  \r\n    #drawer li{\r\n      padding:20px;\r\n    }\r\n  \r\n    #drawer a{\r\n      padding: 20px 128px 20px 0px;\r\n    }\r\n    \r\n    #drawer.open {\r\n      transform: translate(0,0);\r\n      position: fixed;\r\n      top: 0;\r\n      z-index: 1;\r\n    }\r\n    \r\n    #drawer li{\r\n      display: block;\r\n      border: 1px solid rgb(155, 155, 155);\r\n      width: 100%;\r\n      text-align: left;\r\n    }\r\n  \r\n    #hamburger {\r\n      font-size: 32px;\r\n      text-decoration: none;\r\n      color: #000000;\r\n      background-color: white;\r\n    }\r\n  \r\n    .restaurant__list{\r\n      padding: 10px 10px;\r\n      margin: 0 2%;\r\n      grid-template-columns: 1fr;\r\n    }\r\n\r\n    .restaurant{\r\n      margin: 0 4%;\r\n    }\r\n    \r\n    .menu__list{\r\n      grid-template-columns: 1fr;\r\n      row-gap: 20px;\r\n    }\r\n\r\n    .menu__list > .card{\r\n      padding-top: 15px;\r\n      padding-bottom: 0px;\r\n    }\r\n\r\n    .review__list{\r\n      grid-template-columns: 1fr;\r\n      row-gap: 20px;\r\n    }\r\n\r\n    button[type=submit] {\r\n      width: 50%;\r\n    }\r\n  \r\n    .nav__item__logo__responsive{\r\n      padding-left: 15px;\r\n    }\r\n  }"],sourceRoot:""}]);const a=o},46:(n,r,A)=>{var t=A(379),e=A.n(t),i=A(795),o=A.n(i),a=A(569),p=A.n(a),d=A(565),s=A.n(d),l=A(216),C=A.n(l),g=A(589),E=A.n(g),B=A(756),c={};c.styleTagTransform=E(),c.setAttributes=s(),c.insert=p().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=C(),e()(B.Z,c),B.Z&&B.Z.locals&&B.Z.locals},362:(n,r,A)=>{var t=A(379),e=A.n(t),i=A(795),o=A.n(i),a=A(569),p=A.n(a),d=A(565),s=A.n(d),l=A(216),C=A.n(l),g=A(589),E=A.n(g),B=A(948),c={};c.styleTagTransform=E(),c.setAttributes=s(),c.insert=p().bind(null,"head"),c.domAPI=o(),c.insertStyleElement=C(),e()(B.Z,c),B.Z&&B.Z.locals&&B.Z.locals}},A={};function t(n){var e=A[n];if(void 0!==e)return e.exports;var i=A[n]={id:n,exports:{}};return r[n](i,i.exports,t),i.exports}t.m=r,n=[],t.O=(r,A,e,i)=>{if(!A){var o=1/0;for(s=0;s<n.length;s++){for(var[A,e,i]=n[s],a=!0,p=0;p<A.length;p++)(!1&i||o>=i)&&Object.keys(t.O).every((n=>t.O[n](A[p])))?A.splice(p--,1):(a=!1,i<o&&(o=i));if(a){n.splice(s--,1);var d=e();void 0!==d&&(r=d)}}return r}i=i||0;for(var s=n.length;s>0&&n[s-1][2]>i;s--)n[s]=n[s-1];n[s]=[A,e,i]},t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var A in r)t.o(r,A)&&!t.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var r=t.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var A=r.getElementsByTagName("script");A.length&&(n=A[A.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{t.b=document.baseURI||self.location.href;var n={954:0};t.O.j=r=>0===n[r];var r=(r,A)=>{var e,i,[o,a,p]=A,d=0;if(o.some((r=>0!==n[r]))){for(e in a)t.o(a,e)&&(t.m[e]=a[e]);if(p)var s=p(t)}for(r&&r(A);d<o.length;d++)i=o[d],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(s)},A=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),t.nc=void 0;var e=t.O(void 0,[192,2,193,337,376,924],(()=>t(253)));e=t.O(e)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map