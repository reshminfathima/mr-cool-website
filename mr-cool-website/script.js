// Shared navigation, quantity selection, simple cart count, and contact forms.
const navigationEntry = window.performance?.getEntriesByType?.("navigation")?.[0];
const isReload = navigationEntry
  ? navigationEntry.type === "reload"
  : window.performance?.navigation?.type === 1;
const currentFile = window.location.pathname.split("/").pop().toLowerCase();
const isHomePage = currentFile === "" || currentFile === "index.html";

if (isReload && !isHomePage) {
  window.location.replace(new URL("index.html", window.location.href).href);
}

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
  }

  document.querySelectorAll(".year").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  const quantityValue = document.querySelector("#quantity-value");
  const addButton = document.querySelector("#add-to-cart");
  const buyButton = document.querySelector("#buy-now");
  const status = document.querySelector("#cart-status");
  let quantity = 1;

  function setQuantity(nextQuantity) {
    quantity = Math.max(1, nextQuantity);
    if (quantityValue) quantityValue.textContent = String(quantity);
  }

  document.querySelectorAll("[data-qty]").forEach((button) => {
    button.addEventListener("click", () => {
      setQuantity(quantity + (button.dataset.qty === "plus" ? 1 : -1));
    });
  });

  addButton?.addEventListener("click", () => {
    const currentCartQuantity = Number.parseInt(localStorage.getItem("mrCoolCartQuantity") || "0", 10) || 0;
    const cartQuantity = currentCartQuantity + quantity;
    localStorage.setItem("mrCoolCartQuantity", String(cartQuantity));
    if (status) status.textContent = `Added to cart! ${cartQuantity} item${cartQuantity === 1 ? "" : "s"} selected.`;
    addButton.classList.add("is-added");
    window.setTimeout(() => addButton.classList.remove("is-added"), 700);
  });

  buyButton?.addEventListener("click", () => {
    sessionStorage.setItem("mrCoolCheckoutQuantity", String(quantity));
    localStorage.setItem("mrCoolSelectedQuantity", String(quantity));
  });

  document.querySelectorAll("[data-frontend-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      window.alert("This form is frontend-only and is not connected to a submission service yet. Please contact Mr Cool using the details on this page.");
    });
  });
});
