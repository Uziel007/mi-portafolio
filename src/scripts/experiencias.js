// src/scripts/experiencias.js

// Verificar que el DOM esté cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperiencias);
} else {
  initExperiencias();
}

function initExperiencias() {
  // Inicializar estilos del contenido
  initContenidoStyles();
  
  // Inicializar carrusel
  initCarousel();
  
  // Inicializar modal
  initModal();
  
  // Inicializar adaptación de carruseles 3D
  setTimeout(adaptAllCarousels, 100);
  window.addEventListener("resize", adaptAllCarousels);
}

// Estilos iniciales para el contenido
function initContenidoStyles() {
  const contenido = document.getElementById("contenido");
  if (contenido) {
    contenido.style.transition = "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    contenido.style.transformOrigin = "top center";
  }
}

// Función para calcular el radio óptimo del carrusel 3D
function calculateOptimalRadius(numImages, imageWidth = 180) {
  const angle = (2 * Math.PI) / numImages;
  const minRadius = (imageWidth * 0.6) / Math.sin(angle / 2);
  const safeRadius = Math.ceil(minRadius * 1.2);
  return Math.max(200, Math.min(1200, safeRadius));
}

// Función para adaptar todos los carruseles 3D
function adaptAllCarousels() {
  const carousels = document.querySelectorAll(".content-carrousel");

  carousels.forEach((carousel) => {
    const figures = carousel.querySelectorAll("figure");
    const totalImages = figures.length;

    if (totalImages > 0) {
      const angleStep = 360 / totalImages;
      const radius = calculateOptimalRadius(totalImages);

      figures.forEach((figure, index) => {
        const rotation = angleStep * index;
        figure.style.transform = `rotateY(${rotation}deg) translateZ(${radius}px)`;
      });

      console.log(`Carrusel adaptado: ${totalImages} imágenes, radio: ${radius}px`);
    }
  });
}

// Animación del contenido
function animateContent() {
  const contenido = document.getElementById("contenido");
  if (!contenido) return;
  
  contenido.style.opacity = "0";
  contenido.style.transform = "translateY(30px) scale(0.98)";

  setTimeout(() => {
    contenido.style.opacity = "1";
    contenido.style.transform = "translateY(0) scale(1)";
  }, 50);
}

// Variables globales para el modal
let currentDescription = "";

// Función para abrir modal con descripción
window.openModalWithDescription = function(src, description) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  let modalDesc = document.querySelector(".modal-description");

  if (!modalDesc) {
    modalDesc = document.createElement("div");
    modalDesc.className = "modal-description";
    modal.appendChild(modalDesc);
  }

  // Pausar carruseles
  document.querySelectorAll(".content-carrousel").forEach((carousel) => {
    carousel.style.animationPlayState = "paused";
  });

  modal.style.display = "block";
  modalImg.src = src;
  modalDesc.textContent = description;
  currentDescription = description;
};

// Función para cerrar modal
window.closeModal = function() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
  currentDescription = "";

  // Reanudar carruseles
  document.querySelectorAll(".content-carrousel").forEach((carousel) => {
    carousel.style.animationPlayState = "running";
  });
};

// Inicializar modal
function initModal() {
  const modal = document.getElementById("myModal");
  const closeBtn = document.querySelector(".close");

  if (closeBtn) {
    closeBtn.onclick = window.closeModal;
  }

  window.onclick = function(event) {
    if (event.target === modal) {
      window.closeModal();
    }
  };
}

// Funciones para YouTube
window.seekTo = function(seconds) {
  const iframe = document.getElementById("youtubeVideo");
  if (iframe) {
    const url = iframe.src;
    const videoId = url.match(/embed\/([^?]+)/)[1];
    iframe.src = `https://www.youtube.com/embed/${videoId}?start=${seconds}&autoplay=1`;
  }
};

window.goToChapter = function(seconds) {
  if (seconds) {
    window.seekTo(parseInt(seconds));
    const selector = document.getElementById('chapterSelector');
    if (selector) selector.value = '';
  }
};

// Responsive para videos
function updateDisplay() {
  const selector = document.getElementById('chapterSelector');
  const buttonGrid = document.getElementById('buttonGrid');
  const screenWidth = window.innerWidth;
  
  if (selector && buttonGrid) {
    if (screenWidth < 768) {
      selector.style.display = 'block';
      buttonGrid.style.display = 'none';
    } else {
      selector.style.display = 'none';
      buttonGrid.style.display = 'grid';
    }
  }
}

window.addEventListener('load', updateDisplay);
window.addEventListener('resize', updateDisplay);

// Inicializar carrusel principal
function initCarousel() {
  const wrapper = document.querySelector(".custom-wrapper");
  const items = document.querySelectorAll(".custom-item");
  const prev = document.querySelector(".custom-arrow-prev");
  const next = document.querySelector(".custom-arrow-next");
  
  if (!wrapper || !items.length) return;
  
  let index = 0;

  function updateCarousel() {
    const contenido = document.getElementById("contenido");
    contenido.style.opacity = "0";
    contenido.style.transform = "translateY(30px) scale(0.98)";

    wrapper.style.transform = `translateX(-${index * 100}%)`;

    const currentItem = items[index];
    const mouseEnterEvent = new Event("mouseenter");
    currentItem.dispatchEvent(mouseEnterEvent);

    setTimeout(() => {
      animateContent();
    }, 100);
  }

  if (next) {
    next.addEventListener("click", function () {
      index = (index + 1) % items.length;
      updateCarousel();
    });
  }

  if (prev) {
    prev.addEventListener("click", function () {
      index = (index - 1 + items.length) % items.length;
      updateCarousel();
    });
  }
 
  items.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const idx = Array.from(items).indexOf(this);
      setTimeout(() => {
        if (window.contentFunctions && window.contentFunctions[idx]) {
          window.contentFunctions[idx]();
        }
      }, 100);
    });

    item.addEventListener("touchstart", function () {
      const idx = Array.from(items).indexOf(this);
      setTimeout(() => {
        if (window.contentFunctions && window.contentFunctions[idx]) {
          window.contentFunctions[idx]();
        }
      }, 100);
    }, { passive: true });
  });
}

// Setup para eventos de galería
function setupGalleryListeners() {
  document.querySelectorAll(".shadow").forEach((fig) => {
    fig.addEventListener("click", () => {
      const img = fig.dataset.img;
      const desc = fig.dataset.desc;
      const imgElement = fig.querySelector("img");

      if (imgElement) {
        const currentSrc = imgElement.getAttribute("src");
        const basePath = currentSrc.substring(0, currentSrc.lastIndexOf("/") + 1);
        window.openModalWithDescription(basePath + img, desc);
      }
    });
  });
}

// Exponer funciones necesarias globalmente
window.setupGalleryListeners = setupGalleryListeners;
window.adaptAllCarousels = adaptAllCarousels;
window.animateContent = animateContent;

// Verificar que contentFunctions esté disponible
console.log('experiencias.js cargado');
console.log('contentFunctions disponibles:', window.contentFunctions ? window.contentFunctions.length : 0);

    import { gsap } from 'gsap';
    
    // Generar estrellas dinámicamente
    const starsContainer = document.getElementById('stars-container');
    const numberOfStars = 150;
    
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = `${Math.random() * 3 + 1}px`;
      star.style.height = star.style.width;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * 3}s`;
      starsContainer?.appendChild(star);
    }
    
    // Generar asteroides dinámicamente
    const asteroidsContainer = document.getElementById('asteroids-container');
    const numberOfAsteroids = 8;
    
    for (let i = 0; i < numberOfAsteroids; i++) {
      const asteroid = document.createElement('div');
      asteroid.className = 'asteroid';
      asteroid.style.top = `${Math.random() * 80 + 10}%`;
      asteroid.style.animationDuration = `${Math.random() * 20 + 15}s`;
      asteroid.style.animationDelay = `${Math.random() * 10}s`;
      asteroidsContainer?.appendChild(asteroid);
    }
    
    // Generar cometas dinámicamente
    const cometsContainer = document.getElementById('comets-container');
    const numberOfComets = 5;
    
    for (let i = 0; i < numberOfComets; i++) {
      const comet = document.createElement('div');
      comet.className = 'comet';
      comet.style.animationDuration = `${Math.random() * 5 + 5}s`;
      comet.style.animationDelay = `${Math.random() * 15}s`;
      cometsContainer?.appendChild(comet);
    }
    
    // Animaciones GSAP para elementos espaciales
    gsap.to('.moon', {
      y: -20,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    gsap.to('.planet-1', {
      y: -30,
      x: 20,
      rotation: 360,
      duration: 40,
      repeat: -1,
      ease: 'linear'
    });
    
    gsap.to('.planet-2', {
      y: 30,
      x: -20,
      rotation: -360,
      duration: 50,
      repeat: -1,
      ease: 'linear'
    });
    
    gsap.to('.planet-3', {
      y: -20,
      x: 30,
      rotation: 360,
      duration: 35,
      repeat: -1,
      ease: 'linear'
    });
    
    // Efecto parallax al mover el mouse
    document.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      gsap.to('.moon', {
        x: mouseX * 30,
        y: mouseY * 30,
        duration: 1.5
      });
      
      gsap.to('.planet', {
        x: mouseX * -20,
        y: mouseY * -20,
        duration: 2
      });
      
      gsap.to('.star', {
        x: mouseX * -10,
        y: mouseY * -10,
        duration: 2.5
      });
    });