var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("Họ và Tên : "+searchParams.get("ten"));

// get("ten") là lấy name ở trang chủ trang chủ đăng kí rồi tên sẽ truền vào id cua trang ketqua.html

$("#Email").html("Email : "+searchParams.get("Email"));
$("#password").html("Mật khẩu : "+searchParams.get("password"));
$("#ngày").html("Năm tháng ngày sinh : "+searchParams.get("sinh"));
$("#song").html("Quê quán : "+searchParams.get("song"));
$("#remenber").html("Giới tinh : "+searchParams.get("remenber"));

