document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".section-link");
  const sections = document.querySelectorAll(".content-section");
  const form = document.getElementById("rentalForm");
  const summaryContent = document.getElementById("summary-content");

  // Section navigation
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = link.getAttribute("data-section");

      sections.forEach(section => {
        section.classList.remove("active");
      });

      document.getElementById(target).classList.add("active");
    });
  });

  // Dropdown menu toggle
  const dropdown = document.getElementById("car-dropdown");
  const dropdownMenu = document.getElementById("car-dropdown-menu");

  dropdown.addEventListener("click", e => {
    e.preventDefault();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", e => {
    if (!dropdown.contains(e.target)) {
      dropdownMenu.classList.remove("show");
    }
  });

  // Form handling
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const car = document.getElementById("car").value;
    const rentDate = document.getElementById("rent-date").value;
    const returnDate = document.getElementById("return-date").value;

    const entry = document.createElement("div");
    entry.classList.add("rental-entry");
    entry.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Car:</strong> ${car}</p>
      <p><strong>Rent Date:</strong> ${rentDate}</p>
      <p><strong>Return Date:</strong> ${returnDate}</p>
    `;

    if (summaryContent.querySelector("p")) {
      summaryContent.innerHTML = "";
    }

    summaryContent.appendChild(entry);

    // Optional: reset the form
    form.reset();
  });
});
