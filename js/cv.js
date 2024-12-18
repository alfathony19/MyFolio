$(document).ready(function () {
  // Inisialisasi Owl Carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // Lightbox otomatis terintegrasi dari link rel
});

// Download CV as PDF
document.getElementById("download-cv").addEventListener("click", function () {
  const { jsPDF } = window.jspdf; // Mendapatkan akses ke jsPDF
  const doc = new jsPDF();

  // Pilih elemen yang ingin dikonversi ke PDF (cvats atau coverltr)
  const elementToConvert =
    document.getElementById("cvats") || document.getElementById("coverltr");

  if (elementToConvert) {
    // Mengonversi elemen HTML menjadi gambar menggunakan html2canvas
    html2canvas(elementToConvert, {
      scale: 2, // meningkatkan kualitas gambar
      useCORS: true, // jika ada gambar eksternal, coba gunakan CORS
    })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Menambahkan gambar ke PDF
        doc.addImage(imgData, "PNG", 10, 10, 180, 0); // Atur lebar dan tinggi gambar sesuai kebutuhan
        doc.save("Aldo_Abdillah_Fathony_CV.pdf"); // Nama file PDF yang diunduh
      })
      .catch(function (error) {
        console.error("Error during HTML to canvas conversion:", error);
      });
  } else {
    alert("Elemen dengan ID 'cvats' atau 'coverltr' tidak ditemukan!");
  }
});

// Fungsi untuk mencetak CV
document.getElementById("print-cv").addEventListener("click", function () {
  window.print(); // Fungsi print untuk seluruh halaman
});

document.querySelectorAll(".progress-bar").forEach((bar) => {
  const value = bar.getAttribute("aria-valuenow");
  bar.style.width = `${value}%`;
});
