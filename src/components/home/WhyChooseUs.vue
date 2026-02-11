<template>
  <section class="why-choose section">
    <div class="container">
      <div class="why-content">
        <div class="why-text">
          <SectionTitle label="¿Por Qué Elegirnos?" gradient>
            Su aliado estratégico en gestión de riesgos laborales
          </SectionTitle>

          <div class="features">
            <div v-for="feature in features" :key="feature.id" class="feature">
              <div class="feature-icon" v-html="feature.icon"></div>
              <div class="feature-content">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <Button variant="primary" size="lg" to="/por-que-elegirnos">
            Conocer Más Sobre Nosotros
          </Button>
        </div>

        <div class="why-visual">
          <div class="visual-card">
            <div class="card-header">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div class="card-content">
              <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <!-- Gráfico de barras de progreso -->
                <g class="chart">
                  <text x="20" y="40" font-size="14" fill="currentColor">
                    Cumplimiento Normativo
                  </text>
                  <rect
                    x="20"
                    y="50"
                    width="280"
                    height="20"
                    fill="#E5E7EB"
                    rx="10"
                  />
                  <rect
                    x="20"
                    y="50"
                    width="264"
                    height="20"
                    fill="url(#gradient1)"
                    rx="10"
                    class="bar-animated"
                  />
                  <text
                    x="310"
                    y="65"
                    font-size="16"
                    font-weight="bold"
                    fill="currentColor"
                  >
                    95%
                  </text>

                  <text x="20" y="110" font-size="14" fill="currentColor">
                    Reducción de Incidentes
                  </text>
                  <rect
                    x="20"
                    y="120"
                    width="280"
                    height="20"
                    fill="#E5E7EB"
                    rx="10"
                  />
                  <rect
                    x="20"
                    y="120"
                    width="238"
                    height="20"
                    fill="url(#gradient2)"
                    rx="10"
                    class="bar-animated"
                  />
                  <text
                    x="310"
                    y="135"
                    font-size="16"
                    font-weight="bold"
                    fill="currentColor"
                  >
                    85%
                  </text>

                  <text x="20" y="180" font-size="14" fill="currentColor">
                    Satisfacción del Cliente
                  </text>
                  <rect
                    x="20"
                    y="190"
                    width="280"
                    height="20"
                    fill="#E5E7EB"
                    rx="10"
                  />
                  <rect
                    x="20"
                    y="190"
                    width="273"
                    height="20"
                    fill="url(#gradient3)"
                    rx="10"
                    class="bar-animated"
                  />
                  <text
                    x="310"
                    y="205"
                    font-size="16"
                    font-weight="bold"
                    fill="currentColor"
                  >
                    98%
                  </text>
                </g>

                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #204d32; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #0d545f; stop-opacity: 1"
                    />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #0d545f; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #2d3e54; stop-opacity: 1"
                    />
                  </linearGradient>
                  <linearGradient
                    id="gradient3"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop
                      offset="0%"
                      style="stop-color: #204d32; stop-opacity: 1"
                    />
                    <stop
                      offset="100%"
                      style="stop-color: #2d3e54; stop-opacity: 1"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from "../common/SectionTitle.vue";
import Button from "../common/Button.vue";

const features = [
  {
    id: 1,
    title: "Experiencia Comprobada",
    description:
      "Equipo de profesionales con amplia trayectoria en gestión de riesgos laborales en diversos sectores industriales.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
      <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>`,
  },
  {
    id: 2,
    title: "Metodología Integral",
    description:
      "Enfoque innovador y personalizado que se adapta a las necesidades específicas de cada organización.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M12 16v-4M12 8h.01"></path>
    </svg>`,
  },
  {
    id: 3,
    title: "Tecnología Avanzada",
    description:
      "Uso de IA para diagnósticos predictivos, investigación de accidentes y optimización de procesos.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>`,
  },
  {
    id: 4,
    title: "Resultados Medibles",
    description:
      "Generamos valor tangible: reducción de incidentes, cumplimiento normativo y mejora continua.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>`,
  },
];
</script>

<style scoped>
.why-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.feature-icon {
  width: 56px;
  height: 56px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.feature-icon svg {
  width: 28px;
  height: 28px;
}

.feature-content h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark);
}

.feature-content p {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

/* Visual Card */
.visual-card {
  background: white;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.card-header {
  display: flex;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: var(--color-bg-light);
  border-bottom: 1px solid var(--color-border);
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-border);
}

.dot:nth-child(1) {
  background: #ef4444;
}

.dot:nth-child(2) {
  background: #f59e0b;
}

.dot:nth-child(3) {
  background: #10b981;
}

.card-content {
  padding: 2rem;
}

.card-content svg {
  width: 100%;
  height: auto;
  color: var(--color-text-dark);
}

.bar-animated {
  animation: growBar 1.5s ease-out;
}

@keyframes growBar {
  from {
    width: 0;
  }
}

@media (max-width: 968px) {
  .why-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .visual-card {
    order: -1;
  }
}
</style>
