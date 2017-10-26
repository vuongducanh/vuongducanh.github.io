var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("tên : "+searchParams.get("ten"));
$("#Email").html("email : "+searchParams.get("Email"));
$("#password").html("pasword : "+searchParams.get("password"));
$("#năm").html("Năm : "+searchParams.get("year"));
$("#ngày").html("Ngày : "+searchParams.get("date"));
$("#tháng").html("tháng : "+searchParams.get("thang"));
$("#remenber").html("giới tinh : "+searchParams.get("remenber"));
