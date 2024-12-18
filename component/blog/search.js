// Data blog
const blogs = [
  {
    id: "blog-1",
    title:
      "Administration Development : The Importance of Efficiency and Innovation in Organization",
    description:
      "Administration is one of the crucial aspects in the functioning of an organization, whether in the public or private sector...",
    imgSrc: "img/blog-1.jpg",
    date: { day: "18", month: "Dec" },
    author: "Aldo Abdillah Fathony",
    authorImg: "img/Profile.png",
    url: "blog-1.html",
  },
  {
    id: "blog-2",
    title:
      "UI/UX Design and Web Development : Enhancing User Experience and Functionality",
    description:
      "UI/UX design and web development have become essential components for creating a successful online presence...",
    imgSrc: "img/blog-2.jpg",
    date: { day: "19", month: "Dec" },
    author: "Aldo Abdillah Fathony",
    authorImg: "img/Profile.png",
    url: "blog-2.html",
  },
  {
    id: "blog-3",
    title:
      "Digital Marketing: Strategies, Benefits, and Trends for Modern Businesses",
    description:
      "Digital marketing has become a crucial tool for businesses of all sizes to connect with their target audiences...",
    imgSrc: "img/blog-3.jpg",
    date: { day: "20", month: "Dec" },
    author: "Aldo Abdillah Fathony",
    authorImg: "img/Profile.png",
    url: "blog-3.html",
  },
];

// Fungsi untuk mencari blog
function searchBlogs() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultsContainer = document.getElementById("searchResults");

  // Jika input kosong, sembunyikan hasil pencarian
  if (input === "") {
    resultsContainer.style.display = "none";
    return;
  }

  // Cari blog berdasarkan ID atau judul
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.id.toLowerCase().includes(input) ||
      blog.title.toLowerCase().includes(input)
  );

  // Jika ada hasil, tampilkan di bawah input
  if (filteredBlogs.length > 0) {
    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = filteredBlogs
      .map(
        (blog) =>
          `<li onclick="redirectToBlog('${blog.url}')">${blog.title}</li>`
      )
      .join("");
  } else {
    resultsContainer.style.display = "none"; // Tidak ada hasil
  }
}

// Fungsi untuk redirect ke halaman blog
function redirectToBlog(url) {
  window.location.href = url;
}

// Menambahkan event listener untuk input ketika tombol Enter ditekan
document
  .getElementById("searchInput")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const foundBlog = blogs.find(
        (blog) =>
          blog.id.toLowerCase().includes(input) ||
          blog.title.toLowerCase().includes(input)
      );
      if (foundBlog) {
        window.location.href = foundBlog.url;
      }
    }
  });
// Fungsi untuk merender blog
function renderBlogs() {
  const blogContainer = document.getElementById("blogContainer");

  // Dapatkan URL halaman saat ini
  const currentUrl = window.location.pathname.split("/").pop();

  blogContainer.innerHTML = blogs
    .filter((blog) => blog.url !== currentUrl) // Filter untuk menghapus blog saat ini
    .map(
      (blog) => `
      <div class="blog-card d-flex align-items-center mb-3">
        <img src="${blog.imgSrc}" alt="${blog.title}" class="blog-image rounded" />
        <div class="blog-content ms-3">
          <h5 class="blog-title mb-1">${blog.title}</h5>
          <p class="blog-date text-muted mb-2">${blog.date.day} ${blog.date.month} 2024</p>
          <a href="${blog.url}" class="blog-readmore text-primary">Read More</a>
        </div>
      </div>
    `
    )
    .join("");
}

// Panggil fungsi untuk merender blog saat halaman dimuat
renderBlogs();
