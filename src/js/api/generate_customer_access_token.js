import get_customer_wishlist_id from "./get_customer_wishlist_id"
import auth from "../partials/auth"

export default () => {
    console.log("custom log")
    const login_form = document.querySelector("#customer_login")
    const email = login_form.querySelector(".email input")
    const password = login_form.querySelector(".password input")
    login_form.addEventListener("submit", ()=> {
      console.log("email.value, password.value", email.value, password.value)
      authenticate(email.value, password.value)
    });
    function authenticate(email, password){
          fetch('https://cultivator-theme-development.myshopify.com/api/2023-07/graphql.json', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-Shopify-Storefront-Access-Token': '36a45b23f87a17997645114258465663', 
              },
              body: JSON.stringify({
                  query: 
                  `mutation customerAccessTokenCreate {
                    customerAccessTokenCreate(input: {email: "K_Dimov@hotmail.com", password: "grindwebstudio"}) {
                      customerAccessToken {
                        accessToken
                        expiresAt
                      }
                      customerUserErrors {
                        message
                      }
                    }
                  }`,
              }),
              })
              .then(response => console.log("response.json()", response.json()), response.json())
              .catch(error => {
              console.error('GraphQL request failed', error);
          })
      }
  }