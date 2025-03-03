let main = document.querySelector(".main");
let modal = document.querySelector(".modal");
newProduct();
function newProduct() {
  main.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("product")) || [];

  data.forEach((item, idx) => {
    let block = document.createElement("div");
    block.classList.add("block");

    let img = document.createElement("img");
    img.src = item.img;
    img.classList.add("img");

    let box = document.createElement("div");
    box.classList.add("box");

    let block_text = document.createElement("div");
    block_text.classList.add("block-text");

    let h2 = document.createElement("h2");
    h2.innerText = item.name;

    let h4 = document.createElement("h4");
    h4.innerText = `$${item.price}`;

    let btns = document.createElement("div");
    btns.classList.add("block-btns");

    let btn_toOrder = document.createElement("button");
    let btn_delete = document.createElement("button");
    btn_delete.classList.add("btn-delete");
    btn_delete.style.backgroundColor = "red";

    let btn_d = document.createElement("button");
    btn_d.classList.add("btn-d");

    btn_toOrder.innerText = "to order";
    btn_delete.innerText = "delete";
    btn_d.innerText = "toD";

    main.append(block);
    block.append(img);
    block.append(box);
    btns.append(btn_toOrder, btn_delete, btn_d);
    box.append(block_text, btns);
    block_text.append(h2, h4);

    btn_toOrder.addEventListener("click", () => {
      let newData = JSON.parse(localStorage.getItem("order")) || [];
      let findOrderItem = data.find((el, index) => idx === index);
      if (newData.some((someItem) => someItem.id === item.id)) {
        alert("Этот продукт уже есть!!!");
      } else {
        newData.push(findOrderItem);
        localStorage.setItem("order", JSON.stringify(newData));
      }
    });

    btn_delete.addEventListener("click", () => {
      deleteProduct(item.id);
    });

    btn_d.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  });
}

function deleteProduct(id) {
  main.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("product")) || [];
  localStorage.setItem(
    "product",
    JSON.stringify(data.filter((item) => item.id !== id))
  );
  newProduct();
}

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
