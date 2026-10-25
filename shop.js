(() => {
  const quantityOutput = document.querySelector("#quantity");
  const status = document.querySelector("#cart-status");
  let quantity = 1;
  let toastTimer;

  function readCartQuantity() {
    return Number.parseInt(localStorage.getItem("mrCoolCartQuantity") || "0", 10) || 0;
  }

  function showStatus(message) {
    status.textContent = message;
    status.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => status.classList.remove("is-visible"), 2200);
  }

  document.querySelector(".decrease").addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    quantityOutput.textContent = String(quantity);
  });

  document.querySelector(".increase").addEventListener("click", () => {
    quantity += 1;
    quantityOutput.textContent = String(quantity);
  });

  document.querySelector(".add-button").addEventListener("click", () => {
    const previous = readCartQuantity();
    localStorage.setItem("mrCoolCartQuantity", String(previous + quantity));
    showStatus("Added to cart!");
  });
})();
