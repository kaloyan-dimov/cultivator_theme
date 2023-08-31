export default (req_cookie) => {

    // console.log("req_cookie", req_cookie)
    // if(ShopifyAnalytics.meta.page.customerId){
    // console.log("ShopifyAnalytics.meta.page.customerId true")
    // let _cat = getCookie(req_cookie)
    //     if(_cat == null){
    //             window.location.href ="/account/logout/"
    //             // document.body.appendChild(test_el)
    //     } else {
    //         return _cat
    //         // get_customer_wishlist(_cat, "none")
    //     }
    // } else {
    //     console.log("ShopifyAnalytics.meta.page.customerId not true")
    //     if(req_cookie == "_cat"){
    //         document.cookie = `_cat=1; expires=1 23:00:00 UTC; Path=/ ; SameSite=None; Secure`;
    //     }
    // }
    console.log("cookie request")
    getCookie(req_cookie)

    function getCookie(name) {
        function escape(s) { return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1'); }
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
        return match ? match[1] : null;
    }
}