$(function(){
     

     $(window).on('scroll',function(){
     	var a = $('#contact')[0].getBoundingClientRect().top;   //lấy thông số đối tượng đấy ;
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

// do you have a girl fren