import { data } from "./data.js";

// var data = [
//   {
//     id: "prod_1",
//     name: "Kệ sách vàng để bàn tinh tế",
//     price: 140000,
//     img: "https://my-live-05.slatic.net/p/aa7669d6ee48994f5b2521fe24794d3f.jpg_2200x2200q80.jpg_.webp",
//     description:
//       "<p>Giá sách mini lắp ghép để bàn được làm từ chất liệu gỗ nên vô cùng chắc chắn và đẹp mắt. Với thiết kế nhiều ngăn, nhiều tầng để sách vật dụng văn phòng cực tiện ích, giúp không gian phòng làm việc, bàn học của bạn vô cùng đẹp mắt và sạch sẽ. Giá sách mini lắp ghép để bàn có thể tháo rời hoặc lắp ráp tiện dụng, nhanh chóng nên dễ dàng di chuyển, mang theo khi bạn dời nhà hoặc đi xa.</p><p>👉Kích thước khi ghép thành kệ lớn: 55cm x 15cm x 35cm<br />👉Kích thước kệ nhỏ là: 35cm x 15cm x 35cm<br />👉Chất liệu: gỗ MFC loại 1, chống ẩm, chống mối mọt<br />👉Công dụng: trang trí, làm giá sách khu vực học tập, bàn làm việc, phòng khách, phòng ngủ,...<br />👉 Có thể để bàn hoặc treo tường&nbsp;<br />👉 Màu sắc: Vân gỗ</p><p><br />Xuất xứ: Trung Quốc<br />#Giá_Sách #Kệ_Để_Bàn #Kệ_Để_Sách #Kệ_Gỗ_Để_Bàn #Kệ_Gỗ_Đựng_Sách #Kệ_Mini #Kệ_Sách &nbsp;#Kệ_Sách_Để_Bàn #Kệ_Sách_Gỗ_Mini #Kệ_Sách_Mini #Kệ_Sách_Mini_Gỗ #Tủ_Đựng_Sách</p>",
//   },

//   {
//     id: "prod_2",
//     name: "Tranh cát chuyển động",
//     price: 150000,
//     img: "https://img.alicdn.com/i1/2490940705/O1CN01qc95jD1H4vxbURJiQ_!!2490940705.jpg",
//     description:
//       "<p>🔔 Kích thước: 12 inch Thông số kỹ thuật: 26*27*4.5cm, 960g<br />🔔 Thông số kỹ thuật 7 inch: 18*19*4cm, 450g<br />🔔 Chất liệu: Thủy tinh + cát + nhựa<br />🔔 Màu sắc: chủ yếu là hình ảnh<br />🔔 Công nghệ bề mặt: Đánh bóng<br />🔔 Phong cách: Hiện đại và đơn giản<br />🔔 Hình dạng: tròn<br />🔔 Nội dung đóng gói: 1x đồng hồ cát vẽ phong cảnh 3D</p><ul><li data-spm-anchor-id='a2o4n.pdp_revamp.product_detail.i1.1a0d631byhszZc'>Cát chuyển động mượt mà làm giảm căng thẳng, thư giãn mắt và tăng sự kiên nhẫn.</li><li>Mỗi lần lật có thể tạo ra một bức tranh động hoàn toàn không lặp đi lặp lại. Nó có lợi cho sự phát triển trí thông minh và cải thiện tâm trạng.</li><li>Gọng kính trong suốt và sang trọng. Khung bên trong của nhựa có cảm giác lõm và lồi mạnh mẽ. Thích hợp để trang trí phòng khách và phòng ngủ.</li><li>Chất liệu acrylic tinh tế và dày và có thể đặt ở bất cứ đâu, chẳng hạn như khách sạn, nhà hàng, quán bar, vũ trường, phòng ngủ, văn phòng và phòng học.</li><li>Dòng Chảy kết hợp của chất lỏng cho phép mỗi vòng quay chảy trơn tru. Nó được nhặt lên trên bàn, xoay và đặt theo chiều ngang như một khung ảnh.</li></ul><p> </p>",
//   },

//   {
//     id: "prod_3",
//     name: "Tượng David decor cắm hoa",
//     price: 99000,
//     img: "https://www.poligon-1.lt/Modernus-Nordic-Stiliaus-Kūrybos-Portretas-Vaza-Žmogaus/upload-1_100067/img.jpeg",
//     description:
//       "<p>Đặc điểm:<br />1.Chất liệu: Được làm bằng chất liệu nhựa cao cấp, không phải thạch cao, tinh tế và bền hơn, chỉ cần rửa bằng nước sau khi bị bẩn. An toàn và thân thiện với môi trường, không có mùi.<br />2.Chúng tôi giao hàng tất cả các màu đồng nhất mà không có phấn má hồng ~ Nhưng bạn có thể tự làm theo sở thích của mình!<br />3.Phạm vi sử dụng rộng rãi: Sản phẩm này có thể được sử dụng làm bình hoa, Thùng đựng bàn chải mỹ phẩm, Giá đỡ bút, Đồ trang trí nhà cửa.<br />4.Các dịp áp dụng: rất thích hợp cho phòng trẻ em, trang trí bàn học, quán trà sữa, kệ đựng thực phẩm nhanh trang trí nhỏ.</p><p>100% hàng mới, chất lượng cao<br />Màu sắc: Như hình ảnh<br />Số: EP0575<br />Chất liệu: Nhựa<br />Tổng kích thước: Chiều rộng * chiều cao: 7x11.5CM<br />Do đo lường thủ công, xin vui lòng cho phép một sai số 1-3 cm.</p><p>Gói bao gồm: Bình hoa David * 1pc</p><p>Lưu ý:<br />Vì các máy tính khác nhau hiển thị các màu khác nhau nên màu thực tế có thể hơi khác so với hình trên. Cảm ơn sự thông cảm của bạn.</p><p> </p>",
//   },

//   {
//     id: "prod_4",
//     name: "Giỏ đựng bút xoay 360 độ decor 3 tầng",
//     price: 40000,
//     img: "https://filebroker-cdn.lazada.co.th/kf/Sf92b66b954b041a8933db21eb40de4bbR.jpg",
//     description:
//       "<h1><strong>Ống Cắm Bút 3 Ngăn - Vừa Xinh Vừa Gọn Gàngggg</strong></h1><p>• Thiết kế thông minh gồm 3 ngăn đựng bút, giúp cho bạn phân chia được các đồ dùng học tập</p><p>• Tone màu pastel nhẹ nhàng, điểm tô những sticker hoạt hình cực cute bắt mắt</p><p>• Chất liệu nhựa PP cứng cáp, không bị xỉn màu khi dùng lâu</p><p>Sản phẩm được thiết kế đặc biệt với 3 ngăn rãnh có thể tùy ý đựng được đồ dùng học tập lẫn phụ kiện trang sức.</p><p>Với 2 gam màu Hàn Quốc nhã nhặn, xinh xắn. Sản phẩm này có lẽ sẽ rất đồng điệu với những tâm hồn học sinh, sinh viên, nhân viên văn phòng yêu cái đẹp.</p><p>• Chất liệu: Nhựa PP</p><p>• Kích thước: 12 x 11.4 x 7.4 cm</p><h3><strong>* Quyền lợi khi mua hàng tại Mặp Mặp:</strong></h3><p>• Đảm bảo chất lượng và mẫu mã sản phẩm giống với hình ảnh.</p><p>• Khách hàng được đổi trả hàng trong vòng 30 ngày.</p><p>• Chat shop luôn có nhân việc trực tư vấn.</p><p> </p>",
//   },
// ];

// Khai báo
var tittle_prod_name = document.getElementById("tittle_prod_name");
var name_prod = document.getElementById("name_prod");
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
price_prod.innerText = data[vitri].price.toLocaleString("vi-VN") + "₫";
// price_prod.innerText = "₫";
main_img_prod.src = data[vitri].img;
description.innerHTML = data[vitri].description;

// link to back
tittle_prod_name.innerText = name_prod.innerText;

export default data;
