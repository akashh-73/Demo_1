window.dataLayer = window.dataLayer || [];

// 🛒 Add to Cart
let addBtn = document.getElementById("addToCart");
if (addBtn) {
  addBtn.addEventListener("click", function () {
    dataLayer.push({
      event: "add_to_cart",
      product: "Awesome Product",
      value: 999
    });

    window.location.href = "checkout.html";
  });
}

// 💳 Checkout
let checkoutBtn = document.getElementById("checkoutBtn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function () {
    dataLayer.push({
      event: "begin_checkout"
    });

    window.location.href = "thankyou.html";
  });
}

// 🎉 Purchase
if (window.location.pathname.includes("thankyou.html")) {
  dataLayer.push({
    event: "purchase",
    value: 999,
    currency: "INR"
  });
}

// 🔗 Anchor Navigation Tracking
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function () {
    dataLayer.push({
      event: "nav_click",
      link_text: this.textContent
    });
  });
});

// 🌍 External Link Tracking
let external = document.getElementById("externalLink");
if (external) {
  external.addEventListener("click", function () {
    dataLayer.push({
      event: "outbound_click",
      url: this.href
    });
  });
}