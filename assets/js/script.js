'use strict'; // strict mode

// tạo sự kiện ấn vào nút btn hiện form đăng nhập

// document.getElementById("btn-login").addEventListener("click", function() {
//   var loginForm = document.getElementById("login-form");
//   if (loginForm.style.display === "block") {
//       loginForm.style.display = "none";
//   } else {
//       loginForm.style.display = "block";
//   }
// });
document.getElementById("btn-login").addEventListener("click", function () {
  window.location.href = "login.html";
});

/*
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) { // elem: phần tử, type: loại sự kiện, callback: hàm xử lý sự kiện
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback); // elem[i] là phần tử thứ i trong mảng elem
    }
  } else {
    elem.addEventListener(type, callback);// elem là phần tử đầu tiên trong mảng elem
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * search bar toggle
 */

const searchBar = document.querySelector("[data-search-bar]"); // có tác dụng khi click vào nút search
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);

