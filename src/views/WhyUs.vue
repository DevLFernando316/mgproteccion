<template>
  <div class="why-us-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="fade-in-up">¿Por Qué Elegirnos?</h1>
          <p class="fade-in-up">
            Somos su aliado estratégico en gestión de riesgos laborales,
            comprometidos con la seguridad, el cumplimiento y el crecimiento de
            su empresa
          </p>
        </div>
      </div>
    </section>

    <!-- Diferenciadores -->
    <section class="section">
      <div class="container">
        <SectionTitle label="Nuestros Diferenciadores" center gradient>
          Lo que nos hace únicos en el mercado
        </SectionTitle>

        <div class="differentiators-grid">
          <div v-for="diff in differentiators" :key="diff.id" class="diff-card">
            <div class="diff-icon" v-html="diff.icon"></div>
            <h3>{{ diff.title }}</h3>
            <p>{{ diff.description }}</p>
            <ul v-if="diff.points">
              <li v-for="(point, idx) in diff.points" :key="idx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path
                    d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                  ></path>
                </svg>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Metodología -->
    <section class="section bg-light">
      <div class="container">
        <SectionTitle label="Nuestra Metodología" center>
          Proceso integral que garantiza resultados
        </SectionTitle>

        <div class="methodology-steps">
          <div
            v-for="(step, index) in methodology"
            :key="step.id"
            class="method-step"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
            <div v-if="index < methodology.length - 1" class="step-connector">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnología -->
    <section class="section">
      <div class="container">
        <div class="tech-content">
          <div class="tech-text">
            <SectionTitle label="Innovación Tecnológica" gradient>
              Inteligencia Artificial al servicio de la seguridad
            </SectionTitle>
            <p>
              Implementamos tecnología de punta para optimizar la gestión de
              riesgos laborales en su organización. Nuestra integración de
              Inteligencia Artificial permite:
            </p>
            <div class="tech-features">
              <div
                v-for="feature in techFeatures"
                :key="feature.id"
                class="tech-feature"
              >
                <div class="tech-feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tech-visual">
            <div class="tech-box">
              <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <!-- Brain/AI representation -->
                <g class="ai-brain">
                  <!-- Head circle -->
                  <circle
                    cx="200"
                    cy="200"
                    r="120"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    opacity="0.3"
                  />

                  <!-- Brain structure -->
                  <path
                    d="M 140 180 Q 160 160, 180 180 Q 200 200, 220 180 Q 240 160, 260 180"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  />
                  <path
                    d="M 140 200 Q 160 220, 180 200 Q 200 180, 220 200 Q 240 220, 260 200"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  />
                  <path
                    d="M 140 220 Q 160 200, 180 220 Q 200 240, 220 220 Q 240 200, 260 220"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  />

                  <!-- Neural connections -->
                  <g opacity="0.6">
                    <circle cx="150" cy="180" r="6" fill="currentColor" />
                    <circle cx="180" cy="190" r="6" fill="currentColor" />
                    <circle cx="220" cy="190" r="6" fill="currentColor" />
                    <circle cx="250" cy="180" r="6" fill="currentColor" />
                    <circle cx="150" cy="220" r="6" fill="currentColor" />
                    <circle cx="180" cy="210" r="6" fill="currentColor" />
                    <circle cx="220" cy="210" r="6" fill="currentColor" />
                    <circle cx="250" cy="220" r="6" fill="currentColor" />

                    <line
                      x1="150"
                      y1="180"
                      x2="180"
                      y2="190"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <line
                      x1="180"
                      y1="190"
                      x2="220"
                      y2="190"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <line
                      x1="220"
                      y1="190"
                      x2="250"
                      y2="180"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <line
                      x1="150"
                      y1="220"
                      x2="180"
                      y2="210"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <line
                      x1="180"
                      y1="210"
                      x2="220"
                      y2="210"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                    <line
                      x1="220"
                      y1="210"
                      x2="250"
                      y2="220"
                      stroke="currentColor"
                      stroke-width="1.5"
                    />
                  </g>

                  <!-- Data nodes -->
                  <g class="data-nodes" opacity="0.7">
                    <circle
                      cx="100"
                      cy="200"
                      r="15"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="100" cy="200" r="8" fill="currentColor" />
                    <line
                      x1="115"
                      y1="200"
                      x2="140"
                      y2="200"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-dasharray="4"
                    />

                    <circle
                      cx="300"
                      cy="200"
                      r="15"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="300" cy="200" r="8" fill="currentColor" />
                    <line
                      x1="260"
                      y1="200"
                      x2="285"
                      y2="200"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-dasharray="4"
                    />

                    <circle
                      cx="200"
                      cy="100"
                      r="15"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="200" cy="100" r="8" fill="currentColor" />
                    <line
                      x1="200"
                      y1="115"
                      x2="200"
                      y2="140"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-dasharray="4"
                    />

                    <circle
                      cx="200"
                      cy="300"
                      r="15"
                      fill="currentColor"
                      opacity="0.2"
                    />
                    <circle cx="200" cy="300" r="8" fill="currentColor" />
                    <line
                      x1="200"
                      y1="260"
                      x2="200"
                      y2="285"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-dasharray="4"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Garantías -->
    <section class="section bg-light">
      <div class="container">
        <SectionTitle label="Nuestras Garantías" center gradient>
          Compromisos que respaldamos con resultados
        </SectionTitle>

        <div class="guarantees-grid">
          <div
            v-for="guarantee in guarantees"
            :key="guarantee.id"
            class="guarantee-card"
          >
            <div class="guarantee-icon" v-html="guarantee.icon"></div>
            <h3>{{ guarantee.title }}</h3>
            <p>{{ guarantee.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sectores -->
    <section class="section">
      <div class="container">
        <SectionTitle label="Sectores que Atendemos" center>
          Experiencia multisectorial
        </SectionTitle>

        <div class="sectors-grid">
          <div v-for="sector in sectors" :key="sector.id" class="sector-item">
            <div class="sector-icon" v-html="sector.icon"></div>
            <span>{{ sector.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>

<script setup>
import SectionTitle from "../components/common/SectionTitle.vue";
import CTASection from "../components/home/CTASection.vue";

const differentiators = [
  {
    id: 1,
    title: "Equipo Altamente Calificado",
    description:
      "Profesionales con certificaciones vigentes y experiencia comprobada en múltiples sectores industriales.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>`,
    points: [
      "Ingenieros especializados en SST",
      "Certificaciones nacionales e internacionales",
      "Actualización constante en normativa",
    ],
  },
  {
    id: 2,
    title: "Enfoque Personalizado",
    description:
      "Cada cliente es único. Diseñamos soluciones adaptadas a sus necesidades específicas, no plantillas genéricas.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"/>
  <path d="m21 21-4.35-4.35"/>
  <path d="M11 8v6"/>
  <path d="M8 11h6"/>
</svg>`,
    points: [
      "Diagnóstico inicial sin costo",
      "Planes ajustados a su presupuesto",
      "Acompañamiento permanente",
    ],
  },
  // {
  //   id: 3,
  //   title: "Tecnología de Vanguardia",
  //   description:
  //     "Incorporamos IA, simuladores y herramientas digitales para maximizar el impacto de nuestros servicios.",
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  //     <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
  //     <line x1="8" y1="21" x2="16" y2="21"></line>
  //     <line x1="12" y1="17" x2="12" y2="21"></line>
  //   </svg>`,
  //   points: [
  //     "Analítica predictiva con IA",
  //     "Simuladores portátiles didácticos",
  //     "Plataformas de seguimiento digital",
  //   ],
  // },
  {
    id: 3,
    title: "Resultados Medibles",
    description:
      "No solo cumplimos normas, generamos valor real: reducción de incidentes, optimización de costos y mejora continua.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <line x1="12" y1="20" x2="12" y2="10"></line>
      <line x1="18" y1="20" x2="18" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="16"></line>
    </svg>`,
    points: [
      "Indicadores de gestión claros",
      "Reportes periódicos de avance",
      "ROI demostrable",
    ],
  },
];

const methodology = [
  {
    id: 1,
    title: "Diagnóstico Integral",
    description:
      "Evaluación completa de su situación actual en gestión de riesgos, identificando brechas y oportunidades de mejora.",
  },
  {
    id: 2,
    title: "Diseño Personalizado",
    description:
      "Desarrollo de un plan de acción adaptado a sus necesidades, presupuesto y objetivos estratégicos.",
  },
  {
    id: 3,
    title: "Implementación Gradual",
    description:
      "Ejecución por fases del plan diseñado, con acompañamiento técnico permanente y ajustes según avances.",
  },
  {
    id: 4,
    title: "Capacitación y Formación",
    description:
      "Transferencia de conocimiento a su equipo mediante capacitaciones prácticas y dinámicas participativas.",
  },
  {
    id: 5,
    title: "Seguimiento y Mejora",
    description:
      "Monitoreo continuo de resultados, auditorías periódicas y recomendaciones para la mejora continua.",
  },
];

const techFeatures = [
  {
    id: 1,
    title: "Diagnóstico Predictivo",
    description:
      "Anticipación de accidentes, incidentes y hallazgos mediante análisis de datos históricos y patrones de riesgo.",
  },
  {
    id: 2,
    title: "Investigación Asistida",
    description:
      "Investigaciones de accidentes más rápidas, completas y precisas con soporte de IA.",
  },
  {
    id: 3,
    title: "Simuladores Didácticos",
    description:
      "Entrenamiento práctico y seguro con prototipos a escala que replican situaciones reales de riesgo.",
  },
  {
    id: 4,
    title: "Gamificación",
    description:
      "Aprendizaje interactivo que aumenta la retención del conocimiento y el compromiso del personal.",
  },
];

const guarantees = [
  {
    id: 1,
    title: "Cumplimiento Normativo",
    description:
      "Garantizamos que su empresa cumplirá con toda la normativa vigente en SST.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>`,
  },
  {
    id: 2,
    title: "Soporte Permanente",
    description:
      "Asistencia técnica continua durante y después de la implementación de nuestros servicios.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Za9 9 0 0 1 18 0m0 5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"/>
</svg>`,
  },
  {
    id: 3,
    title: "Confidencialidad Total",
    description:
      "Protección absoluta de la información sensible de su organización.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>`,
  },
  {
    id: 4,
    title: "Satisfacción Garantizada",
    description:
      "Trabajamos hasta que esté completamente satisfecho con los resultados obtenidos.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8" r="6"/>
  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  <path d="m9 12 2 2 4-4"/>
</svg>`,
  },
];

const sectors = [
  {
    id: 1,
    name: "Manufactura",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
  <path d="M17 18h1"/>
  <path d="M12 18h1"/>
  <path d="M7 18h1"/>
</svg>`,
  },
  {
    id: 2,
    name: "Construcción",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    </svg>`,
  },
  {
    id: 3,
    name: "Minería",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/>
  <path d="M10 10V5a2 2 0 1 1 4 0v5"/>
  <path d="M4 15v-3a6 6 0 0 1 6-6h0"/>
  <path d="M14 6h0a6 6 0 0 1 6 6v3"/>
</svg>`,
  },
  {
    id: 4,
    name: "Petróleo y Gas",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
</svg>`,
  },
  // {
  //   id: 5,
  //   name: "Alimentos",
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  //     <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
  //   </svg>`,
  // },
  {
    id: 5,
    name: "Logística",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="1" y="3" width="15" height="13"></rect>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
      <circle cx="5.5" cy="18.5" r="2.5"></circle>
      <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>`,
  },
  {
    id: 6,
    name: "Energía",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>`,
  },
  // {
  //   id: 8,
  //   name: "Servicios",
  //   icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
  //     <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
  //     <polyline points="9 22 9 12 15 12 15 22"></polyline>
  //   </svg>`,
  // },
];
</script>

<style scoped>
.page-hero {
  padding: 8rem 1.5rem 5rem;
  background: var(--gradient-primary);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
}

.page-hero h1 {
  color: white;
  margin-bottom: 1rem;
}

.page-hero p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
}

/* Differentiators */
.differentiators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.diff-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  transition: var(--transition-base);
}

.diff-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.diff-icon {
  width: 72px;
  height: 72px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
}

.diff-icon svg {
  width: 36px;
  height: 36px;
}

.diff-card h3 {
  font-size: 1.375rem;
  margin-bottom: 1rem;
  color: var(--color-text-dark);
}

.diff-card p {
  margin-bottom: 1.25rem;
}

.diff-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.diff-card li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.9375rem;
  color: var(--color-text-light);
}

.diff-card li svg {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Methodology */
.methodology-steps {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.method-step {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  padding: 2rem 0;
}

.step-number {
  width: 72px;
  height: 72px;
  background: var(--gradient-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 800;
  font-family: var(--font-heading);
  color: white;
  flex-shrink: 0;
}

.step-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: var(--color-text-dark);
}

.step-content p {
  font-size: 1.0625rem;
  line-height: 1.7;
  color: var(--color-text-light);
}

.step-connector {
  position: absolute;
  left: 36px;
  bottom: -2rem;
  color: var(--color-primary);
  opacity: 0.3;
}

.step-connector svg {
  width: 32px;
  height: 32px;
}

/* Technology */
.tech-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.tech-features {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
}

.tech-feature {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.tech-feature-icon {
  width: 48px;
  height: 48px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.tech-feature-icon svg {
  width: 24px;
  height: 24px;
}

.tech-feature h4 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark);
}

.tech-feature p {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-light);
}

.tech-box {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--color-border);
}

.tech-box svg {
  width: 100%;
  height: auto;
  color: var(--color-primary);
}

.ai-brain .data-nodes circle {
  animation: pulse 2s ease-in-out infinite;
}

.ai-brain .data-nodes circle:nth-child(3n) {
  animation-delay: 0.3s;
}

.ai-brain .data-nodes circle:nth-child(3n + 1) {
  animation-delay: 0.6s;
}

/* Guarantees */
.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

.guarantee-card {
  text-align: center;
  padding: 2.5rem;
  background: white;
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-border);
  transition: var(--transition-base);
}

.guarantee-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.guarantee-icon {
  width: 64px;
  height: 64px;
  background: var(--gradient-primary);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: white;
}

.guarantee-icon svg {
  width: 32px;
  height: 32px;
}

.guarantee-card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--color-text-dark);
}

.guarantee-card p {
  font-size: 0.9375rem;
  color: var(--color-text-light);
}

/* Sectors */
.sectors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.5rem;
}

.sector-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1.5rem;
  background: white;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: var(--transition-base);
  text-align: center;
}

.sector-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: var(--color-primary);
}

.sector-icon {
  width: 56px;
  height: 56px;
  background: rgba(32, 77, 50, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}

.sector-icon svg {
  width: 28px;
  height: 28px;
}

.sector-item span {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-dark);
}

@media (max-width: 968px) {
  .tech-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .tech-box {
    order: -1;
  }

  .method-step {
    gap: 1.5rem;
  }

  .step-number {
    width: 56px;
    height: 56px;
    font-size: 1.5rem;
  }

  .step-connector {
    left: 28px;
  }
}
</style>
