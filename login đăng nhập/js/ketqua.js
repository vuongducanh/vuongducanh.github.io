var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("tên : "+searchParams.get("ten"));
$("#Email").html("email : "+searchParams.get("Email"));
$("#password").html("pasword : "+searchParams.get("password"));
$("#năm").html(" : "+searchParams.get("year"));
$("#ngày").html(": "+searchParams.get("date"));
$("#tháng").html(" : "+searchParams.get("thang"));
$("#remenber").html("giới tinh : "+searchParams.get("remenber"));
