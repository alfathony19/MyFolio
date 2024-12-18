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
document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.getElementById("typing-text"); // Get the h2 element by ID
  const textToType = typingElement.textContent; // Get the text inside h2
  typingElement.textContent = ""; // Clear the h2 content to prepare for the typing effect
  let i = 0; // Initialize index for typing
  const typingSpeed = 100; // Speed in milliseconds (adjust as needed)

  function typeText() {
    typingElement.textContent += textToType.charAt(i); // Append one character at a time
    i++;
    if (i < textToType.length) {
      setTimeout(typeText, typingSpeed); // Continue typing until full text is typed
    } else {
      setTimeout(function () {
        typingElement.textContent = ""; // Clear text after typing is done
        i = 0; // Reset the index
        typeText(); // Start typing again (loop)
      }, 1000); // Wait 1 second before looping
    }
  }

  typeText(); // Start the typing effect
});
