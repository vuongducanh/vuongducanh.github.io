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

// hết phần animation cho khối đăng nhập và nhắn tin

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
// heet js them vao gio hang



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
// het js cho back-to-top








