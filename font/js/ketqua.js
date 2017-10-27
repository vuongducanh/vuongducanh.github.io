var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("Họ và Tên : "+searchParams.get("ten"));
$("#Email").html("Email : "+searchParams.get("Email"));
$("#password").html("Mật khẩu : "+searchParams.get("password"));
$("#ngày").html("Năm tháng ngày sinh : "+searchParams.get("sinh"));
$("#song").html("Quê quán : "+searchParams.get("song"));
$("#remenber").html("Giới tinh : "+searchParams.get("remenber"));

