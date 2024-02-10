document.querySelectorAll('.project-card').forEach(card => {
    const button = card.querySelector('.view-details-button');
    const details = card.querySelector('.details');
  
    button.addEventListener('click', () => {
      details.classList.toggle('hidden');
    });
  });
  