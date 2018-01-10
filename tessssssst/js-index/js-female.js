$(function(){
    var thoitrang = [
	{ src:'img-logo/son-nu1.jpg'},{  src:'img-logo/son-nu2.jpg'},{  src :'img-logo/son-nu3.jpg'},
	{  src:'img-logo/giay-nu1.jpg'},{src:'img-logo/giay-nu2.jpg'},{src:'img-logo/giay-nu3.jpg'},
	{  src:'img-logo/nuoc-hoa-nu1.jpg'},{src:'img-logo/nuoc-hoa-nu2.jpg'},{src:'img-logo/nuoc-hoa-nu3.jpg'},
	{  src:'img-logo/kinh-nu1.gif'},{src:'img-logo/kinh-nu2.jpg'},{src:'img-logo/kinh-nu3.jpg'}
       
    ];
    $('#son').click(function(){
        $('#img1').attr('src',thoitrang[0].src);
        $('#img2').attr('src',thoitrang[1].src);
        $('#img3').attr('src',thoitrang[2].src);
       
    });
    $('#giay').click(function(){
        $('#img1').attr('src',thoitrang[3].src);
        $('#img2').attr('src',thoitrang[4].src);
        $('#img3').attr('src',thoitrang[5].src);
  });
  $('#nuoc-hoa').click(function(){
    $('#img1').attr('src',thoitrang[6].src);
    $('#img2').attr('src',thoitrang[7].src);
    $('#img3').attr('src',thoitrang[8].src);
});
    $('#kinh-thoi-trang').click(function(){
        $('#img1').attr('src',thoitrang[9].src);
        $('#img2').attr('src',thoitrang[10].src);
        $('#img3').attr('src',thoitrang[11].src);
});
});