


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
	(function () { 
		$('.tab ul.tabs').addClass('active').find('> li:eq()').addClass('current');
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

  $('.money-products-js').append('<del>&nbsp;&nbsp;150000đ</del>').append('<div data-toggle="buttons"><label class="btn btn-lg btn-block btn-success text-success active"> <input type="radio" name="options" id="option1" autocomplete="off" checked> <i class="fa fa-check-circle-o animated fadeIn"></i> <br /> đã thêm </label> <label class="btn btn-lg btn-block btn-default text-default"> <input type="radio" name="options" id="option2" autocomplete="off"> <i class="fa fa-circle-o "></i> <br /> Thêm giỏ hàng </label> </div>')
//$(" .alternate-details").append('<button class="btn btn-danger my-cart-btn" data-id="1" data-name="product 1" data-summary="summary 1" data-price="10" data-quantity="1" data-image="img/giaynam1.jpg">Thêm giỏ hàng</button>')

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
      currencySymbol: 'Đ',

      affixCartIcon: true,
      showCheckoutModal: true,
      numberOfDecimals: 2,
      cartItems: [
        {id: 1, name: 'product 1', summary: 'summary 1', price: 10, quantity: 1, image: 'img/hot-and-semi-run1.jpg'},
        {id: 2, name: 'product 2', summary: 'summary 2', price: 20, quantity: 2, image: 'img/hot-and-semi-run2.jpg'},
        {id: 3, name: 'product 3', summary: 'summary 3', price: 30, quantity: 1, image: 'img/hot-and-semi-run3.jpg'},
        {id: 4, name: 'product 4', summary: 'summary 4', price: 30, quantity: 1, image: 'img/hot-and-semi-run4.jpg'}
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
// js ccho slide các thương hiệu
