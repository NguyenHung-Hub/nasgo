var tendangnhap = document.getElementById("frm_name");
var email = document.getElementById("frm_email");
var phone = document.getElementById("frm_phone");
var pass = document.getElementById("frm_password");
var cfpass = document.getElementById("frm_cfpw");
var regexsdt = /^0\d{9}$/;
var regexname = /^([A-z0-9!@#$%^&*().,<>{}[\]<>?_=+\-|;:\'\"\/])*[^\s]\1*$/;
var regexpw = /^.{8,}$/;
var regexemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(com)+$/;

function sign_up() {
  // document.getElementById("tb_name").innerText = tendangnhap;
  if (tendangnhap.value == "") {
    tb_name.innerText = "Name không được để trống";
  } else if (!regexname.test(tendangnhap.value)) {
    tb_name.innerText = "Name không được chứa khoảng trắng";
  } else {
    tb_name.innerText = "";
  }

  // document.getElementById("tb_email").innerText = email;
  if (email.value == "") {
    tb_email.innerText = "Email không được để trống";
  } else if (!regexemail.test(email.value)) {
    tb_email.innerText = "Email sai cú pháp";
  } else {
    tb_email.innerText = "";
  }

  // document.getElementById("tb_phone").innerText = phone;
  if (phone.value == "") {
    tb_phone.innerText = "Phone không được để trống";
  } else if (!regexsdt.test(phone.value)) {
    tb_phone.innerText = "Phone sai cú pháp";
  } else {
    tb_phone.innerText = "";
  }

  // document.getElementById("tb_pw").innerText = pass;
  if (pass.value == "") {
    tb_pw.innerText = "Password không được để trống";
  } else if (!regexpw.test(pass.value)) {
    tb_pw.innerText = "Password có ít nhất 8 ký tự";
  } else {
    tb_pw.innerText = "";
  }

  // document.getElementById("tb_cfpw").innerText = cfpass;
  if (cfpass.value == "") {
    tb_cfpw.innerText = "Confirm Password không được để trống";
  } else if (cfpass.value != pass.value) {
    tb_cfpw.innerText = "Confirm Password không trùng với Password";
  } else {
    tb_cfpw.innerText = "";
  }

  var sign_up_checkbox = document.getElementById("sign_up_checkbox");

  if (sign_up_checkbox.checked == false) {
    alert(
      "Do you agree all statement in Terms & Conditions? If yes, checked. Please!!!"
    );
    return false;
  }

  alert("Bạn đã đăng ký thành công");
  window.location = "./login.html";
}
