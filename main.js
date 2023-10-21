
const addProduct = document.querySelector(".add_p_btn button");
const productContainer = document.querySelector(".new_p_container");
const productCards = document.querySelector(".product_cards");
let themeBtn = document.querySelector(".top_bar__theme_icon");

// select user menu cancel button 

let usermenuCancel = document.querySelector(".user_menu__cancel");
let userMenu = document.querySelector(".user");

function addProductDiv() {
  if (productContainer.classList.contains("active")) {
    productContainer.classList.remove("active");
    productCards.style.display = "";
    addProduct.innerHTML = `<i class="fas fa-plus"></i> add new product`;
  }
  else {
    productContainer.classList.add("active");
    productCards.style.display = "none";
    addProduct.innerHTML = `<i class="fas fa-ban"></i> cancel`;
  }
  
}

// addProduct.addEventListener("click", addProductDiv);

usermenuCancel.addEventListener("click", () => {
  usermenuCancel.parentElement.style.display = "none";
})

userMenu.addEventListener("click", function () {
  usermenuCancel.parentElement.style.display = "block";
})