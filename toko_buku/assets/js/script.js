const books = [
  { id: 1, title: "Java-Java", price: 105000, image: "assets/img/buku1.jpg" },
  { id: 2, title: "Pemrograman Web untuk Pemula", price: 95000, image: "assets/img/buku2.jpg" },
  { id: 3, title: "Cara jadi Pewaris dan Cara Buka Kelas", price: 80000, image: "assets/img/buku3.jpg" },
  { id: 4, title: "Buku Induk Bahasa Belanda", price: 75000, image: "assets/img/buku4.jpg" },
  { id: 5, title: "Cara Minum Air Putih", price: 90000, image: "assets/img/buku5.jpg" },
];

const productList = document.getElementById("product-list");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Tampilkan daftar buku
books.forEach(book => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${book.image}" alt="${book.title}">
    <h3>${book.title}</h3>
    <p>Rp ${book.price.toLocaleString("id-ID")}</p>
    <button onclick="addToCart(${book.id})">Tambah ke Keranjang</button>
  `;
  productList.appendChild(card);
});

// Tambah ke keranjang
function addToCart(id) {
  const selected = books.find(b => b.id === id);
  const existing = cart.find(item => item.id === id);
  
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...selected, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${selected.title} ditambahkan ke keranjang!`);
}

// === Sapaan Otomatis Berdasarkan Waktu ===
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 11) greeting.textContent = "Selamat Pagi!";
else if (hour < 15) greeting.textContent = "Selamat Siang!";
else if (hour < 18) greeting.textContent = "Selamat Sore!";
else greeting.textContent = "Selamat Malam!";