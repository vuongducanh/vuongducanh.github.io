
function changeColor() {
  document.getElementById("p1").style.color = "blue";
  document.getElementById("p2").style.color = "yellow";
  document.getElementById("p3").style.color = "red";
}
//console.log(changeColor())

function changeFontSize(x) {
  document.getElementById("p1").style.fontSize = x + "px";
  document.getElementById("p2").style.fontSize = x + "px";
  document.getElementById("p3").style.fontSize = x + "px";
}
//console.log(changeFontSize(20));
//console.log(changeFontSize(50))

function changeColor(color) {
  document.body.style.backgroundColor = color + "";
}
//console.log(changeColor("pink"))

function copyContent(a, b) {
  if (a == 1 && b == 2)
    document.getElementById("p1").innerHTML = document.getElementById(
      "p2"
    ).innerHTML;
  else if (a == 1 && b == 3)
    document.getElementById("p1").innerHTML = document.getElementById(
      "p3"
    ).innerHTML;
  else if (a == 2 && b == 1)
    document.getElementById("p2").innerHTML = document.getElementById(
      "p1"
    ).innerHTML;
  else if (a == 2 && b == 3)
    document.getElementById("p2").innerHTML = document.getElementById(
      "p3"
    ).innerHTML;
  else if (a == 3 && b == 1)
    document.getElementById("p3").innerHTML = document.getElementById(
      "p1"
    ).innerHTML;
  else if (a == 3 && b == 2)
    document.getElementById("p3").innerHTML = document.getElementById(
      "p2"
    ).innerHTML;
}
//console.log(copyContent(1,2))
//console.log(copyContent(1,3))

function increaseFontSize(id_para) //đề gọi hàm tên id
{
  var element = document.getElementById(id_para);
  var pixel = document.getElementById(id_para).style.fontSize;//dòng này có nghĩa là style cho id mà bạn muốn tìn đễn;
  
  pixel = parseInt(pixel.replace("px", ""));//dong nay có nghĩa là  chuyển px tử trên thành chuỗi rỗng . và parse là kieu số nguyên;
  if (pixel <30) pixel = pixel + 1;
  
  element.style.fontSize = pixel + "px"; //dòng này có nghx là chuyen tư 20 thanh 20px trinh duyệt tự hiểu
}
// console.log(increaseFontSize('p1'));




function decreaseFontSize(id_para) 
{
  var element = document.getElementById(id_para);
  var pixel = document.getElementById(id_para).style.fontSize;
  
  pixel = parseInt(pixel.replace("px", ""));
  if (pixel > 10) pixel = pixel - 1;
  element.style.fontSize = pixel + "px";
}
//console.log(decreaseFontSize('p1'));



