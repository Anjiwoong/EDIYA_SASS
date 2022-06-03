(() => {
  const $btn = document.querySelector(".up__btn");
  console.log($btn);

  document.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      $btn.classList.add("go__up");
    } else {
      $btn.classList.remove("go__up");
    }
  });
})();
