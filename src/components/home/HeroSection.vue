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
      'Proteja su empresa con <span class="text-highlight">soluciones integrales</span> en gestión de riesgos laborales',
    description:
      "Garantice la seguridad de su equipo, cumpla con la normatividad vigente y optimice sus operaciones con servicios especializados en SST.",
    stats: ["Equipo experto", "Cumplimiento normativo", "Respuesta rápida"],
  },
  {
    title:
      'Transforme la <span class="text-highlight">seguridad laboral</span> de su organización',
    description:
      "Implementamos tecnología con IA, simuladores didácticos y metodologías innovadoras para reducir incidentes hasta un 85%.",
    stats: [
      "Tecnología con IA",
      "Reducción de incidentes 85%",
      "Capacitación efectiva",
    ],
  },
  {
    title:
      'Cumpla con <span class="text-highlight">RETIE, ISO 45001</span> y toda la normativa vigente',
    description:
      "Evite sanciones y multas. Lo acompañamos en el cumplimiento de Decreto 1072, Resolución 0312, RETIE 2024 y estándares de SST.",
    stats: ["Cumplimiento 100%", "Sin multas", "Auditorías especializadas"],
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
  height: calc(100vh - 65px);
  min-height: 500px;
  max-height: 850px;
  overflow: hidden;
  margin-top: 65px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 100%;
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
}

/* Backgrounds para cada slide */
.slide-0 {
  background-image: url("/images/background1.jpg");
}

.slide-1 {
  background-image: url("/images/background2.jpg");
}

.slide-2 {
  background-image: url("/images/background3.jpg");
}

.slide-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
}

.container {
  position: relative;
  z-index: 2;
  height: 100%;
}

.hero-content {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

.hero-text {
  max-width: 850px;
}

.hero-text h1 {
  color: white;
  margin-bottom: 1.25rem;
  line-height: 1.2;
  font-size: clamp(1.875rem, 4.5vw, 3rem);
  font-weight: 800;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.text-highlight {
  color: #5dd4b4;
  font-weight: 800;
}

.hero-description {
  font-size: clamp(0.9375rem, 1.8vw, 1.0625rem);
  line-height: 1.65;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.92);
  max-width: 700px;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

/* Stats compactos */
.hero-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.stat {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.stat svg {
  width: 20px;
  height: 20px;
  color: #5dd4b4;
  flex-shrink: 0;
}

.stat span {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
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
  }

  .hero-content {
    padding: 3rem 0;
  }

  .hero-text h1 {
    font-size: 1.875rem;
    margin-bottom: 1rem;
  }

  .hero-description {
    font-size: 0.9375rem;
    margin-bottom: 1.75rem;
  }

  .hero-actions {
    margin-bottom: 1.75rem;
  }

  .hero-stats {
    gap: 1.25rem;
    padding-top: 1.25rem;
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
  }

  .hero-text h1 {
    font-size: 1.625rem;
  }

  .hero-description {
    font-size: 0.875rem;
  }

  .hero-actions {
    flex-direction: column;
    gap: 0.875rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1rem;
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
