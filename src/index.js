import _ from 'lodash';
import "./css/index.scss";

import swiper_init from './js/swipers/swiper';

// Sections
import header from './js/sections/header';
import footer from './js/sections/footer'
import video_feed_with_text from "./js/sections/video_feed_with_text";
import banner from "./js/sections/banner"

// Partials
import auth from './js/partials/auth'
import product_lists from './js/partials/product_lists';
import search_toggle from './js/partials/search_toggle';
import product_numbers from './js/partials/product_numbers';
import add_remove_wishlist from './js/partials/add_remove_wishlist';


// import best_selling_products from './js/api/best_selling_products';


import search_products from './js/api/search_products';
// import product_recommendations from './js/api/product_recommendations';
import generate_customer_access_token from './js/api/generate_customer_access_token';
import get_customer_wishlist_id from './js/api/get_customer_wishlist_id';


// import product_review_stars from './js/partials/product_review_stars';

window.addEventListener("DOMContentLoaded", () => {
  header();
  footer();

  if(document.querySelector('.swiper')){swiper_init()}

  // Sections
  if(document.querySelector('.search_products')){search_products()}
  if(document.querySelector('.video_feed_with_text')){video_feed_with_text()}
  if(document.querySelector('.banner')){banner()}
  // if(document.querySelector('.best_selling_products')){best_selling_products()}
  console.log("git gitted")
  // Partials
  if(document.querySelector(".list_item")){product_lists()}
  if(document.querySelector('.search_icon')){search_toggle()}
  if(document.querySelector("#customer_login")){generate_customer_access_token()};
  if(ShopifyAnalytics.meta.page.customerId){
    auth("_cat") == null ? window.location.href ="/account/logout/" : auth("_wish") == null ? get_customer_wishlist_id(auth("_wish")): console.log("wish cookie: ", auth("_wish") );
  } else {
      document.cookie = `_cat=1; expires=1 23:00:00 UTC; Path=/ ; SameSite=None; Secure`;
      document.cookie = `_wish=1; expires=1 23:00:00 UTC; Path=/ ; SameSite=None; Secure`;
  }
  if(document.querySelector("#quantity")){product_numbers()}

  // if(document.querySelector(".review_only_stars")){product_review_stars()}
  if(document.querySelector(".add_to_wishlist") || document.querySelector(".remove_from_wishlist")){add_remove_wishlist()}
  
  // product_recommendations()
  document.querySelector(".main").style.paddingTop = `${document.querySelector(".master_header").offsetHeight}`;

})
// Storefront shptka_23ec5df5fb58aa768438cd8e2a498855
// Admin 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

// mutation customerUpdate($input: CustomerUpdateInput!) {
//   customerUpdate(customerAccessToken: "6e5d732b43b102aa483b7483c9e19660", customer: $input) {
//     customer {
//       id
//       firstName
//       lastName
//     }
//     userErrors {
//       field
//       message
//     }
//   }
// }


// fetch('https://cultivator-theme-development.myshopify.com//admin/api/2023-07/customers/7146559144248/metafields.json', {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Admin-Access-Token': '36a45b23f87a17997645114258465663', // If required by your API
//     },
//     // body: JSON.stringify({
//     //     query: `mutation CustomerUpdate{
//     //               customerUpdate(customerAccessToken: "a83b955d44b57da1dfa7f5e8fda54ff2", customer: { firstName: \"Kaloyan\"}) {
//     //                 customer {
//     //                   firstName
//     //                 }
//     //               }
//     //             }`,
//     //   })
//     // })
//     // .then(response => response.json())
//     // .then(data => console.log("name changed:", data))
//     // .catch(error => {
//     // console.error('GraphQL request failed', error);
// }) 


