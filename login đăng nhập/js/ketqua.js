var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("tên : "+searchParams.get("ten"));
$("#Email").html("email : "+searchParams.get("Email"));
$("#password").html("pasword : "+searchParams.get("password"));
$("#năm").html("year : "+searchParams.get("year"));
$("#ngày").html("ngay : "+searchParams.get("date"));
$("#tháng").html("tháng : "+searchParams.get("thang"));
$("#remenber").html("giới tinh : "+searchParams.get("remenber"));
