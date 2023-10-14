document.getElementById("btn-signUp").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn form gửi thông tin đến server

  // Lấy thông tin từ các trường input
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Kiểm tra xem đã tồn tại thông tin tài khoản chưa
  if (!localStorage.getItem("accounts")) { 
    localStorage.setItem("accounts", JSON.stringify([]));
  }

  // Lấy danh sách tài khoản từ localStorage
  const accounts = JSON.parse(localStorage.getItem("accounts"));

  // Kiểm tra xem tài khoản đã tồn tại hay chưa
  const existingAccount = accounts.find((account) => account.username === username);
  if (existingAccount) {
    alert("Username already exists. Please choose a different username.");
    return;
  }

  // Thêm tài khoản mới vào danh sách
  accounts.push({ username, email, password });

  // Lưu lại danh sách tài khoản đã cập nhật vào localStorage
  localStorage.setItem("accounts", JSON.stringify(accounts));

  // Thông báo đăng ký thành công và chuyển hướng đến trang đăng nhập (hoặc trang khác)
  alert("Registration successful!");

  // window.location.href = ""; // Chuyển hướng đến trang đăng nhập
});


//login

document.getElementById("btn-Login").addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn form gửi thông tin đến server

  // Lấy thông tin từ các trường input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Lấy danh sách tài khoản từ localStorage (nếu chưa tồn tại, tạo một danh sách tài khoản mặc định)
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  // Tìm tài khoản với email và mật khẩu phù hợp
  const loggedInAccount = accounts.find(
    (account) => account.email === email && account.password === password
  );

  if (loggedInAccount) {
    alert("Login successful!");
    // Thực hiện chuyển hướng sau khi đăng nhập thành công (nếu cần)
    window.location.href = "../main/index.html"; // Chuyển hướng về trang web chính 
  } else {
    alert("Invalid email or password. Please try again.");
  }
});





