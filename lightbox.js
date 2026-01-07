// Script pour la lightbox des photos
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

// Sélectionner toutes les images sauf celle de la lightbox
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img:not(#lightbox-img)');
  images.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function() {
      openLightbox(this.src);
    });
  });
});

// Script supplémentaire, positionne aléatoirement les bulles et varie l'animation
(function randomizeBubbles(){
  try{
    const bubbles = document.querySelectorAll('.bubble');
    let time = 0;
    bubbles.forEach((b,i)=>{
      // Position random
      b.startX = Math.random() * window.innerWidth;
      b.startY = Math.random() * window.innerHeight;
      b.baseY = b.startY;
      b.dx = (Math.random() - 0.5) * 1; // direction x
      b.dy = (Math.random() - 0.5) * 1; // direction y
      b.speed = Math.random() * 0.02 + 0.01; // floating speed
      b.style.opacity = (0.55 + Math.random()*0.45).toFixed(2);
    });

    // Animate bubbles
    function animateBubbles() {
      time += 0.02;
      bubbles.forEach(b => {
        b.startX += b.dx;
        b.startY += b.dy;
        // Bounce off edges
        if (b.startX <= 0 || b.startX >= window.innerWidth - 100) b.dx *= -1;
        if (b.startY <= 0 || b.startY >= window.innerHeight - 100) b.dy *= -1;
        // Floating effect
        const floatY = Math.sin(time + b.startX * 0.01) * 20;
        b.style.left = b.startX + 'px';
        b.style.top = (b.startY + floatY) + 'px';
      });
      requestAnimationFrame(animateBubbles);
    }
    animateBubbles();
  }catch(e){console.warn('Bubbles script error', e)}
})();