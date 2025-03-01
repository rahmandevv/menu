let order = document.querySelector(".order");
let general_price = document.querySelector(".price-h2");

orderProduct();

function orderProduct() {
  order.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("order")) || [];

  data.forEach((item) => {
    let order_block = document.createElement("div");
    order_block.classList.add("order-block");
    let img = document.createElement("img");
    img.classList.add("order_img");
    img.src = item.img;

    let order_text = document.createElement("div");
    order_text.classList.add("order-text");
    let h2 = document.createElement("h2");
    h2.innerText = item.name;

    let h4 = document.createElement("h4");
    h4.innerHTML = `$${item.price}`;

    let order_btns = document.createElement("div");
    order_btns.classList.add("order-btns");
    let btn_delete = document.createElement("button");
    btn_delete.innerText = "delete order";
    let plus = document.createElement("div");
    plus.classList.add("plus");
    let btn_plus = document.createElement("button");
    btn_plus.innerText = "+";
    let h3 = document.createElement("h3");
    h3.innerText = "1" + "x";

    let btn_minus = document.createElement("button");
    btn_minus.innerText = "-";

    order.append(order_block);
    order_block.append(img, order_text, order_btns);
    order_text.append(h2, h4);
    order_btns.append(btn_delete, plus);
    plus.append(btn_minus, h3, btn_plus);

    let i = 1;
    btn_plus.addEventListener("click", () => {
      h3.innerHTML = `${(i += 1)}x`;
    });

    btn_minus.addEventListener("click", () => {
      h3.innerHTML = `${(i -= 1)}x`;
    });

    btn_delete.addEventListener("click", () => {
      deleteProduct(item.id);
    });
  });
  localStorage.setItem("order", JSON.stringify(data));
}

function deleteProduct(id) {
  order.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("order")) || [];
  localStorage.setItem(
    "order",
    JSON.stringify(data.filter((el) => el.id !== id))
  );
  orderProduct();
}
