// import search_results from "../partials/search_results"
import auth from "../partials/auth"
import get_customer_wishlist_id from "./get_customer_wishlist_id"

export default (new_value, action) => {
  let test = auth("_wish")
  console.log(test)
  function wishlist(field_id, customer_id, current_value){
    fetch('https://cultivator-theme-development.myshopify.com/admin/api/2023-07/graphql.json', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Access-Token': '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', 
      },
      body: JSON.stringify({
          query: 
          `mutation updateCustomerMetafields {
            customerUpdate(input: {
              metafields: [
                  {id: "${field_id}", value: "${modify_wishlist(current_value, new_value, action)}" }
              ]
              id: "${customer_id}"
              })
              {
              customer {
                id
                metafields(first: 3, namespace: "custom") {
                  edges {
                    node {
                      id
                      namespace
                      key
                      value
                      key
                    }
                  }
                }
              }
              userErrors {
                message
                field
              }
            }
          }`,
      }),
      })
      .then(response => response.json())
      .then(data => (console.log("second request: ", data)
      // , location.reload()
       ))
      .catch(error => {
      console.error('GraphQL request failed', error);
      })
  }
  function modify_wishlist(current_value, new_value, action){
    console.log("action", action)
    if(action == "add"){
      console.log("current_value == null", current_value == "null", current_value)
      current_value == "null" ? current_value = new_value : current_value = current_value.concat(",", new_value);
      return current_value
    }
    if(action == "remove"){
      let regex = new RegExp(`,?${new_value}`, '')
      current_value = current_value.replace(regex, "")
      current_value == "" ? current_value = "null" : "";
      return current_value;
    }
    return current_value
  }
}