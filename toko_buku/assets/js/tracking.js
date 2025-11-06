const hasil = document.getElementById("hasilTracking");
document.getElementById("btnCari").onclick = () => {
  const no = document.getElementById("noDo").value;
  if (no === "") return alert("Nomor DO belum diisi!");
  hasil.innerHTML = `
    <h3>Hasil Pencarian</h3>
    <p><b>Nomor DO:</b> ${no}</p>
    <p><b>Nama Pemesan:</b> Sungep</p>
    <p><b>Status:</b> <progress value="70" max="100"></progress> (Dalam Pengiriman)</p>
    <p><b>Ekspedisi:</b> JNE Reguler</p>
    <p><b>Tanggal Kirim:</b> 5 November 2025</p>
    <p><b>Total Pembayaran:</b> Rp 150.000</p>
  `;
};
