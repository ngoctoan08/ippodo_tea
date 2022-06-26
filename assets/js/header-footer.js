
        $(document).ready(function() {
            $(".clickAccount").click(function() {
                let value = $(".user-account-bg").css("display");
                console.log(value);
                if(value == "none"){
                    $(".user-account-bg").css({
                        'display' : 'flex'
                    })
                } else {
                    $(".user-account-bg").css({
                        'display' : 'none'
                    })
                }
            })

            $(".user-account-bg").click(function() {
                $(".user-account-bg").hide();

                $(".user-account").click(function(event) {
                    event.stopPropagation();
                })
            })
        })


        // header-scroll
$(window).scroll(function() {
    if ($(window).scrollTop() > 2)  {
        $('.header-top').addClass('header-fixed');
    } else {
        $('.header-top').removeClass('header-fixed');
    }
})

$(window).scroll(function() {
    if ($(window).scrollTop() > 35)  {
        $('.header-main-under').addClass('header-fixed');
    } else {
        $('.header-main-under').removeClass('header-fixed');
    }
})

// header-hide
$(window).scroll(function() {
    if ($(window).scrollTop() > 40)  {
        $('.header-main-menu-left').addClass('header-opacity');
    } else {
        $('.header-main-menu-left').removeClass('header-opacity');
    }
})
$(window).scroll(function() {
    if ($(window).scrollTop() > 40)  {
        $('.header-main-menu-right').addClass('header-opacity');
    } else {
        $('.header-main-menu-right').removeClass('header-opacity');
    }
})


        // let product = [
        //     [
        //         "Ten san pham 1", 1000, 'abc.jpb'
        //     ],

        //     [
        //         "Ten san pham 2", 2000, 'abc2.jpb'
        //     ],
        // ];

        // var htmlData = '';
        // for (var i = 0; i< product.length; i++) {
        //     htmlData += `<div class="product-card">\
        //             <a href="product.html" class="product-img">\
        //                 <div class="product-new">\
        //                     NEW\
        //                 </div>\
        //                 <img src="http://127.0.0.1:5501/images/products/${product[i][2]}" alt="product_${i}" width="120" height="120">\
        //             </a>\
        //             <div class="product-info">\
        //                 <a class="product-title" href="#">Sayaka - 40g</a>\
        //                 <p class="product-subtitle"> Rich &amp; Smooth </p>\
        //                 <p class="product-price">1000</p>\
        //                 <a class="product-order" href="#">\
        //                     <i class="ti-shopping-cart-full"></i>\
        //                     Pre Order\
        //                 </a>\
        //             </div>\
        //         </div>`;
        //         console.log(htmlData);
        // }
        // $('.feature-items').html(htmlData);