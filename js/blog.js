// Contoh data blog yang ingin ditambahkan
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
  },
  {
    id: "blog-3",
    title:
      "Digital Marketing: Strategies, Benefits, and Trends for Modern Businesses",
    description:
      "digital marketing has become a crucial tool for businesses of all sizes to connect with their target audiences...",
    imgSrc: "img/blog-3.jpg",
    date: { day: "20", month: "Dec" },
    author: "Aldo Abdillah Fathony",
    authorImg: "img/Profile.png",
  },
];

// Fungsi untuk menambahkan blog ke dalam kontainer
function renderBlogs() {
  const blogContainer = document.getElementById("blogContainer");
  blogs.forEach((blog) => {
    // Membuat elemen untuk setiap blog
    const blogCol = document.createElement("div");
    blogCol.classList.add("col-lg-4", "mb-5");
    blogCol.id = blog.id; // Tambahkan ID unik

    // Konten gambar dan tanggal blog
    const blogImageWrapper = document.createElement("div");
    blogImageWrapper.classList.add("position-relative", "mb-4");

    const blogImage = document.createElement("img");
    blogImage.classList.add("img-fluid", "rounded", "w-100");
    blogImage.src = blog.imgSrc;
    blogImageWrapper.appendChild(blogImage);

    const blogDate = document.createElement("div");
    blogDate.classList.add("blog-date");
    blogDate.innerHTML = `
        <h4 class="font-weight-bold mb-n1">${blog.date.day}</h4>
        <small class="text-white text-uppercase">${blog.date.month}</small>
      `;
    blogImageWrapper.appendChild(blogDate);

    // Judul blog
    const blogTitle = document.createElement("h5");
    blogTitle.classList.add("font-weight-medium", "mb-2");
    blogTitle.textContent = blog.title;

    // Informasi Author
    const authorInfo = document.createElement("div");
    authorInfo.classList.add("d-flex", "align-items-center", "mb-3");

    const authorImg = document.createElement("img");
    authorImg.src = blog.authorImg;
    authorImg.classList.add("rounded-circle");
    authorImg.style.width = "40px";
    authorImg.style.height = "40px";
    authorImg.style.marginRight = "10px";

    const authorName = document.createElement("span");
    authorName.textContent = `By ${blog.author}`;
    authorName.classList.add("text-muted", "small");

    authorInfo.appendChild(authorImg);
    authorInfo.appendChild(authorName);

    // Deskripsi blog
    const blogDescription = document.createElement("p");
    blogDescription.textContent = blog.description;

    // Link untuk melihat detail blog
    const readMoreLink = document.createElement("a");
    readMoreLink.classList.add("btn", "btn-sm", "btn-outline-primary", "py-2");
    readMoreLink.href = `component/blog/${blog.id}.html`; // Sesuaikan link dengan ID
    readMoreLink.textContent = "Read More";

    // Gabungkan semua elemen ke dalam satu kolom
    blogCol.appendChild(blogImageWrapper);
    blogCol.appendChild(blogTitle);
    blogCol.appendChild(authorInfo); // Tambahkan author di bawah judul
    blogCol.appendChild(blogDescription);
    blogCol.appendChild(readMoreLink);

    // Tambahkan ke dalam kontainer
    blogContainer.appendChild(blogCol);
  });
}

// Panggil fungsi untuk render blog
renderBlogs();
