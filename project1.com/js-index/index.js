
// js cho them vao gio hang
$(document).on('click', '.them', function (e) {
	e.preventDefault();
	var parent = $(this).parents('.img-box');
	var cart = $(document).find('#cart-shop');
	var src = parent.find('img').attr('src');
	var partop = parent.offset().top;
	var parleft = parent.offset().left;
	
	
	$('<img />', {
		class: 'img-fly',
		src: src
	}).appendTo('body').css({
		'top':partop,
		'left':parleft + parent.width()-50
	});
	setTimeout(function(){
       $(document).find('.img-fly').css({
			'top':cart.offset().top,
			'left':cart.offset().left
	   });
	setTimeout(function(){
		$(document).find('.img-fly').remove();
		var citem  =parseInt( $('#count-item').attr('value'))+1;
		$('#count-item').html(citem);
		citem++;
	},1000)
	},500);
});



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
$('.tabs2-js-index').click(function(){
   $("div .apeento").appendTo('.buttons-cart');
});
