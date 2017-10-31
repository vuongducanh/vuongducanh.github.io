$('#form-register').on('submit',function(){
	 var ketqua = true;
		if($('#ten').val().match(  ) == null){
		   $('#ten').next('span').text('!error').css("color","red");
			ketqua =  false;
		}else{
			$('#ten').next('span').text('');
		}
		
		if($('#Email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ ) == null){
			
			$('#Email').next('span').text('!error').css("color","red");
			ketqua =  false;
		}else{
			$('#Email').next('span').text('')
		}
		if($('#password').val().match( /^[a-zA-Z]\w{3,14}$/ ) == null){
			$('#password').next('span').text('!error').css("color","red");
			ketqua = false;
		}else {
			$('#password').next('span').text('')
		}
		if($('#nhaplaimatkhau').val() != $('#password').val()){
			$('#nhaplaimatkhau').next('span').text('!error').css("color","red");
			ketqua = false;
		}else {
			$('#nhaplaimatkhau').next('span').text('')
		}
		if($('#date').val().trim() == ''){
			$('#date').next('span').text('!error').css("color","red");
			ketqua = false;
		}else{
			$('#date').next('span').text('')
		}

		if($('#passwor').val().trim() == ''){
			$('#passwor').next('span').text('!error').css("color","red");
			ketqua = false;
		}else{
			$('#passwor').next('span').text('')
		}
		
		



	return ketqua;
});