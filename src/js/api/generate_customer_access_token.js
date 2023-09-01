import get_customer_wishlist_id from "./get_customer_wishlist_id"
import auth from "../partials/auth"

export default () => {
    console.log("gen_cat")
    const login_form = document.querySelector("#customer_login")
    const email = login_form.querySelector(".email input")
    const password = login_form.querySelector(".password input")
    login_form.addEventListener("submit", ()=> {
      authenticate(email.value, password.value)
    });
    async function authenticate(email, password){
          fetch('https://cultivator-theme-development.myshopify.com/api/2023-07/graphql.json', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'X-Shopify-Storefront-Access-Token': '36a45b23f87a17997645114258465663', 
              },
              body: JSON.stringify({
                  query: 
                  `mutation customerAccessTokenCreate {
                    customerAccessTokenCreate(input: {email: "${email}", password: "${password}"}) {
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
              .then(response => response.json())
              .then(data => 
                console.log("data:", data),
                document.cookie = `_cat=${data.data.customerAccessTokenCreate.customerAccessToken.accessToken}; expires=${new Date(data.data.customerAccessTokenCreate.customerAccessToken.expiresAt).toUTCString()}; Path=/ ; SameSite=None; Secure`,
                get_customer_wishlist_id(data.data.customerAccessTokenCreate.customerAccessToken.accessToken))
              .catch(error => {
              console.error('GraphQL request failed', error);
          })
      }
  }