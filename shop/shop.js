import { data } from "../Data/data.js";

var layout_prod = document.getElementById("layout_prod");
var prod_html = "";

//
for (let i = 0; i < data.length; i++) {
  prod_html += `<div class="col-lg-3 col-md-4 col-sm-12 uyencute" id="${data[i].id}">
    <div class="card product_item">
      <div class="product">
        <div class="img_prod_shop">
          <img
            src="${data[i].img}"
            alt="Product"
            class="img-fluid"
          />
          <div class="img_hover">
            <a
              href="javascript:void(0);"
              class="btn btn-primary btn-sm waves-effect"
              ><i class="zmdi zmdi-shopping-cart"></i
            ></a>
          </div>
        </div>
        <div class="product_details">
          <h5>
          <a href="ec-product-detail.html">
          ${data[i].name}</a></h5>
          <ul class="product_price list-unstyled">
            <li class="new_price">${data[i].price}₫</li>
          </ul>
        </div>
      </div>
    </div>
  </div>`;
}

console.log(data.length);
layout_prod.innerHTML = prod_html;

var uyencute = document.querySelectorAll(".uyencute");

for (let i = 0; i < data.length; i++) {
  // console.log(uyencute[i]);
  // const element = array[i];
  uyencute[i].addEventListener(
    "click",
    function () {
      console.log(uyencute[i].id);
      localStorage.setItem("id_prod", uyencute[i].id);
      window.open("../Product Detail/prod_detail.html", "_blank").focus();
    },
    false
  );
}
