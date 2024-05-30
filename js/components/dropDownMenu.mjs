document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function (e) {
    if (
      !dropdownToggle.contains(e.target) &&
      !dropdownContent.contains(e.target)
    ) {
      dropdownContent.style.display = "none";
    }
  });
});
