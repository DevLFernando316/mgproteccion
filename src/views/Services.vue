<template>
  <div class="services-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="fade-in-up">Nuestros Servicios</h1>
          <p class="fade-in-up">
            Soluciones integrales y especializadas en gestión de riesgos
            laborales para proteger a su equipo y cumplir con la normativa
            vigente
          </p>
        </div>
      </div>
    </section>

    <!-- Servicios Grid -->
    <section class="section">
      <div class="container">
        <div class="services-grid">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="service-card-compact"
            :id="`servicio-${service.id}`"
          >
            <div class="service-number">
              {{ String(index + 1).padStart(2, "0") }}
            </div>

            <div class="service-main">
              <div class="service-header">
                <div class="service-icon-badge" v-html="service.icon"></div>
                <h2>{{ service.title }}</h2>
              </div>

              <p class="service-intro">{{ service.intro }}</p>

              <div class="service-features-section">
                <h4>¿Qué incluye este servicio?</h4>

                <!-- Lista de features primero -->
                <ul class="service-features">
                  <li v-for="(feature, idx) in service.features" :key="idx">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {{ feature }}
                  </li>
                </ul>

                <!-- Imagen al final de los features -->
                <div class="service-image-box">
                  <img :src="service.image" :alt="service.title" />
                </div>
              </div>

              <div v-if="service.benefits" class="service-benefits">
                <h4>Beneficios para su empresa</h4>
                <div class="benefits-grid">
                  <div
                    v-for="(benefit, idx) in service.benefits"
                    :key="idx"
                    class="benefit-card"
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
                    <span>{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <CTASection />
  </div>
</template>

<script setup>
import CTASection from "../components/home/CTASection.vue";

const services = [
  {
    id: 1,
    title: "Sistemas de Gestión de Seguridad y Salud en el Trabajo",
    intro:
      "Diseño e implementación completa de SG-SST conforme al Decreto 1072 de 2015 y Resolución 0312 de 2019.",
    image: "/images/servicios2/SGSST.jpeg",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 15h6"/>
      <path d="M9 11h6"/>
    </svg>`,
    features: [
      "Gestión documental y diseño del SG-SST (Ciclo PHVA)",
      "Cumplimiento de Estándares Mínimos (Resolución 0312 de 2019)",
      "Auditorías internas basadas en NTC ISO 45001:2018 y Decreto 1072 de 2015",
      "Asistencia técnica, capacitación y formación especializada",
      "Diagnóstico y análisis predictivo con IA",
      "Investigación de accidentes asistida por IA",
    ],
    benefits: [
      "Cumplimiento normativo garantizado",
      "Reducción de sanciones y multas",
      "Mejora en cultura de seguridad",
      "Optimización de procesos",
    ],
  },
  {
    id: 2,
    title: "Gestión de Riesgo Mecánico",
    intro:
      "Identificación, evaluación y valoración de peligros mecánicos conforme a estándares nacionales e internacionales.",
    image: "/images/servicios2/R_Mecanico.JPG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6m0 6v6"/>
      <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/>
      <path d="M1 12h6m6 0h6"/>
      <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
    </svg>`,
    features: [
      "Diseño e implementación de programa de gestión de riesgo mecánico",
      "Diagnóstico y evaluación de riesgo mecánico",
      "Inspecciones de seguridad especializadas",
      "Estandarización y Procedimientos Seguros (PTS, FOS, AROS, ATS)",
      "Protección de máquinas según NTP 552 y NTC 2506",
      "Gestión del Mantenimiento Preventivo",
      "Formación con simuladores portátiles",
    ],
    benefits: [
      "Reducción de accidentes mecánicos",
      "Mayor vida útil de equipos",
      "Personal capacitado",
      "Cumplimiento ISO 12100:2010",
    ],
  },
  {
    id: 3,
    title: "Gestión de Riesgo Eléctrico",
    intro:
      "Cumplimiento de la Resolución 40117 de 2024 e implementación de prácticas seguras en instalaciones eléctricas.",
    image: "/images/servicios2/R_electrico.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>`,
    features: [
      "Diseño e implementación de programa de gestión de riesgo eléctrico",
      "Diagnóstico y Evaluación del Riesgo Eléctrico",
      "Inspecciones técnicas según RETIE 2024 y NTC 2050",
      "Estudios de arco eléctrico según NFPA 70E",
      "Gestión del Mantenimiento Preventivo",
      "Formación con simulador portátil eléctrico",
    ],
    benefits: [
      "Prevención de arco eléctrico",
      "Cumplimiento RETIE actualizado",
      "Personal electricista habilitado",
      "Instalaciones seguras",
    ],
  },
  {
    id: 4,
    title: "Gestión de Tareas de Alto Riesgo (TAR)",
    intro:
      "Procedimientos seguros para trabajos de alto riesgo conforme a normativa colombiana e internacional.",
    image: "/images/servicios2/Tareas_Alto_Riesgo.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <path d="M12 9v4"/>
      <path d="M12 17h.01"/>
    </svg>`,
    features: [
      "Diseño e implementación de programa de gestión para TAR",
      "Trabajo seguro en alturas (Resolución 4272 de 2021)",
      "Espacios confinados (Resolución 0491 de 2020)",
      "Trabajos en caliente (NFPA 51B)",
      "Izaje de cargas (ASME B30)",
      "Planes de rescate y emergencias",
    ],
    benefits: [
      "Cero accidentes en TAR",
      "Cumplimiento normativo",
      "Equipos entrenados",
      "Reducción de incidentes graves",
    ],
  },
  {
    id: 5,
    title: "Control de Energías Peligrosas",
    intro:
      "Implementación de procedimientos Lockout/Tagout según OSHA 29 CFR 1910.147.",
    image: "/images/servicios2/Energiaspeligrosas.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`,
    features: [
      "Programa LOTO según OSHA 29 CFR 1910.147",
      "Procedimientos de bloqueo y etiquetado",
      "Inventarios de energías peligrosas",
      "Selección de dispositivos de bloqueo",
      "Formación técnica con simuladores",
    ],
    benefits: [
      "Prevención de arranques inesperados",
      "Protección durante mantenimiento",
      "Cumplimiento OSHA",
      "Personal certificado",
    ],
  },
  {
    id: 6,
    title: "Gestión en Trabajo con Calderas",
    intro:
      "Cumplimiento de la Resolución 1857 de 2024 para operación segura de calderas industriales.",
    image: "/images/servicios2/Calderas1.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="8" width="16" height="12" rx="2"/>
      <circle cx="12" cy="14" r="2"/>
      <path d="M8 8V6a4 4 0 0 1 8 0v2"/>
      <path d="M7 20v2"/>
      <path d="M17 20v2"/>
    </svg>`,
    features: [
      "Programa según Resolución 1857 de 2024",
      "Diagnóstico y evaluación de riesgos",
      "Clasificación técnica de calderas",
      "Procedimientos de operación segura",
      "Gestión de mantenimiento preventivo",
    ],
    benefits: [
      "Operación segura certificada",
      "Prevención de explosiones",
      "Cumplimiento legal",
      "Mantenimiento programado",
    ],
  },
  {
    id: 7,
    title: "Gamificación para Gestión de Riesgos Laborales",
    intro:
      "Metodología basada en experiencias dinámicas que incrementan la retención del conocimiento.",
    image: "/images/servicios2/Gamificación.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="17" cy="17" r="3"/>
      <circle cx="7" cy="7" r="3"/>
      <path d="M14 17h-4M7 10l3 7"/>
    </svg>`,
    features: [
      "Juegos de seguridad personalizados",
      "Simulaciones interactivas",
      "Competencias por equipos",
      "Aplicaciones digitales de aprendizaje",
    ],
    benefits: [
      "Mayor retención del conocimiento",
      "Motivación del personal",
      "Cultura de seguridad fortalecida",
      "Resultados medibles",
    ],
  },
];
</script>

<style scoped>
.page-hero {
  padding: 8rem 1.5rem 5rem;
  background: var(--gradient-primary);
  text-align: center;
  position: relative;
  overflow: hidden;
  margin-top: 65px;
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

/* Services Grid - 2 por línea */
.section {
  padding: 5rem 0;
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr; /* Cambiado de repeat(2, 1fr) */
  gap: 3rem;
}

/* Service Card */
.service-card-compact {
  display: flex;
  gap: 0.75rem;
}

.service-number {
  font-size: 2.5rem;
  font-weight: 800;
  font-family: var(--font-heading);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  opacity: 0.15;
  flex-shrink: 0;
  user-select: none;
  width: 60px;
  text-align: center;
}

.service-main {
  flex: 1;
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border);
  transition: all 0.4s ease;
}

.service-card-compact:hover .service-main {
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

/* Header */
.service-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.service-icon-badge {
  width: 52px;
  height: 52px;
  background: var(--gradient-primary);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.service-icon-badge svg {
  width: 26px;
  height: 26px;
}

.service-header h2 {
  font-size: 1.375rem;
  line-height: 1.3;
  color: var(--color-text-dark);
  margin: 0;
}

.service-intro {
  font-size: 0.9375rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin-bottom: 1.75rem;
}

/* Features section */
.service-features-section h4 {
  font-size: 1.0625rem;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

/* Imagen debajo del título */
.service-image-box {
  width: 100%;
  max-height: 250px;
  min-height: 180px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--color-border);
  background: #f5f5f5;
  margin-bottom: 1.25rem;
}

.service-image-box img {
  width: 100%;
  height: auto;
  max-height: 250px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
}

.service-card-compact:hover .service-image-box img {
  transform: scale(1.08);
}

/* Lista de features */
.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  font-size: 0.875rem;
  color: var(--color-text-light);
  line-height: 1.5;
}

.service-features li svg {
  width: 18px;
  height: 18px;
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

/* Benefits */
.service-benefits h4 {
  font-size: 1.0625rem;
  color: var(--color-text-dark);
  margin-bottom: 1rem;
  font-weight: 700;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.benefit-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  background: var(--color-bg-light);
  border-radius: 10px;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--color-text-dark);
  transition: all 0.3s ease;
}

.benefit-card:hover {
  background: rgba(32, 77, 50, 0.1);
}

.benefit-card svg {
  width: 16px;
  height: 16px;
  color: var(--color-primary);
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 1200px) {
  .services-grid {
    gap: 2.5rem;
  }
  .service-image-box {
    height: 180px;
  }
}

@media (max-width: 968px) {
  .section {
    padding: 3rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .service-number {
    font-size: 3.5rem;
  }

  .service-main {
    padding: 2rem;
  }

  .service-image-box {
    height: 200px;
  }
}

@media (max-width: 640px) {
  .page-hero {
    padding: 6rem 1.25rem 4rem;
  }

  .service-card-compact {
    flex-direction: column;
  }

  .service-number {
    text-align: center;
    font-size: 3rem;
  }

  .service-main {
    padding: 1.75rem;
  }

  .service-header h2 {
    font-size: 1.25rem;
  }

  .service-image-box {
    height: 180px;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
