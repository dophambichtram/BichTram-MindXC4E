
// Lấy các phần tử giao diện người dùng từ tệp HTML
var username = document.getElementById("username");
var password = document.getElementById("password");
var loginButton = document.getElementById("login-button");
var loginForm = document.getElementById("login-form");
// localStorage.setItem("username", "dophambichtram")
// localStorage.setItem("Password", "exo")
 function back(){
     window.location.href = "/login.html"
     }
// Thêm sự kiện nhấp vào nút đăng nhập
loginButton.addEventListener("click", function(event) {
    // Ngăn chặn hành động mặc định của nút đăng nhập
    event.preventDefault();
    // Kiểm tra tính hợp lệ của tên người dùng và mật khẩu
    if (username.value == "" || password.value == "") {
        // Hiển thị thông báo lỗi nếu tên người dùng hoặc mật khẩu trống
        alert("Vui lòng nhập tên người dùng và mật khẩu");
    } else {
        // Gửi dữ liệu đăng nhập lên máy chủ bằng phương thức POST
        var data = new XMLHttpRequest();
        data.open("POST", "http://127.0.0.1:5500/login.html", true);
        data.setRequestHeader("Content-Type", "application/json");
        data.send(JSON.stringify({
            username: username.value,
            password: password.value
        }));
        // Xử lý phản hồi từ máy chủ
        data.onload = function() {
            if (data.status == 200) {
                // Nếu đăng nhập thành công, chuyển hướng đến trang chủ
                window.location.href = "http://127.0.0.1:5500/day9.html";
            } else {
                // Nếu đăng nhập thất bại, hiển thị thông báo lỗi từ máy chủ
                alert(data.responseText);
            }
        };
    }
});

 
// function log(){
//     const name = document.getElementById("username").innerHTML // text dong usernsam
//     console.log(name)
//     const pass = document.getElementById("Password").innerHTML
//     console.log(pass)
//     const a = localStorage.getItem("username") // dophamm..
//     const b = localStorage.getItem("Password")
//     if(name === a && pass === b){
//         clearInterval(a)
//         window.location.href = "/day9.html"
//     }alert("Đăng nhập sai")
// }

//  const myElm = document.getElementById("Dashboard").innerHTML
//     const myDas = document.getElementById("board")
//          function handleClick() {
//          myDas.innerHTML = "Dashboard"
//     }

//      const team = document.getElementById("Team").innerHTML
//      function handleClick1() {
//         myDas.innerHTML = "Team"
//    }

//     const projects = document.getElementById("Projects").innerHTML
//     function handleClick2() {
//         myDas.innerHTML = "Projects"
//     }

//     const canlendar = document.getElementById("Calendar").innerHTML
//     function handleClick3() {
//         myDas.innerHTML = "Calendar"
//     }

//     const document = document.getElementById("Documents").innerHTML
//     function handleClick4() {
//         myDas.innerHTML = "Documents"
//     }