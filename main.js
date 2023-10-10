

const notiBell = document.querySelector("#noti_bell");
const notiBox = document.querySelector(".notificaton_box");
const overflow = document.querySelector(".overflow");

notiBell.addEventListener("click", () => {
    notiBox.classList.toggle("active");
    overflow.style.display = "block";
})

overflow.addEventListener("click", () => {
  if (notiBox.classList.contains("active")) {
    notiBox.classList.remove("active");
  }
  if (!notiBox.classList.contains("active")) {
    overflow.style.display = "none";
  }
})

