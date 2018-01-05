
// js cho back-to-top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

// slide cho anh
jQuery(document).ready(function($) {
		   $('#myCarousel').carousel({
				   interval: 5000
		   });
		   $('#carousel-text').html($('#slide-content-0').html());
	
		   //Handles the carousel thumbnails
		  $('[id^=carousel-selector-]').click( function(){
			   var id = this.id.substr(this.id.lastIndexOf("-") + 1);
			   var id = parseInt(id);
			   $('#myCarousel').carousel(id);
		   });
	
	
		   // When the carousel slides, auto update the text
		   $('#myCarousel').on('slid.bs.carousel', function (e) {
					var id = $('.item.active').data('slide-number');
				   $('#carousel-text').html($('#slide-content-'+id).html());
		   });
   });

// js chotab nổi bật

$(document).ready(function() { 
	(function () { 
		$('.tab ul.tabs').addClass('active').find(' li:eq()').addClass('current');
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'),   //closest là tìn đến cha của thằng mình click trong dòng này là .tab chính là thằng cha;
				index = $(this).closest('li').index();   // index là số thứ tự
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		} );
	})(jQuery);

});
// hết js cho tab nổi bật



// js cho appento thêm vao vào giỏ hàng

$(function () {
    var goToCartIcon = function($addTocartBtn){
      var $cartIcon = $(".my-cart-icon");
      var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({"position": "fixed", "z-index": "999"});
      $addTocartBtn.prepend($image);
      var position = $cartIcon.position();
      $image.animate({
        top: position.top,
        left: position.left
      }, 500 , "linear", function() {
        $image.remove();
      });
    }

    $('.my-cart-btn').myCart({
      
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      classProductQuantity: 'my-product-quantity',
      classProductRemove: 'my-product-remove',
      classCheckoutCart: 'my-cart-checkout',
      currencySymbol: 'k',

      affixCartIcon: true,
      showCheckoutModal: true,
      numberOfDecimals: 2,
      cartItems: [
        {id: 1, name: 'sản phẩm 1',  price: 100, quantity: 1, image: 'img/hot-and-semi-run1.jpg'},
        {id: 2, name: 'sản phẩm 2',  price: 200, quantity: 1, image: 'img/hot-and-semi-run2.jpg'},
        {id: 3, name: 'sản phẩm 3',  price: 300, quantity: 1, image: 'img/hot-and-semi-run3.jpg'},
        {id: 4, name: 'sản phẩm 4',  price: 300, quantity: 1, image: 'img/hot-and-semi-run4.jpg'}
      ],
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      afterAddOnCart: function(products, totalPrice, totalQuantity) {
        
      },
      clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
       
      },
     
      getDiscountPrice: function(products, totalPrice, totalQuantity) {
       
        return totalPrice * 0.5;
      }
    });
  });

var clicks=4;
    function onClick() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

// js ccho slide các thương hiệu

