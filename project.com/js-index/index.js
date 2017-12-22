$(function () {
	$(window).on('scroll', function () {
		var a = $('#contact')[0].getBoundingClientRect().top;   //lấy thông số đối tượng đấy trái, trên, rộng và chiều cao.

		var b = $(window).innerHeight();     //lấy chiều cao của cửa sổ hiện tại;

		if (a < b - 100) {
			$('#contact').css({
				"opacity": "1",
				"transition": "all 1s ease",
				"transform": "translateX(0)"
			})
		}

	});
});

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

// js xoa giỏ hàng
$(function(){
  $(".remove").click(function(){
	   $('.tr-remove').remove();
	 
  });
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
$(function(){
   $('.thaydoi1').show();
   $('.thaydoi2').hide();
   $('.thaydoi3').hide();
   $('.thaydoi4').hide();
   $('.thaydoi5').hide();
	
$('.active1').click(function(){
   $('.thaydoi1').show();
   $('.thaydoi2').hide();
   $('.thaydoi3').hide();
   $('.thaydoi4').hide();
   $('.thaydoi5').hide();
});
$('.active2').click(function(){
   $('.thaydoi1').hide();
   $('.thaydoi2').show();
   $('.thaydoi3').hide();
   $('.thaydoi4').hide();
   $('.thaydoi5').hide();
});
$('.active3').click(function(){
   $('.thaydoi1').hide();
   $('.thaydoi2').hide();
   $('.thaydoi3').show();
   $('.thaydoi4').hide();
   $('.thaydoi5').hide();
})
$('.active4').click(function(){
	$('.thaydoi1').hide();
   $('.thaydoi2').hide();
   $('.thaydoi3').hide();
   $('.thaydoi4').show();
   $('.thaydoi5').hide();
})
$('.active5').click(function(){
   $('.thaydoi1').hide();
   $('.thaydoi2').hide();
   $('.thaydoi3').hide();
   $('.thaydoi4').hide();
   $('.thaydoi5').show();
})
});

// cái này thì add class active
// dùng luôn của bootstrap




