// ===================================
// SISTEMA DE CARGA MEJORADO - VERSIÓN FINAL
// ===================================

class LoadingManager {
  constructor() {
    // Implementar Singleton
    if (LoadingManager.instance) {
      return LoadingManager.instance;
    }
    LoadingManager.instance = this;

    this.totalResources = 0;
    this.loadedResources = 0;
    this.loaderElement = null;
    this.progressBar = null;
    this.progressText = null;
    this.statusText = null;
    this.isLoading = false;
    this.startTime = null;
    this.minDisplayTime = 4000; // 4 segundos mínimo
    this.init();
  }

  init() {
    // Crear el loader HTML solo si no existe
    if (!document.getElementById('main-loader')) {
      this.createLoader();
    } else {
      this.loaderElement = document.getElementById('main-loader');
      this.progressBar = document.querySelector('.progress-fill');
      this.progressText = document.getElementById('progress-text');
      this.statusText = document.getElementById('loader-status');
    }
  }

  createLoader() {
    const loaderHTML = `
      <div id="main-loader" class="main-loader" style="display: none;">
        <div class="loader-content">
          <div class="loader-animation">
            <div class="loading-planet"></div>
            <div class="loading-orbit"></div>
            <div class="loading-satellite"></div>
          </div>
          
          <div class="loader-info">
            <h2 class="loader-title">Cargando Experiencia</h2>
            
            <div class="progress-container">
              <div class="progress-bar" id="progress-bar">
                <div class="progress-fill"></div>
                <div class="progress-glow"></div>
              </div>
              <div class="progress-text" id="progress-text">0%</div>
            </div>
            
            <p class="loader-status" id="loader-status">Inicializando recursos...</p>
            
            <div class="loader-details">
              <span class="detail-item">
                <span class="detail-icon">📦</span>
                <span id="loaded-count">0</span>/<span id="total-count">0</span> recursos
              </span>
            </div>
          </div>
        </div>
      </div>
    `;

    const slider = document.querySelector('.custom-slider');
    if (slider) {
      slider.insertAdjacentHTML('afterend', loaderHTML);
    } else {
      const main = document.querySelector('main');
      if (main) {
        main.insertAdjacentHTML('afterbegin', loaderHTML);
      }
    }
    
    this.loaderElement = document.getElementById('main-loader');
    this.progressBar = document.querySelector('.progress-fill');
    this.progressText = document.getElementById('progress-text');
    this.statusText = document.getElementById('loader-status');
  }

  show() {
    if (this.loaderElement && !this.isLoading) {
      this.isLoading = true;
      this.startTime = Date.now(); // Registrar tiempo de inicio
      this.loaderElement.style.display = 'block';
      this.loaderElement.classList.remove('hidden');
      
      // Reset progress
      this.updateProgress(0, 0, 'Inicializando recursos...');
      
      // Scroll suave al loader
      setTimeout(() => {
        this.loaderElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest' 
        });
      }, 100);
    }
  }

  async hide() {
    if (this.loaderElement && this.isLoading) {
      // Calcular tiempo transcurrido
      const elapsed = Date.now() - this.startTime;
      const remaining = Math.max(0, this.minDisplayTime - elapsed);
      
      if (remaining > 0) {
        console.log(`⏱️ Esperando ${remaining}ms adicionales para alcanzar tiempo mínimo de visualización`);
        this.setStatus('✅ Recursos cargados, preparando visualización...');
        await new Promise(resolve => setTimeout(resolve, remaining));
      }
      
      this.isLoading = false;
      this.loaderElement.classList.add('hidden');
      setTimeout(() => {
        this.loaderElement.style.display = 'none';
      }, 500);
    }
  }

  updateProgress(loaded, total, status = '') {
    this.loadedResources = loaded;
    this.totalResources = total;
    
    const percentage = total > 0 ? Math.round((loaded / total) * 100) : 0;
    
    if (this.progressBar) {
      this.progressBar.style.width = `${percentage}%`;
    }
    
    if (this.progressText) {
      this.progressText.textContent = `${percentage}%`;
    }
    
    if (status && this.statusText) {
      this.statusText.textContent = status;
    }
    
    const loadedCount = document.getElementById('loaded-count');
    const totalCount = document.getElementById('total-count');
    if (loadedCount) loadedCount.textContent = loaded;
    if (totalCount) totalCount.textContent = total; // ❌ CORREGIDO: era "textCount"
    
    // Si completó la carga, llamar a hide (que ahora es async y maneja el tiempo mínimo)
    if (loaded >= total && total > 0) {
      setTimeout(() => {
        if (this.statusText) {
          this.statusText.textContent = '✅ Carga completada';
        }
        // hide() ahora espera el tiempo mínimo si es necesario
        this.hide();
      }, 300);
    }
  }

  setStatus(status) {
    if (this.statusText) {
      this.statusText.textContent = status;
    }
  }
}

// ===================================
// GESTOR DE RECURSOS
// ===================================

class ResourceLoader {
  constructor(loadingManager) {
    this.loadingManager = loadingManager;
    this.resources = {
      images: [],
      videos: []
    };
    this.loadedCount = 0;
    this.totalCount = 0;
  }

  scanResources(container) {
    this.resources.images = Array.from(container.querySelectorAll('img'));
    this.resources.videos = Array.from(container.querySelectorAll('iframe[src*="youtube"], iframe[src*="youtu.be"]'));
    
    this.totalCount = this.resources.images.length + this.resources.videos.length;
    
    console.log(`📦 Recursos encontrados: ${this.totalCount} (${this.resources.images.length} imágenes, ${this.resources.videos.length} videos)`);
    
    this.loadingManager.updateProgress(0, this.totalCount, 'Escaneando recursos...');
    
    return this.totalCount;
  }

  async preloadImages() {
    if (this.resources.images.length === 0) return;

    const imagePromises = this.resources.images.map((img, index) => {
      return new Promise((resolve) => {
        if (img.complete && img.naturalHeight !== 0) {
          this.incrementProgress(`Imagen ${index + 1} cargada`);
          resolve();
        } else {
          const timeout = setTimeout(() => {
            console.warn(`⏱️ Timeout en imagen ${index + 1}`);
            this.incrementProgress(`⚠️ Imagen ${index + 1} (timeout)`);
            resolve();
          }, 10000);

          img.addEventListener('load', () => {
            clearTimeout(timeout);
            this.incrementProgress(`Imagen ${index + 1} cargada`);
            resolve();
          });
          
          img.addEventListener('error', () => {
            clearTimeout(timeout);
            console.error(`❌ Error en imagen ${index + 1}:`, img.src);
            this.incrementProgress(`⚠️ Error en imagen ${index + 1}`);
            resolve();
          });
          
          if (img.src) {
            const tempSrc = img.src;
            img.src = '';
            img.src = tempSrc;
          }
        }
      });
    });

    await Promise.all(imagePromises);
  }

  async preloadVideos() {
    for (let i = 0; i < this.resources.videos.length; i++) {
      await new Promise(resolve => {
        setTimeout(() => {
          this.incrementProgress(`Video ${i + 1} preparado`);
          resolve();
        }, 300);
      });
    }
  }

  incrementProgress(status) {
    this.loadedCount++;
    this.loadingManager.updateProgress(this.loadedCount, this.totalCount, status);
  }

  async loadAll(container) {
    this.loadedCount = 0;
    this.scanResources(container);
    
    if (this.totalCount === 0) {
      console.log('⚠️ No se encontraron recursos para cargar');
      this.loadingManager.setStatus('No hay recursos para cargar');
      await this.loadingManager.hide(); // Ahora esperamos el tiempo mínimo
      return;
    }

    try {
      if (this.resources.images.length > 0) {
        this.loadingManager.setStatus('Cargando imágenes...');
        await this.preloadImages();
      }
      
      if (this.resources.videos.length > 0) {
        this.loadingManager.setStatus('Preparando videos...');
        await this.preloadVideos();
      }
      
      this.loadingManager.setStatus('Finalizando...');
      
      // La función updateProgress llamará a hide() que esperará el tiempo mínimo
      
    } catch (error) {
      console.error('❌ Error durante la carga:', error);
      this.loadingManager.setStatus('⚠️ Algunos recursos no se cargaron');
      await this.loadingManager.hide(); // Esperar tiempo mínimo incluso con errores
    }
  }
}

// ===================================
// INTEGRACIÓN CON EXPERIENCIAS
// ===================================

const loadingManager = new LoadingManager();
const resourceLoader = new ResourceLoader(loadingManager);

let animateContentPatched = false;
const animatedContents = new Set();
let currentExperienceId = null; // ID de la experiencia actual

function patchAnimateContent() {
  if (animateContentPatched || !window.animateContent) {
    return;
  }

  const originalAnimateContent = window.animateContent;
  
  window.animateContent = async function(...args) {
    console.log('🎬 animateContent llamado');
    
    const contenido = document.getElementById('contenido');
    
    // Generar identificador único basado en el contenido
    const contentHash = contenido ? contenido.innerHTML.substring(0, 100) : '';
    
    // Si es una experiencia diferente, resetear la bandera
    if (currentExperienceId !== contentHash) {
      currentExperienceId = contentHash;
      if (contenido) {
        contenido.classList.remove('content-loaded');
        contenido.removeAttribute('data-animated');
      }
      console.log('🔄 Nueva experiencia detectada, permitiendo animación');
    }
    
    // Verificar si ESTA experiencia específica ya fue animada
    if (contenido && contenido.classList.contains('content-loaded') && currentExperienceId === contentHash) {
      console.log('🔒 Esta experiencia ya fue cargada, ignorando re-animación por scroll');
      return;
    }
    
    // IMPORTANTE: Ocultar el contenido ANTES de mostrar el loader
    if (contenido) {
      contenido.style.opacity = '0';
      contenido.style.visibility = 'hidden';
      contenido.classList.remove('content-loaded');
    }
    
    // Si ya se cargó esta experiencia antes (pero se cambió y volvió), mostrar sin loader
    if (animatedContents.has(contentHash) && contenido) {
      console.log('♻️ Experiencia previamente cargada, mostrando sin loader');
      
      // Aplicar la animación original
      if (originalAnimateContent) {
        originalAnimateContent.apply(this, args);
      }
      
      // Mostrar el contenido inmediatamente
      setTimeout(() => {
        contenido.style.visibility = 'visible';
        contenido.style.opacity = '1';
        contenido.style.transform = 'translateY(0) scale(1)';
        contenido.classList.add('content-loaded');
        contenido.setAttribute('data-animated', 'true');
      }, 50);
      
      return;
    }
    
    // Contenido nuevo: mostrar loader
    if (!loadingManager.isLoading) {
      loadingManager.show();
      loadingManager.setStatus('Preparando contenido...');
    }
    
    // Ejecutar animación original
    if (originalAnimateContent) {
      originalAnimateContent.apply(this, args);
    }
    
    // Esperar actualización del DOM
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Cargar recursos
    if (contenido && contenido.innerHTML.trim() !== '') {
      console.log('📄 Contenido encontrado, cargando recursos...');
      
      // Cargar recursos (esto esperará automáticamente el tiempo mínimo)
      await resourceLoader.loadAll(contenido);
      
      // Marcar como animado
      animatedContents.add(contentHash);
      currentExperienceId = contentHash;
      
      // MOSTRAR el contenido DESPUÉS de cargar (y esperar tiempo mínimo)
      setTimeout(() => {
        contenido.style.visibility = 'visible';
        contenido.style.opacity = '1';
        contenido.style.transform = 'translateY(0) scale(1)';
        contenido.classList.add('content-loaded');
        contenido.setAttribute('data-animated', 'true');
        console.log('✨ Contenido mostrado y marcado como cargado');
      }, 300);
    } else {
      console.log('⚠️ No hay contenido para cargar');
      await loadingManager.hide();
      
      // Mostrar contenido aunque esté vacío
      if (contenido) {
        contenido.style.visibility = 'visible';
        contenido.style.opacity = '1';
        contenido.classList.add('content-loaded');
      }
    }
  };

  animateContentPatched = true;
  console.log('✅ animateContent parcheado');
}

// Inicialización
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(patchAnimateContent, 100);
  });
} else {
  setTimeout(patchAnimateContent, 100);
}

window.addEventListener('load', () => {
  setTimeout(patchAnimateContent, 200);
  console.log('📄 Página cargada, esperando interacción del usuario');
  
  // 🚀 ESTE BLOQUE ES CRUCIAL
  setTimeout(() => {
    console.log('🚀 Forzando carga inicial de primera experiencia...');
    
    if (window.contentFunctions && window.contentFunctions[0]) {
      console.log('✅ Ejecutando contentFunction[0]');
      window.contentFunctions[0]();
      
      setTimeout(() => {
        const contenido = document.getElementById('contenido');
        
        if (contenido && contenido.innerHTML.trim() !== '') {
          console.log('📦 Contenido detectado, iniciando carga de recursos...');
          
          loadingManager.show();
          loadingManager.setStatus('Cargando experiencia inicial...');
          
          resourceLoader.loadAll(contenido).then(() => {
            console.log('✅ Recursos iniciales cargados');
            
            contenido.style.visibility = 'visible';
            contenido.style.opacity = '1';
            contenido.style.transform = 'translateY(0) scale(1)';
            contenido.classList.add('content-loaded');
            contenido.setAttribute('data-animated', 'true');
            
            const contentHash = contenido.innerHTML.substring(0, 100);
            animatedContents.add(contentHash);
            currentExperienceId = contentHash;
          }).catch(err => {
            console.error('❌ Error cargando recursos iniciales:', err);
            loadingManager.hide();
          });
        } else {
          console.warn('⚠️ No hay contenido para cargar inicialmente');
        }
      }, 500);
    } else {
      console.warn('⚠️ No hay funciones de contenido disponibles');
    }
  }, 800);
});

// Exportar
window.LoadingManager = LoadingManager;
window.ResourceLoader = ResourceLoader;
window.loadingManagerInstance = loadingManager;
window.resourceLoaderInstance = resourceLoader;

console.log('✅ Sistema de carga inicializado (versión final)');