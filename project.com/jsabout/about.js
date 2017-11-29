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
// hết phần js cho hiệu ứng anomation

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


$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});




