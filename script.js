// Filter servers by search input
function filterServers() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const serverCards = document.querySelectorAll('.server-card');
  
    serverCards.forEach(card => {
      const gameName = card.getAttribute('data-name').toLowerCase();
      if (gameName.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  