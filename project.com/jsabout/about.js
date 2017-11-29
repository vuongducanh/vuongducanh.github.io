$(function(){
     $(window).on('scroll',function(){
     	var a = $('#contact')[0].getBoundingClientRect().top;   //lấy thông số đối tượng đấy trái, trên, rộng và chiều cao.
 
        var b  = $(window).innerHeight();     //lấy chiều cao của cửa sổ hiện tại;
     	 
           if(a < b-100){
           	 $('#contact').css( {
           	 	"opacity" : "1" ,
           	 	"transition":"all 1s ease",
           	 	"transform": "translateX(0)"
           	 })
           }

     });
});

// hết phần animation cho khối đăng nhập và nhắn tin


// phàn js cho hiệu ứng ô tìm kiếm
$(function(){
     $(window).on('scroll',function(){
      var a = $('.search-wrapper')[0].getBoundingClientRect().top;   //lấy thông số đối tượng đấy trái, trên, rộng và chiều cao.
 
        var b  = $(window).innerHeight();     //lấy chiều cao của cửa sổ hiện tại;
       
           if(a < b-10){
             $('.search-wrapper').css( {
              "opacity" : "1" ,
              "transition":"all 1s ease",
              "transform": "translateX(0)"
             })
           }

     });
});
// hết phần js cho hiệu ứng anomation của khung tìm kiếm


// bắt đầu phần hiệu ứng của khung những sản phẩm tiêu biểu
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}
// hất phần jc cho sản phẩm tiêu biểu





