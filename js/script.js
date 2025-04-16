// DOM Elements
const navbar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const menuBtn = document.querySelector('#menu-btn');
const searchBtn = document.querySelector('#search-btn');
const themeBtn = document.querySelector('#theme-btn');

// Toggle menu
if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    if (searchForm) searchForm.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
}

// Toggle search form
if (searchBtn && searchForm) {
  searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
}

// Smooth scroll behavior for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close the navbar if it's open
    navbar.classList.remove('active');
    
    // Scroll to the target section
    const targetId = this.getAttribute('href');
    if (targetId !== '#') {
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  });
});

// Add shadow to header on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Close navbar and search form when clicking outside
document.addEventListener('click', (e) => {
  if (navbar && !e.target.closest('.navbar') && 
      !e.target.closest('#menu-btn') && 
      navbar.classList.contains('active')) {
    navbar.classList.remove('active');
  }
  
  if (searchForm && !e.target.closest('.search-form') && 
      !e.target.closest('#search-btn') && 
      searchForm.classList.contains('active')) {
    searchForm.classList.remove('active');
  }
});

// Initialize AOS animation library if it exists
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 800,
    offset: 150,
    easing: 'ease-in-out',
    once: true
  });
}

// Initialize Swiper if review slider exists
if (document.querySelector('.review-slider') && typeof Swiper !== 'undefined') {
  var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}