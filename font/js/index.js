$('#form-register').on('submit',function(){
	if($('#ten').val().trim() == ''){
		console.log('sai');
		return false;
	}
return true;
});