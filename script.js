
  sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
  });

  sliderContainer.addEventListener('mouseleave', startAutoSlide);

  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const items = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        items.forEach(item => {
          const type = item.getAttribute("data-type");
          if (filter === "all" || type === filter) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  this.reset();
});
