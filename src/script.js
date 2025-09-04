document.addEventListener("DOMContentLoaded", function () {
  const itemsToShow = 4; // how many cards to show initially
  const cards = document.querySelectorAll("#cardGrid .card-slider");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  let allVisible = false; // track toggle state
  let visibleCount = itemsToShow;

  function updateVisibleCards() {
    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = i < visibleCount ? "block" : "none";
    }

    // Change button text based on state
    loadMoreBtn.textContent = allVisible ? "View Less" : "Load More";
  }

  loadMoreBtn.addEventListener("click", () => {
    if (!allVisible) {
      visibleCount = cards.length; // show all
      allVisible = true;
    } else {
      visibleCount = itemsToShow; // show only some
      allVisible = false;
    }

    updateVisibleCards();
  });

  // Initial display
  updateVisibleCards();
});
