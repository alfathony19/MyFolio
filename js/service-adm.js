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
document.addEventListener("DOMContentLoaded", () => {
  const typingElement = document.querySelector(".typing");
  const textContent = typingElement.textContent;
  const words = textContent.split(", "); // Split the text into an array of words
  let wordIndex = 0;

  function typeWord() {
    typingElement.textContent = ""; // Clear the element for each new word
    const word = words[wordIndex];
    let charIndex = 0;

    function typeCharacter() {
      if (charIndex < word.length) {
        typingElement.textContent += word.charAt(charIndex); // Add one character at a time
        charIndex++;
        setTimeout(typeCharacter, 100); // Repeat until all characters are typed
      } else {
        setTimeout(() => {
          eraseWord(); // Start erasing after typing is done
        }, 1000); // Pause before starting to erase
      }
    }

    typeCharacter();
  }

  function eraseWord() {
    const word = words[wordIndex];
    let charIndex = word.length;

    function eraseCharacter() {
      if (charIndex > 0) {
        typingElement.textContent = word.slice(0, charIndex - 1); // Remove one character at a time
        charIndex--;
        setTimeout(eraseCharacter, 100); // Repeat until all characters are erased
      } else {
        wordIndex = (wordIndex + 1) % words.length; // Move to the next word, loop if end is reached
        setTimeout(typeWord, 500); // Pause before typing the next word
      }
    }

    eraseCharacter();
  }

  typeWord(); // Start the typing animation
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".img-fluid");
  const prevButton = document.querySelector(".btn-prev");
  const nextButton = document.querySelector(".btn-next");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  prevButton.addEventListener("click", showPrevImage);
  nextButton.addEventListener("click", showNextImage);

  // Auto-scroll functionality
  setInterval(showNextImage, 3000);
});
