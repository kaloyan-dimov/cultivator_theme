export default (results, searchParam) => {
    const search_results_element = document.querySelector(".search_results")
    console.log( "results",  results.data.products.edges)
    let listed_results = new String()
    if(searchParam.length > 0){
    document.querySelector(".search_text").innerHTML = `${results.data.products.edges.length} results found for "${searchParam}"`
    results.data.products.edges.forEach(product => {
        listed_results = listed_results.concat(
            `
            <a href="/products/${product.node.handle}" class="search_result">
                <div class="search_result_image">
                    <img src="${product.node.featuredImage.url}"/>
                </div>
                <div class="search_result_info">
                    <h2>${product.node.title}</h2>
                    <h3>milliliters</h3>
                    <h4>price</h4>
                </div>
                <div>
                </div>
                <form class="search_result_add" method="post" action="/cart/add">
                    <input type="hidden" name="id" value="${product.node.variants.edges[0].node.id.match(/[0-9]+/g)}"/>
                    <input type="hidden" min="1" type="number" id="quantity" name="quantity" value="1"/>
                    <input type="submit" value="Add to cart" class="btn" />
                </form>
            </а>
            `
        )
    })
} else {
    document.querySelector(".search_text").innerHTML = "Trending products:"
    listed_results = listed_results.concat(
        `
            {% for product in settings.trending_products %}
                <h2>prod: {{ product }}</h2>
            {% endfor %}
        `)
};
    search_results_element.innerHTML = listed_results
}

// `
// <br><br><h2>${product.node.title}</h2>
// <a href="${product.node.id}">GID</a>
// {% for i in (1..2) %}
// <h2> Test </h2>
// {% endfor %}
// <h2> {{ all_products["bangle-bracelet"].title }}</h2>
// {% render 'testsnipper' %}
// `