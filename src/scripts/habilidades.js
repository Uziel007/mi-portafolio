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

      // Animaciones de entrada (sin certificates, se maneja en update)
      gsap.from(".gsap-title", { duration: 1.2, y: 60, opacity: 0, ease: "power3.out", stagger: 0.3 });
      gsap.from(".gsap-list .academic-item", { duration: 1, x: -60, opacity: 0, ease: "power3.out", stagger: 0.2 });
      gsap.from(".gsap-timeline .timeline-item", { duration: 1, y: 50, opacity: 0, ease: "power3.out", stagger: 0.2 });
      gsap.from(".gsap-grid .knowledge-card", { duration: 1, scale: 0.9, opacity: 0, ease: "elastic.out(1, 0.3)", stagger: 0.15 });
      gsap.from(".gsap-skills .skills-list", { duration: 1, y: 40, opacity: 0, ease: "power3.out", stagger: 0.25 });
      gsap.from(".gsap-stats .stat-card", { duration: 1.2, scale: 0.6, opacity: 0, ease: "elastic.out(1, 0.4)", stagger: 0.2 });
      gsap.from(".gsap-progress .progress-item", { duration: 1, x: -40, opacity: 0, ease: "power3.out", stagger: 0.15 });

      // Contadores automáticos (soporte decimal para horas)
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

      // Lógica de certificaciones
      const filterBtns = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.certificate-card');
      const searchInput = document.getElementById('searchInput');
      const grid = document.getElementById('certificatesGrid');
      let currentFilter = 'all';
      let timeout;

      // Asignar índice original
      cards.forEach((card, i) => {
        card.dataset.originalIndex = i;
      });

      // Función para actualizar certificates
      function updateCertificates(filter, term) {
        let visibleCards = Array.from(cards).filter(card => {
          const matchesFilter = filter === 'all' || card.dataset.category === filter;
          const matchesSearch = !term || card.textContent.toLowerCase().includes(term.toLowerCase());
          return matchesFilter && matchesSearch;
        }).sort((a, b) => parseInt(a.dataset.originalIndex) - parseInt(b.dataset.originalIndex));

        // Remover todas
        Array.from(grid.children).forEach(child => {
          if (child.classList.contains('certificate-card')) grid.removeChild(child);
        });

        // Append visibles en orden
        visibleCards.forEach(card => grid.appendChild(card));

        // Animar stagger in (0.15s por card)
        gsap.fromTo(visibleCards, 
          { opacity: 0, y: 60, scale: 0.9 }, 
          { duration: 0.8, opacity: 1, y: 0, scale: 1, 
            stagger: { each: 0.15, from: "start" }, 
            ease: "back.out(1.7)" }
        );
      }

      // Inicial: animar all
      updateCertificates('all', '');

      // Filtros
      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentFilter = btn.dataset.filter;
          clearTimeout(timeout);
          updateCertificates(currentFilter, searchInput.value.toLowerCase());
        });
      });

      // Búsqueda con debounce
      searchInput?.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          updateCertificates(currentFilter, e.target.value.toLowerCase());
        }, 300);
      });
    };
  };

  // Partículas
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