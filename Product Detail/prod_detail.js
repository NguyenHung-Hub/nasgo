import { data } from "../Data/data.js";

var sub = document.getElementById("sub");
var plus = document.getElementById("plus");
var quantity = document.getElementById("quantity_selector");
var tbtonkho = document.getElementById("tbtonkho");
var min = 1;
var max = Number(document.getElementById("tbsl_tonkho").value);

// số lưuọng
sub.onclick = function () {
  if (Number(quantity.value) - 1 < min) {
    quantity.value = min;
  } else {
    quantity.value = Number(quantity.value) - 1;
    tbtonkho.innerText = "";
  }
};

plus.onclick = function () {
  if (Number(quantity.value) + 1 > max) {
    quantity.value = max;
    tbtonkho.innerText = "Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này";
  } else {
    quantity.value = Number(quantity.value) + 1;
    tbtonkho.innerText = "";
  }
};

// Buttton add cart
var add = document.getElementById("addcart");
var cart = document.getElementById("cart");

add.onclick = function () {
  console.log(cart);

  cart.innerText = quantity.value;
  var cartitem = localStorage.getItem("cartitem");
  console.log(cartitem);
  var item = [data[vitri].id];

  console.log(item);
  if (cartitem == null) {
    localStorage.setItem("cartitem", item);
  } else {
    var array = cartitem.split(",");
    array.push(item);
    localStorage.setItem("cartitem", array);
  }
};

var id_prod_detail = document.getElementById("id_prod_detail");

//sp tương tự
var img_pd_trending = document.querySelectorAll(".img-responsive");
var main_img_prod = document.querySelectorAll(".main_img_prod");

for (let i = 0; i < img_pd_trending.length; i++) {
  let random = Math.floor(Math.random() * data.length) + 1;

  img_pd_trending[i].src = data[random].img;
}

var tittle_prod_name = document.getElementById("tittle_prod_name");
var name_prod = document.getElementById("name_prod");
var item_1 = document.querySelector("#item_1");
var html_item = "";
for (let i = 0; i < 4; i++) {
  let x = Math.floor(Math.random() * data.length + 1);
  html_item += ` <div class="col-sm-3">
  <div class="thumb-wrapper">
    <div class="img-box">
      <img src="${data[x].img}" class="img-responsive" alt="" />
    </div>
    <div class="thumb-content">
      <h4>${data[x].name}</h4>
      <p class="item-price">
        <span>${data[x].price}</span>
      </p>

      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
</div>`;
}

item_1.innerHTML = html_item;
// console.log(name_prod.innerText);

// Khai báo
var price_prod = document.getElementById("price_prod");
var main_img_prod = document.getElementById("main_img_prod");
var description = document.getElementById("mota");
var prod_id = localStorage.getItem("id_prod");
var vitri;

for (let i = 0; i < data.length; i++) {
  if (data[i].id == prod_id) {
    vitri = i;
  }
}
// gán
console.log(name_prod);
name_prod.innerText = data[vitri].name;
id_prod_detail.value = data[vitri].id;
price_prod.innerText = data[vitri].price.toLocaleString("vi-VN") + "₫";
// price_prod.innerText = "₫";
main_img_prod.src = data[vitri].img;
description.innerHTML = data[vitri].description;

// link to back
tittle_prod_name.innerText = name_prod.innerText;
