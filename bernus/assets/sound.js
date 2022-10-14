document.addEventListener("click", function () {
  document.querySelector("a-text").setAttribute("visible", false);
});

function playing(index) {
  console.log("now playing", index);
  document.querySelector("#player").setAttribute("visible", true);
}