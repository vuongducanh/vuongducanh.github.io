$(function(){
    var thoitrang = [
        {
        src:'img/do-nam1.jpg'
        },
        {
        src:'img/do-nam2.jpg'
        },
        {
        src :'imgabout/anh-kinh.png'
        },
        {
        src:'img/nuoc-hoa.jpg'
        }
    ];
    $('#son').click(function(){
    
        $('#img1').attr('src',thoitrang[0].src);
        $('#img2').attr('src',thoitrang[0].src);
        $('#img3').attr('src',thoitrang[0].src);
       
    });
    $('#giay').click(function(){
        $('#img1').attr('src',thoitrang[1].src);
        $('#img2').attr('src',thoitrang[1].src);
        $('#img3').attr('src',thoitrang[1].src);
  });
  $('#nuoc-hoa').click(function(){
    $('#img1').attr('src',thoitrang[3].src);
    $('#img2').attr('src',thoitrang[3].src);
    $('#img3').attr('src',thoitrang[3].src);
});
    $('#kinh-thoi-trang').click(function(){
        $('#img1').attr('src',thoitrang[2].src);
        $('#img2').attr('src',thoitrang[2].src);
        $('#img3').attr('src',thoitrang[2].src);
});
});