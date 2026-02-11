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

    <!-- Servicios -->
    <section class="section">
      <div class="container">
        <div class="services-list">
          <div
            v-for="(service, index) in services"
            :key="service.id"
            class="service-detail"
          >
            <div class="service-number">
              {{ String(index + 1).padStart(2, "0") }}
            </div>
            <div class="service-content">
              <div class="service-header">
                <div class="service-icon-large" v-html="service.icon"></div>
                <div>
                  <h2>{{ service.title }}</h2>
                  <p class="service-intro">{{ service.intro }}</p>
                </div>
              </div>
              <div class="service-features">
                <h4>¿Qué incluye este servicio?</h4>
                <ul>
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
              </div>
              <div class="service-benefits">
                <h4>Beneficios para su empresa</h4>
                <div class="benefits-grid">
                  <div
                    v-for="(benefit, idx) in service.benefits"
                    :key="idx"
                    class="benefit-item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
    </svg>`,
    features: [
      "Gestión documental completa y diseño del SG-SST (Ciclo PHVA)",
      "Cumplimiento de Estándares Mínimos (Resolución 0312 de 2019)",
      "Auditorías internas basadas en NTC ISO 45001:2018",
      "Asistencia técnica, capacitación y formación especializada",
      "Diagnóstico y analítica predictiva con IA para anticipar accidentes",
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
      "Protección integral contra riesgos mecánicos en maquinaria, equipos y herramientas.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m5.2-14.8l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m14.8 5.2l-4.2-4.2m0-6l-4.2-4.2"></path>
    </svg>`,
    features: [
      "Programa de gestión de riesgo mecánico",
      "Diagnóstico y evaluación de riesgos mecánicos",
      "Inspecciones de seguridad especializadas",
      "Diseño de procedimientos de trabajo seguro",
      "Fichas de operación segura de equipos",
      "Selección de dispositivos y sistemas de seguridad",
      "Protección de máquinas según NTP 552 y NTC 2506",
      "Capacitación en uso seguro de herramientas y equipos",
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
      "Cumplimiento del RETIE 2024 e implementación de prácticas seguras en instalaciones eléctricas.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>`,
    features: [
      "Programa de gestión de riesgo eléctrico (Resolución 40117 de 2024)",
      "Inspecciones de instalaciones, tableros y subestaciones",
      "Permisos de trabajo con riesgo eléctrico",
      "Procedimientos de trabajo con tensión y sin tensión",
      "Estudios de arco eléctrico (NFPA 70E)",
      "Selección de EPP según niveles de riesgo",
      "Señalización y demarcación de áreas eléctricas",
      "Capacitación en las 5 reglas de oro",
      "Formación con tableros eléctricos didácticos",
    ],
    benefits: [
      "Prevención de arco eléctrico",
      "Cumplimiento RETIE actualizado",
      "Personal electricista habilitado",
      "Instalaciones seguras y certificadas",
    ],
  },
  {
    id: 4,
    title: "Gestión de Tareas de Alto Riesgo (TAR)",
    intro:
      "Procedimientos seguros para trabajos de alto riesgo conforme a normativa colombiana e internacional.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>`,
    features: [
      "Diseño de programas de gestión para TAR",
      "Procedimientos para trabajo en alturas (Resolución 4272 de 2021)",
      "Gestión de espacios confinados (Resolución 0491 de 2020)",
      "Trabajos en caliente (NFPA 51B)",
      "Permisos de trabajo seguro",
      "Capacitación y formación especializada",
      "Análisis de Trabajo Seguro (ATS)",
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
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>`,
    features: [
      "Programa para trabajo seguro con energías peligrosas",
      "Procedimientos de bloqueo y etiquetado",
      "Inventarios de energías peligrosas",
      "Fichas de cero energías",
      "Selección de dispositivos de bloqueo",
      "Inspecciones de seguridad",
      "Capacitación con dispositivos didácticos",
      "Controles de ingeniería para optimización",
    ],
    benefits: [
      "Prevención de arranques inesperados",
      "Protección durante mantenimiento",
      "Cumplimiento OSHA",
      "Personal certificado en LOTO",
    ],
  },
  {
    id: 6,
    title: "Gestión en Trabajo con Calderas",
    intro:
      "Cumplimiento de la Resolución 1857 de 2024 para operación segura de calderas industriales.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="8" width="18" height="12" rx="2" ry="2"></rect>
      <path d="M12 8V4M8 4h8M7 20v-4M17 20v-4"></path>
      <circle cx="12" cy="14" r="2"></circle>
    </svg>`,
    features: [
      "Programa de gestión según Resolución 1857 de 2024",
      "Clasificación de calderas (Pirotubulares/Acuotubulares) Categorías I-IV",
      "Listas de chequeo de seguridad y condiciones de instalación",
      "Inspecciones preoperacionales",
      "Señalización y demarcación de áreas",
      "Procedimientos de trabajo seguro",
      "Programa de mantenimiento preventivo",
      "Planes de emergencia (PON)",
    ],
    benefits: [
      "Operación segura certificada",
      "Prevención de explosiones",
      "Cumplimiento legal garantizado",
      "Mantenimiento programado",
    ],
  },
  {
    id: 7,
    title: "Gamificación para Gestión de Riesgos Laborales",
    intro:
      "Metodología innovadora que convierte la capacitación en experiencias interactivas y memorables.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M20 7h-9M14 17H5M17 3v18M10.7 14.3L7 18"></path>
      <circle cx="17" cy="17" r="3"></circle>
      <circle cx="7" cy="7" r="3"></circle>
    </svg>`,
    features: [
      "Dinámicas lúdicas y participativas",
      "Juegos de seguridad personalizados",
      "Simulaciones interactivas",
      "Competencias y desafíos por equipos",
      "Sistemas de puntuación y recompensas",
      "Aplicaciones digitales de aprendizaje",
      "Evaluación de conocimientos gamificada",
      "Seguimiento de progreso en tiempo real",
    ],
    benefits: [
      "Mayor retención del conocimiento",
      "Motivación y compromiso del personal",
      "Cultura de seguridad fortalecida",
      "Resultados medibles y tangibles",
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

/* Services List */
.services-list {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.service-detail {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  position: relative;
}

.service-number {
  font-size: 5rem;
  font-weight: 800;
  font-family: var(--font-heading);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  opacity: 0.15;
  user-select: none;
}

.service-content {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
  transition: var(--transition-base);
}

.service-content:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-5px);
}

.service-header {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
}

.service-icon-large {
  width: 80px;
  height: 80px;
  background: var(--gradient-primary);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: white;
}

.service-icon-large svg {
  width: 40px;
  height: 40px;
}

.service-header h2 {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
  color: var(--color-text-dark);
}

.service-intro {
  font-size: 1.0625rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.service-features {
  margin-bottom: 2rem;
}

.service-features h4,
.service-benefits h4 {
  font-size: 1.25rem;
  color: var(--color-text-dark);
  margin-bottom: 1.25rem;
}

.service-features ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 1rem;
  color: var(--color-text-light);
  line-height: 1.6;
}

.service-features li svg {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--color-bg-light);
  border-radius: 10px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: var(--color-text-dark);
  transition: var(--transition-fast);
}

.benefit-item:hover {
  background: rgba(32, 77, 50, 0.08);
}

.benefit-item svg {
  width: 20px;
  height: 20px;
  color: var(--color-primary);
  flex-shrink: 0;
}

@media (max-width: 968px) {
  .service-detail {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .service-number {
    font-size: 3rem;
    text-align: center;
  }

  .service-content {
    padding: 2rem;
  }

  .service-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .benefits-grid {
    grid-template-columns: 1fr;
  }
}
</style>
