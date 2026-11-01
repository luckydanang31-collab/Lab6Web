// ============================================================
// Latihan 1 & 2: Mengubah Teks & Event Click (Waktu)
// ============================================================
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

// Mengubah teks awal (Latihan 1)
judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

// Event Click (Latihan 2)
tombolAksi.addEventListener("click", function () {
  pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

// Eksperimen Mandiri #4: Tombol Sembunyikan / Tampilkan Teks
const tombolSembunyi = document.getElementById("tombolSembunyi");
tombolSembunyi.addEventListener("click", function () {
  pesan.classList.toggle("hidden");
});

// ============================================================
// Latihan 3: Mengubah Kelas & Gaya CSS
// ============================================================
const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
  teksGaya.classList.toggle("highlight");
  teksGaya.classList.toggle("teks-besar");
});

// ============================================================
// Latihan 4 & 5 + Mini Project: Validasi Form & Interaktivitas
// ============================================================
const namaInput = document.getElementById("nama");
const jumlahKarakter = document.getElementById("jumlahKarakter");
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");
const selectSesi = document.getElementById("sesi");
const infoSesi = document.getElementById("infoSesi");
const btnReset = document.getElementById("btnReset");

// Latihan 4: Penghitung Karakter Input
namaInput.addEventListener("input", function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// Eksperimen Mandiri #3: Event Change Dropdown Sesi
selectSesi.addEventListener("change", function () {
  if (selectSesi.value !== "") {
    infoSesi.textContent = "Sesi yang dipilih: " + selectSesi.value;
  } else {
    infoSesi.textContent = "";
  }
});

// Latihan 5 & Mini Project: Validasi Form Submit
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nama = namaInput.value.trim();
  const email = document.getElementById("email").value.trim();
  const usiaInput = document.getElementById("usia").value;
  const usia = Number(usiaInput);
  const sesi = selectSesi.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Eksperimen Mandiri #2: Validasi Nama Minimal 3 Karakter
  if (nama === "") {
    pesanForm.style.color = "red";
    pesanForm.textContent = "Nama wajib diisi.";
  } else if (nama.length < 3) {
    pesanForm.style.color = "red";
    pesanForm.textContent = "Nama minimal harus 3 karakter.";
  } else if (!polaEmail.test(email)) {
    pesanForm.style.color = "red";
    pesanForm.textContent = "Masukkan email yang valid.";
  } else if (usiaInput === "" || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    pesanForm.style.color = "red";
    pesanForm.textContent = "Usia harus berupa bilangan bulat 17-100.";
  } else if (sesi === "") {
    pesanForm.style.color = "red";
    pesanForm.textContent = "Silakan pilih sesi workshop.";
  } else {
    pesanForm.style.color = "green";
    pesanForm.textContent = "Validasi berhasil! Pendaftaran Workshop " + sesi + " siap diproses.";
  }
});

// Mini Project: Tombol Reset Form
btnReset.addEventListener("click", function () {
  form.reset();
  jumlahKarakter.textContent = "0";
  infoSesi.textContent = "";
  pesanForm.textContent = "";
});

// ============================================================
// Latihan 6 & Eksperimen Mandiri #1: To-Do List dengan Tombol Hapus
// ============================================================
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
  const teks = inputTugas.value.trim();

  if (teks === "") {
    pesanTugas.style.color = "red";
    pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("span");
  const btnWrapper = document.createElement("div");
  const selesai = document.createElement("button");
  const hapus = document.createElement("button"); // Eksperimen Mandiri #1

  label.textContent = teks + " ";

  selesai.type = "button";
  selesai.textContent = "Tandai selesai";
  selesai.addEventListener("click", function () {
    item.classList.toggle("selesai");
    selesai.textContent = item.classList.contains("selesai")
      ? "Batalkan selesai"
      : "Tandai selesai";
  });

  hapus.type = "button";
  hapus.textContent = "Hapus";
  hapus.className = "btn-hapus";
  hapus.addEventListener("click", function () {
    daftarTugas.removeChild(item);
    pesanTugas.style.color = "orange";
    pesanTugas.textContent = "Tugas berhasil dihapus.";
  });

  btnWrapper.appendChild(selesai);
  btnWrapper.appendChild(hapus);

  item.append(label, btnWrapper);
  daftarTugas.appendChild(item);

  inputTugas.value = "";
  pesanTugas.style.color = "green";
  pesanTugas.textContent = "Tugas ditambahkan.";
  inputTugas.focus();
});