document.addEventListener("DOMContentLoaded", function () {
  var loadMoreButton = document.getElementById("load-more");
  var collections2 = document.querySelector(".collections2");

  loadMoreButton.addEventListener("click", function () {
    // collections2의 display 속성을 변경
    collections2.style.display = "flex";
  });
});
