let pesanan = [];
const harga = 2000;

function tambahPesanan(rasa) {
    pesanan.push(rasa);

    tampilkanPesanan();

    alert("🍧 " + rasa + " berhasil ditambahkan!");
}

function tampilkanPesanan() {
    const daftar = document.getElementById("daftarPesanan");
    const totalHarga = document.getElementById("totalHarga");

    if (pesanan.length === 0) {
        daftar.innerHTML = "<p>Belum ada pesanan.</p>";
        totalHarga.innerText = "Rp0";
        return;
    }

    daftar.innerHTML = "";

    pesanan.forEach((rasa, index) => {
        daftar.innerHTML += `
            <div class="item-pesanan">
                <span>${index + 1}. ${rasa}</span>
                <span>Rp2.000</span>
            </div>
        `;
    });

    const total = pesanan.length * harga;

    totalHarga.innerText =
        "Rp" + total.toLocaleString("id-ID");
}

function hapusPesanan() {
    pesanan = [];
    tampilkanPesanan();
}
