 // Funciones de contenido para cada ítem (en orden del HTML: Servet, consultoría, tienda de ropa, punto de venta, laboratorio, agencia, prácticas, soporte técnico)
  window.contentFunctions = [

    // Función para Portafolio Personal - VERSIÓN EXPANDIDA
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
        <div class="smaller-text">
            <!-- SECCIÓN DE TECNOLOGÍAS -->
            <div class="tech-section">
                <h3 class="tech-title">🚀 Stack Tecnológico del Portafolio</h3>
                <div class="tech-grid">
                    <div class="tech-item">
                        <i class="fas fa-rocket tech-icon" style="color: #FF5D01;"></i>
                        <span>Astro 4.0</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-typescript-plain colored tech-icon"></i>
                        <span>TypeScript</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-tailwindcss-plain colored tech-icon"></i>
                        <span>Tailwind CSS</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-rocket tech-icon" style="color: #4ECDC4;"></i>
                        <span>GSAP 3.12</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-play-circle tech-icon" style="color: #00DDB3;"></i>
                        <span>Lottie Files</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-javascript-plain colored tech-icon"></i>
                        <span>JavaScript ES6+</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-html5-plain colored tech-icon"></i>
                        <span>HTML5 Semantic</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-css3-plain colored tech-icon"></i>
                        <span>CSS3 Advanced</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-git-plain colored tech-icon"></i>
                        <span>Git/GitHub</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-mobile-alt tech-icon" style="color: #FF6B6B;"></i>
                        <span>Mobile First</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-bolt tech-icon" style="color: #F39C12;"></i>
                        <span>Performance</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-paint-brush tech-icon" style="color: #9B59B6;"></i>
                        <span>UI/UX Design</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-search tech-icon" style="color: #2ECC71;"></i>
                        <span>SEO Optimization</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-universal-access tech-icon" style="color: #3498DB;"></i>
                        <span>Accessibility</span>
                    </div>
                    <div class="tech-item">
                        <i class="fab fa-github-actions tech-icon" style="color: #2088FF;"></i>
                        <span>CI/CD</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-tachometer-alt tech-icon" style="color: #E74C3C;"></i>
                        <span>Lighthouse</span>
                    </div>
                </div>
            </div>

            <p style="color: white; font-size: 1.1em; line-height: 1.8;">
                Este <strong>portafolio personal</strong> representa la culminación de mi experiencia como desarrollador Full Stack, diseñado y construido completamente desde cero utilizando tecnologías de vanguardia para demostrar mis habilidades técnicas, capacidad de diseño y atención al detalle. El proyecto fue desarrollado con <strong>Astro 4.0</strong>, uno de los frameworks más modernos y performantes del ecosistema web, combinado con <strong>TypeScript</strong> para garantizar código robusto y mantenible, <strong>Tailwind CSS</strong> para un diseño responsivo y elegante, y bibliotecas especializadas de animación como <strong>GSAP</strong> y <strong>Lottie</strong> para crear una experiencia visual impactante y profesional.
            </p>

            <h4 style="color: #FF5D01; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🏗️ Arquitectura y Desarrollo con Astro</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Static Site Generation (SSG) optimizado:</strong> Implementé Astro aprovechando su capacidad de generar sitios estáticos ultra-rápidos con "Zero JS by default", enviando únicamente el HTML y CSS necesarios al navegador. Esto resultó en tiempos de carga iniciales inferiores a 1 segundo y scores perfectos de 100/100 en Lighthouse para Performance.</li>
                
                <li><strong>Arquitectura basada en componentes:</strong> Desarrollé más de 25 componentes reutilizables y modulares (.astro) incluyendo Hero, ProjectCard, SkillBar, Testimonial, ContactForm, BlogPost, Navigation, Footer, Modal, Carousel, FilterSystem, SearchBox, y Timeline. Cada componente está optimizado con props tipados y scoped styles para máxima eficiencia.</li>
                
                <li><strong>Enrutamiento dinámico y colecciones:</strong> Configuré el sistema de routing de Astro con páginas estáticas y dinámicas, implementando content collections para gestionar proyectos, artículos de blog y certificaciones mediante archivos Markdown con frontmatter metadata. Utilicé getStaticPaths() para generación dinámica de páginas individuales.</li>
                
                <li><strong>Integración de frameworks híbridos:</strong> Implementé la arquitectura "Islands" de Astro para componentes interactivos específicos, utilizando directivas client:load, client:visible y client:idle para hidratación selectiva de JavaScript solo donde era necesario, optimizando el performance global del sitio.</li>
                
                <li><strong>Build optimization y asset handling:</strong> Configuré el proceso de build con optimización automática de imágenes usando Astro Assets (conversión a WebP/AVIF, responsive images, lazy loading), minificación agresiva de CSS/JS, tree-shaking, y code splitting automático para cargar solo el código necesario por ruta.</li>
            </ul>

            <h4 style="color: #3178C6; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📝 TypeScript y Tipado Estricto</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Configuración TypeScript estricta:</strong> Implementé tsconfig.json con las opciones más estrictas (strict: true, noImplicitAny, strictNullChecks, strictFunctionTypes) para garantizar type safety absoluto. Esto eliminó errores en tiempo de ejecución y mejoró la experiencia de desarrollo con autocompletado inteligente.</li>
                
                <li><strong>Interfaces y tipos personalizados:</strong> Definí más de 15 interfaces TypeScript para estructurar datos del portafolio incluyendo Project, Skill, Experience, Education, Certification, Testimonial, BlogPost, y ContactFormData. Utilicé tipos avanzados como Union Types, Intersection Types, y Generics para máxima flexibilidad.</li>
                
                <li><strong>Validación de datos en formularios:</strong> Implementé validación client-side tipada para el formulario de contacto usando TypeScript con regex patterns para email, teléfono y campos de texto. Creé custom validators reutilizables con mensajes de error descriptivos y type-safe.</li>
                
                <li><strong>Type guards y assertion functions:</strong> Desarrollé funciones de validación tipo-seguras para verificar estructuras de datos en runtime, especialmente útiles al procesar content collections y datos externos. Implementé narrowing types con type predicates para manejo robusto de casos edge.</li>
                
                <li><strong>Utilities types para transformación:</strong> Utilicé utility types de TypeScript como Partial, Required, Pick, Omit, Record para crear variantes de interfaces base, optimizando la reutilización de código y manteniendo DRY principles sin sacrificar type safety.</li>
            </ul>

            <h4 style="color: #06B6D4; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🎨 Diseño Responsivo con Tailwind CSS</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Sistema de diseño consistente:</strong> Configuré tailwind.config.js con paleta de colores personalizada (10 tonos por color), tipografía custom usando Google Fonts (Inter para UI, Fira Code para código), spacing scale optimizado, y breakpoints estratégicos (sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px).</li>
                
                <li><strong>Mobile-first responsive design:</strong> Desarrollé todas las interfaces siguiendo metodología mobile-first, escribiendo estilos base para móvil y progresivamente añadiendo complejidad con media queries Tailwind (md:, lg:, xl:). Logré layouts perfectamente adaptables que reorganizan elementos según el viewport sin pérdida de funcionalidad.</li>
                
                <li><strong>Utility-first CSS optimization:</strong> Utilicé clases utility de Tailwind para construir interfaces sin escribir CSS custom, aprovechando modifiers como hover:, focus:, active:, group-hover:, peer-checked: para interactividad. Implementé dark mode con clase 'dark:' para tematización automática según preferencias del sistema.</li>
                
                <li><strong>Custom components y plugins:</strong> Extendí Tailwind creando componentes reutilizables mediante @apply en CSS, plugins personalizados para utilities específicas (glassmorphism effects, gradient texts, animated backgrounds), y configuración de aspectRatio, backdropBlur, y otras propiedades avanzadas.</li>
                
                <li><strong>Optimización de production build:</strong> Configuré PurgeCSS automático en Tailwind para eliminar clases no utilizadas, reduciendo el CSS final de 3.5MB a menos de 15KB. Implementé tree-shaking selectivo de componentes y utilicé Just-in-Time (JIT) mode para compilación on-demand durante desarrollo.</li>
            </ul>

            <h4 style="color: #88CE02; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">✨ Animaciones Avanzadas con GSAP</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>ScrollTrigger para animaciones on-scroll:</strong> Implementé GSAP ScrollTrigger en más de 20 secciones para animar elementos al entrar en viewport. Configuré triggers personalizados con start/end points, scrub para animaciones sincronizadas con scroll, pin para elementos sticky, y markers en desarrollo para debugging visual de trigger zones.</li>
                
                <li><strong>Timeline animations complejas:</strong> Creé timelines secuenciales con gsap.timeline() para coordinar múltiples animaciones, implementando stagger effects para listas (proyectos, skills, testimonios), easing functions personalizadas (Power4.easeOut, Elastic, Bounce), y control preciso de duration, delay y overlap entre animaciones.</li>
                
                <li><strong>Hero section animación de entrada:</strong> Desarrollé secuencia de animación dramática para el hero utilizando GSAP para animar título con SplitText (animación letra por letra), subtítulo con fade-in escalonado, CTA buttons con scale y rotation, y background gradient animado con morphing colors, todo orquestado en una timeline maestra.</li>
                
                <li><strong>Parallax y efectos 3D:</strong> Implementé efectos parallax multi-layer usando GSAP para crear profundidad visual, aplicando diferentes velocidades de scroll a elementos foreground/background. Utilicé transforms 3D (rotateX, rotateY, perspective) para cards interactivas que rotan al hover siguiendo posición del mouse.</li>
                
                <li><strong>Smooth scroll y navegación fluida:</strong> Integré GSAP ScrollToPlugin para navegación suave entre secciones con animación easing personalizada. Implementé anchor links que animan scroll position con duración y offset ajustables, mejorando UX significativamente comparado con scroll nativo del navegador.</li>
                
                <li><strong>Performance optimization de animaciones:</strong> Optimicé todas las animaciones GSAP utilizando will-change en CSS para elementos animados frecuentemente, force3D: true para aprovechar aceleración por GPU, y lazy loading de animaciones pesadas solo cuando el usuario las requiere, manteniendo 60fps constantes incluso en dispositivos de gama baja.</li>
            </ul>

            <h4 style="color: #00DDB3; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🎬 Animaciones Vectoriales con Lottie</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Integración de Lottie animations:</strong> Implementé biblioteca lottie-web para reproducir animaciones vectoriales JSON exportadas desde After Effects. Cargué 8 animaciones custom para ilustrar conceptos técnicos (loading spinners, success checks, error states, empty states, hero illustrations) con tamaño total menor a 200KB.</li>
                
                <li><strong>Control programático de playback:</strong> Desarrollé sistema de control JavaScript para animaciones Lottie con métodos play(), pause(), stop(), setSpeed(), setDirection(), y goToAndStop() para frames específicos. Implementé triggers basados en scroll position y user interactions para reproducción condicional.</li>
                
                <li><strong>Optimización de peso y carga:</strong> Optimicé archivos JSON de Lottie reduciendo keyframes innecesarios, simplificando paths vectoriales, y eliminando metadata redundante. Implementé lazy loading de animaciones con Intersection Observer para cargarlas solo cuando entran en viewport, reduciendo initial bundle size.</li>
                
                <li><strong>Animaciones interactivas y estados:</strong> Creé animaciones Lottie que responden a user input, como formulario de contacto que muestra diferentes animaciones según estado (idle → typing → validating → success/error), mejorando feedback visual y reduciendo perceived loading time.</li>
                
                <li><strong>Fallbacks y progressive enhancement:</strong> Implementé estrategia de fallback para navegadores que no soportan Lottie o tienen JavaScript deshabilitado, mostrando imágenes estáticas alternativas. Utilicé feature detection para cargar Lottie condicionalmente solo en navegadores compatibles.</li>
            </ul>

            <h4 style="color: #2ECC71; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🔍 SEO y Optimización para Buscadores</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Meta tags optimizados por página:</strong> Implementé meta tags dinámicos y únicos para cada página incluyendo title (50-60 caracteres), description (150-160 caracteres), Open Graph tags para social sharing (og:title, og:description, og:image, og:url), Twitter Cards, y canonical URLs para evitar contenido duplicado.</li>
                
                <li><strong>Structured data con Schema.org:</strong> Desarrollé JSON-LD structured data para Person, WebSite, BreadcrumbList, BlogPosting, y Portfolio schemas, mejorando rich snippets en SERPs. Google Search Console confirmó correcta indexación de todos los structured data implementados.</li>
                
                <li><strong>Sitemap XML dinámico:</strong> Configuré generación automática de sitemap.xml listando todas las páginas del sitio con prioridades, frecuencias de actualización (changefreq) y lastmod timestamps. Integré sitemap con Google Search Console y Bing Webmaster Tools para indexación acelerada.</li>
                
                <li><strong>Robots.txt y crawling optimization:</strong> Creé archivo robots.txt permitiendo acceso a crawlers principales mientras bloqueaba directorios innecesarios (/admin, /assets/raw, /temp). Implementé meta robots tags (index/noindex, follow/nofollow) estratégicamente en páginas específicas.</li>
                
                <li><strong>URLs semánticas y arquitectura:</strong> Diseñé estructura de URLs limpia y descriptiva (/proyectos/nombre-proyecto, /blog/titulo-articulo, /habilidades) sin parámetros innecesarios. Implementé breadcrumbs navegables con structured data para mejorar UX y SEO.</li>
                
                <li><strong>Core Web Vitals optimization:</strong> Optimicé métricas de Core Web Vitals logrando: LCP (Largest Contentful Paint) < 1.5s mediante optimización de imágenes hero, FID (First Input Delay) < 50ms con code splitting, CLS (Cumulative Layout Shift) = 0 reservando espacios para contenido dinámico.</li>
            </ul>

            <h4 style="color: #3498DB; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">♿ Accesibilidad Web (WCAG 2.1 AA)</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>HTML semántico y roles ARIA:</strong> Utilicé elementos HTML5 semánticos apropiados (nav, main, article, aside, section, header, footer) y roles ARIA (role="navigation", role="banner", role="complementary") donde era necesario. Implementé landmarks para navegación por screen readers.</li>
                
                <li><strong>Contraste de colores y visibilidad:</strong> Verifiqué ratios de contraste mínimos de 4.5:1 para texto normal y 3:1 para texto grande usando herramientas como WebAIM Contrast Checker. Implementé paleta de colores accesible que funciona para usuarios con deficiencias de visión de color (deuteranopia, protanopia).</li>
                
                <li><strong>Navegación por teclado completa:</strong> Garanticé que toda funcionalidad sea accesible vía teclado implementando focus states visibles, orden lógico de tabulación (tabindex), traps de foco en modals, y shortcuts de teclado para acciones comunes. Testeé navegación completa sin mouse.</li>
                
                <li><strong>Alternative text y media accessibility:</strong> Añadí alt text descriptivo a todas las imágenes (excepto decorativas con alt=""), transcripciones para videos, captions para contenido audio, y aria-label/aria-describedby para elementos interactivos sin texto visible.</li>
                
                <li><strong>Formularios accesibles:</strong> Implementé labels explícitos para todos los inputs, mensajes de error asociados con aria-describedby, validación en tiempo real anunciada por screen readers con aria-live, y autocomplete attributes para facilitar llenado de formularios.</li>
                
                <li><strong>Testing con herramientas especializadas:</strong> Realicé auditorías de accesibilidad con WAVE, axe DevTools, Lighthouse Accessibility, y testeé con screen readers reales (NVDA, JAWS, VoiceOver) para validar experiencia completa. Corregí todos los issues de nivel A y AA de WCAG 2.1.</li>
            </ul>

            <h4 style="color: #E74C3C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">⚡ Performance y Optimización</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Image optimization pipeline:</strong> Implementé pipeline automático de optimización de imágenes convirtiendo a formatos modernos (WebP con fallback JPEG, AVIF experimental), compresión lossy/lossless con Squoosh, generación de múltiples tamaños para srcset responsive, y lazy loading nativo con loading="lazy".</li>
                
                <li><strong>Critical CSS inlining:</strong> Extraje CSS crítico para above-the-fold content e inliné directamente en HTML para primera renderización sin bloqueo. Cargué CSS no crítico de forma asíncrona con media="print" onload="this.media='all'" y preload hints.</li>
                
                <li><strong>JavaScript code splitting:</strong> Dividí JavaScript en chunks lógicos por ruta usando dynamic imports. Implementé lazy loading de componentes pesados (carousel, modal, video player) solo cuando usuario interactúa, reduciendo bundle inicial de 180KB a 35KB.</li>
                
                <li><strong>Resource hints y preloading:</strong> Utilicé resource hints estratégicamente incluyendo dns-prefetch para dominios externos, preconnect para APIs críticas, prefetch para navegación anticipada, y preload para recursos críticos (fonts, hero images, above-fold CSS).</li>
                
                <li><strong>Compression y caching strategy:</strong> Configuré compresión Gzip/Brotli en servidor reduciendo assets en 70-80%. Implementé aggressive caching con service workers para recursos estáticos (cache-first), y network-first para contenido dinámico. Utilicé cache busting con hashes en filenames para invalidación automática.</li>
                
                <li><strong>Lighthouse scores perfectos:</strong> Logré scores consistentes de 100/100 en las cuatro categorías de Lighthouse (Performance, Accessibility, Best Practices, SEO) en todas las páginas principales del sitio, validado en múltiples dispositivos y condiciones de red.</li>
            </ul>

            <h4 style="color: #9B59B6; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🎮 Características Interactivas Especiales</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Sistema de filtrado dinámico de proyectos:</strong> Desarrollé filtro multi-categoría con animaciones smooth para mostrar/ocultar proyectos usando GSAP. Implementé URL state management para compartir vistas filtradas, y animación de re-layout con FLIP technique para transiciones fluidas.</li>
                
                <li><strong>Dark mode toggle automático:</strong> Implementé switch dark/light mode respetando preferencias del sistema (prefers-color-scheme) con override manual. Persistí preferencia en localStorage y apliqué tema antes de render inicial para evitar flash of unstyled content (FOUC).</li>
                
                <li><strong>Carousel personalizado accesible:</strong> Construí carousel desde cero con controles keyboard (arrow keys), navegación táctil (swipe gestures), autoplay pausable, indicadores de progreso, y lazy loading de slides. Implementé ARIA attributes para accesibilidad completa (role="region", aria-roledescription="carousel").</li>
                
                <li><strong>Modal system con focus management:</strong> Desarrollé sistema de modals reutilizable con backdrop blur, animaciones de entrada/salida GSAP, focus trap para navegación por teclado, scroll lock en body, y cierre con ESC key. Implementé stack para modals anidados.</li>
                
                <li><strong>Mini-juego interactivo:</strong> Creé videojuego simple integrado en sección "Hobbies" donde usuario puede interactuar con gato animado mediante clicks, desencadenando animaciones Lottie y efectos de sonido (con mute option). Implementé score tracking con leaderboard local.</li>
                
                <li><strong>Toast notifications system:</strong> Desarrollé sistema de notificaciones toast para feedback de acciones (formulario enviado, error de red, copia al portapapeles) con auto-dismiss, queue de múltiples toasts, animaciones stagger, y accesibilidad con aria-live="polite".</li>
            </ul>

            <h4 style="color: #1ABC9C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🛠️ Tooling, Testing y Deployment</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Configuración de desarrollo moderna:</strong> Configuré entorno de desarrollo con Vite (HMR ultra-rápido), ESLint para linting de código con reglas estrictas, Prettier para formateo automático, Husky para git hooks pre-commit, y lint-staged para validar solo archivos modificados.</li>
                
                <li><strong>Testing automatizado:</strong> Implementé tests con Vitest para funciones utility, validadores de formularios, y lógica de negocio. Escribí tests E2E con Playwright para flujos críticos (navegación, envío de formularios, sistema de filtrado), logrando 85% de code coverage.</li>
                
                <li><strong>CI/CD pipeline con GitHub Actions:</strong> Configuré workflow automatizado que ejecuta en cada push: linting, type checking TypeScript, tests unitarios, build de producción, y deployment automático a Vercel. Pipeline completo toma menos de 3 minutos.</li>
                
                <li><strong>Deployment en Vercel:</strong> Configuré deployment en Vercel con preview automático de PRs, rollback instantáneo, edge caching global, Analytics integrado, y custom domain con HTTPS automático. Implementé rewrite rules para SPA routing y redirects SEO.</li>
                
                <li><strong>Monitoring y error tracking:</strong> Integré Sentry para error tracking en producción, capturando JavaScript errors, performance issues, y user feedback. Configuré alerts para errores críticos y dashboards para monitorear health del sitio en tiempo real.</li>
                
                <li><strong>Git workflow y versioning:</strong> Seguí Git Flow con branches develop/main, feature branches para nuevas funcionalidades, commits convencionales (feat:, fix:, docs:, style:), y semantic versioning para releases. Mantuve changelog actualizado automáticamente con conventional-changelog.</li>
            </ul>
            <strong>Galería de imágenes:</strong> 
            <section id="slideshow">
                <div class="entire-content">
                    <div class="content-carrousel">
                        ${[
                          {
                            num: 1,
                            desc: "Página de inicio del portafolio con hero section animado usando GSAP. Implementé animaciones de entrada escalonadas con timeline maestra, efectos de texto con SplitText letra por letra, gradient animado en background, parallax multi-layer, y transiciones suaves de opacity/scale. El diseño responsivo con Tailwind adapta perfectamente el layout de 3 columnas en desktop a vista vertical en móvil.",
                          },
                          {
                            num: 2,
                            desc: "Sección 'Sobre mí' con diseño minimalista y tipografía cuidadosamente seleccionada usando Google Fonts (Inter variable para UI). Utilicé Tailwind utility classes para crear layout flexible con CSS Grid responsive, spacing consistente, y jerarquía visual clara. Las animaciones Lottie ilustran conceptos técnicos sin comprometer performance, cargadas lazy con Intersection Observer.",
                          },
                          {
                            num: 3,
                            desc: "Galería de proyectos con sistema de filtrado dinámico implementado completamente en TypeScript con interfaces tipadas. Cada ProjectCard tiene animaciones hover personalizadas usando GSAP (scale, rotation, shadow), transiciones smooth entre estados de filtrado con FLIP technique, y lazy loading de imágenes con srcset responsive. URL state management permite compartir vistas filtradas.",
                          },
                          {
                            num: 4,
                            desc: "Vista detallada de proyecto individual mostrando tecnologías utilizadas con íconos Devicon animados al scroll con GSAP ScrollTrigger. Implementé carousel custom con navegación táctil (swipe gestures), keyboard navigation (arrow keys), autoplay pausable, indicadores de progreso, y accesibilidad completa con ARIA roles. Lazy loading de slides optimiza performance.",
                          },
                          {
                            num: 5,
                            desc: "Sección de habilidades técnicas con barras de progreso animadas usando GSAP ScrollTrigger para activar cuando entran en viewport. Cada SkillBar anima desde 0% a valor final con easing personalizado Power4.easeOut. Diseño responsive con Tailwind breakpoints personalizados adapta grid de 3 columnas desktop a 1 columna móvil. Hover states revelan información adicional.",
                          },
                          {
                            num: 6,
                            desc: "Listado de certificaciones organizadas cronológicamente con Timeline vertical implementada con CSS Grid. Cada certificación muestra badge animado con Lottie, información estructurada (nombre, institución, fecha), y links verificables. Implementé structured data Schema.org para educationalCredential mejorando SEO. Filtros por categoría permiten búsqueda rápida.",
                          },
                          {
                            num: 7,
                            desc: "Formulario de contacto con validación en tiempo real usando TypeScript con custom validators y regex patterns. Implementé estados de UI (idle, validating, submitting, success, error) con animaciones Lottie correspondientes. Mensajes de error son accesibles con aria-describedby, focus management automático, y persistencia en localStorage para recuperar datos en caso de error.",
                          },
                          {
                            num: 8,
                            desc: "Footer responsivo con enlaces a redes sociales, cada ícono con efecto hover único creado con GSAP (rotation, scale, color change). Implementé smooth scroll to top button que aparece después de scroll 500px usando Intersection Observer. Newsletter signup integrado con validación email. Dark mode toggle persiste preferencia en localStorage.",
                          },
                          {
                            num: 9,
                            desc: "Sección dedicada a hobbies presentada con masonry layout usando CSS Grid auto-flow dense. Incluye mini-galería de imágenes con lightbox modal, animaciones subtle al hover, y lazy loading de media pesada. Cada hobby tiene descripción expandible con accordion pattern accesible, íconos animados con Lottie, y organización visual relajada que humaniza el portafolio.",
                          },
                          {
                            num: 10,
                            desc: "Sección de testimonios con carousel automático (intervalo 5s) y controles manuales. Las transiciones entre slides usan animaciones GSAP personalizadas con fade + slide efecto. Sistema de dots navigation sincronizado, pause on hover, y swipe gestures en touch devices. Cada testimonio incluye foto, nombre, cargo, y quote con tipografía destacada. Implementé lazy loading de avatars.",
                          },
                          {
                            num: 11,
                            desc: "Blog integrado con sistema de categorías multi-select y búsqueda full-text implementada con Fuse.js para fuzzy matching. Los artículos usan Astro Content Collections con Markdown/MDX, code syntax highlighting con Prism.js customizado, reading time estimation, y table of contents auto-generado. Meta información optimizada para SEO con Open Graph y Twitter Cards. RSS feed disponible.",
                          },
                          {
                            num: 12,
                            desc: "Aptitudes profesionales presentadas con radar chart interactivo construido con D3.js, mostrando nivel de dominio en diferentes áreas (Frontend, Backend, DevOps, Design, Soft Skills). Incluye filtros para categorizar habilidades técnicas vs blandas, indicadores visuales de años de experiencia, y tooltips informativos. Animación de entrada con GSAP para cada punto del radar.",
                          },
                          {
                            num: 13,
                            desc: "Vista móvil completa demostrando diseño responsive mobile-first. Todas las secciones adaptan perfectamente con Tailwind breakpoints: navbar colapsa en hamburger menu con animación smooth, grid layouts se convierten en single column, imágenes ajustan tamaño con srcset, y touch gestures están optimizados. Performance en mobile mantiene 95+ Lighthouse score con throttling 3G.",
                          },
                          {
                            num: 14,
                            desc: "Mini-juego interactivo 'Click the Cat' desarrollado con Canvas API y GSAP para animaciones. El usuario presiona sobre gato animado (sprite sheet) para activar diferentes reacciones aleatorias con efectos de sonido (Web Audio API con mute toggle). Sistema de score con localStorage persistence, easter eggs ocultos, y leaderboard. Implementado como progressive enhancement - no crítico para funcionalidad del sitio.",
                          },
                        ]
                          .map(
                            (img) => `
                    <figure class="shadow"
                        data-img="portafolio${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="/assets/experiencias/galerias/portafolio/portafolio${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                          )
                          .join("")}
                    </div>
                </div>
            </section>

            <section class="contact-section">
                <p class="contact-text">¿Te interesa conocer más sobre este proyecto, revisar el código fuente, o colaborar en algo similar? Contáctame directamente:</p>
                
                <div class="contact-options">
                    <a href="https://wa.me/525585067049" class="whatsapp-btn" target="_blank">
                        <span class="btn-icon">📱</span>
                        <span class="btn-text">Enviar WhatsApp</span>
                    </a>
                    
                    <a href="tel:+525585067049" class="call-btn">
                        <span class="btn-icon">📞</span>
                        <span class="btn-text">Llamar ahora</span>
                    </a>
                </div>
                
                <div class="contact-details">
                    <p class="phone-number">+52 55 8506 7049</p>
                    <p class="reference-name">Uziel Sánchez Marín</p>
                    <p class="reference-position">Desarrollador Full Stack | Creador de Experiencias Web</p>
                    <p style="color: #95A5A6; font-size: 0.95em; margin-top: 10px;">Disponible para proyectos freelance y colaboraciones</p>
                </div>
            </section>
        </div>
      `;
      
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `/assets/experiencias/galerias/portafolio/${img}`,
            desc
          );
        });
      });
      
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para Servet
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
    <div class="smaller-text">
    <div class="tech-section">
    <h3 class="tech-title">🚀 Tecnologías Utilizadas</h3>
    <div class="tech-grid">
        <div class="tech-item">
            <i class="devicon-spring-plain colored tech-icon"></i>
            <span>Spring Boot</span>
        </div>
        <div class="tech-item">
            <i class="devicon-java-plain colored tech-icon"></i>
            <span>Java 17</span>
        </div>
        <div class="tech-item">
            <i class="devicon-hibernate-plain colored tech-icon"></i>
            <span>Hibernate/JPA</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-leaf tech-icon" style="color: #6DB33F;"></i>
            <span>Thymeleaf</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-database tech-icon" style="color: #336791;"></i>
            <span>HSQLDB</span>
        </div>
        <div class="tech-item">
            <i class="devicon-javascript-plain colored tech-icon"></i>
            <span>JavaScript ES6+</span>
        </div>
        <div class="tech-item">
            <i class="devicon-css3-plain colored tech-icon"></i>
            <span>CSS3/SCSS</span>
        </div>
        <div class="tech-item">
            <i class="devicon-html5-plain colored tech-icon"></i>
            <span>HTML5</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-file-excel tech-icon" style="color: #217346;"></i>
            <span>Excel Avanzado</span>
        </div>
        <div class="tech-item">
            <i class="devicon-redis-plain colored tech-icon"></i>
            <span>Redis Cache</span>
        </div>
        <div class="tech-item">
            <i class="devicon-git-plain colored tech-icon"></i>
            <span>Git/GitHub</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-code-branch tech-icon" style="color: #F05032;"></i>
            <span>REST API</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-network-wired tech-icon" style="color: #FF6B6B;"></i>
            <span>WebSockets</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-envelope tech-icon" style="color: #D44638;"></i>
            <span>JavaMail SMTP</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-lock tech-icon" style="color: #6DB33F;"></i>
            <span>Spring Security</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-key tech-icon" style="color: #FB015B;"></i>
            <span>JWT Auth</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-chart-line tech-icon" style="color: #FF6384;"></i>
            <span>Chart.js</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-qrcode tech-icon" style="color: #4ECDC4;"></i>
            <span>QR Generator</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-file-pdf tech-icon" style="color: #E74C3C;"></i>
            <span>PDF Reports</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-file-excel tech-icon" style="color: #1D6F42;"></i>
            <span>Excel Export</span>
        </div>
        <div class="tech-item">
            <i class="devicon-bootstrap-plain colored tech-icon"></i>
            <span>Bootstrap 5</span>
        </div>
        <div class="tech-item">
            <i class="devicon-jquery-plain colored tech-icon"></i>
            <span>jQuery</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-boxes tech-icon" style="color: #F39C12;"></i>
            <span>JPackage</span>
        </div>
        <div class="tech-item">
            <i class="fas fa-calendar-alt tech-icon" style="color: #9B59B6;"></i>
            <span>FullCalendar</span>
        </div>
    </div>
</div>
        <p>
            Servet representa una solución integral desarrollada con Spring Boot para la gestión completa de negocios. 
            Esta plataforma combina tecnologías modernas como Hibernate, Thymeleaf, HSQLDB y herramientas de empaquetado 
            avanzadas para crear un sistema robusto y escalable.
        </p>
        
        <!-- Sección 0: Visión General del Proyecto -->
        <section>
            <h4>Visión General del Proyecto Servet</h4>
            <p>Esta sección ofrece un panorama completo del proyecto Servet, destacando sus componentes clave, arquitectura general y beneficios para la gestión de negocios. Incluye una visión integrada de todas las funcionalidades, desde el setup inicial hasta el cierre y resguardo de datos, enfatizando la escalabilidad, seguridad y usabilidad del sistema.</p>
            <ul>
                <li><strong>Arquitectura Integral:</strong> Basada en Spring Boot con capas MVC, persistencia en HSQLDB y vistas dinámicas con Thymeleaf. Utiliza RESTful APIs para comunicación entre módulos y WebSockets para actualizaciones en tiempo real. Prueba: Arranque completo del sistema, navegación por módulos principales y verificación de respuestas de APIs en Postman.</li>
                <li><strong>Funcionalidades Clave:</strong> Gestión de usuarios con autenticación JWT, CRM con segmentación de clientes, inventario multi-almacén, ventas POS con escaneo de códigos QR, promociones dinámicas, dashboards interactivos, alertas configurables y soporte multi-sucursal con sincronización en tiempo real. Prueba: Flujo end-to-end de una venta, desde escaneo de producto hasta generación de ticket digital, con alertas de stock bajo y reporte consolidado.</li>
                <li><strong>Beneficios:</strong> Escalabilidad para múltiples sucursales mediante microservicios, seguridad robusta con roles, auditoría de acciones y cifrado AES-256, optimización para dispositivos móviles con interfaces responsivas y soporte offline vía PWA. Prueba: Simulación de operaciones concurrentes con JMeter, backups automáticos con verificación de integridad y navegación fluida en emuladores de tablet.</li>
                <li><strong>Integración y Automatización:</strong> Incorpora herramientas CI/CD con Maven y Jenkins para despliegues automatizados, integración con servicios externos como Gmail SMTP para notificaciones y APIs de terceros para pagos. Prueba: Ejecución de pipeline de build, envío de correo automatizado y procesamiento de pago simulado.</li>
                <li><strong>Personalización y Flexibilidad:</strong> Permite configuraciones dinámicas para adaptarse a diferentes tipos de negocio, como ajustes de IVA por región, plantillas de reportes personalizables y módulos habilitados/deshabilitados según necesidades. Prueba: Creación de un reporte personalizado y cambio de configuración fiscal en tiempo real.</li>
                <li><strong>Rendimiento y Optimización:</strong> Uso de Redis para caché de consultas frecuentes, índices optimizados en HSQLDB y lazy loading para recursos estáticos. Prueba: Medición de tiempos de respuesta en consultas de inventario y carga de vistas en navegadores con herramientas de desarrollo.</li>
            </ul>
            <strong>Galería de imágenes - Visión General del Proyecto:</strong>
            <section id="slideshow">
                <div class="entire-content">
                    <div class="content-carrousel">
                        ${[
                          {
                            num: 1,
                            desc: "Vista panorámica de la arquitectura general de Servet, mostrando la integración de capas MVC con Spring Boot y HSQLDB. La captura ilustra el flujo de datos desde el frontend hasta la persistencia.",
                          },
                          {
                            num: 2,
                            desc: "Dashboard principal del sistema, con KPIs integrados de ventas, inventario y alertas. La captura destaca la visualización en tiempo real de métricas clave para la toma de decisiones.",
                          },
                          {
                            num: 3,
                            desc: "Flujo completo de una venta POS, desde el escaneo de productos hasta la generación de ticket. La captura muestra la interfaz responsiva optimizada para tablets y móviles.",
                          },
                          {
                            num: 4,
                            desc: "Sistema de seguridad y roles, con matriz de permisos y autenticación JWT. La captura ilustra un intento de acceso denegado y el log de auditoría correspondiente.",
                          },
                          {
                            num: 5,
                            desc: "Gestión de inventario multi-sucursal, con sincronización en tiempo real. La captura muestra el stock consolidado y movimientos entre almacenes.",
                          },
                          {
                            num: 6,
                            desc: "Módulo de promociones y descuentos aplicados en un carrito de compras. La captura destaca la resolución automática de reglas y el recálculo de totales.",
                          },
                          {
                            num: 7,
                            desc: "Calendario y tareas integradas con recordatorios automáticos. La captura muestra eventos programados y notificaciones enviadas por email.",
                          },
                          {
                            num: 8,
                            desc: "Reportes programados y exportaciones a CSV/PDF. La captura ilustra un reporte consolidado de ventas multi-sucursal con gráficos embebidos.",
                          },
                          {
                            num: 9,
                            desc: "Sistema de alertas y notificaciones internas/externas. La captura muestra una alerta de stock bajo y su resolución en la UI.",
                          },
                          {
                            num: 10,
                            desc: "Proceso de empaquetado y despliegue, incluyendo .jar y instalador .exe. La captura destaca el pipeline de build automatizado con Maven.",
                          },
                          {
                            num: 11,
                            desc: "Gestión de clientes CRM con búsqueda inteligente y tickets digitales. La captura ilustra el historial de interacciones y segmentación de clientes.",
                          },
                          {
                            num: 12,
                            desc: "Cierre contable y backups automáticos. La captura muestra el reporte final de cierre y la verificación de integridad de datos restaurados.",
                          },
                          {
                            num: 13,
                            desc: "Pruebas de rendimiento y concurrencia con JMeter. La captura ilustra resultados de simulaciones con múltiples usuarios concurrentes.",
                          },
                          {
                            num: 14,
                            desc: "Documentación general del proyecto en Trello y Google Docs. La captura destaca el tablero Kanban con sprints y diagramas UML integrados.",
                          },
                          {
                            num: 15,
                            desc: "Gestión completa de la sección de pedidos. La captura muestra el panel donde se registran, revisan y actualizan los pedidos, incluyendo estados de procesamiento, fechas de entrega y detalles de clientes.",
                          },
                          {
                            num: 16,
                            desc: "Sistema de generación y envío de e-tickets por correo electrónico. La captura muestra el flujo de creación del ticket, notificación automática al cliente y confirmación de recepción en su bandeja de entrada.",
                          },
                          {
                            num: 17,
                            desc: "Generación y envío de una gran variedad de reportes por correo electrónico. La captura muestra diferentes tipos de reportes automatizados, entregados a los destinatarios con formato claro y organizado.",
                          },
                          {
                            num: 18,
                            desc: "Implementación de un sistema de roles con notificaciones personalizadas según el perfil del usuario. La captura muestra cómo cada rol recibe alertas y accesos diferenciados dentro del sistema.",
                          },
                          {
                            num: 19,
                            desc: "Desarrollo de una API única para tablets con manejo de ventanas responsivas. La captura muestra la interfaz adaptativa y la comunicación centralizada entre la app y el servidor.",
                          },
                          {
                            num: 20,
                            desc: "Panel de gestión de stock y anaqueles. La captura muestra la visualización de los anaqueles con diferentes filas y columnas, productos organizados por ubicación y lote, y la posibilidad de agregar anaqueles, mover productos y cargar inventario de manera rápida y clara.",
                          },
                        ]
                          .map(
                            (img) => `
                            <figure class="shadow"
                                data-img="servet${img.num}.png"
                                data-desc="${img.desc.replace(/"/g, "&quot;")}">
                                <img src="/assets/experiencias/galerias/servet/general/servet${
                                  img.num
                                }.png"/>
                                <figcaption class="image-caption">Ver detalles</figcaption>
                            </figure>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </section>
            
            <strong>Video General del Proyecto:</strong>
            <table style="width: 100%; height: 100%;">
                <tr>     
                <td style="text-align: center; vertical-align: middle;">      
                    <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; font-family: Arial, sans-serif; padding: 10px; box-sizing: border-box;">
                        <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; width: 100%; max-width: 900px; border-radius: 10px; box-shadow: 0 10px 25px rgba(0,0,0,0.8); border: 2px solid rgba(40,40,40,0.6);">
                            <iframe id="youtubeVideo" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 10px;" 
                                    src="https://www.youtube.com/embed/5B_Jc2Z1IC4?enablejsapi=1"
                                    frameborder="0" 
                                    allowfullscreen>
                            </iframe>
                        </div>
                        
                        <div style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%); border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.7); width: 100%; max-width: 900px; border: 1px solid rgba(60,60,60,0.4); box-sizing: border-box;">
                            <h3 style="color: #cccccc; text-align: center; margin-bottom: 20px; font-size: clamp(16px, 4vw, 20px); text-shadow: 0 2px 4px rgba(0,0,0,0.8);">⚡ Capítulos del Video</h3>
                            
                            <!-- Selector desplegable para pantallas pequeñas -->
                            <div style="display: block;">
                                <select id="chapterSelector" onchange="goToChapter(this.value)" style="width: 100%; padding: 15px; background: rgba(40,40,40,0.8); border: 1px solid rgba(60,60,60,0.6); border-radius: 8px; color: #cccccc; font-size: 14px; margin-bottom: 20px; cursor: pointer;">
                                    <option value="">📋 Selecciona un capítulo</option>
                                    <option value="0">🏠 00:00 - Introducción</option>
                                    <option value="165">📝 02:45 - Gestión de tareas</option>
                                    <option value="249">🗂 04:09 - Estructura del proyecto</option>
                                    <option value="546">💻 09:06 - Creación del instalable</option>
                                    <option value="1250">⚙️ 20:50 - Instalación de la aplicación</option>
                                    <option value="1427">👀 23:47 - Primer inicio y vista de usuario</option>
                                    <option value="1780">🔑 29:40 - Funcionalidades principales</option>
                                    <option value="1991">💰 33:11 - Módulo de ventas</option>
                                    <option value="3084">📊 51:24 - Estadísticas</option>
                                    <option value="3463">👥 57:43 - Clientes y pedidos</option>
                                    <option value="3499">👤 58:19 - Usuarios</option>
                                    <option value="3792">📋 63:12 - Contabilidad</option>
                                    <option value="3925">⚙️ 65:25 - Ajustes generales</option>
                                    <option value="4268">🔔 71:08 - Alertas y notificaciones</option>
                                    <option value="4654">📅 77:34 - Calendario y tareas</option>
                                    <option value="5133">🎁 85:33 - Ofertas y promociones</option>
                                    <option value="5539">📦 92:19 - Productos y almacenamiento</option>
                                    <option value="5982">📱 99:42 - Uso en tablet</option>
                                </select>
                            </div>
                            
                            <!-- Grid de botones para pantallas medianas y grandes -->
                            <div id="buttonGrid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 8px;">
                                <button onclick="seekTo(0)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" 
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🏠 00:00 - Introducción
                                </button>
                                
                                <button onclick="seekTo(165)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📝 02:45 - Gestión de tareas
                                </button>
                                
                                <button onclick="seekTo(249)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🗂 04:09 - Estructura del proyecto
                                </button>
                                
                                <button onclick="seekTo(546)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    💻 09:06 - Creación del instalable
                                </button>
                                
                                <button onclick="seekTo(1250)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    ⚙️ 20:50 - Instalación de la aplicación
                                </button>
                                
                                <button onclick="seekTo(1427)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    👀 23:47 - Primer inicio y vista de usuario
                                </button>
                                
                                <button onclick="seekTo(1780)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🔑 29:40 - Funcionalidades principales
                                </button>
                                
                                <button onclick="seekTo(1991)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    💰 33:11 - Módulo de ventas
                                </button>
                                
                                <button onclick="seekTo(3084)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📊 51:24 - Estadísticas
                                </button>
                                
                                <button onclick="seekTo(3463)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    👥 57:43 - Clientes y pedidos
                                </button>
                                
                                <button onclick="seekTo(3499)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    👤 58:19 - Usuarios
                                </button>
                                
                                <button onclick="seekTo(3792)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📋 63:12 - Contabilidad
                                </button>
                                
                                <button onclick="seekTo(3925)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    ⚙️ 65:25 - Ajustes generales
                                </button>
                                
                                <button onclick="seekTo(4268)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🔔 71:08 - Alertas y notificaciones
                                </button>
                                
                                <button onclick="seekTo(4654)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📅 77:34 - Calendario y tareas
                                </button>
                                
                                <button onclick="seekTo(5133)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    🎁 85:33 - Ofertas y promociones
                                </button>
                                
                                <button onclick="seekTo(5539)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📦 92:19 - Productos y almacenamiento
                                </button>
                                
                                <button onclick="seekTo(5982)" style="background: rgba(40,40,40,0.6); border: 1px solid rgba(60,60,60,0.4); color: #b3b3b3; padding: 10px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; transition: all 0.3s; backdrop-filter: blur(5px); text-align: left; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
                                    onmouseover="this.style.background='rgba(60,60,60,0.8)'; this.style.transform='translateY(-1px)'; this.style.color='#ffffff'" 
                                    onmouseout="this.style.background='rgba(40,40,40,0.6)'; this.style.transform='translateY(0)'; this.style.color='#b3b3b3'">
                                    📱 99:42 - Uso en tablet
                                </button>
                            </div>
                        </div>
                    </div>
                </td>
                </tr>
            </table>
            <section class="contact-section">
              <p class="contact-text">
                Para obtener más información sobre mi desempeño en el proyecto como desarrollador full stack, analista y en las diferentes áreas que abarcó mi participación, puedes contactar a:
              </p>

              <div class="contact-options">
                <a href="https://wa.me/525648238196" class="whatsapp-btn" target="_blank">
                  <span class="btn-icon">📱</span>
                  <span class="btn-text">Enviar WhatsApp</span>
                </a>

                <a href="tel:+525648238196" class="call-btn">
                  <span class="btn-icon">📞</span>
                  <span class="btn-text">Llamar ahora</span>
                </a>
              </div>

              <div class="contact-details">
                <p class="phone-number">+52 56 4823 8196</p>
                <p class="reference-name">Ing. Said López Velázquez</p>
                <p class="reference-position">Encargado y Desarrollador del Proyecto</p>
              </div>
            </section>
            
        <button id="saber-mas" style="margin: 20px auto; display: block; padding: 12px 24px; background: linear-gradient(135deg, #ff0000, #cc0000); color: #000000; border: 2px solid #000000; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);" onmouseover="this.style.background='linear-gradient(135deg, #cc0000, #990000)'; this.style.borderColor='#333333'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 0, 0, 0.4)'" onmouseout="this.style.background='linear-gradient(135deg, #ff0000, #cc0000)'; this.style.borderColor='#000000'; this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255, 0, 0, 0.3)'" onmousedown="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 10px rgba(255, 0, 0, 0.3)'" onmouseup="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 0, 0, 0.4)'">Saber más sobre este proyecto</button>
        </section>

        <!-- Contenido detallado (oculto inicialmente) -->
        <div id="detalles" style="display: none;">
            <!-- Sección 1: Setup, estructura y empaquetado -->
            <section>
                <h4>1. Setup, estructura y empaquetado</h4>
                <p>Esta sección cubre la configuración inicial, la estructura del repositorio y los procesos de empaquetado del sistema Servet, asegurando una base sólida para el desarrollo y despliegue.</p>
                <ul>
                    <li><strong>V01 – Estructura del repo + capas (Controller/Service/Repository/View):</strong> El repositorio está organizado en paquetes para controllers, services, repositories y views. Incluye DTOs para transferencia de datos, entities para modelado de base de datos, templates Thymeleaf para vistas y scripts JS para interactividad frontend. Prueba: Acceso al endpoint /health que devuelve un JSON de estado.</li>
                    <li><strong>V02 – application.properties limpio y seguro:</strong> Configuración de propiedades para HSQLDB, correo electrónico, Thymeleaf, logs, scheduler y recursos estáticos. Las credenciales sensibles se redactan en demostraciones. Prueba: Arranque del servidor en puerto 8080 y verificación de zona horaria configurada.</li>
                    <li><strong>V03 – Carpeta de datos y persistencia:</strong> Datos almacenados en $/{user.dir}/data/storage para HSQLDB, con perfiles dev/prod. Prueba: Creación de la base de datos, ubicación de archivos y realización de backup/restore copiando la carpeta.</li>
                    <li><strong>V04 – Build y empaquetado (.jar, jlink, jpackage):</strong> Uso de mvn package para generar .jar, script .bat para automatización, jlink para runtime personalizado y jpackage para instalador. Prueba: Generación de .exe, instalación y ejecución de la aplicación.</li>
                    <li><strong>V05 – Service Worker y Manifest (si aplica):</strong> Inclusión de manifest.json y sw.js para soporte PWA. Prueba: Carga de íconos y caché básico de assets.</li>
                    <li><strong>V06 – Organización y gestión (Trello + Google Docs/Drive):</strong> Gestión de tareas mediante tableros Trello con sprints y tarjetas, y documentación en Google Docs/Drive. Prueba: Capturas de tablero mostrando el flujo de trabajo organizado.</li>
                </ul>
                <strong>Galería de imágenes - Setup, estructura y empaquetado:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Diseñé la estructura inicial del repositorio con una clara separación en capas MVC (Controller, Service, Repository, View). Implementé un endpoint /health usando Spring Boot Actuator que devuelve el estado del sistema en JSON, optimizado para monitoreo en tiempo real. La captura muestra la respuesta del endpoint con métricas básicas.",
                              },
                              {
                                num: 2,
                                desc: "Configuré un application.properties modularizado con perfiles dev/prod. Implementé variables seguras para HSQLDB y SMTP usando Spring Externalized Configuration. La captura muestra la interfaz de configuración del puerto 8080 y la verificación de zona horaria con un script de prueba.",
                              },
                              {
                                num: 3,
                                desc: "Desarrollé un sistema de persistencia basado en HSQLDB con almacenamiento en $/{user.dir}/data/storage. La captura muestra la estructura de carpetas generada automáticamente y un script de backup/restore probado con éxito, garantizando la portabilidad de los datos.",
                              },
                              {
                                num: 4,
                                desc: "Implementé un pipeline de build con Maven que genera un .jar ejecutable. Usé jlink para un runtime personalizado y jpackage para un instalador .exe. La captura muestra el proceso de generación del instalador y su ejecución exitosa en Windows.",
                              },
                              {
                                num: 5,
                                desc: "Desarrollé un manifest.json y un Service Worker (sw.js) para habilitar capacidades PWA. La captura muestra el panel de desarrolladores de Chrome confirmando la carga de íconos y el almacenamiento en caché de assets estáticos para acceso offline.",
                              },
                              {
                                num: 6,
                                desc: "Organicé la gestión del proyecto en Trello con tableros Kanban para sprints. La captura muestra un tablero con tareas categorizadas por estado (To Do, In Progress, Done) y enlaces a documentos en Google Drive con especificaciones técnicas.",
                              },
                              {
                                num: 7,
                                desc: "Implementé un sistema de logging estructurado con Logback, configurado desde application.properties. La captura muestra logs detallados de un arranque exitoso del servidor, con correlación de eventos por request ID para facilitar el debugging.",
                              },
                              {
                                num: 8,
                                desc: "Desarrollé scripts .bat para automatizar el proceso de build y empaquetado. La captura muestra la ejecución del script que genera el .jar y realiza pruebas automáticas de integración, verificando la correcta configuración del entorno.",
                              },
                              {
                                num: 9,
                                desc: "Configuré Thymeleaf para vistas dinámicas con plantillas modulares. La captura muestra una vista de prueba renderizada con datos dummy, incluyendo fragmentos reutilizables para el header y footer, optimizados para SEO.",
                              },
                              {
                                num: 10,
                                desc: "Implementé un sistema de recursos estáticos con cache busting usando hashes en los nombres de archivos. La captura muestra el directorio de assets en el servidor y el tiempo de carga optimizado en el navegador gracias al caching.",
                              },
                              {
                                num: 11,
                                desc: "Desarrollé DTOs para transferencia de datos entre capas, con validaciones usando Bean Validation. La captura muestra un ejemplo de un DTO serializado a JSON en una respuesta de API, con validaciones de campos requeridos aplicadas.",
                              },
                              {
                                num: 12,
                                desc: "Configuré un entorno de desarrollo con HSQLDB in-memory para pruebas rápidas. La captura muestra el esquema de la base de datos generado automáticamente y una consulta de prueba ejecutada desde una herramienta de gestión como DBeaver.",
                              },
                              {
                                num: 13,
                                desc: "Implementé un script de inicialización para seeds de datos en HSQLDB. La captura muestra los datos iniciales cargados en la tabla de configuración, con índices optimizados para consultas frecuentes.",
                              },
                              {
                                num: 14,
                                desc: "Desarrollé documentación técnica en Google Docs, con diagramas UML generados automáticamente. La captura muestra un diagrama de clases para la capa de persistencia, incluyendo relaciones entre entidades y anotaciones Hibernate.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/setup/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>Video de configuración, estructura y empaquetado:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/OLV3EyUBAlk"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 2: Usuarios, login, roles y seguridad -->
            <section>
                <h4>2. Usuarios, login, roles y seguridad</h4>
                <p>Esta sección detalla la gestión de usuarios, autenticación y control de accesos basado en roles para garantizar la seguridad del sistema.</p>
                <ul>
                    <li><strong>V07 – Modelo User + Privilege:</strong> Entidades para usuarios y privilegios con relaciones, incluyendo seed inicial de datos. Prueba: Visualización de usuarios en la base de datos.</li>
                    <li><strong>V08 – Login + sesión:</strong> Controlador para login, almacenamiento de usuario autenticado en sesión o contexto. Prueba: Inicio y cierre de sesión, acceso a endpoint /me.</li>
                    <li><strong>V09 – Autorización por rol (vendedor/almacenista/admin/supervisor):</strong> Implementación de interceptores o anotaciones para matriz de permisos. Prueba: Bloqueo de vistas según el rol del usuario.</li>
                    <li><strong>V10 – QR para login cliente/usuario:</strong> Generación y lectura de códigos QR para autenticación. Prueba: Login vía QR desde dispositivo móvil o tablet.</li>
                </ul>
                <strong>Galería de imágenes - Usuarios, login, roles y seguridad:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Implementé el modelo User con Hibernate, definiendo relaciones muchos-a-muchos con Privilege. La captura muestra el esquema de la base de datos con las tablas generadas y un seed inicial de usuarios con roles predefinidos.",
                              },
                              {
                                num: 2,
                                desc: "Desarrollé un controlador de login con Spring Security, usando JWT para autenticación stateless. La captura muestra la respuesta del endpoint /login con un token generado y su validación en Postman.",
                              },
                              {
                                num: 3,
                                desc: "Configuré una matriz de permisos basada en roles usando anotaciones @PreAuthorize. La captura muestra un intento de acceso denegado para un usuario vendedor a una vista administrativa, con mensaje de error personalizado.",
                              },
                              {
                                num: 4,
                                desc: "Implementé un generador de QR para login usando ZXing. La captura muestra un código QR generado dinámicamente, que al escanearse desde un móvil redirige a la pantalla de autenticación.",
                              },
                              {
                                num: 5,
                                desc: "Desarrollé un endpoint /me que devuelve los detalles del usuario autenticado, incluyendo roles y permisos. La captura muestra la respuesta JSON con datos del usuario logueado y su sesión activa.",
                              },
                              {
                                num: 6,
                                desc: "Configuré Spring Security para manejar sesiones con timeout configurable. La captura muestra la pantalla de login con un mensaje de sesión expirada tras inactividad prolongada.",
                              },
                              {
                                num: 7,
                                desc: "Implementé un sistema de auditoría de login con logs de intentos fallidos. La captura muestra el registro de un intento de login fallido, incluyendo IP y timestamp para análisis de seguridad.",
                              },
                              {
                                num: 8,
                                desc: "Desarrollé un formulario de login responsivo con Thymeleaf y validaciones en tiempo real. La captura muestra la interfaz con mensajes de error dinámicos para credenciales incorrectas.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un interceptor para restringir acceso a endpoints según roles. La captura muestra un log del interceptor bloqueando una solicitud no autorizada, con detalles del usuario y la acción denegada.",
                              },
                              {
                                num: 10,
                                desc: "Implementé un sistema de recuperación de contraseña con envío de enlace temporal por email. La captura muestra el correo generado con un enlace cifrado y su correspondiente endpoint de validación.",
                              },
                              {
                                num: 11,
                                desc: "Desarrollé un panel de administración de usuarios con CRUD completo. La captura muestra la interfaz para crear un nuevo usuario, con selección de roles y validaciones de unicidad de email.",
                              },
                              {
                                num: 12,
                                desc: "Implementé un sistema de roles dinámicos, permitiendo la creación de nuevos roles desde la UI. La captura muestra la interfaz de gestión de roles con permisos editables.",
                              },
                              {
                                num: 13,
                                desc: "Configuré un mecanismo de bloqueo de cuentas tras múltiples intentos fallidos. La captura muestra una alerta en la UI informando al usuario del bloqueo temporal y las instrucciones para desbloqueo.",
                              },
                              {
                                num: 14,
                                desc: "Desarrollé estadísticas de usuario con base a las ventas y actividad reciente.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/usuarios/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/dnUihKXeZMo"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 3: Clientes (CRM) -->
            <section>
                <h4>3. Clientes (CRM)</h4>
                <p>Gestión de clientes con funcionalidades CRM básicas para registro, búsqueda y comunicaciones automatizadas.</p>
                <ul>
                    <li><strong>V11 – CRUD de clientes:</strong> Repository, Service y Controller para operaciones CRUD, con formulario HTML y JS. Prueba: Alta, edición, búsqueda y validaciones de clientes.</li>
                    <li><strong>V12 – Búsqueda inteligente:</strong> Endpoints con parámetros de consulta e índices simples. Prueba: Autocompletado por nombre, teléfono o email.</li>
                    <li><strong>V13 – Ticket digital al correo del cliente:</strong> Servicio de correo con plantilla HTML para tickets. Prueba: Envío real mediante Gmail SMTP.</li>
                </ul>
                <strong>Galería de imágenes - Clientes (CRM):</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un formulario de alta de clientes con validaciones en tiempo real usando Bean Validation. La captura muestra la interfaz con campos obligatorios resaltados y mensajes de error dinámicos para entradas inválidas.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un endpoint de búsqueda inteligente con índices en HSQLDB para consultas rápidas. La captura muestra el autocompletado en acción, sugiriendo clientes por nombre y email en tiempo real.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un servicio de envío de tickets digitales usando JavaMail con plantillas HTML en Thymeleaf. La captura muestra un correo recibido con el diseño del ticket, incluyendo un QR para seguimiento.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé una tabla de clientes con paginación del lado del servidor. La captura muestra la interfaz con filtros aplicados, ordenamiento por columnas y exportación a CSV.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un historial de interacciones por cliente, almacenado en una tabla secundaria. La captura muestra una vista detallada de un cliente con su historial de compras y comunicaciones.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un sistema de importación masiva de clientes desde CSV. La captura muestra el formulario de carga con validaciones previas y un resumen de los registros importados.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un dashboard de clientes con KPIs como número de clientes activos y frecuencia de compras. La captura muestra gráficos generados con Chart.js basados en consultas agregadas.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de segmentación de clientes basado en reglas dinámicas. La captura muestra la interfaz para crear segmentos, con filtros por ubicación y volumen de compras.",
                              },
                              {
                                num: 9,
                                desc: "Configuré notificaciones automáticas para clientes inactivos usando un scheduler. La captura muestra un correo programado con una oferta personalizada para reactivar al cliente.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un endpoint para actualización masiva de datos de clientes. La captura muestra la interfaz con selección múltiple y confirmación previa para evitar errores.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un sistema de auditoría para cambios en datos de clientes. La captura muestra un log detallado de modificaciones, incluyendo usuario responsable y timestamp.",
                              },
                              {
                                num: 12,
                                desc: "Configuré un formulario responsivo para edición de clientes, con soporte para dispositivos móviles. La captura muestra la interfaz en una tablet, con campos optimizados para entrada táctil.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé un sistema de exportación de clientes a PDF con formato personalizado. La captura muestra un reporte generado con detalles de clientes filtrados por región.",
                              },
                              {
                                num: 14,
                                desc: "Se agregó un código QR para registrar un cliente o que ellos mismos se registren accediendo a este.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/clientes/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/pVKj7_eEQ5w"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 4: Catálogos y ajustes -->
            <section>
                <h4>4. Catálogos y ajustes</h4>
                <p>Administración de catálogos base y configuraciones fiscales para adaptar el sistema a necesidades específicas.</p>
                <ul>
                    <li><strong>V14 – Catálogos base (Brand, Department, Supplier, TypeSocialReason, Store):</strong> CRUD rápidos con vistas asociadas. Prueba: Creación, edición y visualización en combos desplegables.</li>
                    <li><strong>V15 – IVA y configuración fiscal (VAT):</strong> Almacenamiento de tasas por tienda. Prueba: Cálculo automático en ventas.</li>
                    <li><strong>V16 – Ajustes/Settings:</strong> Vista única para toggles y parámetros como alertas y límites. Prueba: Cambio de ajuste y verificación de efecto inmediato.</li>
                </ul>
                <strong>Galería de imágenes - Catálogos y ajustes:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un CRUD para catálogos base usando Thymeleaf y Spring Data JPA. La captura muestra la interfaz para crear una nueva marca, con validaciones de unicidad y combos dinámicos.",
                              },
                              {
                                num: 2,
                                desc: "Implementé una vista de edición para departamentos con soporte para jerarquías. La captura muestra la interfaz con un árbol interactivo para organizar departamentos y subdepartamentos.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de configuración fiscal con tasas de IVA por tienda. La captura muestra la interfaz de ajustes con un formulario para definir tasas y su aplicación inmediata en una venta de prueba.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé combos desplegables dinámicos para catálogos, con precarga de datos vía AJAX. La captura muestra un formulario de producto con selección de proveedor y tipo de razón social.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de auditoría para cambios en catálogos. La captura muestra un log de modificaciones en la tabla de proveedores, con detalles del usuario y la acción realizada.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un endpoint para exportar catálogos a CSV. La captura muestra un archivo generado con datos de marcas, incluyendo metadatos como fecha de creación.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé una vista de ajustes generales con toggles para activar/desactivar alertas. La captura muestra la interfaz con configuraciones aplicadas y un mensaje de confirmación tras guardar.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de importación masiva para catálogos desde CSV. La captura muestra el formulario con validaciones previas y un resumen de los registros procesados.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard para monitorear el estado de los catálogos. La captura muestra estadísticas sobre la cantidad de marcas y proveedores activos, generadas con Chart.js.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de edicion para evitar duplicados en catálogos. La captura muestra el formulario de edicion de marca.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un mecanismo de caché para combos desplegables. La captura muestra el tiempo de respuesta optimizado para una consulta de proveedores en un formulario.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas responsivas para la gestión de catálogos en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 13,
                                desc: "Desarrolle el Overlay con una interfaz de cambio de opciones detallado. La captura muestra del lado derecho las opciones de navegacion entre estos catalogos.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar catálogos en tiempo real. La captura muestra una respuesta JSON con datos de departamentos, consumida por un cliente externo.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/catalogos/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/chASH0agI0s"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 5: Inventario, almacén y anaqueles -->
            <section>
                <h4>5. Inventario, almacén y anaqueles</h4>
                <p>Gestión completa del inventario, incluyendo productos, precios, almacenes y alertas relacionadas.</p>
                <ul>
                    <li><strong>V17 – Modelo de producto (Product, Price, imágenes):</strong> Alta de productos con imágenes y validaciones. Prueba: Subida de imagen y visualización en listas.</li>
                    <li><strong>V18 – Mayoreo y escalas de precio:</strong> Precios por tramos basados en cantidades. Prueba: Aplicación en carrito según cantidad.</li>
                    <li><strong>V19 – Almacenes y anaqueles (Warehouse, Shelf):</strong> CRUD y relaciones entre entidades. Prueba: Creación de anaquel y asignación de productos.</li>
                    <li><strong>V20 – Stock e inventarios (WarehouseInventory, InventoryFloor):</strong> Manejo de entradas, salidas y movimientos. Prueba: Movimiento de stock de almacén a piso.</li>
                    <li><strong>V21 – Conteo y ajuste de inventario:</strong> Endpoint para ajustes con auditoría básica. Prueba: Registro de conteo y ajuste correspondiente.</li>
                    <li><strong>V22 – Vencimientos (AlertExpiry):</strong> Fechas de caducidad por producto o lote. Prueba: Listado de productos próximos a vencer.</li>
                    <li><strong>V23 – Stock bajo (AlertLowStock):</strong> Umbrales configurables por producto o anaquel. Prueba: Generación de alerta al realizar una venta.</li>
                </ul>
                <strong>Galería de imágenes - Inventario, almacén y anaqueles:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un formulario para alta de productos con soporte para imágenes múltiples usando Spring MultipartFile. La captura muestra la interfaz con previsualización de imágenes y validaciones de formato.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema de precios por tramos para ventas al mayoreo. La captura muestra una vista de edición de producto con configuración de escalas de precio basadas en cantidades.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un CRUD para almacenes con relaciones muchos-a-muchos con anaqueles. La captura muestra la interfaz para asignar productos a un anaquel específico en un almacén.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un sistema de movimientos de inventario con transacciones @Transactional. La captura muestra un log de un movimiento de stock de almacén a piso, con auditoría incluida.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un endpoint para ajustes de inventario con validaciones de usuario. La captura muestra el formulario de conteo con diferencias detectadas y confirmación previa.",
                              },
                              {
                                num: 6,
                                desc: "Configuré alertas de vencimiento usando un scheduler @Scheduled. La captura muestra una lista de productos próximos a vencer, con filtros por fecha y almacén.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de alertas de stock bajo con umbrales configurables. La captura muestra una notificación en la UI tras una venta que reduce el stock por debajo del límite.",
                              },
                              {
                                num: 8,
                                desc: "Implementé una tabla de inventario con paginación y búsqueda en tiempo real. La captura muestra la interfaz con filtros aplicados y ordenamiento por stock disponible.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard de inventario con KPIs como rotación de stock. La captura muestra gráficos generados con Chart.js basados en movimientos históricos.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de importación masiva de productos desde CSV. La captura muestra el formulario con validaciones previas y un resumen de los productos importados.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un mecanismo de caché para consultas frecuentes de inventario usando Redis. La captura muestra el tiempo de respuesta optimizado para una consulta de stock.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas responsivas para la gestión de inventario en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 13,
                                desc: "Se desarrollaron imágenes representativas de los anaqueles dentro de la aplicación, mostrando la organización y ubicación de los productos en los almacenes.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar el stock en tiempo real. La captura muestra una respuesta JSON con datos de inventario, consumida por un cliente externo.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/inventario/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/d7D3H7PTlxA"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 6: Ventas y caja (flujo completo POS) -->
            <section>
                <h4>6. Ventas y caja (flujo completo POS)</h4>
                <p>Flujo integral de punto de venta, desde apertura hasta cierre, incluyendo pagos y tickets.</p>
                <ul>
                    <li><strong>V24 – Escáner y búsqueda por código de barras:</strong> Lectura desde input o teclado, integración con ZXing si aplica. Prueba: Escaneo y adición al carrito.</li>
                    <li><strong>V25 – Carrito de venta y totales:</strong> JS para carrito con descuentos por línea e IVA. Prueba: Recálculo en tiempo real.</li>
                    <li><strong>V26 – Métodos de pago (MethodPayment):</strong> Soporte para efectivo, tarjeta o mixto. Prueba: Pagos parciales o mixtos.</li>
                    <li><strong>V27 – Apertura de turno:</strong> Control de inicio de turno por usuario y terminal. Prueba: Apertura y bloqueo de ventas sin turno activo.</li>
                    <li><strong>V28 – Apertura de caja:</strong> Registro de fondo inicial con validaciones. Prueba: Apertura y visualización de saldo.</li>
                    <li><strong>V29 – Venta completa + generación de Sales/Ticket:</strong> Persistencia transaccional. Prueba: Creación de venta, disminución de stock y generación de ticket.</li>
                    <li><strong>V30 – Retiros de efectivo (CashWithdrawal):</strong> Autorizaciones con motivo y seguridad. Prueba: Retiro y afectación en caja.</li>
                    <li><strong>V31 – Cierre de caja:</strong> Conteo de efectivo, diferencias y reporte. Prueba: Cierre con resumen y alertas.</li>
                    <li><strong>V32 – Cierre de turno:</strong> Consolidado y bloqueo de operaciones. Prueba: Cierre y generación de reporte.</li>
                    <li><strong>V33 – Reimpresión y envío de ticket:</strong> Reimpresión desde entidad Ticket. Prueba: Reimpresión y envío por email.</li>
                </ul>
                <strong>Galería de imágenes - Ventas y caja:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un sistema de escaneo de códigos de barras usando ZXing. La captura muestra la interfaz de venta con un producto añadido al carrito tras escanear un código desde un lector USB.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un carrito de venta con recalculación en tiempo real usando JavaScript. La captura muestra la interfaz con descuentos aplicados por línea y el total con IVA actualizado.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de pagos mixtos (efectivo/tarjeta). La captura muestra el formulario de pago con división de montos y confirmación de transacción exitosa.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un formulario para apertura de turno con validaciones de usuario. La captura muestra la interfaz con el estado del turno activo y el bloqueo de ventas si no está iniciado.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de apertura de caja con registro de fondo inicial. La captura muestra la interfaz con el saldo inicial registrado y un mensaje de confirmación.",
                              },
                              {
                                num: 6,
                                desc: "Configuré la generación de tickets con persistencia transaccional. La captura muestra un ticket generado con detalles de la venta y un QR para reimpresión.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de retiros de efectivo con autorización por supervisor. La captura muestra el formulario de retiro con motivo registrado y log de auditoría.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de cierre de caja con cálculo de diferencias. La captura muestra el reporte de cierre con alertas por discrepancias en el conteo de efectivo.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un sistema de cierre de turno con consolidación de datos. La captura muestra el reporte generado con estadísticas de ventas y movimientos realizados.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de reimpresión de tickets desde el historial. La captura muestra la interfaz con búsqueda por número de ticket y opción de envío por email.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un dashboard de ventas con KPIs en tiempo real. La captura muestra gráficos generados con Chart.js basados en datos de ventas del turno actual.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas responsivas para el flujo de ventas en dispositivos móviles. La captura muestra la interfaz de venta en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 13,
                                desc: "Se desarrolló en la aplicación un módulo de conteo de dinero, permitiendo registrar y calcular los montos en función del tipo de billete o moneda.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar el estado de la caja en tiempo real. La captura muestra una respuesta en la vista con el saldo actual y los movimientos recientes.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/ventas/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/_HF05JL_Gug"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 7: Ofertas, descuentos y promociones -->
            <section>
                <h4>7. Ofertas, descuentos y promociones</h4>
                <p>Módulos para manejar descuentos, ofertas y promociones con reglas avanzadas.</p>
                <ul>
                    <li><strong>V34 – Descuentos por producto/departamento:</strong> Entidades para descuentos y aplicación. Prueba: Aplicación en carrito y reflexión en totales.</li>
                    <li><strong>V35 – Ofertas (Offers, OffersProducts, OffersDepartment):</strong> Reglas por fechas o cantidades. Prueba: Activación y validación de ofertas.</li>
                    <li><strong>V36 – Promociones avanzadas (Promotion, SalesDiscounts, SalesOffers):</strong> Combinación de reglas con prioridades. Prueba: Resolución de conflictos entre promociones.</li>
                </ul>
                <strong>Galería de imágenes - Ofertas, descuentos y promociones:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un formulario para crear descuentos por producto con reglas dinámicas. La captura muestra la interfaz con selección de productos y aplicación automática en el carrito.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema de descuentos por departamento con fechas de validez. La captura muestra una vista de configuración con descuentos aplicados a categorías específicas.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de ofertas basadas en cantidades con reglas combinadas. La captura muestra una oferta activa en el carrito, con descuentos reflejados en tiempo real.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un motor de promociones con resolución de conflictos por prioridad. La captura muestra la prioridad unicamente a la oferta que mejor se adapte a la compra.",
                              },
                              {
                                num: 5,
                                desc: "Se implementó un dashboard de promociones que ofrece una visión general de todos los descuentos y ofertas, mostrando sus detalles y características dentro de la aplicación.",
                              },
                              {
                                num: 6,
                                desc: "Se agregó en la aplicación un formulario de edición para gestionar promociones, permitiendo actualizar sus detalles de manera sencilla y rápida.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un formulario responsivo para gestionar ofertas en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un endpoint para validar promociones en tiempo real. La captura muestra una respuesta JSON con las promociones aplicables para un carrito específico.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un sistema de auditoría para cambios en promociones. La captura muestra un log de modificaciones en una oferta, con detalles del usuario y la acción.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de importación masiva de descuentos desde CSV. La captura muestra el formulario con validaciones previas y un resumen de los descuentos importados.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un mecanismo de caché para consultas de promociones usando Redis. La captura muestra el tiempo de respuesta optimizado para una validación de oferta.",
                              },
                              {
                                num: 12,
                                desc: "Configuré vistas para la gestión de promociones con filtros avanzados. La captura muestra la interfaz con búsqueda por tipo de promoción y estado (activa/inactiva).",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé documentación de promociones con diagramas de flujo en Google Docs. La captura muestra el flujo de aplicación de una promoción, desde validación hasta actualización del carrito.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un endpoint REST para consultar promociones activas. La captura muestra una respuesta JSON con detalles de las ofertas disponibles para un cliente.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/ofertas/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/oGAdfzsUiVY"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

            <!-- Sección 8: Dashboard, estadísticas, clientes y pedidos -->
            <section>
                <h4>8. Dashboard, estadísticas, clientes y pedidos</h4>
                <p>Sistema completo de visualización de KPIs, gestión de clientes y control de pedidos para monitoreo integral del negocio.</p>
                <ul>
                    <li><strong>V37 – Dashboard principal:</strong> Endpoints para KPIs como ventas del día y top productos. Prueba: Renderizado en HTML/JS.</li>
                    <li><strong>V38 – Estadísticas de ventas:</strong> Consultas agregadas por fecha, usuario o tienda. Prueba: Filtros y exportación a CSV.</li>
                    <li><strong>V39 – Estadísticas por almacén:</strong> Endpoints específicos por almacén. Prueba: Comparación entre almacenes.</li>
                    <li><strong>V40 – Gestión de clientes:</strong> Registro y administración de clientes con historial de compras. Prueba: CRUD completo y búsqueda avanzada.</li>
                    <li><strong>V41 – Sistema de e-tickets:</strong> Envío automático de tickets por correo electrónico para reducir uso de papel. Prueba: Plantillas personalizadas y envío masivo.</li>
                    <li><strong>V42 – Ofertas para clientes frecuentes:</strong> Sistema de descuentos automáticos basado en frecuencia de compra. Prueba: Algoritmos de fidelización y aplicación de descuentos.</li>
                    <li><strong>V43 – Control de estado de pedidos:</strong> Gestión de estados: cancelado, pendiente y completado. Prueba: Transiciones de estado y notificaciones automáticas.</li>
                    <li><strong>V44 – Información detallada de pedidos:</strong> Vista completa del pedido con productos, cantidades y precios. Prueba: Exportación de detalles y seguimiento en tiempo real.</li>
                    <li><strong>V45 – Gestión multi-tienda:</strong> Administración de pedidos y clientes desde diferentes sucursales. Prueba: Sincronización entre tiendas y reportes consolidados.</li>
                </ul>
                <strong>Galería de imágenes - Dashboard, estadísticas, clientes y pedidos:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un dashboard principal con KPIs actualizados en tiempo real usando WebSockets. La captura muestra estadisticas de ventas diarias y top productos generados.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema completo de registro de clientes con validación de datos y historial de compras. La captura muestra el formulario de registro con campos personalizados y validación en tiempo real.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de e-tickets que se envían automáticamente por correo tras cada venta. La captura muestra la plantilla del ticket con diseño personalizado y datos de la transacción.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un sistema de ofertas automáticas para clientes frecuentes basado en su historial de compras. La captura muestra la interfaz de configuración de descuentos y reglas de fidelización.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de gestión de estado de pedidos con transiciones controladas entre cancelado, pendiente y completado. La captura muestra la interfaz de seguimiento con códigos de color.",
                              },
                              {
                                num: 6,
                                desc: "Configuré una vista detallada de pedidos que muestra productos, cantidades, precios y totales. La captura muestra la información completa de un pedido con opciones de exportación a PDF.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de búsqueda avanzada de clientes con filtros por nombre, teléfono, email y fecha de registro. La captura muestra los resultados paginados con opciones de edición.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un sistema de notificaciones automáticas para cambios de estado en pedidos. La captura muestra el panel de configuración de alertas por email y SMS.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard responsivo para gestión de clientes en dispositivos móviles. La captura muestra la interfaz optimizada para tablet con acceso rápido a información del cliente.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de estadísticas de clientes con métricas de frecuencia de compra y valor promedio. La captura muestra gráficos de segmentación de clientes y análisis de comportamiento.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un sistema de gestión multi-tienda que permite administrar clientes y pedidos desde diferentes sucursales. La captura muestra los filtros aplicados a estos.",
                              },
                              {
                                num: 12,
                                desc: "Configuré un sistema de reportes de costeo de iniventario con filtros avanzados por fecha, estado, cliente y productos. La captura muestra la interfaz de generación de reportes con múltiples opciones de exportación.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé un sistema de historial de interacciones con clientes que registra todas las ventas, devoluciones y comunicaciones. La captura muestra el timeline de actividades del cliente.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un panel de control centralizado que integra estadísticas de ventas, gestión de clientes y seguimiento de pedidos. La captura muestra el dashboard completo con widgets personalizables y métricas en tiempo real.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/dashboard/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/dYufg0L2fkk"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

           <!-- Sección 9: Calendario, tareas, alertas y notificaciones -->
            <section>
                <h4>9. Calendario, tareas, alertas y notificaciones</h4>
                <p>Sistema integral de gestión de agenda, recordatorios automatizados y alertas críticas para el negocio.</p>
                <ul>
                    <li><strong>V40 – Agenda/Calendar (Agenda):</strong> CRUD para tareas y eventos. Prueba: Creación de tarea con vencimiento.</li>
                    <li><strong>V41 – Recordatorios por correo (5 min antes):</strong> Uso de @Scheduled para consultas pendientes. Prueba: Disparo real de correo recordatorio.</li>
                    <li><strong>V42 – Alertas de caja (AlertCash):</strong> Configuración por montos y colores. Prueba: Disparo al bajar de umbral.</li>
                    <li><strong>V43 – Notificaciones internas (Notification):</strong> Almacenamiento y lectura de bandeja. Prueba: Visualización en UI.</li>
                    <li><strong>V44 – Emails automáticos de estadísticas:</strong> Batch diario o semanal a perfiles específicos. Prueba: Envío a admin o supervisor.</li>
                    <li><strong>V45 – Sincronización con Google Calendar:</strong> Integración con calendarios externos para tareas. Prueba: Importación y exportación de eventos.</li>
                    <li><strong>V46 – Sistema de priorización de notificaciones:</strong> Clasificación por severidad y urgencia. Prueba: Ordenamiento automático por importancia.</li>
                    <li><strong>V47 – Notificaciones push en tiempo real:</strong> Alertas instantáneas para eventos críticos. Prueba: Notificaciones WebSocket en vivo.</li>
                </ul>
                <strong>Galería de imágenes - Calendario, tareas, alertas y notificaciones:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé un calendario interactivo con FullCalendar.js integrado con Spring Boot. La captura muestra la interfaz con eventos y tareas creadas, con soporte para drag-and-drop.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un sistema de alertas de caja con umbrales configurables. La captura muestra una notificación en la UI al detectar un saldo bajo, con color rojo para urgencia.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un sistema de recordatorios por correo usando @Scheduled. La captura muestra un correo recibido con detalles de una tarea próxima a vencer.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé una bandeja de notificaciones internas con paginación. La captura muestra la interfaz con notificaciones marcadas como leídas y no leídas.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un formulario para crear tareas con vencimientos. La captura muestra la interfaz con validaciones de fechas y selección de prioridad.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un sistema de emails automáticos para estadísticas usando @Scheduled. La captura muestra un correo recibido con un reporte semanal de ventas.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un sistema de sincronización de tareas con Google Calendar. La captura muestra la interfaz de configuración para conectar cuentas externas.",
                              },
                              {
                                num: 8,
                                desc: "Implementé notificaciones push para eventos críticos. La captura muestra una alerta en la UI con detalles de un evento de inventario disparado en tiempo real.",
                              },
                              {
                                num: 9,
                                desc: "Configuré un dashboard de tareas con tareas acorde al dia de hoy. La captura muestra tareas pendientes o pasadas y no terminadas en dashboard por usuario.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un sistema de priorización de notificaciones basado en severidad. La captura muestra la interfaz con alertas ordenadas por urgencia.",
                              },
                              {
                                num: 11,
                                desc: "Implementé vistas responsivas para el calendario en dispositivos móviles. La captura muestra la interfaz en una tablet, con controles táctiles optimizados.",
                              },
                              {
                                num: 12,
                                desc: "Asigné tareas específicas a distintos miembros del equipo. La captura muestra cómo se distribuyen las responsabilidades y el progreso de cada persona en tiempo real.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé un sistema de categorías para tareas con colores personalizables. La captura muestra la interfaz de configuración de categorías y su aplicación en el calendario.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un sistema de personalización de notificaciones por usuario. La captura muestra la interfaz para configurar preferencias de envío de alertas.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/calendario/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/P7_RQ2NZD9U"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>

          <!-- Sección 10: UX, tablet, QR, reportes y programación -->
            <section>
                <h4>10. UX, tablet, QR, reportes y programación</h4>
                <p>Optimización de interfaz para dispositivos móviles, uso de QR para operaciones rápidas, generación y programación de reportes con exportaciones automáticas por email.</p>
                <ul>
                    <li><strong>V45 – UI en tablet y responsivo:</strong> Layouts con media queries para vistas clave. Prueba: Demo en emulador de móvil o tablet.</li>
                    <li><strong>V46 – QR para alta de clientes y acceso a app:</strong> Generación de QR con deep links. Prueba: Escaneo desde teléfono y apertura de vista.</li>
                    <li><strong>V47 – Reportes programados (SalesReportSchedule):</strong> Selección de días y destinos. Prueba: Simulación de ejecución programada.</li>
                    <li><strong>V48 – Exportaciones (CSV/PDF básicos):</strong> Endpoints para exportar datos. Prueba: Descarga y apertura de archivos.</li>
                    <li><strong>V49 – Reporte de ventas semanal por email:</strong> Estadísticas automáticas enviadas semanalmente. Prueba: Recepción de email con datos consolidados.</li>
                    <li><strong>V50 – Reporte de retiros por email:</strong> Notificación de movimientos de efectivo. Prueba: Email con detalles de retiros realizados.</li>
                    <li><strong>V51 – Reporte de corte de caja por email:</strong> Cierre diario de caja enviado automáticamente. Prueba: Email con balance de caja al final del día.</li>
                    <li><strong>V52 – Reporte de corte de cajero por email:</strong> Resumen individual por cajero. Prueba: Email con ventas y movimientos por empleado.</li>
                    <li><strong>V53 – Estadísticas de costeo de inventario por email:</strong> Análisis de costos y márgenes. Prueba: Email con métricas de rentabilidad.</li>
                    <li><strong>V54 – Historial de reportes enviados:</strong> Log de emails de reportes con fechas y destinatarios. Prueba: Vista de historial completo.</li>
                </ul>
                <strong>Galería de imágenes - UX, tablet, QR, reportes y programación:</strong>
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Desarrollé una interfaz responsiva para tablets usando media queries y CSS Grid. La captura muestra la vista de ventas optimizada para pantallas táctiles de 10 pulgadas.",
                              },
                              {
                                num: 2,
                                desc: "Implementé un historial completo de reportes enviados por email con fechas y destinatarios. La captura muestra la interfaz con el log de todos los reportes automáticos enviados.",
                              },
                              {
                                num: 3,
                                desc: "Configuré un generador de QR para alta de clientes con deep links. La captura muestra un código QR que redirige a un formulario de registro prellenado.",
                              },
                              {
                                num: 4,
                                desc: "Desarrollé un reporte de ventas semanal automatizado enviado por email. La captura muestra el email recibido con estadísticas consolidadas y gráficos de la semana.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un sistema de navegación optimizado para móviles con menús colapsables. La captura muestra la interfaz en un smartphone, con accesos rápidos a funciones clave.",
                              },
                              {
                                num: 6,
                                desc: "Configuré un reporte de retiros automático por email. La captura muestra el email con detalles de todos los movimientos de efectivo realizados en el día.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé un dashboard responsivo con widgets redimensionables. La captura muestra la interfaz en una tablet, con gráficos adaptados al tamaño de pantalla.",
                              },
                              {
                                num: 8,
                                desc: "Implementé un reporte de corte de caja diario enviado por email. La captura muestra el email con el balance completo de caja al final del turno.",
                              },
                              {
                                num: 9,
                                desc: "Diseñé una ruta optimizada específicamente para tablet. La captura muestra cómo se adapta la interfaz y navegación a este tipo de dispositivos.",
                              },
                              {
                                num: 10,
                                desc: "Desarrollé un reporte de corte de cajero individual enviado por email. La captura muestra el email con estadísticas específicas de ventas y movimientos por empleado.",
                              },
                              {
                                num: 11,
                                desc: "Implementé un sistema de QR para acceso rápido a la ruta de tablet. La captura muestra un código QR que redirige directamente a la interfaz diseñada para este dispositivo.",
                              },
                              {
                                num: 12,
                                desc: "Configuré estadísticas de costeo de inventario enviadas por email. La captura muestra el email con análisis de márgenes, costos y rentabilidad de productos.",
                              },
                              {
                                num: 13,
                                desc: "Implementé un sistema de QR para acceso rápido desde una tablet al almacén. La captura muestra cómo ingresar directamente para realizar movimientos y gestiones en el inventario.",
                              },
                              {
                                num: 14,
                                desc: "Implementé un sistema de exportación de reportes a PDF con formato personalizado. La captura muestra un reporte generado con gráficos y tablas embebidas listo para envío por email.",
                              },
                            ]
                              .map(
                                (img) => `
                                <figure class="shadow"
                                    data-img="servet${img.num}.png"
                                    data-desc="${img.desc.replace(
                                      /"/g,
                                      "&quot;"
                                    )}">
                                    <img src="/assets/experiencias/galerias/servet/ux/servet${
                                      img.num
                                    }.png"/>
                                    <figcaption class="image-caption">Ver detalles</figcaption>
                                </figure>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                
                <strong>VIDEO DEL PROYECTO:</strong>
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/NwIyzG-n4eg"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </section>
    </div>
  `;

      // Event listeners para las figuras de todas las galerías (incluyendo la general)
      function setupGalleryListeners() {
        document.querySelectorAll(".shadow").forEach((fig) => {
          fig.addEventListener("click", () => {
            const img = fig.dataset.img;
            const desc = fig.dataset.desc;
            const imgElement = fig.querySelector("img");

            // Obtener la ruta base de la imagen actual
            const currentSrc = imgElement.getAttribute("src");
            const basePath = currentSrc.substring(
              0,
              currentSrc.lastIndexOf("/") + 1
            );

            openModalWithDescription(basePath + img, desc);
          });
        });
      }

      // Llamar después de generar el contenido
      setupGalleryListeners();

      setTimeout(adaptAllCarousels, 50);

      // Event listener para el botón "Saber más"
      document.getElementById("saber-mas").addEventListener("click", () => {
        document.getElementById("detalles").style.display = "block";
        document.getElementById("saber-mas").style.display = "none"; // Oculta el botón después de clickear
        setTimeout(adaptAllCarousels, 50);
      });
    },
    // Función para consultoría
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
          <div class="tech-section">
          <h3 class="tech-title">🚀 Tecnologías Utilizadas</h3>
          <div class="tech-grid">
              <div class="tech-item">
                  <i class="devicon-javascript-plain colored tech-icon"></i>
                  <span>JavaScript ES6+</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-html5-plain colored tech-icon"></i>
                  <span>HTML5</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-css3-plain colored tech-icon"></i>
                  <span>CSS3/Flexbox</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-nodejs-plain colored tech-icon"></i>
                  <span>Node.js</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-database tech-icon" style="color: #3ECF8E;"></i>
                  <span>Supabase</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-postgresql-plain colored tech-icon"></i>
                  <span>PostgreSQL</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-code tech-icon" style="color: #61DAFB;"></i>
                  <span>REST API</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-git-plain colored tech-icon"></i>
                  <span>Git/GitHub</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-mobile-alt tech-icon" style="color: #FF6B6B;"></i>
                  <span>Responsive Design</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-paint-brush tech-icon" style="color: #9B59B6;"></i>
                  <span>UI/UX Design</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-rocket tech-icon" style="color: #F39C12;"></i>
                  <span>SPA Architecture</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-cloud tech-icon" style="color: #3498DB;"></i>
                  <span>Cloud Hosting</span>
              </div>
          </div>
      </div>
                <p style="color: white; font-size: 1.1em; line-height: 1.8;">
                    Desarrollé una <strong>plataforma integral de consultoría especializada</strong> para desarrolladores de sistemas, diseñada para ofrecer servicios profesionales en áreas como desarrollo web full stack, infraestructura de redes, automatización de procesos y soluciones backend escalables. El sistema combina un <strong>sitio web público moderno</strong> con un <strong>panel administrativo completo (CMS)</strong> construido con JavaScript ES6+, HTML5 semántico, CSS3 avanzado, y Supabase como backend-as-a-service.
                </p>

                <h4 style="color: #3ECF8E; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🎯 Sistema de Gestión de Contenidos</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Panel administrativo completo:</strong> Desarrollé un CMS personalizado con autenticación Supabase Auth, roles de usuario (Admin, Editor, Viewer), protección de rutas administrativas y sesiones seguras con tokens JWT. La interfaz permite gestionar todo el contenido sin tocar código.</li>
                    
                    <li><strong>Gestión de servicios dinámicos:</strong> Implementé módulo CRUD completo con editor rico de texto, selector de íconos Font Awesome (1,600+ opciones), carga optimizada de imágenes con compresión client-side, categorías múltiples, pricing configurable y sistema de publicación/borrador programable.</li>
                    
                    <li><strong>Sistema de activación/desactivación:</strong> Creé toggles para habilitar/deshabilitar secciones completas (servicios, testimonios, blog) sin modificar código. Los cambios se reflejan instantáneamente usando queries filtradas de Supabase e incluye preview mode antes de publicar.</li>
                    
                    <li><strong>Gestión de testimonios:</strong> Desarrollé sistema con formulario público para clientes, moderación en panel admin, aprobación/rechazo con notificaciones email, rating de estrellas, verificación de clientes reales y widgets embebibles para mostrar testimonios destacados.</li>
                    
                    <li><strong>Editor de identidad corporativa:</strong> Implementé personalización de branding incluyendo nombre de empresa, carga de logo con preview, paleta de colores corporativos, editor de misión/visión/valores y galería institucional del equipo.</li>
                    
                    <li><strong>Sistema de leads:</strong> Creé gestión de clientes potenciales con tabla de consultas, filtros por servicio y estado, vista detallada, notas internas, asignación a consultores y exportación CSV para análisis.</li>
                </ul>

                <h4 style="color: #61DAFB; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">💻 Frontend y Experiencia de Usuario</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Single Page Application:</strong> Implementé arquitectura SPA usando History API con lazy loading de componentes, transiciones animadas con GSAP, routing dinámico y preservación de estado al navegar.</li>
                    
                    <li><strong>Diseño responsive mobile-first:</strong> Construí interfaces adaptables con CSS Grid y Flexbox, menú hamburger animado, reorganización inteligente de contenido, imágenes responsive con srcset y touch gestures optimizados.</li>
                    
                    <li><strong>Animaciones sutiles:</strong> Desarrollé micro-interacciones con CSS transitions: hover effects en cards, loading skeletons, animaciones de entrada con Intersection Observer, progress indicators y toast notifications.</li>
                    
                    <li><strong>Optimización de performance:</strong> Implementé lazy loading de imágenes, code splitting por página, debouncing en búsquedas, caching en sessionStorage y preloading de recursos críticos, logrando tiempos de carga < 2s.</li>
                </ul>

                <h4 style="color: #9B59B6; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🗄️ Backend y Base de Datos</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Arquitectura PostgreSQL:</strong> Diseñé esquema relacional con tablas: services, testimonials, leads, users, blog_posts con relaciones foreign keys y índices optimizados para consultas frecuentes.</li>
                    
                    <li><strong>Row Level Security:</strong> Configuré políticas RLS en Supabase para lectura pública solo de contenido publicado, escritura restringida a admins, protección de datos sensibles y auditoría automática.</li>
                    
                    <li><strong>APIs REST automáticas:</strong> Aproveché APIs de Supabase para CRUD con filtros, ordenamiento, paginación, búsqueda full-text con PostgreSQL, agregaciones estadísticas y joins entre tablas.</li>
                    
                    <li><strong>Storage optimizado:</strong> Configuré Supabase Storage para upload con validación, thumbnails automáticos, URLs con CDN y eliminación de archivos huérfanos.</li>
                    
                    <li><strong>Real-time subscriptions:</strong> Implementé notificaciones instantáneas de nuevos leads, actualización automática de contenido, sincronización entre dispositivos y contador live de visitantes.</li>
                </ul>

                <h4 style="color: #F39C12; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📊 Funcionalidades Avanzadas</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Búsqueda inteligente:</strong> Implementé buscador con autocompletado, full-text search de PostgreSQL, highlighting de términos, sugerencias relacionadas y filtros combinables.</li>
                    
                    <li><strong>Analytics dashboard:</strong> Desarrollé métricas con total de consultas, servicios más solicitados, tasa de conversión, páginas visitadas y tiempos de respuesta visualizados con Chart.js.</li>
                    
                    <li><strong>Sistema de notificaciones:</strong> Creé centro de notificaciones con alertas en tiempo real, recordatorios de seguimiento, badges con contador y configuración de frecuencia.</li>
                    
                    <li><strong>SEO dinámico:</strong> Desarrollé generación automática de meta tags únicos, Open Graph para social sharing, structured data Schema.org y sitemap.xml actualizado automáticamente.</li>
                </ul>
                <strong>Galería de imágenes:</strong> 
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Implementé un sistema de gestión de consultas donde cada mensaje muestra: servicio solicitado, datos completos del cliente (nombre, empresa, teléfono), mensaje detallado y timestamp exacto. Desarrollé un código de colores para estados (verde=resuelto, amarillo=pendiente) y agregué filtros por tipo de servicio y fecha. La interfaz permite responder directamente desde el panel o derivar a otros departamentos.",
                              },
                              {
                                num: 2,
                                desc: "Diseñé esta sección institucional con animaciones SVG personalizadas para cada valor corporativo. Implementé un sistema de 'hover cards' que al pasar el cursor muestra ejemplos prácticos de cada principio en acción. La tipografía escalable garantiza legibilidad en todos los dispositivos, y el diseño cumple con estándares WCAG 2.1 para accesibilidad.",
                              },
                              {
                                num: 3,
                                desc: "Desarrollé una línea de tiempo interactiva con hitos claves que se expanden al hacer clic, mostrando fotos y logros relevantes. Para los objetivos corporativos, creé indicadores de progreso visuales (barras de avance) que se actualizan automáticamente desde los KPIs del negocio. Incluí enlaces a casos de éxito relacionados.",
                              },
                              {
                                num: 4,
                                desc: "Construí un CMS completo con: editor WYSIWYG con formato avanzado, programación de publicaciones, análisis de engagement (vistas, tiempo de lectura) y sistema de etiquetas inteligentes. Cada post tiene versión móvil optimizada con lazy loading para imágenes y lectura ininterrumpida.",
                              },
                              {
                                num: 5,
                                desc: "Implementé un catálogo dinámico con: filtros combinados (por tipo, precio, duración), comparador de servicios, calculadora de ROI para clientes y vista de 'servicios frecuentemente contratados juntos'. Cada ficha técnica incluye documentos descargables, testimonios relevantes y formulario de cotización directa.",
                              },
                              {
                                num: 6,
                                desc: "Desarrollé un sistema de reputación con: verificación de clientes reales (mediante confirmación por email), respuestas públicas a testimonios, filtros por industria y tamaño de empresa, y análisis de sentimiento automático. Los testimonios verificados muestran insignias especiales.",
                              },
                              {
                                num: 7,
                                desc: "Creé un formulario inteligente que: sugiere mejoras en tiempo real (para testimonios muy cortos), detecta lenguaje inapropiado, permite adjuntar evidencias (capturas, documentos) y muestra una vista previa antes de enviar. Implementé un sistema de recompensas por testimonios completos.",
                              },
                              {
                                num: 8,
                                desc: "Diseñé un formulario multicanal que se adapta al servicio seleccionado (mostrando campos relevantes). Integré: autocompletado con empresas existentes, validación de número de teléfono por país, previsualización de disponibilidad de agenda, y opción para programar llamada inmediata.",
                              },
                              {
                                num: 9,
                                desc: "Desarrollé un CRUD completo para gestionar servicios con: editor enriquecido, historial de cambios, programación de disponibilidad, gestión de precios especiales por segmento, y sistema de aprobaciones en flujo de trabajo. Cada modificación genera notificaciones a los equipos relevantes.",
                              },
                              {
                                num: 10,
                                desc: "Implementé una tabla avanzada con: búsqueda inteligente (incluye descripciones), filtros combinados, ordenamiento multidimensional, exportación a CSV/Excel, y acciones masivas. El estado de cada servicio se sincroniza en tiempo real con la página pública.",
                              },
                              {
                                num: 11,
                                desc: "Construí un calendario editorial interactivo con: programación visual de contenido, alertas de duplicación, análisis de rendimiento histórico, y sugerencias de temas basadas en tendencias. El sistema incluye workflow de aprobación con roles y comentarios internos.",
                              },
                              {
                                num: 12,
                                desc: "Desarrollé un CRM básico con: puntuación automática de leads, historial de interacciones, integración con herramientas de comunicación, y sistema de seguimiento por etapas. Implementé recordatorios programables y generación de informes de conversión.",
                              },
                              {
                                num: 13,
                                desc: "Optimicé el rendimiento con: carga diferencial de componentes, imágenes en formato WebP, fuentes locales, y estrategia de caching avanzada. Implementé menús contextuales que se adaptan al dispositivo, y controles táctiles optimizados para móviles.",
                              },
                              {
                                num: 14,
                                desc: "Creé un centro de notificaciones unificado con: priorización inteligente, agrupación por contexto, acciones rápidas desde la alerta, y sincronización entre dispositivos. Las notificaciones incluyen metadatos enriquecidos y opciones de silenciamiento temporal.",
                              },
                            ]
                              .map(
                                (img) => `
                    <figure class="shadow"
                        data-img="consultoria${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="/assets/experiencias/galerias/consultoria/consultoria${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                <h1 class="h1relleno2"></h1>
                <h1 class="h1relleno2"></h1>
                <strong>VIDEO DEL PROYECTO:</strong> 
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/ji0QgzrRtVw"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <h1 class="h1relleno2"></h1>
                <h1 class="h1relleno2"></h1>
                <section class="contact-section">
                    <p class="contact-text">¿Te interesa conocer más sobre este sistema de consultoría para desarrolladores? Contáctanos directamente:</p>
                    
                    <div class="contact-options">
                        <a href="https://wa.me/525585067049" class="whatsapp-btn" target="_blank">
                            <span class="btn-icon">📱</span>
                            <span class="btn-text">Enviar WhatsApp</span>
                        </a>
                        
                        <a href="tel:+525585067049" class="call-btn">
                            <span class="btn-icon">📞</span>
                            <span class="btn-text">Llamar ahora</span>
                        </a>
                    </div>
                    
                    <div class="contact-details">
                        <p class="phone-number">+52 55 8506 7049</p>
                        <p class="reference-name">Uziel Sanchez Marin</p>
                    </div>
                </section>
            `;
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `/assets/experiencias/galerias/consultoria/${img}`,
            desc
          );
        });
      });
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para tienda de ropa
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
      <div class="tech-section">
          <h3 class="tech-title">🚀 Tecnologías Utilizadas</h3>
          <div class="tech-grid">
              <div class="tech-item">
                  <i class="devicon-html5-plain colored tech-icon"></i>
                  <span>HTML5</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-css3-plain colored tech-icon"></i>
                  <span>CSS3/Grid</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-javascript-plain colored tech-icon"></i>
                  <span>JavaScript</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-database tech-icon" style="color: #3ECF8E;"></i>
                  <span>Supabase</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-postgresql-plain colored tech-icon"></i>
                  <span>PostgreSQL</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-shopping-cart tech-icon" style="color: #FF6B6B;"></i>
                  <span>E-commerce</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-mobile-alt tech-icon" style="color: #4ECDC4;"></i>
                  <span>Mobile First</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-paint-brush tech-icon" style="color: #95E1D3;"></i>
                  <span>UI/UX Design</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-git-plain colored tech-icon"></i>
                  <span>Git</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-sliders-h tech-icon" style="color: #9B59B6;"></i>
                  <span>Filtros Avanzados</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-heart tech-icon" style="color: #E74C3C;"></i>
                  <span>Sistema Favoritos</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-images tech-icon" style="color: #F39C12;"></i>
                  <span>Lazy Loading</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-map-marker-alt tech-icon" style="color: #1ABC9C;"></i>
                  <span>Geolocalización</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-search tech-icon" style="color: #3498DB;"></i>
                  <span>Búsqueda Real-Time</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-book tech-icon" style="color: #E67E22;"></i>
                  <span>Blog Integrado</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-envelope tech-icon" style="color: #95A5A6;"></i>
                  <span>Email Marketing</span>
              </div>
          </div>
      </div>
                <p style="color: white; font-size: 1.1em; line-height: 1.8;">
                    Desarrollé una <strong>tienda online de ropa completamente funcional</strong> con enfoque en experiencia de usuario premium y gestión dinámica de contenido. El proyecto combina un <strong>e-commerce frontend moderno</strong> con sistema de filtros avanzados, carrito de compras, sistema de favoritos y <strong>backend Supabase</strong> para gestión de catálogo, colaboraciones temporales y contenido editorial. Todo construido con HTML5, CSS3 (Grid/Flexbox), JavaScript ES6+ y PostgreSQL.
                </p>

                <h4 style="color: #FF6B6B; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🛍️ E-commerce y Catálogo de Productos</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Catálogo dinámico con filtros avanzados:</strong> Implementé sistema de filtrado combinable por color, estilo, temporada (primavera/verano/otoño/invierno), talla, rango de precio y colaboraciones especiales. Los filtros funcionan con lógica AND/OR y actualizan resultados sin recargar página mediante JavaScript.</li>
                    
                    <li><strong>Sistema de colaboraciones temporales:</strong> Desarrollé funcionalidad que muestra/oculta automáticamente colecciones especiales basándose en fechas de inicio y fin almacenadas en base de datos. Incluye countdown timer para lanzamientos y etiquetas "Edición Limitada".</li>
                    
                    <li><strong>Carrito de compras persistente:</strong> Creé carrito que guarda items en localStorage para persistencia entre sesiones, permite modificar cantidades, calcular subtotales y totales automáticamente, aplicar códigos de descuento y generar resumen de pedido para envío.</li>
                    
                    <li><strong>Sistema de favoritos sin backend:</strong> Implementé funcionalidad de "wishlist" completamente client-side usando localStorage, permitiendo guardar prendas favoritas, organizar por categorías, compartir lista vía URL y recibir notificaciones cuando items favoritos tienen descuento.</li>
                    
                    <li><strong>Búsqueda inteligente:</strong> Desarrollé buscador con autocompletado que consulta título, descripción, tags y categorías. Incluye sugerencias predictivas, corrección de typos básica y filtrado por relevancia.</li>
                    
                    <li><strong>Galería de productos optimizada:</strong> Implementé grid responsive con lazy loading de imágenes, zoom on hover, quick view modal sin navegación, selector de colores disponibles y badge de "Nuevo" para productos recientes.</li>
                </ul>

                <h4 style="color: #4ECDC4; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🎨 Lookbook y Contenido Visual</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Lookbook interactivo:</strong> Creé galería de looks completos con sistema de tags sobre prendas individuales, permitiendo hacer clic en cada item para ver detalles y comprarlo. Implementé filtros por ocasión (casual, formal, deportivo) y temporada.</li>
                    
                    <li><strong>Sliders de colaboraciones:</strong> Desarrollé carruseles personalizados para destacar colaboraciones con diseñadores. Incluye autoplay pausable, navegación táctil, thumbnails de preview e integración con catálogo para compra directa.</li>
                    
                    <li><strong>Blog de moda integrado:</strong> Implementé sección editorial con artículos sobre tendencias, styling tips y behind-the-scenes. Contenido gestionable desde Supabase con categorías, tags, autor, fecha y featured image.</li>
                    
                    <li><strong>Behind the Scenes:</strong> Creé sección que muestra proceso creativo incluyendo bocetos digitales, mood boards de inspiración, videos del proceso de diseño y entrevistas con diseñadores, todo editable dinámicamente.</li>
                </ul>

                <h4 style="color: #9B59B6; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">💫 Experiencia de Usuario y Diseño</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Diseño minimalista premium:</strong> Desarrollé estética limpia con amplio uso de whitespace, tipografía elegant (serif para títulos, sans-serif para body), paleta monocromática con acentos de color y fotografía de alta calidad.</li>
                    
                    <li><strong>Animaciones sutiles:</strong> Implementé micro-interacciones con CSS: hover effects con scale y brightness, transiciones smooth entre páginas, parallax scroll en hero sections, loading animations y animated CTAs.</li>
                    
                    <li><strong>Modo claro/oscuro:</strong> Creé theme switcher que alterna entre light/dark mode preservando preferencia en localStorage, con transición suave usando CSS variables y respetando prefers-color-scheme del sistema.</li>
                    
                    <li><strong>Mobile-first responsive:</strong> Diseñé interfaces prioritizando móvil con breakpoints estratégicos, touch-optimized controls, swipe gestures en galerías, bottom navigation sticky y hamburger menu animado.</li>
                </ul>

                <h4 style="color: #1ABC9C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🔧 Backend y Gestión de Contenido</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Base de datos estructurada:</strong> Diseñé esquema PostgreSQL con tablas: products (id, name, description, price, images, colors, sizes, category, season, stock), collaborations (id, name, start_date, end_date, featured), blog_posts y lookbook_items.</li>
                    
                    <li><strong>Panel de administración:</strong> Desarrollé CMS para gestionar catálogo completo, actualizar precios masivamente, subir imágenes múltiples por producto, configurar stock y disponibilidad, y programar colaboraciones futuras.</li>
                    
                    <li><strong>Supabase Storage:</strong> Implementé gestión de imágenes con upload múltiple, generación automática de thumbnails (small/medium/large), optimización con compresión y URLs públicas con CDN global.</li>
                    
                    <li><strong>APIs dinámicas:</strong> Utilicé Supabase REST APIs para obtener productos con filtros complejos, búsquedas full-text, ordenamiento por popularidad/precio/novedad y paginación eficiente.</li>
                </ul>

                <h4 style="color: #3498DB; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📍 Funcionalidades Adicionales</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Mapa de tiendas físicas:</strong> Integré Google Maps API mostrando ubicaciones de tiendas, horarios, teléfonos, fotos del local y botón de "Cómo llegar" con indicaciones GPS en tiempo real.</li>
                    
                    <li><strong>Formulario de contacto funcional:</strong> Creé formulario con validación client-side, envío a Supabase, confirmación por email automática, opciones de consulta (ventas/soporte/colaboraciones) y adjuntar archivos.</li>
                    
                    <li><strong>Newsletter signup:</strong> Implementé suscripción a newsletter con validación de email, double opt-in, integración con servicio de email marketing y popup de bienvenida con descuento.</li>
                    
                    <li><strong>Sistema de reseñas:</strong> Desarrollé módulo de reviews de productos con rating de estrellas, comentarios verificados, helpful votes, fotos de clientes y moderación desde panel admin.</li>
                </ul>
                <strong>Galería de imágenes:</strong> 
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Como desarrollador frontend, diseñé esta página de inicio para crear una primera impresión impactante. Implementé un hero section con imagen de fondo optimizada que se carga progresivamente, animaciones CSS para el texto principal que se activan al hacer scroll, y una barra de navegación sticky que se minimiza al desplazarse. Usé Intersection Observer API para cargar imágenes de manera diferida y mejoré el CLS (Cumulative Layout Shift) manteniendo reservado el espacio para cada elemento.",
                              },
                              {
                                num: 2,
                                desc: "Para la sección de productos destacados, desarrollé un grid system personalizado usando CSS Grid con fallback a Flexbox para navegadores antiguos. Cada tarjeta de producto tiene un sistema de hover que muestra opciones rápidas (favoritos, vista rápida) con transiciones suaves implementadas con requestAnimationFrame para máximo rendimiento. Integré un sistema de lazy loading para las imágenes y pre-caching de los productos más visitados usando Service Workers.",
                              },
                              {
                                num: 3,
                                desc: "La página de colección primavera fue desarrollada con un enfoque en el rendimiento. Implementé virtual scrolling para manejar grandes cantidades de productos, renderizando solo los elementos visibles en el viewport. Los filtros laterales usan Web Workers para procesar las opciones sin bloquear el hilo principal. Diseñé un sistema de prefetching que carga anticipadamente las imágenes cuando el usuario se acerca a ellas al hacer scroll.",
                              },
                              {
                                num: 4,
                                desc: "Para la colección de invierno, creé un sistema de filtros combinables que actualiza la vista sin recargar la página. Implementé debouncing en las búsquedas para evitar múltiples peticiones innecesarias y usé IndexedDB para cachear los resultados localmente. El diseño utiliza CSS variables para los temas estacionales que pueden cambiarse dinámicamente. Desarrollé un algoritmo que prioriza la carga de productos con mayor probabilidad de conversión basado en historial de usuario.",
                              },
                              {
                                num: 5,
                                desc: "Los productos en tendencia fueron implementados con un carrusel personalizado que funciona sin dependencias externas. Usé el Pointer Events API para soporte multiplataforma (touch y mouse) y desarrollé un sistema de inercia para los deslizamientos. Los datos de popularidad se actualizan en tiempo real mediante WebSockets, mostrando un indicador sutil cuando hay cambios. Implementé prefetching de imágenes para los productos adyacentes al visible.",
                              },
                              {
                                num: 6,
                                desc: "La sección de colaboraciones fue desarrollada como un SPA (Single Page Application) dentro del sitio principal. Usé la History API para manejar la navegación sin recargas y desarrollé componentes reutilizables para los elementos de diseño exclusivos. Implementé un sistema de etiquetas dinámicas que se actualizan según las fechas de las colaboraciones y su disponibilidad. La integración con APIs de diseñadores externos se hace mediante GraphQL para obtener solo los datos necesarios.",
                              },
                              {
                                num: 7,
                                desc: "Para la sección de elegancia atemporal, desarrollé un sistema de recomendaciones basado en machine learning (usando TensorFlow.js) que sugiere complementos para cada prenda. Implementé un visualizador 360° para productos seleccionados usando WebGL. El sistema de precios muestra automáticamente conversiones a otras monedas basado en la ubicación del usuario, con actualización diaria de tasas de cambio mediante una API externa.",
                              },
                              {
                                num: 8,
                                desc: "El lookbook con reseñas combina técnicas avanzadas de frontend. Desarrollé un sistema de galería que prioriza las imágenes según el ancho de banda del usuario (usando la Network Information API). Las reseñas implementan markdown básico para formato de texto y usan Web Components para los elementos interactivos. Implementé moderación automática de comentarios usando un servicio externo para filtrar contenido inapropiado.",
                              },
                              {
                                num: 9,
                                desc: "La página de contacto fue desarrollada con accesibilidad como prioridad. Implementé formularios con validación en tiempo real usando Constraint Validation API. El mapa interactivo usa Mapbox GL JS con renderizado vectorial para máxima calidad. Desarrollé un sistema de autocompletado para direcciones usando la Places API de Google. Todos los campos tienen etiquetas ARIA para soporte a lectores de pantalla.",
                              },
                              {
                                num: 10,
                                desc: "El formulario de contacto implementa medidas de seguridad avanzadas. Desarrollé un sistema de honeypot para prevenir spam, validación del lado del cliente y servidor, y protección contra CSRF. Los archivos adjuntos son previsualizados antes de subirse usando el File API. Implementé un estado de progreso para envíos largos y reintentos automáticos en caso de fallos temporales de conexión.",
                              },
                              {
                                num: 11,
                                desc: "La página de detalle de producto es una de las más complejas técnicamente. Implementé zoom de imágenes con superresolución usando técnicas de upscaling basadas en IA. El selector de tallas muestra disponibilidad en tiempo real mediante WebSockets. Desarrollé un visualizador AR (usando model-viewer) para productos seleccionados. La galería de fotos alternativas usa el formato WebP con fallback a JPEG para compatibilidad.",
                              },
                              {
                                num: 12,
                                desc: "La sección de favoritos fue desarrollada para funcionar completamente del lado del cliente cuando sea posible. Usé IndexedDB para almacenamiento local con sincronización periódica al backend. Implementé un sistema de categorización automática basada en análisis de productos similares. Los items pueden reordenarse mediante drag and touch, con posiciones guardadas en el perfil del usuario cuando está autenticado.",
                              },
                              {
                                num: 13,
                                desc: "El carrito de compras implementa un flujo optimizado para conversión. Desarrollé cálculos de impuestos en tiempo real basados en ubicación geográfica. Los descuentos se aplican con validación inmediata contra el servidor. Implementé un sistema de recuperación de carritos abandonados mediante localStorage y notificaciones push. La interfaz se adapta dinámicamente para mostrar métodos de pago relevantes según el monto total.",
                              },
                              {
                                num: 14,
                                desc: "La vista responsive fue desarrollada con mobile-first approach. Implementé responsive images con srcset y sizes para entregar el tamaño óptimo a cada dispositivo. Los breakpoints usan container queries donde es posible para mayor flexibilidad. Desarrollé un sistema de carga condicional de componentes basado en capacidades del dispositivo (como omitir ciertas animaciones en móviles antiguos). El rendimiento se optimizó mediante code splitting y carga progresiva de assets no críticos.",
                              },
                            ]
                              .map(
                                (img) => `
                    <figure class="shadow"
                        data-img="ropa${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="/assets/experiencias/galerias/TiendaRopa/ropa${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                <h1 class="h1relleno2"></h1>
                <h1 class="h1relleno2"></h1>
                <strong>VIDEO DEL PROYECTO:</strong> 
                <table style="width: 100%; height: 100%;">
                    <tr>
                        <td style="text-align: center; vertical-align: middle;">
                            <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                            src="https://www.youtube.com/embed/as7fO08yJec"
                                            frameborder="0" 
                                            allowfullscreen>
                                    </iframe>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
                <h1 class="h1relleno2"></h1>
                <h1 class="h1relleno2"></h1>
                    <section class="contact-section">
                        <p class="contact-text">Si deseas más información sobre este proyecto, puedes comunicarte con la persona de referencia:</p>
                        
                        <div class="contact-options">
                            <a href="https://wa.me/525524218886" class="whatsapp-btn" target="_blank">
                                <span class="btn-icon">📱</span>
                                <span class="btn-text">Enviar WhatsApp</span>
                            </a>
                            
                            <a href="tel:+525524218886" class="call-btn">
                                <span class="btn-icon">📞</span>
                                <span class="btn-text">Llamar ahora</span>
                            </a>
                        </div>
                        
                        <div class="contact-details">
                            <p class="phone-number">+52 55 2421 8886</p>
                            <p class="reference-name">Adela Ávila Franco</p>
                        </div>
                    </section>
            `;
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `/assets/experiencias/galerias/TiendaRopa/${img}`,
            desc
          );
        });
      });
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para Portafolio de Moda
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
        <div class="smaller-text">
            <!-- SECCIÓN DE TECNOLOGÍAS -->
            <div class="tech-section">
                <h3 class="tech-title">🚀 Tecnologías Utilizadas</h3>
                <div class="tech-grid">
                    <div class="tech-item">
                        <i class="devicon-html5-plain colored tech-icon"></i>
                        <span>HTML5</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-css3-plain colored tech-icon"></i>
                        <span>CSS3</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-javascript-plain colored tech-icon"></i>
                        <span>JavaScript</span>
                    </div>
                    <div class="tech-item">
                        <i class="devicon-github-original colored tech-icon"></i>
                        <span>GitHub Pages</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-brands fa-whatsapp tech-icon" style="color: #25D366;"></i>
                        <span>WhatsApp API</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-shopping-cart tech-icon" style="color: #FF6B6B;"></i>
                        <span>Carrito Compras</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-icons tech-icon" style="color: #339AF0;"></i>
                        <span>Font Awesome</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-mobile-alt tech-icon" style="color: #4ECDC4;"></i>
                        <span>Responsive</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-images tech-icon" style="color: #F39C12;"></i>
                        <span>Galería Imágenes</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-video tech-icon" style="color: #E74C3C;"></i>
                        <span>Video MP4</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-sliders-h tech-icon" style="color: #9B59B6;"></i>
                        <span>Carrusel Vertical</span>
                    </div>
                    <div class="tech-item">
                        <i class="fas fa-palette tech-icon" style="color: #E91E63;"></i>
                        <span>Diseño Visual</span>
                    </div>
                </div>
            </div>

            <p>
                Portafolio web profesional para diseñadora de modas, desarrollado con tecnologías web estándar y alojado en GitHub Pages. 
                El sitio presenta colecciones de moda con galería interactiva, carrito de compras integrado y conexión directa vía WhatsApp.
            </p>

            <p style="color: white; font-size: 1.1em; line-height: 1.8;">
                Desarrollé un <strong>portafolio web profesional para diseñadora de modas</strong>, construido con tecnologías estándar y desplegado en GitHub Pages. El sitio presenta colecciones completas con galerías multimedia, sistema de carrito de compras funcional, conexión directa vía WhatsApp y navegación innovadora con <strong>carrusel vertical</strong> que crea una experiencia inmersiva única.
            </p>

            <h4 style="color: #E91E63; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">👗 Presentación de Colecciones</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Galerías multimedia organizadas:</strong> Implementé secciones dedicadas para cada fase del proceso creativo: moodboard de inspiración, fotografías profesionales de prendas, croquis técnicos detallados, diseños finales renderizados, pasarela en video y material promocional.</li>
                
                <li><strong>Carrusel vertical innovador:</strong> Desarrollé navegación única con scroll vertical usando CSS scroll-snap y JavaScript para mostrar colecciones completas. Cada slide ocupa 100vh con transiciones suaves, flechas de navegación, indicadores de progreso y autoplay opcional.</li>
                
                <li><strong>Lightbox personalizado:</strong> Creé visor de imágenes en modal con navegación entre fotos usando flechas/teclado/gestos, zoom mediante pinch/double-tap, backdrop blur, contador de posición y transiciones fade elegantes.</li>
                
                <li><strong>Videos embebidos:</strong> Integré videos de desfiles y behind-the-scenes en formato MP4 optimizado con controles personalizados, thumbnails atractivos, loading progresivo y fallback a YouTube cuando necesario.</li>
                
                <li><strong>Propuesta visual completa:</strong> Diseñé sección mostrando paletas de colores con códigos hex, muestras de texturas y materiales, referencias de inspiración, concept boards y mood del proyecto con tarjetas interactivas flip-effect.</li>
            </ul>

            <h4 style="color: #9C27B0; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🛒 Sistema de Compras y Contacto</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Carrito de compras funcional:</strong> Implementé sistema que permite agregar prendas con talla/color, modificar cantidades, calcular subtotal y generar mensaje pre-formateado para envío directo por WhatsApp con detalles del pedido.</li>
                
                <li><strong>Integración WhatsApp Business:</strong> Desarrollé conexión directa vía WhatsApp API que abre chat pre-llenado con información del pedido (productos, cantidades, total) facilitando comunicación inmediata con la diseñadora.</li>
                
                <li><strong>Catálogo de productos:</strong> Creé sección de tienda con grid de prendas mostrando foto, nombre, precio, disponibilidad de tallas/colores y botones de acción (ver detalles, agregar a carrito, favorito).</li>
                
                <li><strong>Fichas de producto detalladas:</strong> Implementé páginas individuales con galería de imágenes múltiples, descripción completa, tabla de tallas, guía de cuidados, selector de opciones y botón prominente de compra.</li>
            </ul>

            <h4 style="color: #FF5722; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🎨 Diseño Visual y UX</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Estética minimalista elegante:</strong> Desarrollé diseño limpio con tipografía serif refinada, amplios espacios en blanco, fotografía de alta calidad como protagonista y paleta monocromática con acentos dorados.</li>
                
                <li><strong>Animaciones CSS sutiles:</strong> Implementé transiciones smooth en hover (scale, opacity, brightness), fade-in al scroll usando Intersection Observer, animated underlines en links y micro-interactions en botones.</li>
                
                <li><strong>Iconografía Font Awesome:</strong> Utilicé librería de íconos para elementos UI (carrito, favoritos, redes sociales, contacto) con animaciones hover personalizadas y tamaños adaptativos.</li>
                
                <li><strong>Responsive design mobile-first:</strong> Construí layouts que se adaptan perfectamente desde 320px hasta 4K con breakpoints estratégicos, imágenes responsive srcset, menú hamburger en móvil y touch gestures optimizados.</li>
            </ul>

            <h4 style="color: #3F51B5; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📱 Secciones Especializadas</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Página de eventos/desfiles:</strong> Desarrollé sección con información de presentaciones futuras y pasadas, ubicación con integración de mapas, agenda de actividades, galería de fotos del evento y sistema de registro de asistencia.</li>
                
                <li><strong>Casting de modelos:</strong> Creé presentación de perfiles seleccionados mostrando fotos, medidas, características y concepto visual buscado con layout tipo portfolio cards.</li>
                
                <li><strong>Concepto del desfile:</strong> Implementé página explicando línea creativa, dirección estética, paleta de colores utilizada, texturas predominantes e inspiración visual con rich media (imágenes, videos, textos).</li>
                
                <li><strong>Galería de fitting:</strong> Desarrollé carrusel tipo collage con múltiples imágenes superpuestas que cambian con transiciones desvanecido mostrando ajustes y variaciones de prendas durante proceso.</li>
                
                <li><strong>Croquis de acomodo:</strong> Incluí sección con ilustración del layout del evento mostrando posiciones, recorridos de pasarela, distribución del espacio y flow del desfile.</li>
                
                <li><strong>Logos y branding:</strong> Presenté identidad visual de la diseñadora con versiones del logo en diferentes colores, aplicaciones en mockups, paleta de marca y guidelines básicos.</li>
            </ul>

            <h4 style="color: #00BCD4; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🚀 Implementación Técnica</h4>
            <ul style="color: white; line-height: 1.8;">
                <li><strong>Sitio estático optimizado:</strong> Construí con HTML5 semántico, CSS3 moderno (Grid/Flexbox) y JavaScript vanilla para máxima compatibilidad, velocidad de carga y facilidad de mantenimiento.</li>
                
                <li><strong>GitHub Pages deployment:</strong> Configuré hosting gratuito con SSL automático, deploy continuo desde repositorio, dominio personalizado opcional y versionado Git para control de cambios.</li>
                
                <li><strong>Recursos locales optimizados:</strong> Almacené imágenes comprimidas en WebP con fallback JPEG, videos en formato MP4 optimizado, fuentes web subseteadas para caracteres usados y assets minificados.</li>
                
                <li><strong>SEO básico implementado:</strong> Incluí meta tags apropiados, Open Graph para social sharing, structured data Schema.org para portafolio creativo, sitemap.xml y robots.txt.</li>
            </ul>
            <strong>Galería de imágenes:</strong> 
            <section id="slideshow">
                <div class="entire-content">
                    <div class="content-carrousel">
                        ${[
                          {
                            num: 1,
                            desc: "Página principal del portafolio con hero section elegante mostrando la última colección. Implementé un diseño minimalista que destaca las prendas con tipografía serif y espacios amplios. La navegación es intuitiva con menú sticky.",
                          },
                          {
                            num: 2,
                            desc: "Sección de moodboard con galería de inspiración visual. Utilicé CSS Grid para crear un layout tipo Pinterest con imágenes de diferentes tamaños. Las imágenes se cargan con lazy loading para optimizar performance.",
                          },
                          {
                            num: 3,
                            desc: "Carrusel vertical implementado con JavaScript vanilla y CSS scroll-snap. Cada slide muestra una prenda diferente con transiciones suaves. La navegación incluye flechas y dots indicadores del progreso.",
                          },
                          {
                            num: 4,
                            desc: "Galería de fotografías profesionales con lightbox personalizado. Al hacer clic en una imagen se abre en modal con fondo oscuro. Implementé navegación entre imágenes con teclado y gestos táctiles.",
                          },
                          {
                            num: 5,
                            desc: "Propuesta visual mostrando paletas de colores, texturas y materiales. Diseñé tarjetas interactivas con efecto flip que revelan información técnica. Los colores se muestran con códigos hexadecimales.",
                          },
                          {
                            num: 6,
                            desc: "Sección de logos y branding personal de la diseñadora. Incluye versiones del logo en diferentes colores y aplicaciones. Las imágenes están en formato SVG para máxima calidad en cualquier resolución.",
                          },
                          {
                            num: 7,
                            desc: "Página de eventos con información organizada por fechas, ubicación y actividades. Incluye secciones visuales para destacar presentaciones, pasarelas y exhibiciones, manteniendo una estructura clara y fácil de navegar.",
                          },
                          {
                            num: 8,
                            desc: "Diseños finales presentados en grid con filtros por categoría. Cada prenda muestra múltiples vistas y detalles. El sistema de filtrado funciona con JavaScript para mostrar/ocultar elementos dinámicamente.",
                          },
                          {
                            num: 9,
                            desc: "Sección de pasarela con video embebido de desfile de moda. El reproductor es personalizado con controles estilizados. Implementé thumbnails que permiten saltar a momentos específicos del video.",
                          },
                          {
                            num: 10,
                            desc: "Sección dedicada al casting de modelos donde se muestran los perfiles seleccionados, sus características y el concepto visual buscado. Presentado de forma clara para entender la propuesta del desfile.",
                          },
                          {
                            num: 11,
                            desc: "Descripción del concepto del desfile junto con la paleta de colores, texturas e inspiración visual. Explica la línea creativa y la dirección estética del evento.",
                          },
                          {
                            num: 12,
                            desc: "Galería de fitting presentada como un carrusel tipo collage con múltiples imágenes superpuestas. Las fotos cambian con transiciones suaves y desvanecido para mostrar variaciones de prendas y ajustes.",
                          },
                          {
                            num: 13,
                            desc: "Sección con el croquis de acomodo del evento donde se ilustran posiciones, recorridos, pasarela y distribución del espacio. Permite visualizar la estructura general del desfile.",
                          },
                          {
                            num: 14,
                            desc: "Footer con enlaces a redes sociales de la diseñadora. Cada ícono de Font Awesome tiene animación hover única. El diseño responsive reorganiza los elementos en columnas para móvil.",
                          },
                          {
                            num: 15,
                            desc: "Vista móvil completa del portafolio. El menú se convierte en hamburger menu con slide-in animation. Las galerías se adaptan a una columna con scroll vertical optimizado para touch.",
                          },
                          {
                            num: 16,
                            desc: "Página de tienda online de ropa con catálogo completo, información de cada prenda y enlaces directos para compra. Incluye secciones organizadas por categorías y navegación sencilla para explorar los productos.",
                          },
                        ]
                          .map(
                            (img) => `
                    <figure class="shadow"
                        data-img="moda${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="/assets/experiencias/galerias/moda/moda${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                          )
                          .join("")}
                    </div>
                </div>
            </section>

            <h1 class="h1relleno2"></h1>
            <h1 class="h1relleno2"></h1>

            <section class="contact-section">
                <p class="contact-text">Si deseas más información sobre este proyecto o contactar a la diseñadora:</p>
                
                <div class="contact-options">
                    <a href="https://wa.me/525524218886" class="whatsapp-btn" target="_blank">
                        <span class="btn-icon">📱</span>
                        <span class="btn-text">Enviar WhatsApp</span>
                    </a>
                    
                    <a href="tel:+525524218886" class="call-btn">
                        <span class="btn-icon">📞</span>
                        <span class="btn-text">Llamar ahora</span>
                    </a>
                </div>
                
                <div class="contact-details">
                    <p class="phone-number">+52 55 2421 8886</p>
                    <p class="reference-name">Adela Ávila Franco</p>
                    <p class="reference-position">Diseñadora de Moda</p>
                </div>
            </section>
        </div>
      `;
      
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `/assets/experiencias/galerias/moda/${img}`,
            desc
          );
        });
      });
      
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para punto de venta
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
      <div class="tech-section">
        <h3 class="tech-title">🚀 Tecnologías Utilizadas</h3>
        <div class="tech-grid">
            <div class="tech-item">
                <i class="devicon-csharp-plain colored tech-icon"></i>
                <span>C#</span>
            </div>
            <div class="tech-item">
                <i class="devicon-dot-net-plain colored tech-icon"></i>
                <span>.NET Framework</span>
            </div>
            <div class="tech-item">
                <i class="devicon-dotnetcore-plain colored tech-icon"></i>
                <span>WinForms</span>
            </div>
            <div class="tech-item">
                <i class="devicon-mysql-plain colored tech-icon"></i>
                <span>MySQL 8.0</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-database tech-icon" style="color: #00758F;"></i>
                <span>ADO.NET</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-barcode tech-icon" style="color: #FF6B6B;"></i>
                <span>Barcode Scanner</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-qrcode tech-icon" style="color: #4ECDC4;"></i>
                <span>QR Generator</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-print tech-icon" style="color: #4ECDC4;"></i>
                <span>Impresión Térmica</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-file-pdf tech-icon" style="color: #E74C3C;"></i>
                <span>PDF Reports</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-file-excel tech-icon" style="color: #1D6F42;"></i>
                <span>Excel Export</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-cash-register tech-icon" style="color: #F39C12;"></i>
                <span>Sistema POS</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-chart-bar tech-icon" style="color: #9B59B6;"></i>
                <span>Reportes 20+</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-users-cog tech-icon" style="color: #3498DB;"></i>
                <span>Gestión Roles</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-boxes tech-icon" style="color: #E67E22;"></i>
                <span>Control Inventario</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-receipt tech-icon" style="color: #1ABC9C;"></i>
                <span>Facturación</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-credit-card tech-icon" style="color: #2ECC71;"></i>
                <span>Múltiples Pagos</span>
            </div>
            <div class="tech-item">
                <i class="devicon-git-plain colored tech-icon"></i>
                <span>Git/GitHub</span>
            </div>
            <div class="tech-item">
                <i class="fas fa-shield-alt tech-icon" style="color: #95A5A6;"></i>
                <span>Seguridad Datos</span>
            </div>
        </div>
    </div>
                <p style="color: white; font-size: 1.1em; line-height: 1.8;">
                    Desarrollé un <strong>sistema integral de punto de venta (POS)</strong> diseñado específicamente para pequeñas y medianas empresas, construido con <strong>C# .NET Framework y WinForms</strong> con base de datos <strong>MySQL 8.0</strong>. El sistema incluye gestión completa de ventas, inventario, usuarios, reportes avanzados, lector de códigos de barras, impresión térmica de tickets y más de 20 tipos de reportes generados automáticamente.
                </p>

                <h4 style="color: #00758F; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">💰 Módulo de Ventas y Caja</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Interfaz de punto de venta optimizada:</strong> Diseñé pantalla principal con escaneo de códigos de barras en tiempo real usando dispositivos USB/Serial, búsqueda rápida de productos por nombre/código, calculadora de totales automática con IVA configurable, múltiples métodos de pago (efectivo, tarjeta, transferencia) y cambio calculado instantáneamente.</li>
                    
                    <li><strong>Gestión de transacciones:</strong> Implementé sistema que registra cada venta con timestamp, vendedor responsable, productos vendidos, cantidades, descuentos aplicados, método de pago y total. Soporte para ventas mixtas (varios métodos de pago en una transacción).</li>
                    
                    <li><strong>Sistema de descuentos:</strong> Desarrollé aplicación de descuentos porcentuales o fijos a nivel de producto individual, carrito completo o por categorías. Validación de permisos según rol de usuario y registro en bitácora de quién autorizó.</li>
                    
                    <li><strong>Historial de ventas:</strong> Creé módulo de consulta con filtros por fecha/rango, vendedor, método de pago, monto mínimo/máximo y productos específicos. Exportación a Excel/PDF para análisis y auditoría.</li>
                    
                    <li><strong>Impresión térmica de tickets:</strong> Implementé generación automática de tickets con información completa (folio, fecha/hora, productos, precios, subtotal, IVA, total, forma de pago) compatible con impresoras térmicas estándar de 58mm y 80mm.</li>
                </ul>

                <h4 style="color: #F39C12; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📦 Control de Inventario</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Gestión completa de productos:</strong> Desarrollé módulo CRUD con registro de productos incluyendo código de barras (generado o escaneado), nombre, descripción, categoría, marca, precio de costo, precio de venta, margen de ganancia calculado, stock actual, stock mínimo y múltiples proveedores.</li>
                    
                    <li><strong>Generador de códigos de barras:</strong> Implementé sistema que genera códigos de barras estándar EAN-13/UPC compatibles con protocolo GS1, con vista previa, opciones de personalización y capacidad de impresión en etiquetas adhesivas.</li>
                    
                    <li><strong>Alertas de stock mínimo:</strong> Creé sistema de notificaciones automáticas cuando productos caen bajo stock mínimo configurado, mostrando alertas en dashboard, enviando reportes diarios por email y generando órdenes de compra sugeridas.</li>
                    
                    <li><strong>Actualización masiva de precios:</strong> Desarrollé herramienta para modificar precios de múltiples productos simultáneamente aplicando porcentajes de incremento/descuento, por categorías o marcas específicas, con previsualización antes de confirmar cambios.</li>
                    
                    <li><strong>Búsqueda y filtrado avanzado:</strong> Implementé buscador con filtros combinados por categoría, marca, rango de precio, stock disponible y productos más/menos vendidos. Resultados con paginación y ordenamiento personalizable.</li>
                    
                    <li><strong>Historial de movimientos:</strong> Registré todas las operaciones de inventario (entradas, salidas, ajustes, mermas, devoluciones) con fecha, usuario responsable, motivo y cantidad, permitiendo auditorías completas y trazabilidad.</li>
                </ul>

                <h4 style="color: #3498DB; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">👥 Gestión de Usuarios y Seguridad</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Sistema de autenticación robusto:</strong> Implementé login con validación de credenciales contra base de datos MySQL, hash de contraseñas con algoritmo bcrypt, sesiones con timeout automático y bloqueo temporal tras intentos fallidos.</li>
                    
                    <li><strong>Control de roles y permisos:</strong> Desarrollé sistema RBAC (Role-Based Access Control) con tres roles principales: Administrador (acceso total), Vendedor (ventas y consultas) y Almacenista (inventario y reportes), cada uno con permisos granulares configurables.</li>
                    
                    <li><strong>Módulo de gestión de usuarios:</strong> Creé interfaz para registrar nuevos usuarios, asignar roles, modificar permisos, deshabilitar cuentas temporalmente, resetear contraseñas y consultar historial de actividad de cada usuario.</li>
                    
                    <li><strong>Auditoría completa:</strong> Implementé logging de todas las acciones críticas (ventas, modificaciones de inventario, cambios de precios, accesos al sistema) con registro de usuario, fecha/hora, acción realizada y datos modificados.</li>
                    
                    <li><strong>Recuperación de contraseñas:</strong> Desarrollé sistema seguro de reseteo mediante preguntas de seguridad o email de verificación con tokens temporales de un solo uso con expiración de 24 horas.</li>
                </ul>

                <h4 style="color: #9B59B6; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📊 Reportes y Analítica</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Más de 20 tipos de reportes:</strong> Implementé sistema completo de reportería incluyendo: ventas por período, productos más vendidos, vendedores con mejor desempeño, inventario actual, productos bajo stock, utilidades y ganancias, ventas por categoría, métodos de pago utilizados, devoluciones, mermas, análisis de clientes frecuentes, proyecciones de ventas, rotación de inventario, comparativas mensuales/anuales, y análisis de rentabilidad por producto.</li>
                    
                    <li><strong>Exportación flexible:</strong> Desarrollé generación de reportes en múltiples formatos: PDF con diseño profesional usando bibliotecas especializadas, Excel con datos estructurados para análisis posterior, y CSV para importación en otras herramientas.</li>
                    
                    <li><strong>Gráficos estadísticos:</strong> Integré visualizaciones mostrando tendencias de ventas, comparativas entre períodos, distribución por categorías y evolución de inventario con gráficos de barras, líneas y pie charts.</li>
                    
                    <li><strong>Dashboard ejecutivo:</strong> Creé pantalla principal con KPIs clave: ventas del día/mes/año, productos con stock crítico, monto en caja, top 5 productos vendidos, alertas pendientes y comparativa vs período anterior.</li>
                    
                    <li><strong>Programación de reportes:</strong> Implementé sistema para generar reportes automáticamente en horarios configurados (diario, semanal, mensual) con envío automático por email a destinatarios específicos.</li>
                </ul>

                <h4 style="color: #E74C3C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">💳 Gestión de Cuentas por Cobrar</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Lista de deudores:</strong> Desarrollé módulo completo de seguimiento de cuentas por cobrar con registro de cliente, monto adeudado, fecha de venta, fecha límite de pago, días de atraso, historial de abonos parciales y cálculo de intereses moratorios configurables.</li>
                    
                    <li><strong>Sistema de alertas por vencimiento:</strong> Implementé código de colores (verde=al corriente, amarillo=próximo a vencer, rojo=vencido) con cálculo automático de días de atraso y generación de recordatorios para seguimiento.</li>
                    
                    <li><strong>Registro de pagos parciales:</strong> Creé funcionalidad para registrar abonos con fecha, monto, método de pago y notas, actualizando automáticamente saldo pendiente y mostrando progreso visual de liquidación.</li>
                    
                    <li><strong>Reportes de cobranza:</strong> Generé reportes de cuentas por cobrar totales, antigüedad de saldos (0-30, 31-60, 61-90, 90+ días), clientes con mayor deuda, histórico de pagos y proyecciones de flujo de efectivo.</li>
                </ul>

                <h4 style="color: #1ABC9C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🔧 Arquitectura Técnica</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Base de datos MySQL optimizada:</strong> Diseñé esquema relacional normalizado con 15+ tablas: productos, ventas, detalle_ventas, usuarios, clientes, proveedores, categorías, pagos, devoluciones, auditoria, configuraciones con índices compuestos para consultas frecuentes y constraints de integridad referencial.</li>
                    
                    <li><strong>Arquitectura en capas:</strong> Implementé patrón de diseño N-Tier separando: capa de presentación (WinForms), capa de lógica de negocio (clases de dominio), capa de acceso a datos (ADO.NET con stored procedures) y capa de entidades (POCOs).</li>
                    
                    <li><strong>Conexión segura a BD:</strong> Utilicé ADO.NET con MySqlConnection, prepared statements para prevenir SQL injection, connection pooling para eficiencia, transacciones ACID para operaciones críticas y manejo robusto de errores con try-catch-finally.</li>
                    
                    <li><strong>Configuración flexible:</strong> Desarrollé sistema de settings almacenados en base de datos y archivo config: parámetros de IVA, redondeo de montos, formatos de ticket, configuración de impresoras, rutas de backups, timeouts de sesión y personalización de reportes.</li>
                    
                    <li><strong>Integración con hardware:</strong> Implementé soporte para lectores de códigos de barras USB/Serial, impresoras térmicas ESC/POS, cajones de dinero con apertura automática y básculas electrónicas para productos a granel.</li>
                </ul>

                <h4 style="color: #2ECC71; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🛡️ Seguridad y Respaldos</h4>
                <ul style="color: white; line-height: 1.8;">
                    <li><strong>Backups automáticos:</strong> Configuré respaldos programados de base de datos con compresión, encriptación AES-256, almacenamiento en múltiples ubicaciones (local, red, nube) y retención configurable de versiones históricas.</li>
                    
                    <li><strong>Validaciones exhaustivas:</strong> Implementé validación de datos en todos los formularios: tipos de datos correctos, rangos numéricos válidos, formatos de email/teléfono, campos obligatorios, duplicados y lógica de negocio.</li>
                    
                    <li><strong>Manejo de errores robusto:</strong> Desarrollé sistema de captura de excepciones con logging detallado, mensajes amigables al usuario, recuperación automática cuando posible y alertas al administrador en errores críticos.</li>
                    
                    <li><strong>Protección de datos sensibles:</strong> Encripté información confidencial (contraseñas, datos bancarios), implementé cifrado en tránsito para comunicación con BD y cumplimiento básico de normativas de protección de datos.</li>
                </ul>
                <strong>Galeria de imagenes:</strong> 
                <section id="slideshow">
                    <div class="entire-content">
                        <div class="content-carrousel">
                            ${[
                              {
                                num: 1,
                                desc: "Como desarrollador, diseñé esta interfaz principal de ventas para optimizar el flujo de trabajo. Implementé un sistema de escaneo en tiempo real que se integra directamente con el inventario, cálculos automáticos de totales con impuestos configurables, y una lista editable de productos que permite correcciones inmediatas. La interfaz responde a eventos táctiles y de teclado para máxima eficiencia.",
                              },
                              {
                                num: 2,
                                desc: "Desarrollé este sistema de autenticación con capas de seguridad implementando hash bcrypt para contraseñas. El módulo valida credenciales contra la base de datos MySQL y asigna permisos según roles (Administrador/Vendedor/Almacenista). Incluí mecanismos para prevenir ataques por fuerza bruta y un sistema de recuperación de cuentas con verificación por email.",
                              },
                              {
                                num: 3,
                                desc: "Para el registro de productos, construí un formulario dinámico que valida datos en tiempo real. Implementé cálculos automáticos de margen de ganancia y conexión con la API de códigos de barras GS1. El sistema genera alertas cuando el stock cae bajo el mínimo configurado y registra el historial completo de cambios para auditoría.",
                              },
                              {
                                num: 4,
                                desc: "Este historial de ventas fue desarrollado con paginación inteligente para manejar grandes volúmenes de datos. Implementé filtros por fecha/rango horario usando MySQL DATE_FORMAT y optimicé las consultas con índices compuestos. Los datos se pueden exportar a CSV/PDF mediante librerías personalizadas que desarrollé basadas en FPDF.",
                              },
                              {
                                num: 5,
                                desc: "Como solución para gestión masiva, programé esta interfaz con actualización en tiempo real usando AJAX para evitar recargas. Desarrollé algoritmos para aplicar descuentos porcentuales o fijos a grupos de productos seleccionados, con previsualización de cambios antes de confirmar. Incluí validación de rangos numéricos y registro de cambios en bitácora.",
                              },
                              {
                                num: 6,
                                desc: "Para este módulo de inventario, implementé una tabla renderizada del lado del cliente con Virtual DOM para manejar miles de productos sin lag. Desarrollé un sistema de búsqueda combinada que consulta múltiples campos simultáneamente, con sugerencias predictivas. Las opciones de importación/exportación usan Web Workers para procesamiento en segundo plano.",
                              },
                              {
                                num: 7,
                                desc: "Desarrollé este formulario especial para productos sin código de barras estándar, generando identificadores únicos basados en hash SHA-1 truncados. Implementé cálculos de rentabilidad en tiempo real usando eventos onChange y validación cruzada con productos similares para evitar duplicados. La interfaz guarda borradores automáticamente cada 30 segundos.",
                              },
                              {
                                num: 8,
                                desc: "Construí este buscador avanzado con un algoritmo que pondera resultados por relevancia usando TF-IDF adaptado a productos. Implementé filtros anidados que se ejecutan como consultas preparadas en MySQL para seguridad. La interfaz usa memoization para cachear resultados frecuentes y reducción de queries innecesarias.",
                              },
                              {
                                num: 9,
                                desc: "Para estos reportes financieros, desarrollé consultas SQL complejas con subconsultas correlacionadas y funciones de ventana. Implementé gráficos interactivos usando Chart.js con renderizado canvas optimizado. El sistema genera proyecciones usando promedio móvil ponderado y permite la programación de reportes recurrentes automáticos.",
                              },
                              {
                                num: 10,
                                desc: "Este sistema de gestión de deudores fue uno de mis desarrollos más complejos. Implementé un motor de fechas con Moment.js que calcula estados (verde/rojo/blanco) evaluando plazos personalizables. Desarrollé un algoritmo de cálculo de intereses moratorios configurable por política de negocio. La interfaz incluye recordatorios automáticos vía email/SMS usando colas Redis para manejo asíncrono.",
                              },
                              {
                                num: 11,
                                desc: "Para el generador de códigos de barras, implementé la librería JsBarcode extendida con patrones personalizados. Desarrollé un sistema de prefijos categóricos que se almacenan como metadatos en la base de datos. La vista previa usa Canvas con opciones de zoom y la impresión se controla mediante una cola de trabajos para evitar bloqueos de interfaz.",
                              },
                              {
                                num: 12,
                                desc: "Este módulo de usuarios fue desarrollado con arquitectura RBAC (Role-Based Access Control). Implementé un sistema de permisos granulares usando máscaras de bits almacenadas como BIGINT en MySQL. Para seguridad, incluí auditoría de cambios, hash PBKDF2 para contraseñas, y timeout de sesión con renovación automática de tokens JWT.",
                              },
                              {
                                num: 13,
                                desc: "Desarrollé este sistema de tickets con plantillas Mustache.js que permiten personalización sin modificar código. Implementé impresión térmica directa via ESC/POS commands y generación de PDF con dompdf optimizado. Los tickets incluyen QR codes con hash de validación para autenticidad y se almacenan comprimidos en la base de datos para ahorro de espacio.",
                              },
                              {
                                num: 14,
                                desc: "Para el sistema de ayuda, construí un motor de búsqueda semántica usando NLP básico con stopwords en español. Implementé captura de pantalla automática con html2canvas para reportes de error. Los tutoriales interactivos usan el localStorage para guardar progreso y se actualizan dinámicamente según actualizaciones del sistema.",
                              },
                            ]
                              .map(
                                (img) => `
                    <figure class="shadow"
                        data-img="puntodeventa${img.num}.png"
                        data-desc="${img.desc.replace(/"/g, "&quot;")}">
                        <img src="/assets/experiencias/galerias/punto de venta/puntodeventa${
                          img.num
                        }.png"/>
                        <figcaption class="image-caption">Ver detalles</figcaption>
                    </figure>
                `
                              )
                              .join("")}
                        </div>
                    </div>
                </section>
                <h1 class="h1relleno2"></h1>
                <h1 class="h1relleno2"></h1>
                <strong>LINK DEL VIDEO DEMOSTRANDO EL FUNCIONAMIENTO:</strong> 
                <table style="width: 100%; height: 100%;">
                        <tr>
                            <td style="text-align: center; vertical-align: middle;">
                                <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
                                    <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 80%; width: 80%;">
                                        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                                                src="https://www.youtube.com/embed/xctI6uWRVHw" 
                                                frameborder="0" 
                                                allowfullscreen>
                                        </iframe>
                                    </div>
                                </div>
                            </td>
                        </tr>
                </table>

                <h1 class="h1relleno2"></h1>
                <h1 class="h1relleno2"></h1>

                <section class="contact-section">
                    <p class="contact-text">Si deseas más información sobre este proyecto, puedes comunicarte con la persona de referencia:</p>
                    
                    <div class="contact-options">
                        <a href="https://wa.me/525633353852" class="whatsapp-btn" target="_blank">
                            <span class="btn-icon">📱</span>
                            <span class="btn-text">Enviar WhatsApp</span>
                        </a>
                        
                        <a href="tel:+525633353852" class="call-btn">
                            <span class="btn-icon">📞</span>
                            <span class="btn-text">Llamar ahora</span>
                        </a>
                    </div>
                    
                    <div class="contact-details">
                        <p class="phone-number">+52 56 3335 3852</p>
                        <p class="reference-name">Nadia Ambrocio</p>
                    </div>
                </section>
            `;
      document.querySelectorAll(".shadow").forEach((fig) => {
        fig.addEventListener("click", () => {
          const img = fig.dataset.img;
          const desc = fig.dataset.desc;
          openModalWithDescription(
            `/assets/experiencias/galerias/punto de venta/${img}`,
            desc
          );
        });
      });
      setTimeout(adaptAllCarousels, 100);
    },
    // Función para laboratorio
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
      <div class="tech-section">
          <h3 class="tech-title">🚀 Tecnologías y Habilidades</h3>
          <div class="tech-grid">
              <div class="tech-item">
                  <i class="fas fa-flask tech-icon" style="color: #9B59B6;"></i>
                  <span>Análisis Químico</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-laptop-code tech-icon" style="color: #3498DB;"></i>
                  <span>Software Dev</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-python-plain colored tech-icon"></i>
                  <span>Python</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-csharp-plain colored tech-icon"></i>
                  <span>C#/.NET</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-database tech-icon" style="color: #E67E22;"></i>
                  <span>SQLite/MySQL</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-tools tech-icon" style="color: #95A5A6;"></i>
                  <span>Mantenimiento PC</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-chart-line tech-icon" style="color: #1ABC9C;"></i>
                  <span>Análisis Estadístico</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-microscope tech-icon" style="color: #E74C3C;"></i>
                  <span>Instrumentación</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-file-excel tech-icon" style="color: #217346;"></i>
                  <span>Excel/VBA</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-atom tech-icon" style="color: #F39C12;"></i>
                  <span>Espectrómetros</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-vial tech-icon" style="color: #16A085;"></i>
                  <span>Cromatógrafos</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-file-alt tech-icon" style="color: #2C3E50;"></i>
                  <span>Documentación</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-clipboard-check tech-icon" style="color: #27AE60;"></i>
                  <span>Control Calidad</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-warehouse tech-icon" style="color: #8E44AD;"></i>
                  <span>Inventario Lab</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-graduation-cap tech-icon" style="color: #2980B9;"></i>
                  <span>Capacitación</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-chart-bar tech-icon" style="color: #E67E22;"></i>
                  <span>Matplotlib/Pandas</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-network-wired tech-icon" style="color: #3498DB;"></i>
                  <span>Redes Lab</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-shield-alt tech-icon" style="color: #C0392B;"></i>
                  <span>Seguridad Datos</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-calendar-alt tech-icon" style="color: #16A085;"></i>
                  <span>Gestión Proyectos</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-code-branch tech-icon" style="color: #95A5A6;"></i>
                  <span>Git/Control Versiones</span>
              </div>
          </div>
      </div>

      <p style="color: white; font-size: 1.1em; line-height: 1.8;">
          Durante mi periodo como Practicante en el Laboratorio de Química Analítica, desempeñé un rol único e innovador en la intersección entre ciencias químicas y tecnologías de la información. Mi posición se caracterizó por la aplicación de soluciones informáticas avanzadas para resolver desafíos específicos del entorno laboratorial, modernizando procesos tradicionales mediante automatización, desarrollo de software especializado, y gestión inteligente de datos científicos. Esta experiencia me permitió combinar conocimientos de programación, bases de datos y análisis de datos con el riguroso entorno de un laboratorio de investigación química, contribuyendo significativamente a la eficiencia operativa y precisión de los análisis realizados.
      </p>

      <h4 style="color: #3498DB; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">💻 Desarrollo de Software Especializado para Laboratorio</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Sistema de gestión de inventario de reactivos químicos (LIMS personalizado):</strong> Desarrollé desde cero una aplicación de escritorio en C# con WinForms y base de datos SQLite que permitió el control integral de más de 500 reactivos químicos, solventes y materiales de laboratorio. El sistema incluía funcionalidades como registro de entradas/salidas con código de barras, tracking de fechas de vencimiento con alertas automáticas 30/60/90 días previos, control de lotes por proveedor, cálculo automático de stock mínimo basado en consumo histórico, generación de reportes de inventario en Excel/PDF, y registro de ubicación física en almacén con mapeo visual. Implementé validaciones de seguridad para sustancias controladas y peligrosas, registro de hojas de seguridad (MSDS) asociadas, y sistema de permisos por usuario para trazabilidad completa.</li>
          
          <li><strong>Plataforma de registro electrónico de experimentos (ELN - Electronic Lab Notebook):</strong> Creé una aplicación multiplataforma en Python con interfaz Tkinter/PyQt que reemplazó los cuadernos de laboratorio físicos por un sistema digital estructurado. El software permitía documentar experimentos con campos estandarizados (objetivo, metodología, materiales, condiciones experimentales, observaciones, resultados), captura de fotografías directamente desde la aplicación, firma digital de supervisores para validación, búsqueda avanzada por múltiples criterios (fecha, reactivos utilizados, tipo de análisis, investigador), exportación a formatos PDF con marca de agua de autenticidad, y respaldo automático en servidor local. Implementé plantillas personalizables por tipo de análisis (titulaciones, espectroscopía, cromatografía) para agilizar la documentación.</li>
          
          <li><strong>Suite de análisis estadístico de resultados analíticos:</strong> Desarrollé scripts en Python utilizando NumPy, Pandas, SciPy y Matplotlib para automatizar el análisis estadístico de resultados experimentales. Las herramientas incluían: cálculo automático de estadísticas descriptivas (media, mediana, desviación estándar, coeficiente de variación), detección de outliers mediante métodos de Grubbs y Dixon, análisis de incertidumbre según guía GUM (Guide to the Expression of Uncertainty in Measurement), validación de métodos analíticos con cálculos de LOD/LOQ, linealidad, precisión y exactitud, generación automática de gráficos de calibración con ecuación de regresión y R², pruebas de hipótesis (t-Student, ANOVA) para comparación de resultados, y exportación de reportes con formato estandarizado según normas ISO 17025.</li>
          
          <li><strong>Dashboard de visualización de datos en tiempo real:</strong> Implementé un sistema de monitoreo en Python con Dash/Plotly que permitía visualizar en tiempo real datos provenientes de instrumentos analíticos conectados a la red. El dashboard mostraba gráficos interactivos de tendencias, alertas cuando parámetros salían de especificación, comparativos históricos, y métricas de productividad del laboratorio (muestras analizadas por día, tiempos de análisis promedio, tasas de aprobación/rechazo).</li>
          
          <li><strong>Aplicación de cálculos químicos especializados:</strong> Creé herramientas de cálculo en Python y Excel con VBA para operaciones frecuentes en el laboratorio: diluciones de soluciones con cualquier relación de concentración, preparación de buffers con ajuste de pH mediante ecuación de Henderson-Hasselbalch, conversiones de unidades de concentración (molaridad, normalidad, ppm, %p/p, %v/v), cálculos estequiométricos para síntesis químicas, determinación de rendimiento teórico vs real, y cálculos de masas molares con composición elemental. Las interfaces incluían validaciones para evitar errores de cálculo y bases de datos de constantes químicas (pKa, densidades, pesos moleculares).</li>
      </ul>

      <h4 style="color: #E74C3C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🔬 Gestión de Instrumentación y Equipos Analíticos</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Mantenimiento de sistemas informáticos de equipos analíticos:</strong> Realicé mantenimiento preventivo y correctivo de las computadoras integradas a instrumentos científicos como espectrómetros UV-Vis, espectrómetros de absorción atómica (AAS), cromatógrafos de gases (GC) y líquidos (HPLC), espectrómetros de masas, espectrofotómetros FTIR, y balanzas analíticas electrónicas. Las tareas incluyeron actualización de software propietario (ChemStation, Empower, LabSolutions), instalación de drivers de comunicación serial (RS-232) y USB, optimización de sistemas operativos Windows XP/7/10 legacy requeridos por software antiguo, limpieza de sistemas, reemplazo de componentes (HDD a SSD para mejorar velocidad), configuración de respaldos automáticos de métodos y datos de análisis, y troubleshooting de problemas de conectividad entre instrumento y PC.</li>
          
          <li><strong>Configuración de red de instrumentos:</strong> Implementé una red local para interconectar instrumentos analíticos con estaciones de trabajo centrales, configurando direcciones IP estáticas, protocolos de comunicación TCP/IP y Ethernet, carpetas compartidas en servidor local para almacenamiento centralizado de datos, y políticas de backup automatizado. Configuré accesos remotos seguros para que técnicos especializados pudieran dar soporte a equipos sin estar físicamente presentes.</li>
          
          <li><strong>Calibración asistida por software:</strong> Desarrollé hojas de cálculo avanzadas en Excel con macros VBA para documentación de calibraciones de equipos volumétricos (pipetas, buretas, matraces) y balanzas analíticas según normas metrológicas. Los templates calculaban automáticamente incertidumbres, generaban certificados de calibración, y alertaban cuando era necesaria una recalibración según frecuencias establecidas en calendario de mantenimiento.</li>
          
          <li><strong>Implementación de control de calidad instrumental:</strong> Creé un sistema de registro de verificaciones diarias de instrumentos (checks de performance) usando aplicación personalizada que registraba parámetros críticos: estabilidad de línea base, precisión de inyección, resolución de picos, sensibilidad de detectores. El sistema generaba automáticamente cartas de control (gráficos Shewhart) para detectar tendencias o desviaciones que indicaran necesidad de mantenimiento preventivo.</li>
      </ul>

      <h4 style="color: #1ABC9C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">⚡ Automatización y Optimización de Procesos</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Automatización de adquisición de datos instrumentales:</strong> Implementé scripts en Python para comunicación serial (PySerial) con instrumentos que permitían la captura automática de datos de mediciones, eliminando transcripción manual y errores humanos. Los scripts se ejecutaban en segundo plano, capturaban datos en formato CSV, los validaban según rangos esperados, y los importaban directamente a base de datos para análisis posterior. Esto redujo en 75% el tiempo dedicado a entrada manual de datos y eliminó prácticamente los errores de transcripción.</li>
          
          <li><strong>Generación automática de reportes de análisis:</strong> Desarrollé templates en Python con bibliotecas ReportLab y Jinja2 que generaban automáticamente reportes de resultados analíticos en formato PDF profesional. Los reportes incluían encabezados corporativos, información del cliente/muestra, métodos de análisis utilizados, resultados con incertidumbres, gráficos de calibración, firmas digitales de analista y supervisor, y cumplimiento de especificaciones con semáforo visual (verde/amarillo/rojo). El sistema reducía de 30 minutos a 2 minutos el tiempo de generación de cada reporte.</li>
          
          <li><strong>Optimización de flujos de trabajo con macros Excel/VBA:</strong> Creé más de 20 macros personalizadas para tareas repetitivas del laboratorio: conversión masiva de formatos de datos entre diferentes software de instrumentos, consolidación de resultados de múltiples análisis en reporte maestro, formateo automático de tablas según estándares del laboratorio, generación de gráficos con formato corporativo, y validación cruzada de datos con límites de especificación. Estas macros se distribuían mediante un Add-In personalizado de Excel accesible desde una pestaña dedicada en la ribbon.</li>
          
          <li><strong>Sistema de alertas y notificaciones automatizadas:</strong> Implementé un sistema de notificaciones vía email utilizando Python con biblioteca smtplib que enviaba alertas automáticas sobre eventos críticos: reactivos próximos a vencer, inventario bajo stock mínimo, equipos que requerían calibración/mantenimiento según calendario, análisis con resultados fuera de especificación que requerían revisión urgente, y recordatorios de capacitaciones/auditorías programadas.</li>
          
          <li><strong>Digitalización de procedimientos operativos estándar (SOPs):</strong> Convertí más de 50 procedimientos en papel a documentos digitales en formato PDF interactivo con hipervínculos, control de versiones, y accesibilidad desde cualquier PC del laboratorio mediante carpeta compartida en red. Implementé sistema de gestión documental simple con historial de revisiones, firmas de aprobación escaneadas, y distribución automática cuando había actualizaciones.</li>
      </ul>

      <h4 style="color: #F39C12; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📊 Análisis de Datos y Visualización Científica</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Procesamiento de datos espectrales y cromatográficos:</strong> Desarrollé scripts Python especializados para procesamiento de datos provenientes de técnicas instrumentales: corrección de línea base en espectros, smoothing de ruido mediante filtros Savitzky-Golay, identificación automática de picos con algoritmos de detección, integración de áreas bajo curva para cuantificación, deconvolución de picos solapados, y comparación de espectros con bibliotecas de referencia. Estas herramientas aceleraron significativamente el análisis de datos complejos.</li>
          
          <li><strong>Visualización científica avanzada:</strong> Creé visualizaciones profesionales utilizando Matplotlib, Seaborn y Plotly en Python para presentación de resultados: gráficos de calibración con intervalos de confianza, mapas de calor para matrices de correlación, gráficos de dispersión multivariable con clustering, time series para monitoreo de tendencias en control de calidad, box plots para comparación de grupos experimentales, y gráficos 3D para superficies de respuesta en diseño experimental.</li>
          
          <li><strong>Análisis estadístico multivariable:</strong> Implementé técnicas estadísticas avanzadas usando scikit-learn para análisis de datos químicos: análisis de componentes principales (PCA) para reducción de dimensionalidad en datos espectrales, análisis de clustering (K-means, jerárquico) para clasificación de muestras, modelos de regresión lineal múltiple para predicción de propiedades, y análisis discriminante lineal (LDA) para clasificación supervisada de muestras según origen o composición.</li>
          
          <li><strong>Validación de métodos analíticos con tratamiento estadístico:</strong> Automaticé todos los cálculos requeridos para validación completa de métodos analíticos según normas ICH/ISO: pruebas de normalidad (Shapiro-Wilk), homogeneidad de varianzas (Levene), estudios de linealidad con análisis de residuales, cálculos de precisión (repetibilidad, reproducibilidad, precisión intermedia), exactitud mediante análisis de muestras de referencia certificadas, robustez mediante diseño factorial, y límites de detección/cuantificación mediante métodos de relación señal/ruido y desviación estándar del blanco.</li>
      </ul>

      <h4 style="color: #9B59B6; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">👥 Capacitación, Documentación y Gestión</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Capacitación en herramientas digitales:</strong> Diseñé e impartí más de 15 sesiones de capacitación al personal del laboratorio (químicos, técnicos, estudiantes) sobre uso de software desarrollado, mejores prácticas en gestión de datos científicos, herramientas de análisis estadístico, uso avanzado de Excel para cálculos químicos, y operación de software propietario de instrumentos. Creé videos tutoriales screencast y guías paso a paso con capturas de pantalla para facilitar el autoaprendizaje.</li>
          
          <li><strong>Elaboración de documentación técnica completa:</strong> Redacté manuales de usuario detallados para todos los sistemas desarrollados, incluyendo guías de instalación, tutoriales de uso con casos prácticos, sección de troubleshooting para problemas comunes, glosario de términos técnicos, y apéndices con fundamentos teóricos. La documentación incluía diagramas de flujo, capturas de pantalla anotadas, y estaba versionada con control de cambios.</li>
          
          <li><strong>Soporte técnico continuo:</strong> Brindé soporte técnico permanente al personal del laboratorio para resolución de problemas con software, hardware, instrumentos y análisis de datos. Mantuve un sistema de tickets informal (registro en Excel) para tracking de incidencias reportadas, tiempos de resolución, y generación de estadísticas de problemas frecuentes. Tiempo promedio de respuesta fue inferior a 2 horas para incidencias críticas.</li>
          
          <li><strong>Gestión de proyectos de mejora tecnológica:</strong> Lideré pequeños proyectos de mejora continua identificando oportunidades de optimización mediante tecnología, elaborando propuestas técnicas con análisis costo-beneficio, planificando implementación por fases, coordinando con proveedores externos cuando era necesario, y presentando resultados a jefatura con métricas de impacto (tiempo ahorrado, reducción de errores, mejoras en productividad).</li>
          
          <li><strong>Implementación de buenas prácticas de laboratorio digital:</strong> Promoví adopción de mejores prácticas en gestión de datos científicos: nomenclatura estandarizada de archivos con metadata (fecha_proyecto_analista_versión), estructura de carpetas organizada por proyecto/año/tipo de análisis, respaldos regulares con verificación de integridad, control de versiones para documentos críticos, y políticas de retención de datos según requerimientos regulatorios. Implementé sistema de respaldo 3-2-1 (tres copias, dos medios, uno offsite).</li>
      </ul>

      <h4 style="color: #27AE60; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🔐 Seguridad de Datos y Cumplimiento Normativo</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Implementación de controles de integridad de datos:</strong> Configuré sistemas de registro de auditoría trail en bases de datos SQLite que registraban quién, cuándo y qué cambios se realizaban en datos críticos (resultados de análisis, calibraciones, inventario de reactivos controlados). Implementé permisos granulares por usuario con roles diferenciados (operador, analista, supervisor, administrador) según principio ALCOA+ (Attributable, Legible, Contemporaneous, Original, Accurate + Complete, Consistent, Enduring, Available).</li>
          
          <li><strong>Respaldos automatizados y recuperación de datos:</strong> Configuré tareas programadas en Windows para respaldos automáticos nocturnos de bases de datos, archivos de métodos instrumentales, y documentos críticos hacia servidor NAS del laboratorio. Implementé scripts de verificación de integridad de backups mediante checksums MD5 y realicé pruebas trimestrales de restauración para validar que los respaldos eran recuperables.</li>
          
          <li><strong>Cumplimiento de normas de calidad:</strong> Alineé desarrollos de software con requerimientos de normas aplicables al laboratorio como ISO/IEC 17025 (competencia de laboratorios de ensayo y calibración), FDA 21 CFR Part 11 para registros electrónicos cuando aplicable, y buenas prácticas de documentación según GLP (Good Laboratory Practice). Participé en preparación de auditorías externas proporcionando evidencias de trazabilidad de datos y controles de sistemas.</li>
          
          <li><strong>Protección de datos sensibles:</strong> Implementé medidas de seguridad para proteger información confidencial: cifrado de bases de datos sensibles, configuración de permisos de archivos en red para acceso restringido, passwords robustos con política de cambio periódico, y sensibilización al personal sobre protección de datos y confidencialidad de resultados de clientes.</li>
      </ul>

      <p style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white; font-size: 1.05em; line-height: 1.8;">
          <strong style="font-size: 1.2em;">🎯 Impacto Cuantificable y Logros Destacados:</strong><br><br>
          Mi trabajo en el Laboratorio de Química generó impactos medibles significativos: <strong>reducción del 70% en tiempo dedicado a tareas administrativas y entrada de datos</strong> mediante automatización; <strong>eliminación prácticamente total (98%) de errores de transcripción</strong> en resultados analíticos; <strong>mejora del 60% en tiempo de generación de reportes</strong> (de 30min a 2min por reporte); <strong>reducción del 40% en pérdidas por vencimiento de reactivos</strong> gracias a sistema de alertas de inventario; <strong>aumento del 35% en productividad del laboratorio</strong> medido en muestras analizadas por día; y <strong>ahorro estimado de $15,000 USD anuales</strong> en optimización de recursos y prevención de errores costosos. El laboratorio logró certificación ISO 17025 utilizando mis sistemas como evidencia de trazabilidad y control de datos.
      </p>

      <p style="margin-top: 20px; padding: 25px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; color: white; font-size: 1.05em; line-height: 1.8;">
          <strong style="font-size: 1.2em;">💡 Aprendizajes Clave y Desarrollo de Habilidades:</strong><br><br>
          Esta experiencia única me permitió desarrollar una <strong>visión interdisciplinaria excepcional</strong> combinando conocimientos de ciencias químicas con desarrollo de software. Aprendí a <strong>comunicarme efectivamente con científicos no técnicos</strong> traduciendo requerimientos ambiguos en especificaciones técnicas claras, a <strong>entender profundamente procesos de dominio</strong> para diseñar soluciones realmente útiles y no solo técnicamente correctas, y a <strong>trabajar bajo restricciones de entornos regulados</strong> donde integridad de datos y trazabilidad son críticas. Fortalecí habilidades de <strong>programación aplicada a problemas reales</strong>, <strong>análisis estadístico avanzado</strong>, <strong>gestión de proyectos técnicos</strong>, y <strong>documentación técnica de calidad</strong>. Esta experiencia consolidó mi perfil como ingeniero capaz de aportar valor tecnológico en sectores altamente especializados.
      </p>

      <p style="margin-top: 20px; padding: 25px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 12px; color: white; font-size: 1.05em; line-height: 1.8;">
          <strong style="font-size: 1.2em;">🌟 Competencias Distintivas Desarrolladas:</strong><br><br>
          Esta posición desarrolló en mí competencias únicas difíciles de encontrar: <strong>capacidad de aprender rápidamente dominios especializados</strong> (química analítica sin ser químico de formación), <strong>pensamiento analítico para descomponer problemas complejos</strong> en soluciones implementables, <strong>creatividad para aplicar tecnología de formas no convencionales</strong> en entornos tradicionales, <strong>meticulosidad y atención al detalle</strong> críticos en entornos científicos donde precisión es fundamental, <strong>proactividad para identificar oportunidades de mejora</strong> sin esperar instrucción explícita, y <strong>resiliencia para resolver problemas técnicos complejos</strong> en instrumentación antigua con documentación limitada. El reconocimiento del equipo de químicos, inicialmente escépticos de soluciones informáticas, validó mi capacidad de generar confianza y demostrar valor tangible con mi trabajo.
      </p>

      <section class="contact-section">
          <p class="contact-text" style="color: white;">Para referencias detalladas sobre mi desempeño y contribuciones en el laboratorio, puedes contactar a mi supervisor directo:</p>
          
          <div class="contact-options">
              <a href="https://wa.me/525524154455" class="whatsapp-btn" target="_blank">
                  <span class="btn-icon">📱</span>
                  <span class="btn-text">Enviar WhatsApp</span>
              </a>
              
              <a href="tel:+525524154455" class="call-btn">
                  <span class="btn-icon">📞</span>
                  <span class="btn-text">Llamar ahora</span>
              </a>
          </div>
          
          <div class="contact-details">
              <p class="phone-number" style="color: white;">+52 55 2415 4455</p>
              <p class="reference-name" style="color: white;">Ing. Héctor Mendoza</p>
              <p style="color: #95A5A6; font-size: 0.95em; margin-top: 10px;">Jefe de Laboratorio de Química Analítica</p>
          </div>
      </section>
    `;
    },
    // Función para agencia - The Pixel Rocker
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
      <div class="tech-section">
          <h3 class="tech-title">🚀 Stack Tecnológico Full Stack</h3>
          <div class="tech-grid">
              <div class="tech-item">
                  <i class="devicon-react-original colored tech-icon"></i>
                  <span>React.js</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-nodejs-plain colored tech-icon"></i>
                  <span>Node.js</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-javascript-plain colored tech-icon"></i>
                  <span>JavaScript ES6+</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-typescript-plain colored tech-icon"></i>
                  <span>TypeScript</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-php-plain colored tech-icon"></i>
                  <span>PHP 7/8</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-laravel-plain colored tech-icon"></i>
                  <span>Laravel</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-mysql-plain colored tech-icon"></i>
                  <span>MySQL/MariaDB</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-mongodb-plain colored tech-icon"></i>
                  <span>MongoDB</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-html5-plain colored tech-icon"></i>
                  <span>HTML5</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-css3-plain colored tech-icon"></i>
                  <span>CSS3/SASS</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-bootstrap-plain colored tech-icon"></i>
                  <span>Bootstrap</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-tailwindcss-plain colored tech-icon"></i>
                  <span>Tailwind CSS</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-wordpress-plain colored tech-icon"></i>
                  <span>WordPress</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-plug tech-icon" style="color: #21759B;"></i>
                  <span>WP Plugins</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-git-plain colored tech-icon"></i>
                  <span>Git/GitHub</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-gitlab-plain colored tech-icon"></i>
                  <span>GitLab CI/CD</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-docker-plain colored tech-icon"></i>
                  <span>Docker</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-server tech-icon" style="color: #2ECC71;"></i>
                  <span>REST APIs</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-graphql-plain colored tech-icon"></i>
                  <span>GraphQL</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-firebase-plain colored tech-icon"></i>
                  <span>Firebase</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-jquery-plain colored tech-icon"></i>
                  <span>jQuery</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-webpack-plain colored tech-icon"></i>
                  <span>Webpack</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-npm-original-wordmark colored tech-icon"></i>
                  <span>NPM/Yarn</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-linux-plain colored tech-icon"></i>
                  <span>Linux Server</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-cloud tech-icon" style="color: #FF9900;"></i>
                  <span>AWS Services</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-figma-plain colored tech-icon"></i>
                  <span>Figma/XD</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-photoshop-plain colored tech-icon"></i>
                  <span>Photoshop</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-chart-line tech-icon" style="color: #E37400;"></i>
                  <span>Google Analytics</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-search-dollar tech-icon" style="color: #4285F4;"></i>
                  <span>SEO/SEM</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-ad tech-icon" style="color: #E74C3C;"></i>
                  <span>Google Ads</span>
              </div>
          </div>
      </div>

      <p style="color: white; font-size: 1.1em; line-height: 1.8;">
          Durante dos años como <strong>Ingeniero en Sistemas - Desarrollador Full Stack</strong> en The Pixel Rocker, una agencia digital líder en soluciones web y marketing, desempeñé un rol multidisciplinario que abarcó todo el ciclo de desarrollo de software, desde la arquitectura y diseño hasta el despliegue y mantenimiento en producción. Mi responsabilidad principal fue liderar el desarrollo técnico de proyectos web complejos para clientes corporativos, startups y negocios digitales, combinando habilidades avanzadas de desarrollo front-end, back-end, optimización de rendimiento, integración de APIs y colaboración estrecha con equipos multidisciplinarios de diseño, marketing y gestión de proyectos.
      </p>

      <h4 style="color: #61DAFB; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">💻 Desarrollo Front-End y Experiencia de Usuario</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Desarrollo de interfaces web responsivas y dinámicas:</strong> Creé aplicaciones web modernas utilizando React.js, implementando componentes reutilizables con hooks (useState, useEffect, useContext, useReducer), gestión de estado con Redux y Context API, y routing dinámico con React Router. Desarrollé más de 50 componentes personalizados para diferentes proyectos corporativos, garantizando consistencia visual y performance óptimo.</li>
          
          <li><strong>Implementación de Single Page Applications (SPAs):</strong> Construí aplicaciones de una sola página con carga asíncrona de datos mediante AJAX y Fetch API, implementando lazy loading de componentes, code splitting con Webpack, y optimización de bundle size mediante tree shaking y minificación, logrando tiempos de carga inicial inferiores a 2 segundos.</li>
          
          <li><strong>Desarrollo con JavaScript vanilla y TypeScript:</strong> Escribí código JavaScript moderno (ES6+) con características avanzadas como destructuring, spread operators, async/await, promises, modules, y arrow functions. Migré proyectos legacy a TypeScript para mejorar la mantenibilidad, type safety y reducir bugs en producción en un 60%.</li>
          
          <li><strong>Maquetación semántica y accesible:</strong> Desarrollé estructuras HTML5 semánticas siguiendo estándares W3C, implementando etiquetas apropiadas (header, nav, main, article, aside, footer), atributos ARIA para accesibilidad WCAG 2.1 nivel AA, y optimización SEO on-page con meta tags, structured data (Schema.org/JSON-LD), y Open Graph.</li>
          
          <li><strong>Diseño CSS avanzado y frameworks:</strong> Implementé diseños responsivos con CSS3, Flexbox y CSS Grid, utilizando metodología BEM para nomenclatura de clases. Trabajé con preprocesadores SASS/SCSS implementando variables, mixins, funciones y estructuras modulares. Configuré frameworks como Bootstrap 4/5 y Tailwind CSS con customización avanzada de temas y componentes.</li>
          
          <li><strong>Animaciones y micro-interacciones:</strong> Desarrollé animaciones fluidas con CSS animations, transitions y keyframes, así como bibliotecas JavaScript como GSAP, Anime.js y AOS (Animate On Scroll). Implementé efectos parallax, scroll reveal, loading skeletons y transitions entre páginas para mejorar la experiencia de usuario.</li>
          
          <li><strong>Optimización de performance front-end:</strong> Realicé auditorías de rendimiento con Lighthouse, PageSpeed Insights y WebPageTest, implementando técnicas de optimización como compresión de imágenes (WebP, lazy loading), minificación de assets, eliminación de render-blocking resources, implementación de Critical CSS, y uso de CDNs para recursos estáticos, mejorando scores de 60 a 95+/100.</li>
      </ul>

      <h4 style="color: #68A063; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">⚙️ Desarrollo Back-End y Arquitectura de Sistemas</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Desarrollo de APIs RESTful robustas:</strong> Diseñé e implementé más de 30 endpoints de API utilizando PHP con Laravel y Node.js con Express, siguiendo principios REST (GET, POST, PUT, DELETE), versionado de APIs, paginación, filtrado, ordenamiento y manejo consistente de errores con códigos HTTP apropiados y mensajes descriptivos.</li>
          
          <li><strong>Arquitectura MVC y patrones de diseño:</strong> Apliqué arquitectura Model-View-Controller en proyectos Laravel, implementando patrones de diseño como Repository Pattern, Service Layer, Factory, Singleton y Observer para código mantenible y escalable. Utilicé Eloquent ORM para modelado de datos con relaciones complejas (one-to-many, many-to-many, polymorphic).</li>
          
          <li><strong>Desarrollo con PHP moderno:</strong> Programé aplicaciones back-end con PHP 7.4/8.0+ utilizando características modernas como type declarations, arrow functions, null coalescing operator, named arguments y attributes. Implementé autoloading con Composer, manejo de dependencias, y configuración de entornos con variables de entorno (.env).</li>
          
          <li><strong>Gestión de bases de datos relacionales:</strong> Diseñé esquemas de bases de datos normalizadas en MySQL/MariaDB con más de 100 tablas interrelacionadas, implementando índices compuestos, foreign keys con cascades, triggers, stored procedures y views para optimización de consultas complejas. Realicé migraciones de datos con scripts personalizados garantizando integridad referencial.</li>
          
          <li><strong>Implementación de bases de datos NoSQL:</strong> Trabajé con MongoDB para proyectos que requerían flexibilidad en estructura de datos, implementando colecciones, documentos embebidos, referencias, agregaciones complejas y índices de texto completo para búsquedas eficientes.</li>
          
          <li><strong>Autenticación y autorización segura:</strong> Implementé sistemas de autenticación JWT (JSON Web Tokens), OAuth 2.0, y sesiones server-side con Redis. Desarrollé sistemas RBAC (Role-Based Access Control) con múltiples niveles de permisos, middleware de autenticación, protección CSRF, y hashing seguro de contraseñas con bcrypt/Argon2.</li>
          
          <li><strong>Integración de APIs de terceros:</strong> Integré más de 20 APIs externas incluyendo pasarelas de pago (Stripe, PayPal, Mercado Pago), servicios de email (SendGrid, Mailchimp), SMS (Twilio), geolocalización (Google Maps API), redes sociales (Facebook Graph API, Instagram API), analítica (Google Analytics API), y webhooks para comunicación evento-driven.</li>
          
          <li><strong>Procesamiento asíncrono y colas:</strong> Implementé sistemas de colas con Laravel Queue y Redis para procesamiento en segundo plano de tareas pesadas como envío masivo de emails, generación de reportes PDF/Excel, procesamiento de imágenes, sincronización de datos externos, reduciendo tiempos de respuesta de endpoints de 15s a 200ms.</li>
      </ul>

      <h4 style="color: #21759B; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🔌 Desarrollo WordPress y Personalización</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Desarrollo de temas custom desde cero:</strong> Creé más de 15 temas WordPress personalizados sin uso de page builders, implementando template hierarchy de WordPress, custom post types, taxonomías personalizadas, custom fields con ACF (Advanced Custom Fields), y Gutenberg blocks personalizados con JavaScript y React.</li>
          
          <li><strong>Desarrollo de plugins WordPress:</strong> Desarrollé 8+ plugins personalizados para funcionalidades específicas de clientes, incluyendo sistemas de membresías, formularios avanzados con lógica condicional, integraciones con CRMs, sincronización de inventarios con ERPs externos, y módulos de reportería con exportación de datos.</li>
          
          <li><strong>Optimización de WordPress para alto tráfico:</strong> Implementé estrategias de caching con WP Rocket, Redis Object Cache, y CloudFlare, optimización de base de datos con WP-Optimize, lazy loading de imágenes, CDN integration, y minificación de assets, soportando sitios con más de 100,000 visitas mensuales con hosting compartido optimizado.</li>
          
          <li><strong>WooCommerce y e-commerce:</strong> Configuré y personalizé tiendas WooCommerce con catálogos de 500+ productos, implementé pasarelas de pago múltiples, cálculos de envío dinámicos, cupones y descuentos avanzados, integraciones con sistemas de inventario, y personalizaciones de checkout para mejorar conversión.</li>
          
          <li><strong>Seguridad WordPress:</strong> Implementé medidas de hardening como cambio de prefijos de base de datos, protección de wp-admin con autenticación adicional, limitación de intentos de login, escaneo de malware con Wordfence, actualización constante de core/plugins/temas, y configuración de permisos apropiados en servidor.</li>
      </ul>

      <h4 style="color: #F39C12; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🚀 DevOps, Deployment y Administración de Servidores</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Gestión de control de versiones:</strong> Lideré workflows de Git con estrategia Git Flow implementando branches feature/develop/staging/production, pull requests con code review, resolución de merge conflicts, y versionado semántico (SemVer). Configuré repositorios en GitHub y GitLab con protección de branches y hooks pre-commit.</li>
          
          <li><strong>Implementación de CI/CD pipelines:</strong> Configuré pipelines de integración continua y despliegue continuo con GitLab CI/CD y GitHub Actions, automatizando testing, building, linting (ESLint, PHPStan), y deployment a servidores de staging y producción, reduciendo tiempo de deploy de 45 minutos a 5 minutos automáticos.</li>
          
          <li><strong>Administración de servidores Linux:</strong> Gestioné servidores VPS con Ubuntu/CentOS, configurando stacks LAMP/LEMP (Linux, Apache/Nginx, MySQL, PHP), instalación de certificados SSL con Let's Encrypt y renovación automática, configuración de firewalls (UFW, iptables), y hardening de SSH con autenticación por llaves.</li>
          
          <li><strong>Containerización con Docker:</strong> Dockericé aplicaciones creando Dockerfiles personalizados, orquestando servicios con Docker Compose (web server, database, redis, mailhog), implementando multi-stage builds para optimización de imágenes, y configuración de volúmenes para persistencia de datos.</li>
          
          <li><strong>Configuración de servidores web:</strong> Configuré Apache y Nginx para múltiples sitios con virtual hosts, rewrite rules para URLs amigables, compresión gzip/brotli, headers de seguridad (HSTS, CSP, X-Frame-Options), proxy reverso para aplicaciones Node.js, y configuración de límites de recursos PHP (memory_limit, max_execution_time).</li>
          
          <li><strong>Monitoreo y logging:</strong> Implementé sistemas de monitoreo con herramientas como New Relic, UptimeRobot, y configuré logging centralizado con rotación de logs, análisis de errores en tiempo real, alertas de downtime vía Slack/email, y dashboards de métricas de performance (CPU, memoria, disco, tiempo de respuesta).</li>
      </ul>

      <h4 style="color: #E74C3C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">📊 Marketing Digital y Analítica Web</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Implementación de Google Analytics 4:</strong> Configuré tracking avanzado con GA4 incluyendo eventos personalizados (scroll depth, clicks en botones, envío de formularios, descargas), enhanced ecommerce tracking, user ID tracking para análisis cross-device, y configuración de conversiones y goals alineados a objetivos de negocio.</li>
          
          <li><strong>Optimización SEO técnico:</strong> Realicé auditorías SEO técnicas con herramientas como Screaming Frog, Ahrefs, SEMrush, corrigiendo errores críticos (404s, redirects chains, duplicate content), implementando canonical URLs, hreflang para sitios multiidioma, optimización de robots.txt y sitemaps XML dinámicos, mejorando rankings orgánicos de clientes en promedio 40 posiciones en 6 meses.</li>
          
          <li><strong>Desarrollo de landing pages de alta conversión:</strong> Creé más de 30 landing pages optimizadas para campañas de Google Ads y Facebook Ads, implementando principios de persuasión, A/B testing con Google Optimize, heatmaps con Hotjar, optimización de formularios para reducir fricción, y implementación de pixel de conversión para remarketing.</li>
          
          <li><strong>Integración de herramientas de marketing:</strong> Integré plataformas como HubSpot, Mailchimp, ActiveCampaign para automatización de email marketing, formularios con captura de leads, sincronización bidireccional con CRMs, webhooks para triggers automatizados, y segmentación avanzada de audiencias.</li>
          
          <li><strong>Gestión de campañas de Google Ads:</strong> Colaboré con equipo de marketing en configuración técnica de tracking de conversiones, implementación de Google Tag Manager con tags personalizados, remarketing dinámico, y optimización de tiempos de carga de landing pages para mejorar Quality Score y reducir CPC.</li>
      </ul>

      <h4 style="color: #9B59B6; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">🔧 Algoritmos, Optimización y Resolución de Problemas</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Desarrollo de algoritmos personalizados:</strong> Diseñé e implementé algoritmos para problemas específicos de clientes incluyendo: sistema de recomendaciones basado en comportamiento de usuario usando collaborative filtering, motor de búsqueda con autocompletado y corrección ortográfica implementando algoritmos de string matching (Levenshtein distance), sistema de priorización de tareas con weighted scoring, y algoritmos de pricing dinámico basados en múltiples variables.</li>
          
          <li><strong>Optimización de consultas SQL complejas:</strong> Identifiqué y optimicé queries lentas (10s+ → <500ms) mediante análisis con EXPLAIN, creación de índices estratégicos, refactorización de subconsultas a JOINs, uso de CTEs (Common Table Expressions), eliminación de N+1 queries con eager loading, y denormalización selectiva para casos de lectura intensiva.</li>
          
          <li><strong>Refactorización de código legacy:</strong> Lideré proyectos de modernización de aplicaciones legacy, migrando de PHP 5.6 procedural a PHP 7.4 orientado a objetos con Laravel, jQuery spaghetti code a arquitectura React con componentes modulares, y bases de datos no normalizadas a esquemas optimizados con migraciones graduales sin downtime.</li>
          
          <li><strong>Debugging y troubleshooting avanzado:</strong> Resolví bugs críticos de producción utilizando herramientas como Xdebug, Chrome DevTools, Laravel Telescope, análisis de logs con grep/awk, profiling de código con Blackfire.io para identificar bottlenecks, y reproducciones sistemáticas en entornos de desarrollo aislados.</li>
          
          <li><strong>Implementación de testing automatizado:</strong> Escribí tests unitarios con PHPUnit y Jest, tests de integración para APIs, tests end-to-end con Cypress para flujos críticos de usuario, alcanzando coverage de 70%+ en módulos críticos, reduciendo regresiones en producción en 80%.</li>
      </ul>

      <h4 style="color: #1ABC9C; margin-top: 30px; margin-bottom: 15px; font-size: 1.3em;">👥 Colaboración, Liderazgo y Gestión de Proyectos</h4>
      <ul style="color: white; line-height: 1.8;">
          <li><strong>Trabajo en equipo multidisciplinario:</strong> Colaboré estrechamente con diseñadores UX/UI para implementar mockups de Figma/Adobe XD con precisión pixel-perfect, con project managers en definición de requerimientos técnicos y estimaciones de tiempo, con equipo de marketing en implementación de tracking y optimizaciones de conversión, y con QA en reproducción y corrección de bugs reportados.</li>
          
          <li><strong>Code reviews y mentoría:</strong> Realicé revisiones de código de 3 desarrolladores junior, proporcionando feedback constructivo sobre arquitectura, mejores prácticas, patrones de diseño, seguridad y performance. Creé documentación técnica interna, guías de estilo de código, y conduje sesiones de knowledge sharing sobre tecnologías emergentes.</li>
          
          <li><strong>Gestión de proyectos técnicos:</strong> Lideré técnicamente 12+ proyectos desde kick-off hasta producción, responsable de definición de arquitectura, selección de stack tecnológico, estimación de sprints en metodología Scrum, daily standups, retrospectivas, y presentaciones de demos a clientes con comunicación clara de conceptos técnicos.</li>
          
          <li><strong>Comunicación con clientes:</strong> Participé en más de 50 reuniones con clientes para levantamiento de requerimientos, propuestas de soluciones técnicas, explicación de limitaciones y trade-offs, reportes de progreso y demos de funcionalidades, manteniendo siempre comunicación profesional, transparente y orientada a soluciones.</li>
          
          <li><strong>Documentación técnica completa:</strong> Elaboré documentación de arquitectura de sistemas con diagramas de flujo, ERDs de bases de datos, documentación de APIs con formato OpenAPI/Swagger, READMEs detallados para repositorios, guías de despliegue paso a paso, y runbooks para troubleshooting de incidentes comunes.</li>
      </ul>

      <p style="margin-top: 30px; padding: 25px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; color: white; font-size: 1.05em; line-height: 1.8;">
          <strong style="font-size: 1.2em;">🎯 Impacto y Logros Destacados:</strong><br><br>
          Durante mi permanencia en The Pixel Rocker, contribuí directamente al crecimiento técnico de la agencia y al éxito de más de 40 proyectos para clientes de diversos sectores (e-commerce, corporativos, educación, salud, inmobiliario). Mis principales logros incluyeron: <strong>reducción del 65% en tiempo de desarrollo</strong> mediante implementación de componentes reutilizables y starter templates optimizados; <strong>mejora del 85% en scores de performance</strong> de sitios auditados (Lighthouse 45 → 95+); <strong>reducción de 70% en bugs post-producción</strong> mediante testing automatizado; <strong>incremento del 40% en conversiones</strong> de landing pages mediante optimización técnica y A/B testing; y <strong>ahorro de 300+ horas anuales</strong> del equipo mediante automatización de tareas repetitivas con scripts y CI/CD.
      </p>

      <p style="margin-top: 20px; padding: 25px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; color: white; font-size: 1.05em; line-height: 1.8;">
          <strong style="font-size: 1.2em;">💡 Aprendizajes y Desarrollo Profesional:</strong><br><br>
          Esta experiencia fue transformadora para mi carrera profesional. Aprendí a <strong>trabajar bajo presión con deadlines ajustados</strong> sin comprometer calidad del código, a <strong>comunicar ideas técnicas complejas de forma simple</strong> a stakeholders no técnicos, a <strong>tomar decisiones de arquitectura considerando trade-offs</strong> de performance, escalabilidad, mantenibilidad y tiempo de desarrollo, y a <strong>mantenerme constantemente actualizado</strong> con tecnologías emergentes mediante cursos, documentación oficial y experimentación. Consolidé mi perfil como <strong>desarrollador Full Stack versátil, autónomo y orientado a resultados</strong>, con capacidad de llevar proyectos end-to-end desde concepción hasta producción, manteniendo siempre altos estándares de calidad, seguridad y mejores prácticas de la industria.
      </p>

      <p style="margin-top: 20px; padding: 25px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 12px; color: white; font-size: 1.05em; line-height: 1.8;">
          <strong style="font-size: 1.2em;">🌟 Soft Skills y Competencias Personales:</strong><br><br>
          Más allá de las habilidades técnicas, desarrollé competencias clave como <strong>resolución creativa de problemas</strong> pensando fuera de la caja para soluciones no convencionales, <strong>adaptabilidad</strong> trabajando simultáneamente con múltiples tecnologías y contextos de proyecto, <strong>atención al detalle</strong> garantizando código limpio, semántico y libre de bugs, <strong>proactividad</strong> proponiendo mejoras sin esperar instrucción explícita, <strong>ética profesional</strong> respetando confidencialidad de clientes y commitments de entrega, y <strong>pasión por la excelencia técnica</strong> buscando siempre la mejor solución posible dentro de restricciones de tiempo y recursos. La cultura de innovación y colaboración en The Pixel Rocker me permitió crecer exponencialmente como profesional y como persona.
      </p>

      <section class="contact-section">
          <p class="contact-text" style="color: white;">Si deseas conocer más detalles sobre mi trabajo y desempeño en The Pixel Rocker, puedes comunicarte con mi supervisor directo:</p>
          
          <div class="contact-options">
              <a href="https://wa.me/525522785158" class="whatsapp-btn" target="_blank">
                  <span class="btn-icon">📱</span>
                  <span class="btn-text">Enviar WhatsApp</span>
              </a>
              
              <a href="tel:+525522785158" class="call-btn">
                  <span class="btn-icon">📞</span>
                  <span class="btn-text">Llamar ahora</span>
              </a>
          </div>
          
          <div class="contact-details">
              <p class="phone-number" style="color: white;">+52 55 2278 5158</p>
              <p class="reference-name" style="color: white;">Ing. Mauricio Gomez Gallegos</p>
              <p style="color: #95A5A6; font-size: 0.95em; margin-top: 10px;">Director Técnico - The Pixel Rocker</p>
          </div>
      </section>
    `;
    },
    // Función para prácticas profesionales
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
      <div class="tech-section">
          <h3 class="tech-title">🚀 Tecnologías y Habilidades</h3>
          <div class="tech-grid">
              <div class="tech-item">
                  <i class="fas fa-network-wired tech-icon" style="color: #3498DB;"></i>
                  <span>Redes LAN/WAN</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-server tech-icon" style="color: #2ECC71;"></i>
                  <span>Servidores</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-windows8-original colored tech-icon"></i>
                  <span>Windows Server</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-linux-plain colored tech-icon"></i>
                  <span>Linux</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-user-cog tech-icon" style="color: #E74C3C;"></i>
                  <span>Active Directory</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-tools tech-icon" style="color: #95A5A6;"></i>
                  <span>Soporte Técnico</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-ethernet tech-icon" style="color: #F39C12;"></i>
                  <span>Cableado Red</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-wifi tech-icon" style="color: #1ABC9C;"></i>
                  <span>Redes WiFi</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-cloud tech-icon" style="color: #1ABC9C;"></i>
                  <span>Cloud Migration</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-sync-alt tech-icon" style="color: #9B59B6;"></i>
                  <span>Automatización</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-shield-alt tech-icon" style="color: #C0392B;"></i>
                  <span>Ciberseguridad</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-database tech-icon" style="color: #16A085;"></i>
                  <span>Bases de Datos</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-hdd tech-icon" style="color: #7F8C8D;"></i>
                  <span>Backup/Recovery</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-ticket-alt tech-icon" style="color: #E67E22;"></i>
                  <span>Sistema Tickets</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-file-alt tech-icon" style="color: #2C3E50;"></i>
                  <span>Documentación IT</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-users-cog tech-icon" style="color: #8E44AD;"></i>
                  <span>Gestión Usuarios</span>
              </div>
          </div>
      </div>
                <p style="color: white;">
                    Durante mi periodo como Becario de Sistemas Computacionales en Deecsa, desempeñé un rol fundamental en la arquitectura y gestión de la infraestructura tecnológica de la empresa, participando activamente en proyectos de transformación digital y modernización de sistemas. Mi trabajo se caracterizó por un enfoque integral que abarcó desde la administración de redes empresariales hasta la implementación de soluciones cloud, contribuyendo significativamente a la eficiencia operativa y seguridad informática de la organización.
                </p>
                
                <h4 style="color: #3498DB; margin-top: 25px; margin-bottom: 15px;">🔧 Infraestructura de Redes y Sistemas</h4>
                <ul style="color: white;">
                    <li><strong>Diseño y administración de arquitectura de red:</strong> Configuré y mantuve la infraestructura de red LAN/WAN, implementando segmentación de VLANs, configuración de switches gestionables y routers empresariales. Realicé troubleshooting avanzado de protocolos TCP/IP, DNS, DHCP y routing, garantizando uptime del 99.5% en servicios críticos de negocio.</li>
                    
                    <li><strong>Gestión de servidores empresariales:</strong> Administré servidores Windows Server 2016/2019 y distribuciones Linux (Ubuntu Server, CentOS), implementando servicios de directorio Active Directory, políticas de grupo GPO, controladores de dominio, y servicios de archivos compartidos con permisos NTFS granulares.</li>
                    
                    <li><strong>Cableado estructurado y conectividad física:</strong> Ejecuté proyectos de instalación de cableado estructurado categoría 6, certificación de enlaces, configuración de racks de comunicaciones, patch panels y sistemas de conexión redundante para asegurar alta disponibilidad en la red corporativa.</li>
                    
                    <li><strong>Implementación de soluciones WiFi empresariales:</strong> Desplegué y configuré redes inalámbricas corporativas con puntos de acceso gestionados, implementando autenticación 802.1X, segmentación por SSID, análisis de espectro RF y optimización de cobertura mediante herramientas de site survey.</li>
                </ul>
                
                <h4 style="color: #1ABC9C; margin-top: 25px; margin-bottom: 15px;">☁️ Migración Cloud y Automatización</h4>
                <ul style="color: white;">
                    <li><strong>Migración a plataformas cloud híbridas:</strong> Lideré la transición de servicios on-premise hacia soluciones cloud, participando en la planificación estratégica, migración de aplicaciones críticas, configuración de sincronización híbrida y establecimiento de políticas de backup cloud con recuperación ante desastres (DR).</li>
                    
                    <li><strong>Automatización de procesos IT:</strong> Desarrollé scripts en PowerShell y Bash para automatizar tareas administrativas repetitivas, incluyendo aprovisionamiento de usuarios, generación de reportes del sistema, respaldos automatizados y mantenimiento preventivo, reduciendo en un 40% el tiempo dedicado a operaciones manuales.</li>
                    
                    <li><strong>Implementación de sistema de gestión de tickets:</strong> Configuré y personalicé plataforma de ticketing para la gestión centralizada de incidencias IT, estableciendo flujos de trabajo, SLAs, categorización de problemas y generación de métricas de rendimiento del equipo de soporte.</li>
                </ul>
                
                <h4 style="color: #E74C3C; margin-top: 25px; margin-bottom: 15px;">🔐 Seguridad y Gestión de Datos</h4>
                <ul style="color: white;">
                    <li><strong>Implementación de políticas de ciberseguridad:</strong> Apliqué hardening de sistemas operativos, configuré firewalls perimetrales y de host, implementé políticas de contraseñas robustas, autenticación multifactor (MFA) y auditorías de seguridad periódicas basadas en frameworks como NIST y CIS Controls.</li>
                    
                    <li><strong>Administración de bases de datos:</strong> Gestioné bases de datos SQL Server y MySQL, realizando tareas de mantenimiento, optimización de consultas, respaldos incrementales y diferenciales, así como restauración de datos en escenarios de contingencia.</li>
                    
                    <li><strong>Estrategia de backup y recuperación:</strong> Diseñé e implementé políticas de respaldo siguiendo el esquema 3-2-1 (tres copias, dos medios diferentes, una fuera del sitio), utilizando soluciones de backup automatizado, verificación de integridad y pruebas regulares de restauración.</li>
                </ul>
                
                <h4 style="color: #9B59B6; margin-top: 25px; margin-bottom: 15px;">👥 Gestión de Usuarios y Soporte Técnico</h4>
                <ul style="color: white;">
                    <li><strong>Administración integral de usuarios:</strong> Gestioné el ciclo de vida completo de cuentas de usuario en Active Directory, incluyendo creación, modificación, deshabilitación, asignación de permisos basados en roles (RBAC), grupos de seguridad y políticas de acceso según principio de mínimo privilegio.</li>
                    
                    <li><strong>Soporte técnico multinivel:</strong> Proporcioné soporte L1/L2 resolviendo más de 500 tickets mensuales, diagnosticando problemas de hardware, software, conectividad y aplicaciones empresariales. Mantuve tasa de resolución en primer contacto superior al 75% y NPS de satisfacción del usuario de 4.6/5.</li>
                    
                    <li><strong>Documentación técnica y knowledge base:</strong> Elaboré documentación técnica detallada de procedimientos IT, diagramas de red, manuales de usuario, guías de troubleshooting y artículos para base de conocimiento, facilitando la transferencia de conocimiento y reduciendo tiempos de resolución.</li>
                </ul>
                
                <p style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 10px; color: white;">
                    <strong>🎯 Impacto y Valor Agregado:</strong> Mi contribución resultó en una mejora del 35% en la eficiencia operativa del departamento IT, reducción del 60% en tiempos de downtime de sistemas críticos, y la implementación exitosa de una cultura de mejora continua mediante metodologías ágiles e ITIL. Destacó mi capacidad para trabajar bajo presión, resolver problemas complejos de forma analítica, y comunicar conceptos técnicos de manera efectiva a stakeholders no técnicos. Este rol consolidó mis competencias en arquitectura de sistemas, gestión de proyectos IT, liderazgo técnico y visión estratégica para la transformación digital empresarial.
                </p>
                
                <section class="contact-section">
                    <p class="contact-text" style="color: white;">Si deseas saber más sobre mí y mi forma de trabajar, puedes comunicarte con la persona de referencia:</p>
                    
                    <div class="contact-options">
                        <a href="https://wa.me/525647290495" class="whatsapp-btn" target="_blank">
                            <span class="btn-icon">📱</span>
                            <span class="btn-text">Enviar WhatsApp</span>
                        </a>
                        
                        <a href="tel:+525647290495" class="call-btn">
                            <span class="btn-icon">📞</span>
                            <span class="btn-text">Llamar ahora</span>
                        </a>
                    </div>
                    
                    <div class="contact-details">
                        <p class="phone-number" style="color: white;">+52 56 4729 0495</p>
                        <p class="reference-name" style="color: white;">Ing. Pedro Carlos Ávila Zállago</p>
                    </div>
                </section>
            `;
    },

    // Función para soporte técnico
    function () {
      animateContent();
      document.getElementById("contenido").innerHTML = `
      <div class="tech-section">
          <h3 class="tech-title">🚀 Tecnologías y Habilidades</h3>
          <div class="tech-grid">
              <div class="tech-item">
                  <i class="fas fa-headset tech-icon" style="color: #3498DB;"></i>
                  <span>Soporte IT</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-laptop tech-icon" style="color: #95A5A6;"></i>
                  <span>Hardware PC</span>
              </div>
              <div class="tech-item">
                  <i class="devicon-windows8-original colored tech-icon"></i>
                  <span>Windows OS</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-wrench tech-icon" style="color: #E67E22;"></i>
                  <span>Mantenimiento</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-user-friends tech-icon" style="color: #1ABC9C;"></i>
                  <span>Atención Usuario</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-print tech-icon" style="color: #2C3E50;"></i>
                  <span>Impresoras</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-network-wired tech-icon" style="color: #16A085;"></i>
                  <span>Conectividad</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-file-alt tech-icon" style="color: #9B59B6;"></i>
                  <span>Documentación</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-hands-helping tech-icon" style="color: #E74C3C;"></i>
                  <span>Colaboración</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-mobile-alt tech-icon" style="color: #F39C12;"></i>
                  <span>Dispositivos Móviles</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-phone-volume tech-icon" style="color: #27AE60;"></i>
                  <span>Telefonía IP</span>
              </div>
              <div class="tech-item">
                  <i class="fas fa-graduation-cap tech-icon" style="color: #2980B9;"></i>
                  <span>Capacitación</span>
              </div>
          </div>
      </div>
      
                <p style="color: white;">
                    Como Técnico de Soporte IT en el departamento administrativo, ejercí un rol multifuncional que combinó la gestión técnica de infraestructura informática con la optimización de procesos operativos. Mi responsabilidad abarcó desde el soporte técnico especializado hasta la implementación de soluciones tecnológicas que transformaron la eficiencia del departamento, estableciendo estándares de calidad en el servicio y la atención a usuarios finales.
                </p>
                
                <h4 style="color: #3498DB; margin-top: 25px; margin-bottom: 15px;">💻 Soporte Técnico y Mantenimiento de Equipos</h4>
                <ul style="color: white;">
                    <li><strong>Diagnóstico y resolución de problemas técnicos:</strong> Proporcioné soporte técnico integral a más de 80 usuarios, diagnosticando y resolviendo incidencias de hardware (equipos de cómputo, laptops, periféricos), software (sistemas operativos Windows 7/10/11, aplicaciones de Office 365, software especializado) y problemas de conectividad, manteniendo un tiempo promedio de resolución de 2 horas para incidencias críticas.</li>
                    
                    <li><strong>Mantenimiento preventivo y correctivo:</strong> Implementé un programa de mantenimiento preventivo trimestral que incluyó limpieza física de equipos, actualización de software, optimización de sistema operativo, verificación de antivirus y análisis de rendimiento, reduciendo en un 45% las fallas de hardware por falta de mantenimiento.</li>
                    
                    <li><strong>Gestión de inventario de activos IT:</strong> Desarrollé y mantuve un sistema de inventario detallado de equipos informáticos, licencias de software, periféricos y componentes, utilizando etiquetado de activos, control de asignaciones por usuario y registro de mantenimientos, mejorando la trazabilidad y control presupuestario del departamento.</li>
                    
                    <li><strong>Instalación y configuración de estaciones de trabajo:</strong> Realicé el despliegue completo de nuevas estaciones de trabajo, incluyendo instalación de sistema operativo, configuración de dominio, instalación de software corporativo, configuración de perfiles de usuario, conexión a recursos de red compartidos y capacitación básica al usuario final.</li>
                </ul>
                
                <h4 style="color: #E67E22; margin-top: 25px; margin-bottom: 15px;">🖨️ Gestión de Periféricos y Sistemas de Impresión</h4>
                <ul style="color: white;">
                    <li><strong>Administración de infraestructura de impresión:</strong> Gestioné el parque de 25+ impresoras multifuncionales de red, realizando instalación de drivers, configuración de colas de impresión, asignación de permisos, monitoreo de consumibles y coordinación con proveedores de servicio técnico, logrando disponibilidad del 95% en equipos críticos.</li>
                    
                    <li><strong>Optimización de costos de impresión:</strong> Implementé políticas de impresión inteligente mediante configuración de impresión dúplex por defecto, restricciones de impresión en color y generación de reportes de uso, resultando en una reducción del 30% en el consumo de tóner y papel.</li>
                    
                    <li><strong>Soporte a dispositivos móviles corporativos:</strong> Configuré y brindé soporte a smartphones y tablets corporativas, incluyendo sincronización de correo Exchange, instalación de aplicaciones empresariales, políticas de seguridad MDM y troubleshooting de conectividad WiFi/VPN.</li>
                </ul>
                
                <h4 style="color: #27AE60; margin-top: 25px; margin-bottom: 15px;">📞 Telefonía IP y Conectividad</h4>
                <ul style="color: white;">
                    <li><strong>Soporte a sistema de telefonía IP:</strong> Proporcioné soporte técnico de primer nivel a usuarios del sistema de VoIP corporativo, resolviendo problemas de configuración de extensiones, calidad de audio, conectividad de teléfonos IP y troubleshooting de softphones, coordinando con el proveedor para escalaciones de nivel superior.</li>
                    
                    <li><strong>Resolución de problemas de conectividad:</strong> Diagnostiqué y resolví problemas de conexión a red (cableada e inalámbrica), incluyendo verificación de cables, puertos de switch, configuración de adaptadores de red, renovación de direcciones IP, pruebas de ping/traceroute y coordinación con el equipo de redes para problemas de infraestructura.</li>
                    
                    <li><strong>Configuración de acceso remoto:</strong> Configuré y di soporte a soluciones de acceso remoto mediante VPN corporativa y escritorio remoto (RDP), facilitando el trabajo híbrido y remoto de usuarios, garantizando conectividad segura a recursos internos.</li>
                </ul>
                
                <h4 style="color: #2980B9; margin-top: 25px; margin-bottom: 15px;">📚 Capacitación y Gestión del Conocimiento</h4>
                <ul style="color: white;">
                    <li><strong>Capacitación a usuarios finales:</strong> Diseñé e impartí sesiones de capacitación grupales e individuales sobre uso efectivo de herramientas ofimáticas (Word, Excel, Outlook, PowerPoint), mejores prácticas de seguridad informática, uso de plataformas corporativas y troubleshooting básico, empoderando a los usuarios y reduciendo tickets de soporte repetitivos.</li>
                    
                    <li><strong>Documentación técnica y procedimientos:</strong> Creé una biblioteca de documentación técnica que incluyó guías de usuario, manuales de procedimientos IT, FAQs, tutoriales paso a paso y videos instructivos, mejorando la autonomía de usuarios y estandarizando procesos de soporte.</li>
                    
                    <li><strong>Implementación de herramientas colaborativas:</strong> Apoyé la adopción de herramientas de colaboración como Microsoft Teams, SharePoint y OneDrive, realizando configuración inicial, migración de archivos, capacitación de usuarios y soporte continuo, modernizando la forma de trabajo del departamento.</li>
                </ul>
                
                <h4 style="color: #F39C12; margin-top: 25px; margin-bottom: 15px;">🎯 Gestión de Proyectos y Mejora Continua</h4>
                <ul style="color: white;">
                    <li><strong>Optimización de procesos administrativos mediante tecnología:</strong> Identifiqué oportunidades de mejora en procesos manuales y propuse soluciones tecnológicas, incluyendo automatización de reportes mediante macros de Excel, digitalización de formularios en papel a formularios electrónicos y optimización de flujos de aprobación, incrementando la productividad del departamento en un 25%.</li>
                    
                    <li><strong>Gestión de relaciones con proveedores IT:</strong> Actué como enlace técnico con proveedores de servicios IT, coordinando mantenimientos programados, escalando incidencias complejas, validando entregas de equipos y servicios, y participando en la evaluación de nuevas soluciones tecnológicas.</li>
                    
                    <li><strong>Reporte de métricas y KPIs de soporte:</strong> Generé reportes mensuales de indicadores de desempeño del área de soporte, incluyendo número de tickets atendidos, tiempo promedio de resolución, satisfacción de usuarios y principales categorías de incidencias, proporcionando datos para la toma de decisiones y mejora continua.</li>
                </ul>
                
                <p style="margin-top: 25px; padding: 20px; background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 10px; color: white;">
                    <strong>🌟 Competencias Destacadas:</strong> Mi desempeño en este rol demostró excelentes habilidades de comunicación interpersonal, orientación al servicio al cliente, capacidad de trabajar bajo presión con múltiples prioridades, resolución efectiva de problemas técnicos y administrativos, y liderazgo en la promoción de buenas prácticas tecnológicas. La combinación de conocimientos técnicos sólidos con competencias soft como empatía, paciencia y capacidad didáctica, me permitió establecer relaciones de confianza con usuarios y convertirme en un referente técnico confiable dentro del departamento. Este rol fortaleció mi visión integral del negocio y mi capacidad para alinear soluciones tecnológicas con objetivos organizacionales.
                </p>
            `;
    },
  ];

  console.log('experienciasData.js cargado - Funciones disponibles:', window.contentFunctions.length);