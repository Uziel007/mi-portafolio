  document.addEventListener("DOMContentLoaded", async () => {
    // ✅ Cargar GSAP
    const gsapScript = document.createElement("script");
    gsapScript.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    gsapScript.onload = () => {
      const { gsap } = window;

      // Animaciones iniciales
      gsap.from(".animate-fadeInUp", { duration: 1.5, y: 30, opacity: 0, ease: "power2.out" });
      gsap.from(".gsap-text p", { duration: 1, y: 20, opacity: 0, stagger: 0.2, ease: "power2.out" });

      const heroImg = document.querySelector("#hero img");

        if (heroImg) {
        gsap.fromTo(heroImg,
            { opacity: 0, scale: 1.1, filter: "blur(10px)" },
            { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }
        );
        }

      // Efecto hover foto
      gsap.utils.toArray(".gsap-hover").forEach((el) => {
        el.addEventListener("mouseenter", () => gsap.to(el, { duration: 0.3, scale: 1.1 }));
        el.addEventListener("mouseleave", () => gsap.to(el, { duration: 0.3, scale: 1 }));
      });

      // Botón “Conoce más sobre mí”
      const btn = document.getElementById("changeTextBtn");
      const textEl = document.getElementById("profile-text");

      if (btn && textEl) {
        btn.addEventListener("click", () => {
          const newText = `
            <p>Soy un Ingeniero en Sistemas Computacionales con una visión integral del desarrollo tecnológico, combinando conocimientos en <strong>arquitectura de software</strong>, <strong>programación avanzada</strong> y <strong>servicios en la nube</strong>.</p>
            <p>He adquirido experiencia práctica en frameworks modernos como <strong>Angular</strong> y <strong>Spring Boot</strong>, además de trabajar con <strong>Java, Python, PHP y JavaScript</strong>, lo que me permite abordar soluciones full stack con enfoque profesional.</p>
            <p>Mis certificaciones abarcan áreas clave como arquitectura de software, AWS Cloud, metodologías ágiles y diseño de sistemas escalables. Esta formación me permite integrar tecnología y estrategia para aportar valor real a los proyectos empresariales.</p>
            <p>Me distingo por mi <strong>liderazgo técnico</strong>, mi compromiso con la excelencia y mi capacidad de adaptación a nuevos desafíos. Mi objetivo es contribuir a equipos de alto rendimiento, impulsando soluciones innovadoras y eficientes que generen impacto.</p>
          `;
          textEl.innerHTML = newText;
          gsap.from(".gsap-text p", { duration: 1, y: 20, opacity: 0, stagger: 0.2, ease: "power2.out" });
        });
      }
    };
    document.body.appendChild(gsapScript);

// ✅ Lottie animación (solo si hay archivo o data disponible)
const lottieContainer = document.getElementById("lottie-hero");

if (lottieContainer && window.lottie) {
  // Si tu contenedor debería tener algo visual, puedes mostrar una imagen o dejarlo vacío
  console.log("No hay animación Lottie asignada, se omite la carga.");
}
});