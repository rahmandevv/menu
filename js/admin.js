let input_img = document.querySelector(".input_img");
let input_name = document.querySelector(".input_name");
let input_price = document.querySelector(".input_price");
let create = document.querySelector(".create");

input_price.addEventListener("keyup", ({ key }) => {
  if (key === "Enter") {
    if (
      !input_img.value.trim() ||
      !input_name.value.trim() ||
      !input_price.value.trim()
    ) {
      alert("заполните поля!!!");
      return;
    }

    // if (!input_img.value.includes("https")) {
    //   alert("напишите imgURL");
    //   return;
    // }

    let obj = {
      name: input_name.value,
      img: input_img.value,
      price: input_price.value,
      id: Date.now(),
    };

    console.log(typeof input_name);
    let data = JSON.parse(localStorage.getItem("product")) || [];
    data.push(obj);
    localStorage.setItem("product", JSON.stringify(data));
    input_name.value = "";
    input_img.value = "";
    input_price.value = "";
  }
});

create.addEventListener("click", () => {
  if (
    !input_img.value.trim() ||
    !input_name.value.trim() ||
    !input_price.value.trim()
  ) {
    alert("заполните поля!!!");
    return;
  }

  if (!input_img.value.includes("https")) {
    alert("напишите imgURL");
    return;
  }

  let obj = {
    name: input_name.value,
    img: input_img.value,
    price: input_price.value,
    id: Date.now(),
  };

  console.log(typeof input_name);
  let data = JSON.parse(localStorage.getItem("product")) || [];
  data.push(obj);
  localStorage.setItem("product", JSON.stringify(data));
  input_name.value = "";
  input_img.value = "";
  input_price.value = "";
});
