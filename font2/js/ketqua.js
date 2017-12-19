var url = new URL(window.location.href);


var searchParams = new URLSearchParams(url.search);

$("#ten").html("Full name : "+searchParams.get("ten"));

// searchParams.get("ten")); có nghĩa là lấy kết quả ở trang chủ rồi in ra ở trang đăng kí thành công
$("#Email").html("Email : "+searchParams.get("Email"));
$("#password").html("Password : "+searchParams.get("password"));

$("#mk").html("Please come bac password   : "+searchParams.get("lai"));

$("#lai").html("re-enter password: "+searchParams.get("lai"));
$("#ngày").html("Birthday : "+searchParams.get("sinh"));
$("#song").html("Home town : "+searchParams.get("song"));
$("#remenber").html("sex: "+searchParams.get("remenber"));

