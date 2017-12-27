var quiz = $('#quiz');

var question = $('#question');

var btn0 = $('#btn0');
var btn1 =$('#btn1');
var btn2 = $('#btn2');
var btn3 =$('#btn3');

$(function(){
 
  $('#question').text(cauhoi[0].question);
  $('#btn0').text(cauhoi[0].option1);
  $('#btn1').text(cauhoi[0].option2);
  $('#btn2').text(cauhoi[0].option3);
  $('#btn3').text(cauhoi[0].option4);
  var i =1;

  $('.anh').click(function(){
    $('#question').text(cauhoi[i].question);
    $('#btn0').text(cauhoi[i].option1);
    $('#btn1').text(cauhoi[i].option2);
    $('#btn2').text(cauhoi[i].option3);
    $('#btn3').text(cauhoi[i].option4);
  
    i++; 
    console.log(i);
    if(i>cauhoi.length-1){
      $('#quiz').css('display','none');
      $('.choilai').css('display','block').slideUp('100').slideDown('slow');
      return false;
    }

  });   

});

   $(function (){
  var index=0;
  var diem=0;
  if(cauhoi[index].option4==cauhoi[index].dung){
           diem+=10;

  }
  else{
    diem+=0;
  }index++;

});


