// ===================================
// SISTEMA DE CARGA MEJORADO - VERSIÓN CORREGIDA
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
    this.init();
  }

  init() {
    // Crear el loader HTML solo si no existe
    if (!document.getElementById('main-loader')) {
      this.createLoader();
    } else {
      // Si ya existe, solo obtener las referencias
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
          <!-- Animación espacial -->
          <div class="loader-animation">
            <div class="loading-planet"></div>
            <div class="loading-orbit"></div>
            <div class="loading-satellite"></div>
          </div>
          
          <!-- Información de texto -->
          <div class="loader-info">
            <!-- Título -->
            <h2 class="loader-title">Cargando Experiencia</h2>
            
            <!-- Barra de progreso -->
            <div class="progress-container">
              <div class="progress-bar" id="progress-bar">
                <div class="progress-fill"></div>
                <div class="progress-glow"></div>
              </div>
              <div class="progress-text" id="progress-text">0%</div>
            </div>
            
            <!-- Estado actual -->
            <p class="loader-status" id="loader-status">Inicializando recursos...</p>
            
            <!-- Detalles técnicos -->
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

    // Insertar después del slider
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

  hide() {
    if (this.loaderElement) {
      this.isLoading = false;
      // Animación de salida suave
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
    
    // Actualizar barra de progreso
    if (this.progressBar) {
      this.progressBar.style.width = `${percentage}%`;
    }
    
    // Actualizar texto de porcentaje
    if (this.progressText) {
      this.progressText.textContent = `${percentage}%`;
    }
    
    // Actualizar estado
    if (status && this.statusText) {
      this.statusText.textContent = status;
    }
    
    // Actualizar contadores
    const loadedCount = document.getElementById('loaded-count');
    const totalCount = document.getElementById('total-count');
    if (loadedCount) loadedCount.textContent = loaded;
    if (totalCount) totalCount.textContent = total;
    
    // Si completó la carga
    if (loaded >= total && total > 0) {
      setTimeout(() => {
        if (this.statusText) {
          this.statusText.textContent = '✅ Carga completada';
        }
        setTimeout(() => this.hide(), 800);
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

  // Escanear todos los recursos del contenido
  scanResources(container) {
    // Esperar un poco para que el DOM se actualice completamente
    this.resources.images = Array.from(container.querySelectorAll('img'));
    this.resources.videos = Array.from(container.querySelectorAll('iframe[src*="youtube"], iframe[src*="youtu.be"]'));
    
    this.totalCount = this.resources.images.length + this.resources.videos.length;
    
    console.log(`📦 Recursos encontrados: ${this.totalCount} (${this.resources.images.length} imágenes, ${this.resources.videos.length} videos)`);
    
    this.loadingManager.updateProgress(0, this.totalCount, 'Escaneando recursos...');
    
    return this.totalCount;
  }

  // Precargar imágenes
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
          }, 10000); // 10 segundos timeout

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
          
          // Si la imagen ya tiene src, forzar recarga
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

  // Simular carga de videos
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

  // Cargar todos los recursos
  async loadAll(container) {
    // Reset counters
    this.loadedCount = 0;
    
    // Escanear recursos
    this.scanResources(container);
    
    if (this.totalCount === 0) {
      console.log('⚠️ No se encontraron recursos para cargar');
      this.loadingManager.setStatus('No hay recursos para cargar');
      setTimeout(() => this.loadingManager.hide(), 1500);
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
    } catch (error) {
      console.error('❌ Error durante la carga:', error);
      this.loadingManager.setStatus('⚠️ Algunos recursos no se cargaron');
      setTimeout(() => this.loadingManager.hide(), 2000);
    }
  }
}

// ===================================
// INTEGRACIÓN CON EXPERIENCIAS
// ===================================

// Crear instancias únicas (Singleton)
const loadingManager = new LoadingManager();
const resourceLoader = new ResourceLoader(loadingManager);

// Variable para controlar si ya se modificó animateContent
let animateContentPatched = false;

// Rastrear qué contenidos ya han sido animados
const animatedContents = new Set();

// Función para parchear animateContent
function patchAnimateContent() {
  if (animateContentPatched || !window.animateContent) {
    return;
  }

  const originalAnimateContent = window.animateContent;
  
  window.animateContent = async function(...args) {
    console.log('🎬 animateContent llamado');
    
    const contenido = document.getElementById('contenido');
    
    // Generar un identificador único para este contenido
    const contentHash = contenido ? contenido.innerHTML.substring(0, 100) : '';
    
    // Si ya se animó este contenido, solo ejecutar la animación visual sin loader
    if (animatedContents.has(contentHash) && contenido) {
      console.log('♻️ Contenido ya animado previamente, solo aplicando animación visual');
      
      // Solo ejecutar la animación original sin mostrar el loader
      if (originalAnimateContent) {
        originalAnimateContent.apply(this, args);
      }
      return;
    }
    
    // Mostrar loader solo si no está cargando y es contenido nuevo
    if (!loadingManager.isLoading) {
      loadingManager.show();
      loadingManager.setStatus('Preparando contenido...');
    }
    
    // Ejecutar la función original
    if (originalAnimateContent) {
      originalAnimateContent.apply(this, args);
    }
    
    // Esperar a que el DOM se actualice
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Cargar recursos del contenido actual
    if (contenido && contenido.innerHTML.trim() !== '') {
      console.log('📄 Contenido encontrado, cargando recursos...');
      await resourceLoader.loadAll(contenido);
      
      // Marcar este contenido como ya animado
      animatedContents.add(contentHash);
    } else {
      console.log('⚠️ No hay contenido para cargar');
      loadingManager.hide();
    }
  };

  animateContentPatched = true;
  console.log('✅ animateContent parcheado');
}

// Intentar parchear cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(patchAnimateContent, 100);
  });
} else {
  setTimeout(patchAnimateContent, 100);
}

// También intentar parchear cuando la página se carga completamente
window.addEventListener('load', () => {
  setTimeout(patchAnimateContent, 200);
  
  // Si hay contenido inicial, NO cargarlo automáticamente
  // (se cargará cuando el usuario haga clic)
  console.log('📄 Página cargada, esperando interacción del usuario');
});

// Exportar para uso externo
window.LoadingManager = LoadingManager;
window.ResourceLoader = ResourceLoader;
window.loadingManagerInstance = loadingManager;
window.resourceLoaderInstance = resourceLoader;

console.log('✅ Sistema de carga con progreso inicializado (versión corregida)');