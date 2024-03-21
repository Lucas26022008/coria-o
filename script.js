document.getElementById('card').addEventListener('click', function() {
    // Adiciona corações
    for (let i = 0; i < 10; i++) {
      createHeart();
    }
  });
  
  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 90 + 'vw';
    heart.innerText = '❤️';
    document.body.appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  