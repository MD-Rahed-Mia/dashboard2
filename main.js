
const addProduct = document.querySelector(".add_p_btn button");
const productContainer = document.querySelector(".new_p_container");
const productCards = document.querySelector(".product_cards");

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

addProduct.addEventListener("click", addProductDiv);