  document.addEventListener("DOMContentLoaded", async () => {
    // Cargar GSAP via CDN
    const gsapScript = document.createElement("script");
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    gsapScript.onload = () => {
      const { gsap } = window;
      // Crear partículas hero
      function createParticles() {
        const container = document.querySelector('.particles-container');
        if (!container) return;
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.top = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 5}s`;
          particle.style.animationDuration = `${5 + Math.random() * 10}s`;
          container.appendChild(particle);
        }
      }
      // Crear partículas perfil
      function createProfileParticles() {
        const container = document.querySelector('.profile-particles');
        if (!container) return;
        for (let i = 0; i < 30; i++) {
          const particle = document.createElement('div');
          particle.className = 'profile-particle';
          particle.style.left = `${Math.random() * 100}%`;
          particle.style.animationDelay = `${Math.random() * 8}s`;
          particle.style.animationDuration = `${8 + Math.random() * 8}s`;
          container.appendChild(particle);
        }
      }
      // Llamar funciones de partículas
      createParticles();
      createProfileParticles();
      // Animaciones hero
      gsap.from(".animate-fadeInUp", { duration: 1.5, y: 30, opacity: 0, ease: "power2.out" });
      gsap.from(".gsap-text p", { duration: 1, y: 20, opacity: 0, stagger: 0.2, ease: "power2.out" });
      const heroImg = document.querySelector("#hero img");
      if (heroImg) {
        gsap.fromTo(heroImg, { opacity: 0, scale: 1.1, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" });
      }

      // Animación code elementos
      gsap.utils.toArray('.code-element').forEach((element) => {
        gsap.to(element, {
          y: gsap.utils.random(-30, 30),
          x: gsap.utils.random(-20, 20),
          rotation: gsap.utils.random(-15, 15),
          duration: gsap.utils.random(3, 5),
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });

      // Animación shapes (similar)
      gsap.utils.toArray('.shape').forEach((shape, index) => {
        gsap.to(shape, { rotation: 360, duration: 10 + index * 5, repeat: -1, ease: "none" });
        gsap.to(shape, { y: gsap.utils.random(-50, 50), x: gsap.utils.random(-50, 50), duration: gsap.utils.random(8, 12), repeat: -1, yoyo: true, ease: "sine.inOut" });
      });
      // Hover foto
      const profileImage = document.querySelector('.profile-image-container');
      if (profileImage) {
        profileImage.addEventListener('mouseenter', () => { gsap.to('.profile-image', { scale: 1.05, duration: 0.3 }); });
        profileImage.addEventListener('mouseleave', () => { gsap.to('.profile-image', { scale: 1, duration: 0.3 }); });
      }

      // Botón cambio texto con toggle
      const btn = document.getElementById("changeTextBtn");
      const textEl = document.getElementById("profile-text");
      let isExpanded = false;
      
      const originalText = `<p class="text-lg leading-relaxed text-gray-300">
                Soy Ingeniero en Sistemas Computacionales con una sólida formación en <strong class="text-cyan-400">desarrollo de software</strong>, <strong class="text-purple-400">arquitectura de sistemas</strong> y <strong class="text-pink-400">tecnologías en la nube</strong>.
              </p>
              <p class="text-lg leading-relaxed text-gray-300">
                Apasionado por la innovación tecnológica y la eficiencia, aplico buenas prácticas de ingeniería para diseñar soluciones <span class="highlight-text">seguras, escalables y orientadas a resultados</span>.
              </p>
              <p class="text-lg leading-relaxed text-gray-300">
                Destaco por mi <strong class="text-green-400">pensamiento analítico</strong>, <strong class="text-blue-400">liderazgo técnico</strong> y capacidad de adaptación en entornos empresariales exigentes.
              </p>`;
      
      const expandedText = `<p class="text-lg leading-relaxed text-gray-300">Soy un Ingeniero en Sistemas Computacionales con una visión integral del desarrollo tecnológico, combinando conocimientos en <strong class="text-cyan-400">arquitectura de software</strong>, <strong class="text-purple-400">programación avanzada</strong> y <strong class="text-pink-400">servicios en la nube</strong>.</p><p class="text-lg leading-relaxed text-gray-300">He adquirido experiencia práctica en frameworks modernos como <strong class="text-blue-400">Angular</strong> y <strong class="text-green-400">Spring Boot</strong>, además de trabajar con <strong class="text-yellow-400">Java, Python, PHP y JavaScript</strong>, lo que me permite abordar soluciones full stack con enfoque profesional.</p><p class="text-lg leading-relaxed text-gray-300">Mis certificaciones abarcan áreas clave como arquitectura de software, AWS Cloud, metodologías ágiles y diseño de sistemas escalables. Esta formación me permite integrar tecnología y estrategia para aportar <span class="highlight-text">valor real a los proyectos empresariales</span>.</p><p class="text-lg leading-relaxed text-gray-300">Me distingo por mi <strong class="text-green-400">liderazgo técnico</strong>, mi compromiso con la excelencia y mi capacidad de adaptación a nuevos desafíos. Mi objetivo es contribuir a equipos de alto rendimiento, impulsando soluciones innovadoras y eficientes que generen impacto.</p>`;
      
      if (btn && textEl) {
        btn.addEventListener("click", () => {
          isExpanded = !isExpanded;
          
          // Cambiar el texto del botón
          const buttonText = btn.querySelector('span:last-child');
          if (buttonText) {
            buttonText.textContent = isExpanded ? 'Conoce menos sobre mí' : 'Conoce más sobre mí';
          }
          
          // Cambiar el contenido
          textEl.innerHTML = isExpanded ? expandedText : originalText;
          gsap.from(".gsap-text p", { duration: 1, y: 20, opacity: 0, stagger: 0.2, ease: "power2.out" });
          
          // Scroll suave a la sección "Acerca de mí"
          const perfilSection = document.querySelector('#perfil');
          if (perfilSection) {
            perfilSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      }
      
      // Contadores
      const counters = document.querySelectorAll('.stat-number');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const obj = { val: 0 };
        gsap.to(obj, { val: target, duration: 2, ease: 'power1.out', onUpdate: () => { counter.textContent = Math.ceil(obj.val).toString(); } });
      });
      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(anchor.getAttribute('href') || '');
          if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
      });
      // Scroll indicator
      gsap.from(".scroll-indicator", { duration: 1.5, y: 20, opacity: 0, ease: "power2.out", delay: 2 });
      gsap.to(".wheel", { y: 10, duration: 1.5, repeat: -1, yoyo: true, ease: "power2.inOut" });
    };
    document.body.appendChild(gsapScript);
  });

  // Botón cambio texto
// Botón cambio texto con toggle y animación mejorada
const btn = document.getElementById("changeTextBtn");
const textEl = document.getElementById("profile-text");
let isExpanded = false;

const originalText = `<p class="text-lg leading-relaxed text-gray-300">
            Soy Ingeniero en Sistemas Computacionales con una sólida formación en <strong class="text-cyan-400">desarrollo de software</strong>, <strong class="text-purple-400">arquitectura de sistemas</strong> y <strong class="text-pink-400">tecnologías en la nube</strong>.
          </p>
          <p class="text-lg leading-relaxed text-gray-300">
            Apasionado por la innovación tecnológica y la eficiencia, aplico buenas prácticas de ingeniería para diseñar soluciones <span class="highlight-text">seguras, escalables y orientadas a resultados</span>.
          </p>
          <p class="text-lg leading-relaxed text-gray-300">
            Destaco por mi <strong class="text-green-400">pensamiento analítico</strong>, <strong class="text-blue-400">liderazgo técnico</strong> y capacidad de adaptación en entornos empresariales exigentes.
          </p>`;

const expandedText = `<p class="text-lg leading-relaxed text-gray-300">Soy un Ingeniero en Sistemas Computacionales con una visión integral del desarrollo tecnológico, combinando conocimientos en <strong class="text-cyan-400">arquitectura de software</strong>, <strong class="text-purple-400">programación avanzada</strong> y <strong class="text-pink-400">servicios en la nube</strong>.</p><p class="text-lg leading-relaxed text-gray-300">He adquirido experiencia práctica en frameworks modernos como <strong class="text-blue-400">Angular</strong> y <strong class="text-green-400">Spring Boot</strong>, además de trabajar con <strong class="text-yellow-400">Java, Python, PHP y JavaScript</strong>, lo que me permite abordar soluciones full stack con enfoque profesional.</p><p class="text-lg leading-relaxed text-gray-300">Mis certificaciones abarcan áreas clave como arquitectura de software, AWS Cloud, metodologías ágiles y diseño de sistemas escalables. Esta formación me permite integrar tecnología y estrategia para aportar <span class="highlight-text">valor real a los proyectos empresariales</span>.</p><p class="text-lg leading-relaxed text-gray-300">Me distingo por mi <strong class="text-green-400">liderazgo técnico</strong>, mi compromiso con la excelencia y mi capacidad de adaptación a nuevos desafíos. Mi objetivo es contribuir a equipos de alto rendimiento, impulsando soluciones innovadoras y eficientes que generen impacto.</p>`;

if (btn && textEl) {
  btn.addEventListener("click", () => {
    isExpanded = !isExpanded;
    
    // Cambiar el texto del botón
    const buttonText = btn.querySelector('span:last-child');
    if (buttonText) {
      buttonText.textContent = isExpanded ? 'Conoce menos sobre mí' : 'Conoce más sobre mí';
    }
    
    // ANIMACIÓN MEJORADA - más lenta y visible
    // Primero fade out
    gsap.to(textEl, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        // Cambiar el contenido cuando está invisible
        textEl.innerHTML = isExpanded ? expandedText : originalText;
        
        // Luego fade in con animación de párrafos
        gsap.to(textEl, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        });
        
        // Animar cada párrafo individualmente
        gsap.from("#profile-text p", {
          duration: 0.8,
          y: 30,
          opacity: 0,
          stagger: 0.3,
          ease: "power2.out",
          delay: 0.2
        });
      }
    });
    
    // Scroll suave a la sección "Acerca de mí"
    const perfilSection = document.querySelector('#perfil');
    if (perfilSection) {
      perfilSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}