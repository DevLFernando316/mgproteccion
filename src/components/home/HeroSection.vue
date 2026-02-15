<template>
  <section class="hero">
    <!-- Carrusel de slides -->
    <div class="carousel">
      <transition
        :name="direction === 'next' ? 'slide-smooth' : 'slide-smooth-reverse'"
      >
        <div :key="currentSlide" class="slide" :class="`slide-${currentSlide}`">
          <!-- Overlay oscuro -->
          <div class="slide-overlay"></div>

          <!-- Contenido -->
          <div class="container">
            <div class="hero-content">
              <div class="hero-text fade-in-up">
                <h1 v-html="slides[currentSlide].title"></h1>
                <p class="hero-description">
                  {{ slides[currentSlide].description }}
                </p>
                <div class="hero-actions">
                  <Button variant="primary" size="lg" to="/contacto">
                    Solicitar Asesoría Gratuita
                  </Button>
                  <Button variant="secondary" size="lg" to="/servicios">
                    Ver Servicios
                  </Button>
                </div>

                <!-- Stats compactos -->
                <div class="hero-stats">
                  <div
                    v-for="(stat, index) in slides[currentSlide].stats"
                    :key="index"
                    class="stat"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{{ stat }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Indicadores y controles -->
          <div class="carousel-controls">
            <div class="carousel-indicators">
              <button
                v-for="(slide, index) in slides"
                :key="index"
                :class="{ active: currentSlide === index }"
                @click="goToSlide(index)"
                :aria-label="`Ir a slide ${index + 1}`"
              >
                <span
                  class="progress-bar"
                  v-if="currentSlide === index && !isPaused"
                ></span>
              </button>
            </div>

            <!-- Botón pause/play -->
            <button
              class="pause-button"
              @click="togglePause"
              :aria-label="isPaused ? 'Reproducir' : 'Pausar'"
            >
              <svg
                v-if="!isPaused"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect x="6" y="4" width="4" height="16"></rect>
                <rect x="14" y="4" width="4" height="16"></rect>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>

          <!-- Controles de navegación -->
          <button
            class="carousel-control prev"
            @click="prevSlide"
            aria-label="Slide anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            class="carousel-control next"
            @click="nextSlide"
            aria-label="Siguiente slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Button from "../common/Button.vue";

const currentSlide = ref(0);
const direction = ref("next");
const isPaused = ref(false);
let autoplayInterval = null;

const slides = [
  {
    title:
      'Proteja a su equipo y <span class="text-highlight">garantice el cumplimiento normativo</span>',
    description:
      "Asesoría especializada en seguridad laboral con tecnología de vanguardia y cumplimiento garantizado.",
    stats: [
      "Expertos certificados",
      "Cumplimiento 100%",
      "Resultados medibles",
    ],
  },
  {
    title:
      '<span class="text-highlight">Reduzca incidentes hasta un 85%</span> con tecnología IA',
    description:
      "Transforme la seguridad de su empresa con simuladores, análisis predictivo y capacitación innovadora.",
    stats: ["Tecnología IA avanzada", "Menos accidentes", "Formación práctica"],
  },
  {
    title:
      'Evite multas y sanciones <span class="text-highlight">¡Nosotros lo acompañamos!</span>',
    description:
      "Cumplimiento de RETIE 2024, Decreto 1072, ISO 45001 y toda la normativa vigente en SST.",
    stats: ["Sin sanciones", "Auditorías expertas", "Asesoría permanente"],
  },
];

const nextSlide = () => {
  direction.value = "next";
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  direction.value = "prev";
  currentSlide.value =
    currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1;
  resetAutoplay();
};

const goToSlide = (index) => {
  direction.value = index > currentSlide.value ? "next" : "prev";
  currentSlide.value = index;
  resetAutoplay();
};

const togglePause = () => {
  isPaused.value = !isPaused.value;
  if (isPaused.value) {
    clearInterval(autoplayInterval);
  } else {
    startAutoplay();
  }
};

const startAutoplay = () => {
  if (autoplayInterval) clearInterval(autoplayInterval);
  autoplayInterval = setInterval(() => {
    if (!isPaused.value) {
      nextSlide();
    }
  }, 15000); // 15 segundos por imagen
};

const resetAutoplay = () => {
  if (!isPaused.value) {
    clearInterval(autoplayInterval);
    startAutoplay();
  }
};

onMounted(() => {
  startAutoplay();
});

onUnmounted(() => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
  }
});
</script>

<style scoped>
.hero {
  position: relative;
  height: calc(100dvh);
  min-height: 500px;
  overflow: hidden; /* IMPORTANTE */
  max-width: 100vw; /* IMPORTANTE */
  width: 100%;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden; /* IMPORTANTE */
  max-width: 100vw; /* IMPORTANTE */
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden; /* IMPORTANTE */
  max-width: 100vw; /* IMPORTANTE */
}

/* Backgrounds para cada slide */
.slide-0 {
  background-image: url("/images/carousel/background1.jpg");
}

.slide-1 {
  background-image: url("/images/carousel/background2.jpg");
}

.slide-2 {
  background-image: url("/images/carousel/background3.jpg");
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.25) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
  height: 100%;
  max-width: 100vw; /* IMPORTANTE */
  overflow-x: hidden; /* IMPORTANTE */
}

.hero-content {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  max-width: 100vw; /* IMPORTANTE */
  overflow-x: hidden; /* IMPORTANTE */
}

.hero-text {
  max-width: 850px;
  overflow-x: hidden; /* IMPORTANTE */
}

.hero-text h1 {
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.15;
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  font-weight: 900;
  text-shadow:
    0 2px 10px rgba(0, 0, 0, 0.5),
    0 4px 20px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
}

.text-highlight {
  color: #5dd4b4;
  font-weight: 900;
  text-shadow:
    0 2px 15px rgba(93, 212, 180, 0.6),
    0 4px 25px rgba(93, 212, 180, 0.4);
}

.hero-description {
  font-size: clamp(1.125rem, 2.2vw, 1.375rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.95);
  max-width: 750px;
  text-shadow:
    0 2px 8px rgba(0, 0, 0, 0.5),
    0 1px 3px rgba(0, 0, 0, 0.8);
  font-weight: 500;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

/* Stats mejorados */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 2px solid rgba(93, 212, 180, 0.3);
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat svg {
  width: 22px;
  height: 22px;
  color: #5dd4b4;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(93, 212, 180, 0.5));
}

.stat span {
  font-size: 0.9375rem;
  font-weight: 600;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

/* Overlay más oscuro para mejor contraste */
.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.35) 100%
  );
  z-index: 1;
}

/* Controles del carrusel */
.carousel-controls {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 3;
}

.carousel-indicators {
  display: flex;
  gap: 10px;
}

.carousel-indicators button {
  position: relative;
  width: 45px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.carousel-indicators button:hover {
  background: rgba(255, 255, 255, 0.5);
}

.carousel-indicators button.active {
  background: rgba(255, 255, 255, 0.4);
}

.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: white;
  animation: progress 15s linear;
  border-radius: 2px;
}

@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* Botón pause/play */
.pause-button {
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.pause-button:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.1);
}

.pause-button svg {
  width: 16px;
  height: 16px;
}

/* Controles de navegación */
.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white;
}

.carousel-control:hover {
  background: rgba(255, 255, 255, 0.22);
  transform: translateY(-50%) scale(1.08);
}

.carousel-control svg {
  width: 22px;
  height: 22px;
}

.carousel-control.prev {
  left: 25px;
}

.carousel-control.next {
  right: 25px;
}

/* =====================================================
   TRANSICIÓN SUAVE PROFESIONAL
===================================================== */
/* ENTER + LEAVE */
.slide-smooth-enter-active,
.slide-smooth-leave-active,
.slide-smooth-reverse-enter-active,
.slide-smooth-reverse-leave-active {
  transition:
    transform 0.9s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.9s ease;
}

/* → NEXT (derecha a izquierda) */
.slide-smooth-enter-from {
  transform: translateX(60px);
  opacity: 0;
}

.slide-smooth-leave-to {
  transform: translateX(-60px);
  opacity: 0;
}

/* ← PREV (izquierda a derecha) */
.slide-smooth-reverse-enter-from {
  transform: translateX(-60px);
  opacity: 0;
}

.slide-smooth-reverse-leave-to {
  transform: translateX(60px);
  opacity: 0;
}

.fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .hero {
    max-height: 750px;
  }
}

@media (max-width: 968px) {
  .hero {
    height: absolute;
    min-height: 550px;
    max-height: none;
    margin-top: 60px;
    overflow: hidden;
    max-width: 100vw;
  }

  .hero-content {
    padding: 3rem 0;
    width: 100%;
    max-width: 100vw;
  }

  .hero-text h1 {
    font-size: 2rem;
    margin-bottom: 1.25rem;
  }

  .hero-description {
    font-size: 1.0625rem;
    margin-bottom: 2rem;
  }

  .hero-stats {
    gap: 1rem;
    padding-top: 1.5rem;
  }

  .stat {
    padding: 0.625rem 1rem;
  }

  .stat span {
    font-size: 0.875rem;
  }
  .carousel-control {
    width: 42px;
    height: 42px;
  }

  .carousel-control.prev {
    left: 15px;
  }

  .carousel-control.next {
    right: 15px;
  }

  .carousel-controls {
    bottom: 25px;
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: 500px;
    overflow: hidden;
    max-width: 100vw;
  }

  .hero-text h1,
  .hero-description,
  .hero-actions,
  .hero-stats {
    max-width: 100%;
  }

  .hero-description {
    font-size: 0.9375rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 0.75rem;
  }

  .stat {
    justify-content: center;
  }

  .carousel-control {
    display: none;
  }

  .carousel-indicators button {
    width: 32px;
  }

  .pause-button {
    width: 32px;
    height: 32px;
  }

  .pause-button svg {
    width: 14px;
    height: 14px;
  }
}

/* Optimización de rendimiento */
@media (prefers-reduced-motion: reduce) {
  .slide-smooth-enter-active,
  .slide-smooth-leave-active,
  .slide-smooth-reverse-enter-active,
  .slide-smooth-reverse-leave-active,
  .fade-in-up,
  .progress-bar {
    animation: none;
    transition: none;
  }
}
</style>
