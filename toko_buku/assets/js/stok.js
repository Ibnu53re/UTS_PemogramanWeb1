const tabel = document.getElementById("tabelStok");

function renderTabel() {
  dataKatalogBuku.forEach(b => {
    const row = tabel.insertRow();
    row.innerHTML = `<td>${b.judul}</td><td>${b.penulis}</td><td>Rp${b.harga}</td><td>${b.stok}</td>`;
  });
}
renderTabel();

document.getElementById("btnTambah").onclick = () => {
  const judul = prompt("Masukkan judul buku:");
  const penulis = prompt("Masukkan nama penulis:");
  const harga = prompt("Masukkan harga:");
  const stok = prompt("Masukkan stok:");
  if (judul && penulis && harga && stok) {
    const row = tabel.insertRow();
    row.innerHTML = `<td>${judul}</td><td>${penulis}</td><td>Rp${harga}</td><td>${stok}</td>`;
  }
};
