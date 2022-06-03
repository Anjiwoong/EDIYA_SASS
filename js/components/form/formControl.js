(() => {
  ("use strict");

  const getAll = (element) => document.querySelectorAll(element);

  const $input = getAll(".focused");

  $input.forEach((input) => {
    input.addEventListener("click", (e) => {
      const $wrapper = e.target.closest("div");
      $wrapper.classList.add("is-focused");
    });
  });

  window.addEventListener("click", (e) => {
    $input.forEach((input) => {
      if (e.target !== input) {
        const $wrapper = input.closest("div");
        $wrapper.classList.remove("is-focused");
      }
    });
  });

  //   const focusEvent = (e, role) => {
  //     const $wrapper = e.target.closest("div");
  //     role === "add"
  //       ? $wrapper.classList.add("is-focused")
  //       : $wrapper.classList.remove("is-focused");
  //   };

  //   $input.forEach((input) =>
  //     input.addEventListener("click", (e) => focusEvent(e, "add"))
  //   );

  //   window.addEventListener("click", (e) =>
  //     $input.forEach((input) => {
  //       if (e.target !== input) focusEvent(e, "remove");
  //     })
  //   );
})();
