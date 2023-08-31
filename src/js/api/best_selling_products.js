// fetch('https://cultivator-theme-development.myshopify.com/api/2023-07/graphql.json', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': '36a45b23f87a17997645114258465663', // If required by your API
//     },
//     body: JSON.stringify({
//         query: 
//         `{
//             shop {
//                 name
//             }
//         }`,
//     }),
//     })
//     .then(response => response.json())
//     .then(data => console.log("data", data))
//     .catch(error => {
//     console.error('GraphQL request failed', error);
// })