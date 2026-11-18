console.log("Welcome to my portfolio website!");
// Display the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Show or hide the mobile navigation menu.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Display a friendly message when the contact button is clicked.
document.getElementById("contactButton").addEventListener("click", () => {
  document.getElementById("message").textContent =
    "Thanks for visiting my portfolio!";
});
