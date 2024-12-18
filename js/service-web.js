// Get the toggler button and the navbar-collapse element
const navbarToggler = document.querySelector("#navbarToggler");
const navbarCollapse = document.querySelector("#navbarCollapse");

// Check if both elements exist before adding event listeners
if (navbarToggler && navbarCollapse) {
  // Add an event listener for the click event on the toggler button
  navbarToggler.addEventListener("click", function (event) {
    // Log to console to confirm the button was clicked
    console.log("Navbar Toggler clicked");

    // Toggle the 'show' class on the navbar-collapse to control visibility
    navbarCollapse.classList.toggle("show");

    // Log to console to check if the 'show' class is being toggled
    console.log(
      'Navbar collapse class "show" toggled:',
      navbarCollapse.classList.contains("show")
    );

    // Prevent the event from propagating to the document click event
    event.stopPropagation();
  });

  // Add an event listener for clicks on the document
  document.addEventListener("click", function (event) {
    // Check if the click is outside the navbar-collapse and the toggler
    if (
      !navbarCollapse.contains(event.target) && // Click outside the navbar-collapse
      !navbarToggler.contains(event.target) // Click outside the toggler
    ) {
      // Close the navbar-collapse by removing the 'show' class
      navbarCollapse.classList.remove("show");
      console.log('Navbar collapse class "show" removed');
    }
  });
} else {
  // Log an error if elements are not found
  console.error("Navbar toggler or navbar collapse element not found!");
}

let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(autoSlide, 3000); // Change image every 3 seconds
function typeEffectBySentence(elementId, typingSpeed, delayBetweenSentences) {
  const element = document.getElementById(elementId);
  const sentences = element.textContent.split(", "); // Pisahkan kalimat berdasarkan koma
  element.textContent = ""; // Kosongkan teks awal

  let sentenceIndex = 0; // Indeks kalimat saat ini
  let charIndex = 0; // Indeks karakter dalam kalimat
  let isCursorVisible = true; // Status cursor untuk efek blinking

  // Tambahkan elemen cursor
  const cursor = document.createElement("span");
  cursor.id = "typing-cursor";
  cursor.textContent = "|"; // Cursor yang berkedip
  element.appendChild(cursor); // Menambahkan cursor ke elemen

  // Efek blinking cursor
  setInterval(() => {
    cursor.style.visibility = isCursorVisible ? "visible" : "hidden";
    isCursorVisible = !isCursorVisible;
  }, 500); // Blink setiap 500ms

  function type() {
    if (charIndex < sentences[sentenceIndex].length) {
      element.textContent = sentences[sentenceIndex].slice(0, charIndex + 1); // Tambahkan karakter
      element.appendChild(cursor); // Pastikan cursor tetap di akhir
      charIndex++;
      setTimeout(type, typingSpeed); // Lanjutkan ke karakter berikutnya
    } else {
      // Jika kalimat selesai, jeda sebelum lanjut ke kalimat berikutnya
      setTimeout(() => {
        charIndex = 0; // Reset indeks karakter
        sentenceIndex = (sentenceIndex + 1) % sentences.length; // Ulangi dari awal jika mencapai akhir
        element.textContent = ""; // Hapus teks untuk mengetik kalimat berikutnya
        element.appendChild(cursor); // Pastikan cursor tetap ada setelah kalimat baru
        type(); // Ketik kalimat berikutnya
      }, delayBetweenSentences);
    }
  }

  type(); // Mulai efek typing
}

// Jalankan efek setelah halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  typeEffectBySentence("animated-text", 100, 1000); // Kecepatan mengetik: 100ms/karakter, jeda antar kalimat: 1000ms
});
