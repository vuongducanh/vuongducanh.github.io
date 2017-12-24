$(function(){
    var thoitrang = [
	{ src:'http://bizweb.dktcdn.net/100/077/361/products/elensilia-legance-leg-massage-gel1.jpg?v=1463631897447'},{  src:'http://congtythaoduocvietnam.com/wp-content/uploads/2017/05/aloe-lotion-600x700.png'},{  src :'https://mwell.com.vn/media/catalog/product/cache/2/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/r/e/repavar_atopic_facial_cream.jpg'},
	{  src:'http://giaycaohon.com/Uploads/Product/Lib/HN953%20%C4%90en-07.jpg?watermark=logo_watermark'},{src:'http://giaychonam.com/Uploads/Product/Lib/gi%C3%A0y%20nam%20t%C4%83ng%20cao%20TT52%20%C4%90en-09.jpg?watermark=logo_watermark'},{src:'http://giaychonam.com/Uploads/Product/lib/gi%C3%A0y%20nam%20cao%20HN956%20%C4%90en-11.jpg'},
	{  src:'img-logo/nuoc-hoa-nu1.jpg'},{src:'img-logo/nuoc-hoa-nu2.jpg'},{src:'img-logo/nuoc-hoa-nu3.jpg'},
	{  src:'http://quangoptic.com/upload/sanpham/raybanrb3025w0879mom-14658540355.jpg'},{src:'http://duynguyenshop.com/sites/default/files/bai-viet/2-thoi-trang/10-cach-an-mac-cho-nam-nguoi-gay/cach-an-mac-cho-nam-nguoi-gay-03.jpg'},{src:'http://1001meo.com/wp-content/uploads/2015/12/5-meo-cuc-huu-ich-chon-do-dep-cho-nam-8122015-02.jpg'}
       
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


$(document).ready( function() {
    $('#myCarousel').carousel({
        interval:   4000
    });
    
});