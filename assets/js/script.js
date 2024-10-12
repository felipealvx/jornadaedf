const btn = document.getElementById("programming")
const content = document.querySelector(".content-programming")

function showContent(){
  if (content.style.display === "block"){
    content.style.display = "none"
  } else {
    content.style.display = "block"
  }
}
