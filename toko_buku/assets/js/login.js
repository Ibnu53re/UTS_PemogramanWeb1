document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Ambil data user dari localStorage
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  if (storedUser && email === storedUser.email && password === storedUser.password) {
    alert("Login berhasil! Selamat datang di Toko Buku Online");
    window.location.href = "index.html";
  } else {
    alert("Email atau password salah!");
  }
});
