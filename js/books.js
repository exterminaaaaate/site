document.getElementById("close-book").onclick = function () {
    document.getElementById("book").classList.remove("float-left");
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("book").classList.add("float-left");
  }, 500); // delay after load
});