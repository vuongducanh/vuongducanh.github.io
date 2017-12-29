
  	var cards = ['a1', 'a2', 'a3', 'a4', 'a5','a6','a7','a8','a9'];
  	var current=null;
    var count=0;
    var time=30;
      function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

// day la ham kiem tra dung sai
    function flip(card){
      $(card).toggleClass('flip');
      
      if(!current){
        current=$(card);
      }else{
        if (current.attr('data-name') != $(card).attr('data-name')){
          console.log('khac nnhau');
          setTimeout(function(){
             current.toggleClass('flip');
             $(card).toggleClass('flip');
              current=null;      //gán về null để bắt đầu lực chọn khác
          },400);
          // $('.card').css('pointer-events', 'auto');
        }else{
          console.log('giong nhau');
          setTimeout(function(){
            $(card).css('opacity','0');
            current.css('opacity','0');
            current=null;
            count++;
            if(count==9){
              alert('ban da thang');
            }
          },500);
          
        }
      }
    }




 $(function(){
  // nhan dôi mảng
  cards=cards.concat(cards);  
    // dảo vị trí các con bài
    cards=shuffle(cards);
    var html='';
    for(var i = 0 ;i<cards.length;i++){
      html+= '<div class="content"> <div class="grid"> <div class="card" data-name="'+cards[i]+'" onclick="flip(this)"> <div class="font" > <img src="img/anhsau1.jpg"> </div> <div class="back" > <img src="img/'+cards[i]+'.jpg"> </div> </div> </div> </div> ';
    };
    $('.content').html(html);
    $('.card').on('click',function(){
      $(this).addClass('flip');
      // $(this).css('pointer-events','none');
    });
     var run  =  setInterval(function(){
       time--;
       console.log(time);
       if(time ==0 ){
        clearInterval(run);
        alert("you are lose");
       }
     },1000)
  });


   
   
