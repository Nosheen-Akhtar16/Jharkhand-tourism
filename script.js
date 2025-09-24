// Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
      if (body.style.background === 'white' || body.classList.contains('light')) {
        body.style.background = '#0b0b0f';
        body.style.color = '#ddd';
        body.classList.remove('light');
      } else {
        body.style.background = 'white';
        body.style.color = '#111';
        body.classList.add('light');
      }
    });

    document.getElementById("openPopup").onclick = function () {
      document.getElementById("popup").style.display = "block";
    };

    document.getElementById("closePopup").onclick = function () {
      document.getElementById("popup").style.display = "none";
    };

    // Optional: close when clicking outside
    window.onclick = function(event) {
      const popup = document.getElementById("popup");
      if (event.target !== popup && !popup.contains(event.target) && event.target.id !== "openPopup") {
        popup.style.display = "none";
      }
    };
  
    // Trip Plan AI simulation
    const planBtn = document.getElementById('plan-trip-btn');
    const tripInput = document.getElementById('trip-input');
    const tripResult = document.getElementById('trip-result');

    planBtn.addEventListener('click', () => {
      const inputText = tripInput.value.trim();

      if (!inputText) {
        tripResult.style.color = '#ff6b6b';
        tripResult.textContent = 'Please enter some preferences to plan your trip!';
        return;
      }

      tripResult.style.color = '#a5ffa1';
      tripResult.textContent = 'Planning your customized trip...';

      // Simulate AI generation with timeout
      setTimeout(() => {
        tripResult.innerHTML = `
          <strong>Your Personalized Itinerary:</strong>
          <ul>
            <li>Day 1: Visit ancient temples and cultural sites related to your interests.</li>
            <li>Day 2: Explore local markets and try traditional cuisine.</li>
            <li>Day 3: Spend time relaxing at popular lakes and natural parks.</li>
            <li>Day 4: Enjoy scenic waterfalls and wildlife sanctuaries.</li>
            <li>Day 5: Attend any local festivals or events happening during your visit.</li>
          </ul>
          <p>Have a wonderful trip!</p>
        `;
      }, 1800);
    });

    // Simple Search Filtering for Hidden Gems
    const searchInput = document.getElementById('search-gems');
    const hiddenGemsList = document.getElementById('hidden-gems-list');
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();

      const cards = hiddenGemsList.querySelectorAll('.card');
      cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();
        if (title.includes(query) || desc.includes(query)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });