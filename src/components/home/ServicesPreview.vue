<template>
  <section class="services-preview section">
    <div class="container">
      <SectionTitle label="Nuestros Servicios" center gradient>
        Soluciones especializadas para la gestión integral de riesgos laborales
      </SectionTitle>

      <div class="carousel-wrapper">
        <!-- Botón anterior -->
        <button
          class="carousel-nav prev"
          @click="scrollCarousel('prev')"
          :disabled="isAtStart"
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

        <!-- Carrusel de servicios -->
        <div class="services-carousel" ref="carousel" @scroll="handleScroll">
          <div
            v-for="service in services"
            :key="service.id"
            class="service-card"
          >
            <!-- Imagen superior -->
            <div class="service-image">
              <img :src="service.image" :alt="service.title" />
              <div class="image-overlay"></div>
            </div>

            <!-- Contenido -->
            <div class="service-content">
              <div class="service-icon" v-html="service.icon"></div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <router-link to="/servicios" class="service-button">
                Conocer más
              </router-link>
            </div>
          </div>
        </div>

        <!-- Botón siguiente -->
        <button
          class="carousel-nav next"
          @click="scrollCarousel('next')"
          :disabled="isAtEnd"
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

      <!-- Indicadores de puntos -->
      <div class="carousel-dots">
        <button
          v-for="(dot, index) in totalDots"
          :key="index"
          :class="{ active: currentDot === index }"
          @click="scrollToDot(index)"
          :aria-label="`Ir a grupo ${index + 1}`"
        ></button>
      </div>

      <div class="services-cta">
        <Button variant="primary" size="lg" to="/servicios">
          Ver Todos los Servicios
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import SectionTitle from "../common/SectionTitle.vue";
import Button from "../common/Button.vue";

const carousel = ref(null);
const isAtStart = ref(true);
const isAtEnd = ref(false);
const currentDot = ref(0);

const services = [
  {
    id: 1,
    title: "Sistemas de Gestión SST",
    description:
      "Diseño e implementación de SG-SST según Decreto 1072/2015 y Resolución 0312/2019.",
    image: "/images/servicios/servicio1.jpg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
    </svg>`,
  },
  {
    id: 2,
    title: "Gestión de Riesgo Mecánico",
    description:
      "Protección de máquinas, evaluación de riesgos y procedimientos seguros.",
    image: "/images/servicios/servicio2.jpg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m5.2-14.8l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m14.8 5.2l-4.2-4.2m0-6l-4.2-4.2"></path>
    </svg>`,
  },
  {
    id: 3,
    title: "Gestión de Riesgo Eléctrico",
    description:
      "Cumplimiento RETIE 2024, estudios de arco eléctrico NFPA 70E.",
    image: "/images/servicios/servicio3.jpg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>`,
  },
  {
    id: 4,
    title: "Tareas de Alto Riesgo",
    description:
      "Trabajo en alturas, espacios confinados, trabajos en caliente y más.",
    image: "/images/servicios/servicio4.jpeg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
    </svg>`,
  },
  {
    id: 5,
    title: "Control de Energías Peligrosas",
    description:
      "Lockout/Tagout según OSHA 29 CFR 1910.147 para trabajo seguro.",
    image: "/images/servicios/servicio1.jpg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>`,
  },
  {
    id: 6,
    title: "Gestión con Calderas",
    description:
      "Cumplimiento Resolución 1857/2024 para calderas industriales.",
    image: "/images/servicios/servicio2.jpg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect>
      <circle cx="12" cy="14" r="2"></circle>
    </svg>`,
  },
  {
    id: 7,
    title: "Gamificación",
    description:
      "Capacitación innovadora con experiencias interactivas y memorables.",
    image: "/images/servicios/servicio3.jpg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="17" cy="17" r="3"></circle>
      <circle cx="7" cy="7" r="3"></circle>
      <path d="M14 17h-4M7 10l3 7"></path>
    </svg>`,
  },
];

const totalDots = computed(() => Math.ceil(services.length / 3));

const scrollCarousel = (direction) => {
  const container = carousel.value;
  const cardWidth = 310; // ancho de tarjeta + gap
  const scrollAmount = cardWidth * 3; // desplazar 3 tarjetas

  if (direction === "next") {
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  } else {
    container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
};

const scrollToDot = (index) => {
  const container = carousel.value;
  const cardWidth = 310;
  const scrollAmount = cardWidth * 3 * index;
  container.scrollTo({ left: scrollAmount, behavior: "smooth" });
};

const handleScroll = () => {
  const container = carousel.value;
  if (!container) return;

  isAtStart.value = container.scrollLeft <= 10;
  isAtEnd.value =
    container.scrollLeft >= container.scrollWidth - container.clientWidth - 10;

  // Calcular punto activo
  const cardWidth = 310;
  const groupWidth = cardWidth * 3;
  currentDot.value = Math.round(container.scrollLeft / groupWidth);
};

onMounted(() => {
  handleScroll();
});
</script>

<style scoped>
.section {
  padding: 4rem 0;
  background: var(--color-bg-light);
}

.carousel-wrapper {
  position: relative;
  margin-bottom: 2rem;
}

/* Carrusel */
.services-carousel {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 1rem 0 2rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.services-carousel::-webkit-scrollbar {
  display: none;
}

/* Tarjetas más pequeñas */
.service-card {
  flex: 0 0 280px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.15);
}

/* Imagen compacta */
.service-image {
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
  background: linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%);
}

.service-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover .service-image img {
  transform: scale(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(32, 77, 50, 0.4) 0%,
    rgba(13, 84, 95, 0.4) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
}

.service-card:hover .image-overlay {
  opacity: 1;
}

/* Contenido compacto */
.service-content {
  padding: 1.5rem;
  background: #1a3a4a;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

/* Animación de onda al hover */
.service-content::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #204d32 0%, #0d545f 100%);
  transition: left 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 0;
}

.service-card:hover .service-content::before {
  left: 0;
}

.service-content > * {
  position: relative;
  z-index: 1;
}

.service-icon {
  width: 48px;
  height: 48px;
  background: #5dd4b4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: #1a3a4a;
  transition: all 0.4s ease;
}

.service-card:hover .service-icon {
  background: white;
  transform: rotate(5deg) scale(1.05);
}

.service-icon svg {
  width: 24px;
  height: 24px;
}

.service-content h3 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: white;
  line-height: 1.3;
}

.service-content p {
  font-size: 0.8125rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  min-height: 60px;
}

.service-button {
  display: inline-block;
  padding: 0.625rem 1.5rem;
  background: #5dd4b4;
  color: #1a3a4a;
  font-weight: 600;
  font-size: 0.8125rem;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.service-button:hover {
  background: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(93, 212, 180, 0.3);
}

.service-card:hover .service-button {
  background: white;
  color: #204d32;
}

/* Botones de navegación */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 44px;
  height: 44px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  color: #204d32;
}

.carousel-nav:hover:not(:disabled) {
  background: #204d32;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.carousel-nav svg {
  width: 20px;
  height: 20px;
}

.carousel-nav.prev {
  left: -20px;
}

.carousel-nav.next {
  right: -20px;
}

/* Indicadores de puntos */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2.5rem;
}

.carousel-dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(32, 77, 50, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.carousel-dots button.active {
  background: #204d32;
  width: 30px;
  border-radius: 5px;
}

.carousel-dots button:hover {
  background: rgba(32, 77, 50, 0.5);
}

.services-cta {
  text-align: center;
}

/* Responsive */
@media (max-width: 1200px) {
  .carousel-nav.prev {
    left: 10px;
  }
  .carousel-nav.next {
    right: 10px;
  }
}

@media (max-width: 968px) {
  .service-card {
    flex: 0 0 260px;
  }

  .carousel-nav {
    width: 40px;
    height: 40px;
  }

  .carousel-nav.prev {
    left: 5px;
  }
  .carousel-nav.next {
    right: 5px;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 3rem 0;
  }

  .service-card {
    flex: 0 0 240px;
  }

  .service-image {
    height: 140px;
  }

  .service-content {
    padding: 1.25rem;
  }

  .service-content h3 {
    font-size: 1rem;
  }

  .service-content p {
    font-size: 0.75rem;
    min-height: 50px;
  }

  .carousel-nav {
    display: none;
  }
}
</style>
