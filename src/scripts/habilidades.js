document.addEventListener("DOMContentLoaded", () => {
  // Cargar GSAP primero
  const gsapScript = document.createElement("script");
  gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
  document.body.appendChild(gsapScript);

  gsapScript.onload = () => {
    // Cargar ScrollTrigger después
    const scrollScript = document.createElement("script");
    scrollScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js";
    document.body.appendChild(scrollScript);

    scrollScript.onload = () => {
      const { gsap } = window;
      gsap.registerPlugin(ScrollTrigger);

      // Set inicial para visibilidad inmediata
      gsap.set(".gsap-title, .gsap-list *, .gsap-grid *, .gsap-skills *, .gsap-stats *, .gsap-certificates *, .gsap-progress *, .gsap-timeline .timeline-item, .gsap-timeline .timeline-content, .gsap-timeline .timeline-date", { opacity: 1, y: 0, scale: 1 });

      // Animaciones de entrada
      gsap.from(".gsap-title", { duration: 1.2, y: 60, opacity: 0, ease: "power3.out", stagger: 0.3 });
      gsap.from(".gsap-list .academic-item", { duration: 1, x: -60, opacity: 0, ease: "power3.out", stagger: 0.2 });
      gsap.from(".gsap-timeline .timeline-item", { duration: 1, y: 50, opacity: 0, ease: "power3.out", stagger: 0.2 });
      gsap.from(".gsap-grid .knowledge-card", { duration: 1, scale: 0.9, opacity: 0, ease: "elastic.out(1, 0.3)", stagger: 0.15 });
      gsap.from(".gsap-skills .skills-list", { duration: 1, y: 40, opacity: 0, ease: "power3.out", stagger: 0.25 });
      gsap.from(".gsap-stats .stat-card", { duration: 1.2, scale: 0.6, opacity: 0, ease: "elastic.out(1, 0.4)", stagger: 0.2 });
      gsap.from(".gsap-progress .progress-item", { duration: 1, x: -40, opacity: 0, ease: "power3.out", stagger: 0.15 });

      // Contadores automáticos
      gsap.utils.toArray(".stat-number").forEach(stat => {
        const target = parseFloat(stat.dataset.target);
        const label = stat.nextElementSibling.textContent.toLowerCase();
        let num = { val: 0 };
        gsap.to(num, {
          scrollTrigger: { trigger: stat, start: "top 80%" },
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function() {
            let display = num.val;
            if (label.includes('tasa')) {
              display = Math.ceil(display) + '%';
            } else if (label.includes('horas')) {
              display = display.toFixed(1).replace(/\.0$/, '');
            } else {
              display = Math.ceil(display);
            }
            stat.innerHTML = display;
          }
        });
      });

      // Animar barras en scroll
      gsap.utils.toArray(".progress-fill").forEach(bar => {
        gsap.to(bar, {
          scrollTrigger: { trigger: bar, start: "top 90%" },
          width: bar.dataset.width,
          duration: 1.5,
          ease: "power3.out"
        });
      });

      // Hover 3D
      document.querySelectorAll(".knowledge-card, .certificate-card, .timeline-content").forEach(card => {
        card.addEventListener("mouseenter", () => gsap.to(card, { duration: 0.3, rotationY: 5, z: 20 }));
        card.addEventListener("mouseleave", () => gsap.to(card, { duration: 0.3, rotationY: 0, z: 0 }));
      });

      // ========== FILTROS Y BÚSQUEDA ==========
      const allFilterBtns    = document.querySelectorAll('.filter-btn, .mobile-filter-option');
      const cards            = document.querySelectorAll('.certificate-card');
      const searchInput      = document.getElementById('searchInput');
      const grid             = document.getElementById('certificatesGrid');
      const mobileFilters    = document.querySelector('.mobile-filters');
      const mobileToggle     = document.getElementById('mobileFilterToggle');
      const activeFiltersRow = document.getElementById('activeFiltersRow');
      const mobileHeader     = document.querySelector('.mobile-filter-header');

      const labelMap = {
        all: 'Todas', programming: 'Programación', database: 'Base de Datos',
        marketing: 'Marketing', agile: 'Metodologías Ágiles', frameworks: 'Frameworks',
        cloud: 'Nube', tools: 'Herramientas', leadership: 'Liderazgo',
        ai: 'IA/ML', language: 'Idiomas', architecture: 'Arquitectura', testing: 'Testing'
      };

      let activeFilters = new Set(['all']);
      let searchTerm = '';
      let timeout;

      // Guardar índice original de cada card
      cards.forEach((card, i) => { card.dataset.originalIndex = i; });

      // ── Dropdown mobile ──
      function toggleMobilePanel(e) {
        if (e) e.stopPropagation();
        mobileFilters?.classList.toggle('open');
      }
      mobileToggle?.addEventListener('click', toggleMobilePanel);
      mobileHeader?.addEventListener('click', (e) => {
        // Evitar doble disparo si el clic viene del botón toggle
        if (e.target.closest('#mobileFilterToggle')) return;
        toggleMobilePanel(e);
      });
      document.addEventListener('click', (e) => {
        if (mobileFilters && !mobileFilters.contains(e.target)) {
          mobileFilters.classList.remove('open');
        }
      });

      // ── Tags activos ──
      function renderActiveTags() {
        if (!activeFiltersRow) return;
        activeFiltersRow.innerHTML = '';
        if (activeFilters.has('all')) return;
        activeFilters.forEach(f => {
          const tag = document.createElement('span');
          tag.className = 'active-filter-tag';
          tag.innerHTML = `${labelMap[f] || f} <button class="remove-tag" aria-label="Quitar ${labelMap[f]}">✕</button>`;
          tag.querySelector('.remove-tag').addEventListener('click', (e) => {
            e.stopPropagation();
            activeFilters.delete(f);
            if (activeFilters.size === 0) activeFilters.add('all');
            syncButtonStates();
            renderActiveTags();
            applyAndAnimate();
          });
          activeFiltersRow.appendChild(tag);
        });
      }

      // ── Sincronizar clases active en todos los botones ──
      function syncButtonStates() {
        allFilterBtns.forEach(btn => {
          const f = btn.dataset.filter;
          btn.classList.toggle('active', activeFilters.has(f) || (activeFilters.has('all') && f === 'all'));
        });
      }

      // ── Filtrar + animar con GSAP ──
      function applyAndAnimate() {
        const visibleCards = Array.from(cards).filter(card => {
          const cats = (card.dataset.categories || '').split(',').map(s => s.trim());
          const text = card.textContent.toLowerCase();
          const matchesFilter = activeFilters.has('all') || cats.some(c => activeFilters.has(c));
          const matchesSearch = !searchTerm || text.includes(searchTerm);
          return matchesFilter && matchesSearch;
        }).sort((a, b) => parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex));

        // Reordenar en el DOM
        Array.from(grid.children).forEach(child => {
          if (child.classList.contains('certificate-card')) grid.removeChild(child);
        });
        visibleCards.forEach(card => {
          card.style.display = '';
          grid.appendChild(card);
        });

        // Ocultar las que no aplican
        cards.forEach(card => {
          if (!visibleCards.includes(card)) card.style.display = 'none';
        });

        // Animar entrada
        if (visibleCards.length > 0) {
          gsap.fromTo(visibleCards,
            { opacity: 0, y: 60, scale: 0.9 },
            { duration: 0.8, opacity: 1, y: 0, scale: 1,
              stagger: { each: 0.12, from: "start" },
              ease: "back.out(1.7)" }
          );
        }
      }

      // ── Click en botones (desktop y mobile) ──
      allFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const filter = btn.dataset.filter;
          if (filter === 'all') {
            activeFilters = new Set(['all']);
          } else {
            activeFilters.delete('all');
            if (activeFilters.has(filter)) {
              activeFilters.delete(filter);
              if (activeFilters.size === 0) activeFilters.add('all');
            } else {
              activeFilters.add(filter);
            }
          }
          syncButtonStates();
          renderActiveTags();
          applyAndAnimate();
        });
      });

      // ── Buscador con debounce ──
      searchInput?.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          searchTerm = e.target.value.toLowerCase().trim();
          applyAndAnimate();
        }, 300);
      });

      // ── Estado inicial ──
      applyAndAnimate();
    };
  };

  // Partículas de fondo
  const particles = document.getElementById('particles-bg');
  for (let i = 0; i < 60; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${2 + Math.random() * 4}px;
      height: ${2 + Math.random() * 4}px;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
      border-radius: 50%;
      opacity: ${0.2 + Math.random() * 0.4};
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${4 + Math.random() * 6}s ease-in-out infinite ${Math.random() * 2}s;
      filter: blur(0.5px);
    `;
    particles?.appendChild(particle);
  }
});

import { gsap } from 'gsap';
  
  // ========== GENERACIÓN DE ELEMENTOS DINÁMICOS ==========
  
  // Código binario (Matrix)
  const binaryContainer = document.getElementById('binaryContainer');
  const binaryStrings = ['01001000', '01100101', '01101100', '01101100', '01101111', '01010111', '01101111', '01110010', '01101100', '01100100'];
  
  for (let i = 0; i < 30; i++) {
    const binary = document.createElement('div');
    binary.className = 'binary-rain';
    binary.textContent = binaryStrings[Math.floor(Math.random() * binaryStrings.length)].repeat(10);
    binary.style.left = `${Math.random() * 100}%`;
    binary.style.animationDuration = `${Math.random() * 5 + 8}s`;
    binary.style.animationDelay = `${Math.random() * 5}s`;
    binaryContainer?.appendChild(binary);
  }
  
  // Circuitos
  const circuitBoard = document.getElementById('circuitBoard');
  for (let i = 0; i < 15; i++) {
    const line = document.createElement('div');
    line.className = 'circuit-line';
    line.style.top = `${Math.random() * 100}%`;
    line.style.left = `${Math.random() * 80}%`;
    line.style.width = `${Math.random() * 200 + 100}px`;
    line.style.animationDelay = `${Math.random() * 4}s`;
    circuitBoard?.appendChild(line);
    
    // Agregar nodos
    const node = document.createElement('div');
    node.className = 'circuit-node';
    node.style.left = `${Math.random() * 80}%`;
    node.style.animationDelay = `${Math.random() * 2}s`;
    line.appendChild(node);
  }
  
  // Partículas de datos
  const dataContainer = document.getElementById('dataParticlesContainer');
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement('div');
    particle.className = 'data-particle';
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;
    dataContainer?.appendChild(particle);
  }
  
  // Hexágonos
  const hexContainer = document.getElementById('hexContainer');
  for (let i = 0; i < 12; i++) {
    const hexPattern = document.createElement('div');
    hexPattern.className = 'hex-pattern';
    hexPattern.style.top = `${Math.random() * 100}%`;
    hexPattern.style.left = `${Math.random() * 100}%`;
    hexPattern.style.animationDuration = `${Math.random() * 15 + 15}s`;
    hexPattern.style.animationDelay = `${Math.random() * 10}s`;
    
    const hexagon = document.createElement('div');
    hexagon.className = 'hexagon';
    hexPattern.appendChild(hexagon);
    
    hexContainer?.appendChild(hexPattern);
  }
  
  // ========== ANIMACIONES GSAP ==========
  
  // Hologramas
  gsap.to('.hologram', {
    rotationY: 360,
    rotationX: 60,
    duration: 10,
    repeat: -1,
    ease: 'linear'
  });
  
  // Íconos tecnológicos
  gsap.utils.toArray('.tech-icon').forEach((icon) => {
    gsap.to(icon, {
      y: -30,
      rotation: 360,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
  
  // Terminales de código
  gsap.to('.code-terminal', {
    y: -20,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
  
  // Parallax con mouse
  document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    gsap.to('.circuit-line', {
      x: mouseX * 20,
      y: mouseY * 20,
      duration: 2
    });
    
    gsap.to('.hologram', {
      x: mouseX * -30,
      y: mouseY * -30,
      duration: 2.5
    });
    
    gsap.to('.tech-icon', {
      x: mouseX * 15,
      y: mouseY * 15,
      duration: 3
    });
  });