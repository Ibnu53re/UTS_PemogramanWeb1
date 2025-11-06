const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartBody = document.getElementById("cart-body");
const totalPrice = document.getElementById("total-price");
const form = document.getElementById("checkoutForm");

let total = 0;

cart.forEach(item => {
  const row = document.createElement("tr");
  const subtotal = item.price * item.qty;
  total += subtotal;

  row.innerHTML = `
    <td>${item.title}</td>
    <td>Rp ${item.price.toLocaleString("id-ID")}</td>
    <td>${item.qty}</td>
    <td>Rp ${subtotal.toLocaleString("id-ID")}</td>
  `;
  cartBody.appendChild(row);
});

totalPrice.innerHTML = `Total Pembayaran: <strong>Rp ${total.toLocaleString("id-ID")}</strong>`;

form.addEventListener("submit", e => {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const alamat = document.getElementById("alamat").value;
  const pembayaran = document.getElementById("pembayaran").value;

  if (!nama || !alamat || !pembayaran) {
    alert("Harap isi semua data!");
    return;
  }

  alert(`Terima kasih ${nama}! Pesanan kamu akan dikirim ke alamat:\n${alamat}\nMetode pembayaran: ${pembayaran}`);
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});
