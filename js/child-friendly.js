// Child-friendly interactive elements

// Add floating bubbles to the home section
function createBubbles() {
  if (document.querySelector('.home')) {
    const homeSection = document.querySelector('.home');
    const bubbleCount = 15;
    
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      // Random size between 20px and 60px
      const size = Math.random() * 40 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 100}%`;
      
      // Random animation duration
      const animDuration = Math.random() * 15 + 10;
      bubble.style.animationDuration = `${animDuration}s`;
      
      // Random animation delay
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      
      // Add to home section
      homeSection.appendChild(bubble);
    }
  }
}

// Add confetti effect for correct answers in quiz
function setupQuizEffects() {
  if (document.querySelector('#quiz')) {
    const optionButtons = document.querySelectorAll('.option-btn');
    
    optionButtons.forEach(button => {
      button.addEventListener('click', function() {
        // For demo purposes, let's add confetti to any click
        // In real app, this would only trigger on correct answers
        if (Math.random() > 0.5) {
          createConfetti(this);
        }
      });
    });
  }
}

function createConfetti(element) {
  const confettiCount = 30;
  const container = document.createElement('div');
  container.classList.add('confetti-container');
  
  document.body.appendChild(container);
  
  // Get the position of the element
  const rect = element.getBoundingClientRect();
  container.style.left = `${rect.left + rect.width/2}px`;
  container.style.top = `${rect.top + rect.height/2}px`;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    // Random color
    const colors = ['#FF5757', '#00C2FF', '#7ED957', '#FFBD59'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.backgroundColor = randomColor;
    
    // Random position and rotation
    const angle = Math.random() * 360;
    const distance = Math.random() * 80 + 50;
    const x = Math.cos(angle * Math.PI / 180) * distance;
    const y = Math.sin(angle * Math.PI / 180) * distance;
    
    confetti.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 360}deg)`;
    
    container.appendChild(confetti);
  }
  
  // Remove the confetti after animation
  setTimeout(() => {
    container.remove();
  }, 2000);
}

// Add balloon effect to buttons
function addBalloonEffect() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
}

// Initialize all effects
document.addEventListener('DOMContentLoaded', function() {
  // Add CSS for the effects
  const style = document.createElement('style');
  style.innerHTML = `
    .bubble {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(to right, rgba(255, 87, 87, 0.2), rgba(0, 194, 255, 0.2));
      backdrop-filter: blur(1px);
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.5);
      animation: float linear infinite;
      z-index: 1;
      pointer-events: none;
    }
    
    @keyframes float {
      0% {
        transform: translateY(0) rotate(0);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) rotate(360deg);
        opacity: 0;
      }
    }
    
    .confetti-container {
      position: fixed;
      pointer-events: none;
      z-index: 9999;
    }
    
    .confetti {
      position: absolute;
      width: 8px;
      height: 8px;
      opacity: 0;
      animation: confetti-fall 2s ease forwards;
    }
    
    @keyframes confetti-fall {
      0% {
        opacity: 1;
        transform: translate(0, 0) rotate(0);
      }
      100% {
        opacity: 0;
        transform: translate(var(--x, 0), calc(var(--y, 0) + 100px)) rotate(calc(var(--r, 0) + 120deg));
      }
    }
  `;
  
  document.head.appendChild(style);
  
  // Initialize effects
  createBubbles();
  setupQuizEffects();
  addBalloonEffect();
}); 