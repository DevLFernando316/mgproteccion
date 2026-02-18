<template>
  <section class="services-preview section">
    <div class="container">
      <SectionTitle label="Nuestros Servicios" center gradient>
        Soluciones especializadas para la gestión integral de riesgos laborales
      </SectionTitle>

      <div class="carousel-wrapper">
        <!-- Flecha izquierda -->
        <button class="carousel-btn prev" @click="prev" aria-label="Anterior">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <!-- Track del carrusel -->
        <div class="carousel-track-container" ref="trackContainer">
          <div
            class="carousel-track"
            :style="{ transform: `translateX(-${trackOffset}px)` }"
          >
            <div
              v-for="service in services"
              :key="service.id"
              class="service-item"
              :style="{ width: cardWidth + 'px', flexBasis: cardWidth + 'px' }"
            >
              <!-- Imagen superior -->
              <div class="service-img">
                <img :src="service.image" :alt="service.title" />
              </div>

              <!-- Contenido -->
              <div class="service-content">
                <div class="service-content-inner">
                  <div class="service-icon" v-html="service.icon"></div>
                  <h4>{{ service.title }}</h4>
                  <p>{{ service.description }}</p>
                  <router-link
                    :to="`/servicios#servicio-${service.id}`"
                    class="service-btn"
                  >
                    Conocer más
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Flecha derecha -->
        <button class="carousel-btn next" @click="next" aria-label="Siguiente">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <!-- Dots indicadores -->
      <div class="carousel-dots">
        <button
          v-for="(_, index) in dotCount"
          :key="index"
          :class="{ active: index === activeDot }"
          @click="goTo(index)"
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
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import SectionTitle from "../common/SectionTitle.vue";
import Button from "../common/Button.vue";

const currentIndex = ref(0);
const itemsPerView = ref(3);
const cardWidth = ref(0);
const trackContainer = ref(null);

const services = [
  {
    id: 1,
    title: "Sistemas de Gestión de Seguridad y Salud en el Trabajo",
    description:
      "Diseño e implementación del SG-SST conforme al Decreto 1072 de 2015 y Resolución 0312 de 2019.",
    image: "/images/servicios2/SGSST.jpeg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 15h6"/>
      <path d="M9 11h6"/>
    </svg>`,
  },
  {
    id: 2,
    title: "Gestión de Riesgo Mecánico",
    description:
      "Identificación, evaluación y valoración de peligros mecánicos conforme a estándares nacionales e internacionales.",
    image: "/images/servicios2/R_Mecanico.JPG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
      <path d="M8.46 8.46a5 5 0 0 0 0 7.07"/>
    </svg>`,
  },
  {
    id: 3,
    title: "Gestión de Riesgo Eléctrico",
    description:
      "Cumplimiento de la Resolución 40117 de 2024 e implementación de prácticas seguras en instalaciones eléctricas.",
    image: "/images/servicios2/R_electrico.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>`,
  },
  {
    id: 4,
    title: "Gestión de Tareas de Alto Riesgo (TAR)",
    description:
      "Implementación de estrategias preventivas y de control para la administración segura de Tareas de Alto Riesgo.",
    image: "/images/servicios2/Tareas_Alto_Riesgo.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <path d="M12 9v4"/>
      <path d="M12 17h.01"/>
    </svg>`,
  },
  {
    id: 5,
    title: "Control de Energías Peligrosas",
    description:
      "Implementación de procedimientos Lockout/Tagout según OSHA 29 CFR 1910.147.",
    image: "/images/servicios2/Energiaspeligrosas.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`,
  },
  {
    id: 6,
    title: "Gestión en Trabajo con Calderas",
    description:
      "Cumplimiento de la Resolución 1857 de 2024 para operación segura de calderas industriales.",
    image: "/images/servicios2/Calderas1.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
      <line x1="4" y1="22" x2="4" y2="15"/>
    </svg>`,
  },
  {
    id: 7,
    title: "Gamificación para Gestión de Riesgos Laborales",
    description:
      "Metodología basada en experiencias dinámicas que incrementan la retención del conocimiento y modifican conductas.",
    image: "/images/servicios2/Gamificacion.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 5H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
      <rect width="12" height="8" x="6" y="1" rx="2"/>
      <path d="M8 14h0"/>
      <path d="M12 14h0"/>
      <path d="M16 14h0"/>
      <path d="M12 18h0"/>
    </svg>`,
  },
];

// Máximo índice de desplazamiento (carta a carta)
const maxIndex = computed(() =>
  Math.max(0, services.length - itemsPerView.value),
);

// Dots: uno por grupo
const dotCount = computed(() =>
  Math.ceil(services.length / itemsPerView.value),
);

// Dot activo según posición actual
const activeDot = computed(() =>
  Math.floor(currentIndex.value / itemsPerView.value),
);

// Cuánto desplazar el track
const trackOffset = computed(() => {
  const gap = 32; // 2rem = 32px
  return currentIndex.value * (cardWidth.value + gap);
});

const updateLayout = () => {
  const width = window.innerWidth;
  if (width < 640) {
    itemsPerView.value = 1;
  } else if (width < 968) {
    itemsPerView.value = 2;
  } else {
    itemsPerView.value = 3;
  }

  nextTick(() => {
    const container = document.querySelector(".carousel-track-container");
    if (container) {
      const gap = 32;
      cardWidth.value =
        (container.offsetWidth - gap * (itemsPerView.value - 1)) /
        itemsPerView.value;
    }
    // Ajustar índice si quedó fuera de rango tras resize
    if (currentIndex.value > maxIndex.value) {
      currentIndex.value = Math.max(0, maxIndex.value);
    }
  });
};

const next = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = maxIndex.value;
  }
};

// Al hacer click en dot, ir al inicio de ese grupo
const goTo = (index) => {
  currentIndex.value = Math.min(index * itemsPerView.value, maxIndex.value);
};

onMounted(() => {
  updateLayout();
  window.addEventListener("resize", updateLayout);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateLayout);
});
</script>

<style scoped>
.section {
  padding: 5rem 0;
  background: var(--color-bg-light);
  overflow: hidden;
}

/* Wrapper del carrusel */
.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

/* Flechas */
.carousel-btn {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: white;
  border: 2px solid var(--color-border, #e5e7eb);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  color: var(--color-text-dark, #1a1a1a);
}

.carousel-btn:hover {
  background: #0f3d3e;
  border-color: #0f3d3e;
  color: white;
  transform: scale(1.08);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.carousel-btn svg {
  width: 22px;
  height: 22px;
}

/* Track container - oculta lo que se sale */
.carousel-track-container {
  flex: 1;
  overflow: hidden;
}

/* Track - contiene todas las tarjetas en fila */
.carousel-track {
  display: flex;
  gap: 2rem;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Tarjeta de servicio */
.service-item {
  flex-shrink: 0;
  min-width: 0;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.service-item:hover {
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

/* Imagen */
.service-img {
  position: relative;
  overflow: hidden;
  height: 180px;
  flex-shrink: 0;
}

.service-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-item:hover .service-img img {
  transform: scale(1.2);
}

.service-img::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(32, 77, 50, 0.4);
  transition: all 0.5s ease;
}

.service-item:hover .service-img::after {
  width: 100%;
  height: 100%;
}

/* Contenido */
.service-content {
  position: relative;
  background: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.service-content::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  background: linear-gradient(135deg, #0f3d3e 0%, #0d545f 100%);
  transition: all 0.5s ease;
  z-index: 1;
}

.service-item:hover .service-content::after {
  width: 100%;
  height: 100%;
}

.service-content-inner {
  padding: 1.5rem;
  text-align: center;
  transition: all 0.5s ease;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
}

/* Icono */
.service-icon {
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #0f3d3e 0%, #0d545f 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.5s ease;
  flex-shrink: 0;
}

.service-icon svg {
  width: 26px;
  height: 26px;
}

.service-item:hover .service-icon {
  background: #5dd4b4;
  transform: rotate(5deg) scale(1.1);
}

/* Título */
.service-content-inner h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-text-dark);
  line-height: 1.3;
  transition: all 0.5s ease;
  flex-shrink: 0;
}

/* Descripción */
.service-content-inner p {
  font-size: 0.8125rem;
  line-height: 1.6;
  margin-bottom: auto;
  padding-bottom: 1rem;
  color: var(--color-text-light);
  transition: all 0.5s ease;
  flex: 1;
}

.service-item:hover .service-content-inner h4 {
  color: white;
}

.service-item:hover .service-content-inner p {
  color: rgba(255, 255, 255, 0.9);
}

/* Botón */
.service-btn {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: white;
  color: #0f3d3e;
  font-weight: 600;
  font-size: 0.8125rem;
  border-radius: 50px;
  border: 2px solid #0f3d3e;
  transition: all 0.3s ease;
  align-self: center;
  flex-shrink: 0;
}

.service-btn:hover {
  background: #5dd4b4;
  color: white;
  border-color: #5dd4b4;
  transform: translateY(-2px);
}

.service-item:hover .service-btn {
  background: white;
  color: #0f3d3e;
  border-color: white;
}

.service-item:hover .service-btn:hover {
  background: #5dd4b4;
  color: white;
  border-color: #5dd4b4;
}

/* Dots indicadores */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.625rem;
  margin-bottom: 2.5rem;
}

.carousel-dots button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-border, #e5e7eb);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.carousel-dots button.active {
  background: #0f3d3e;
  width: 28px;
  border-radius: 5px;
}

/* CTA */
.services-cta {
  text-align: center;
  padding-top: 1rem;
}

/* Responsive */
@media (max-width: 968px) {
  .service-img {
    height: 160px;
  }

  .service-content-inner {
    padding: 1.25rem;
  }

  .carousel-btn {
    width: 42px;
    height: 42px;
  }

  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }

  .carousel-wrapper {
    gap: 0.75rem;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 3rem 0;
  }

  .service-img {
    height: 200px;
  }

  .carousel-wrapper {
    gap: 0.5rem;
  }

  .carousel-btn {
    width: 40px;
    height: 40px;
  }

  .carousel-btn svg {
    width: 18px;
    height: 18px;
  }

  .carousel-track {
    gap: 1rem;
  }

  .service-content-inner h4 {
    font-size: 1.125rem;
  }

  .service-content-inner p {
    font-size: 0.875rem;
  }
}
</style>
