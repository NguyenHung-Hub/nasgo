import { data } from "../../Data/data.js";

// Random id
function randomId() {
  return Math.floor(Math.random() * 100000);
}

// Convert number to money VND
function convertMoney(num) {
  return num.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

// === KHAI BÁO BIẾN ===
// Danh sách sản phẩm
let idproduct = localStorage.getItem("cartitem").split(",");
var products = [];
function find_prod() {
  // tìm các sp = id_prod

  for (let i = 0; i < idproduct.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[j].id == idproduct[i]) {
        products.push(data[j]);
      }
    }
  }
}

find_prod();
console.log(products);
// === TRUY CẬP VÀO CÁC THÀNH PHẦN ===
let productsEle = document.querySelector(".products");

// === MAIN FUNCTION ===
// Render và hiển thị dữ liệu
function renderUI(arr) {
  productsEle.innerHTML = "";

  if (arr.length == 0) {
    productsEle.insertAdjacentHTML(
      "afterbegin",
      "<li>Không có sản phẩm nào trong giỏ hàng</li>"
    );
    document.querySelector(".option-container").style.display = "none";
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    productsEle.innerHTML += `
            <li class="row">
                <div class="col left">
                    <div class="thumbnail">
                        <a href="#">
                            <img src="${p.img}" alt="${p.name}">
                        </a>
                    </div>
                    <div class="detail">
                        <div class="name"><a href="#">${p.name}</a></div>
                        <div class="price">${convertMoney(p.price)}</div>
                    </div>
                </div>
                <div class="col right">
                    <div class="quantity">
                        <input type="number" class="quantity" step="1" value="1"    
                        id="${p.id}">
                    </div>
                    <div class="remove">
                        <span class="close" onclick="removeItem(${p.id})">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </li>
        `;
  }
}

// Remove item trong cart
function removeItem(id) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  renderUI(products);
}
window.onload = renderUI(products);

function total_func() {
  var subtotal = document.getElementById("subtotal");
  var total = document.getElementById("total");
  var money = 0;
  for (let i = 0; i < products.length; i++) {
    let id = products[i].id;
    let count = document.getElementById(id);
    console.log(count.value);
    money += products[i].price * Number(count.value);
    console.log(products[i].id);
  }

  let moneystring = money.toLocaleString("vi-VN") + "₫";
  let totalmoneystring = (money + money * 0.1).toLocaleString("vi-VN") + "₫";

  //   return money;
  subtotal.innerHTML = `Subtotal <span>${moneystring}</span>`;
  total.innerHTML = `Total <span>${totalmoneystring}</span>`;
}
window.onload = total_func;
window.onload = function () {
  document.getElementById("list_prod").onchange = total_func;
};

var checkout = document.getElementById("checkout");
checkout.onclick = function () {
  window.location = "../Checkout/checkout.html";
};
