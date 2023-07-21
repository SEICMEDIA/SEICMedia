$(document).ready(function() {
    // Fade in the title
    $('header h1').addClass('animated fadeIn');
  
    // Generate stars and animate them
    const totalStars = 100;
    for (let i = 0; i < totalStars; i++) {
      createStar();
    }
  });
  
  function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${randomPosition()}px`;
    star.style.left = `${randomPosition()}px`;
    star.style.animationDelay = `${randomDelay()}s`;
    star.style.animationDuration = `${randomDuration()}s`;
    star.style.animationIterationCount = 'infinite';
    document.querySelector('.stars').appendChild(star);
  }
  
  function randomPosition() {
    return Math.floor(Math.random() * window.innerWidth);
  }
  
  function randomDelay() {
    return Math.random() * 5;
  }
  
  function randomDuration() {
    return Math.random() * 3 + 1;
  }
  