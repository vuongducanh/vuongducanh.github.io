$('#form-register').on('submit',function(){
		if($('#ten').val().trim() ==''){
			return false;
		}
	return true;
});