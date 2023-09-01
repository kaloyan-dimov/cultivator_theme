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
                  'X-Shopify-Storefront-Access-Token': 'shptka_23ec5df5fb58aa768438cd8e2a498855', 
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
              .then(data => 
                console.log("data:", data),
                document.cookie = `_cat=${data.data.customerAccessTokenCreate.customerAccessToken.accessToken}; expires=${new Date(data.data.customerAccessTokenCreate.customerAccessToken.expiresAt).toUTCString()}; Path=/ ; SameSite=None; Secure`,
                get_customer_wishlist_id(data.data.customerAccessTokenCreate.customerAccessToken.accessToken))
              .catch(error => {
              console.error('GraphQL request failed', error);
          })
      }
  }