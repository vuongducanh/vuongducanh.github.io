 $('#form-register').on('submit', function(){
	var ketqua = true;
	if($('#ten').val().trim() == ''){
		$('#ten').next('span').text(" lỗi!");
		ketqua =  false;
	}else{
		$('#ten').next('span').text(" ");
	} 

	if($('#Email').val().trim() == ''){
		$('#Email').next('span').text("lỗi!");
		ketqua =  false;
	}else {
		$('#ten').next('span').text("");
	}
	// if($('#password').val().trim() == ''){
	// 	$('#password').next('span').text("lỗi!");
	// 	ketqua =  false;
	// }else{
	// 	$('#ten').next('span').text("");
	// }

	return ketqua;

});


