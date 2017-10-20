
function  changeColor(){
	document.getElementById("p1").style.color = "blue";
	document.getElementById("p2").style.color = "yellow";
	document.getElementById("p3").style.color = "red";

}
function copyContent(x,y)

{    if(x==1 && y==2)
     document.getElementById("p1").innerHTML = document.getElementById("p2").innerHTML;
     if else(x==1 && y==3)
     document.getElementById("p1").innerHTML = document.getElementById("p3").innerHTML;
     if else(x==2 && y==1)
     document.getElementById("p2").innerHTML = document.getElementbyId("p1").innerHTML;
     if else(x==2 && y==3)
     document.getElementById("p2").innerHTML = document.getElementById("p3").innerHTML;
    if else(x==3 && y==1)
     document.getElementById("p3").innerHTML = document.getElementById("p1").innerHTML;
    if else(x==3 && y==2)
     document.getElementById("p3").innerHTML = document.getElementById("p2").innerHTML;
}

console.log(copyContent(1,3))
