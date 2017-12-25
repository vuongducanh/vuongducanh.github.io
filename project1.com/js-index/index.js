


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

// js cho top nổi bật

$(document).ready(function() { 
	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			g.preventDefault();
		} );
	})(jQuery);

});
// hết js cho topp nổi bật

// js cho appento thêm vao vào giỏ hàng
//$('.money-products-js').append('<div data-toggle="buttons"><label class="btn btn-lg btn-block btn-success text-success active"> <input type="radio" name="options" id="option1" autocomplete="off" checked> <i class="fa fa-check-circle-o animated fadeIn"></i> <br /> đã thêm </label> <label class="btn btn-lg btn-block btn-default text-default"> <input type="radio" name="options" id="option2" autocomplete="off"> <i class="fa fa-circle-o "></i> <br /> Thêm giỏ hàng </label> </div>')
$('.money-products-js').append('<del>&nbsp;&nbsp;150000đ</del>').append( '<button class="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="img/giaynam1.jpg">Thêm giỏ hàng</button>')

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
      currencySymbol: '$',
      classCartIcon: 'my-cart-icon',
      classCartBadge: 'my-cart-badge',
      classProductQuantity: 'my-product-quantity',
      classProductRemove: 'my-product-remove',
      classCheckoutCart: 'my-cart-checkout',
      affixCartIcon: true,
      showCheckoutModal: true,
      numberOfDecimals: 2,
      cartItems: [
        {id: 1, name: 'product 1', summary: 'summary 1', price: 1000, quantity: 1, image: 'img/do-nam1.jpg'},
        {id: 2, name: 'product 2', summary: 'summary 2', price: 2000, quantity: 2, image: 'img/du-nu2.jpg'},
        {id: 3, name: 'product 3', summary: 'summary 3', price: 3000, quantity: 1, image: 'img/do-nu4.jpg'}
      ],
      clickOnAddToCart: function($addTocart){
        goToCartIcon($addTocart);
      },
      afterAddOnCart: function(products, totalPrice, totalQuantity) {
        console.log("afterAddOnCart", products, totalPrice, totalQuantity);
      },
      clickOnCartIcon: function($cartIcon, products, totalPrice, totalQuantity) {
        console.log("cart icon clicked", $cartIcon, products, totalPrice, totalQuantity);
      },
      checkoutCart: function(products, totalPrice, totalQuantity) {
        var checkoutString = "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
        checkoutString += "\n\n id \t name \t summary \t price \t quantity \t image path";
        $.each(products, function(){
          checkoutString += ("\n " + this.id + " \t " + this.name + " \t " + this.summary + " \t " + this.price + " \t " + this.quantity + " \t " + this.image);
        });
        alert(checkoutString)
        console.log("checking out", products, totalPrice, totalQuantity);
      },
      getDiscountPrice: function(products, totalPrice, totalQuantity) {
        console.log("calculating discount", products, totalPrice, totalQuantity);
        return totalPrice * 0.5;
      }
    });
  });