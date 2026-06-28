import './style.css'

// Add subtle cursor interaction to the glass card
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.glass-card');
  const heroVisual = document.querySelector('.hero-visual');

  if (card && heroVisual) {
    heroVisual.addEventListener('mousemove', (e) => {
      // Add a class to body so CSS knows JS is handling the hover
      document.body.classList.add('js-hover');
      
      const rect = heroVisual.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation (max 15deg)
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    heroVisual.addEventListener('mouseleave', () => {
      document.body.classList.remove('js-hover');
      card.style.transform = `rotateY(-15deg) rotateX(5deg)`; // Reset to original angled position
    });
  }
  
  // Interactive button effect
  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      exploreBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        exploreBtn.style.transform = '';
      }, 150);
    });
  }
});
