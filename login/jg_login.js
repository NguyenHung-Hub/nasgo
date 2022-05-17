var tendangnhap = document.getElementById("frm_name");
var pass = document.getElementById("frm_password");
function login() {
  var sign_up_checkbox = document.getElementById("sign_up_checkbox");
  var regexname = /^([A-z0-9!@#$%^&*().,<>{}[\]<>?_=+\-|;:\'\"\/])*[^\s]\1*$/;
  var regexpw = /^.{8,}$/;

  //
  if (tendangnhap.value == "") {
    tb_name.innerText = "Name không được để trống";
    return false;
  } else if (!regexname.test(tendangnhap.value)) {
    tb_name.innerText = "Name không được chứa khoảng trắng";
    return false;
  } else {
    tb_name.innerText = "";
  }

  //
  if (pass.value == "") {
    tb_pw.innerText = "Password không được để trống";
    return false;
  } else if (!regexpw.test(pass.value)) {
    tb_pw.innerText = "Password có ít nhất 8 ký tự";
    return false;
  } else {
    tb_pw.innerText = "";
  }

  alert("Bạn đã đăng ký thành công");
  window.location = "../home.html";
}
