const $info = document.querySelectorAll(".beverage__button");
const $button = document.querySelectorAll(".beverage__info__closebtn");

$info.forEach((item) => {
  item.addEventListener("click", (e) => {
    const $wrap = item.nextElementSibling;
    $wrap.classList.add("is-active");
  });
});

$button.forEach((item) => {
  item.addEventListener("click", () => {
    const $wrap = item.closest("div");
    $wrap.classList.remove("is-active");
  });
});
