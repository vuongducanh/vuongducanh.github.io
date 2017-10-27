var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("Tên : "+searchParams.get("ten"));
$("#Email").html("Email : "+searchParams.get("Email"));
$("#password").html("Pasword : "+searchParams.get("password"));
$("#năm").html("Năm : "+searchParams.get("year"));
$("#ngày").html("Ngày : "+searchParams.get("date"));
$("#tháng").html("Tháng : "+searchParams.get("thang"));
$("#remenber").html("Giới tinh : "+searchParams.get("remenber"));
$("#sống").html("Nơi ở : "+searchParams.get("sống"));

