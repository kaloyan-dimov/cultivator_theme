import auth from "../partials/auth";

export default (auth_token) => {
    console.log("get_wishlist")
    // let auth_token = auth("_cat");
    // console.log("auth(_cat)", auth("_cat"))
    console.log("auth_token", auth_token)

    auth_token ? get_fields(auth_token): console.log("invalid auth token, login to continue");
    function get_fields(auth){
        fetch('https://cultivator-theme-development.myshopify.com/api/2023-07/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': '36a45b23f87a17997645114258465663', 
            },
            body: JSON.stringify({
                query: 
                `mutation customerInput {
                customerUpdate(
                    customerAccessToken: \"${auth}\"
                    customer: {}
                ) {
                    customer {
                        id
                        metafield(namespace: "custom", key: "wishlist") {
                            id
                            value
                        }
                    }
                }
                }`,
            }),
        })
        .then(response => response.json())
        .then(data => 
        console.log("get_wishlist: ", data, auth), 
        //   wishlist(data.data.customerUpdate.customer.metafield.id, data.data.customerUpdate.customer.id, data.data.customerUpdate.customer.metafield.value)),
        document.cookie = `_wish=${data.data.customerUpdate.customer.metafield.id}&${data.data.customerUpdate.customer.id}&${data.data.customerUpdate.customer.metafield.value}; expires=${new Date(data.data.customerAccessTokenCreate.customerAccessToken.expiresAt).toUTCString()}; Path=/ ; SameSite=None; Secure`
        )
        .catch(error => {console.error('GraphQL request failed', error)})
    }
}
