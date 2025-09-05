// Hotel Management Dashboard Script

// --- Sidebar Navigation (Section Switching) ---
const navLinks = document.querySelectorAll(".sidebar nav a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // Remove active state from all links
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Hide all sections
    sections.forEach(sec => sec.style.display = "none");

    // Show the selected section
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.style.display = "block";
    }
  });
});

// --- Default: Show Dashboard Section ---
sections.forEach(sec => sec.style.display = "none");
const defaultSection = document.querySelector("#dashboard");
if (defaultSection) defaultSection.style.display = "grid";

// --- Logout Button ---
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    alert("You have been logged out successfully!");
    // Redirect to login page (if you have one)
    window.location.href = "login.html"; 
  });
}
