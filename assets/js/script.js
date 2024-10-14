const btn = document.getElementById("programming")
const content = document.querySelector(".content-programming")

function showContent(){
  if (content.style.display === "block"){
    content.style.display = "none"
  } else {
    content.style.display = "block"
  }
}

const btnDark = document.getElementById("dark-mode")

function darkMode (){
  document.body.classList.toggle("dark-mode")
  document.querySelector("footer").classList.toggle("dark-mode")
}

btnDark.addEventListener("click", darkMode)