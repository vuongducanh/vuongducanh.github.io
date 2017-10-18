function a(id){
	return document.getElementById('id');
}
var x = "";
function set_num(num){
	x= x + num;
	a('div').value = x;
}