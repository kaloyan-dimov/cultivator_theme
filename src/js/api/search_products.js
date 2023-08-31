import search_results from "../partials/search_results"

export default () => {
    const search_input = document.querySelector(".search_input")
    search_input.addEventListener("keyup", () => {
        search_input.value = search_input.value.trimStart();
        fetch_products_by_title(search_input.value)
    })
    function fetch_products_by_title (searchParam){
        fetch('https://cultivator-theme-development.myshopify.com/api/2023-07/graphql.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': '36a45b23f87a17997645114258465663', // If required by your API
            },
            body: JSON.stringify({
                query: 
                `{
                    products (first:250,query:"title:${searchParam}*"){
                    edges {
                        node {
                            title
                            id
                            handle
                            onlineStoreUrl
                            featuredImage {
                                    url
                                }
                            variants(first: 10) {
                                edges {
                                node {
                                    id
                                }
                                }
                            }
                            priceRange {
                                minVariantPrice {
                                        amount
                                        currencyCode
                                    }
                                maxVariantPrice {
                                        amount
                                        currencyCode
                                    }
                            }
                        }
                    }
                    }
                }`,
            }),
            })
            .then(response => response.json())
            .then(data => search_results(data, searchParam))
            .catch(error => {
            console.error('GraphQL request failed', error);
        })
    }
}