<template>
  <section class="services-preview section">
    <div class="container">
      <SectionTitle label="Nuestros Servicios" center gradient>
        Soluciones especializadas para la gestión integral de riesgos laborales
      </SectionTitle>

      <div class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-item">
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
              <router-link to="/servicios" class="service-btn">
                Conocer más
              </router-link>
            </div>
          </div>
        </div>
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
import SectionTitle from "../common/SectionTitle.vue";
import Button from "../common/Button.vue";

const services = [
  {
    id: 1,
    title: "Fortalezca la cultura organizacional en seguridad ",
    description:
      "Brindamos apoyo en la construcción de una cultura preventiva que involucra a todos los niveles de la organización, promoviendo un entorno laboral seguro y responsable.",
    image: "/images/servicios/1Cultura_Organizacional.JPG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <path d="M9 15h6"/>
      <path d="M9 11h6"/>
    </svg>`,
  },
  {
    id: 2,
    title: "2.	Transforme la seguridad laboral de su organización",
    description:
      "Integramos inteligencia artificial y análisis predictivo para anticipar riesgos, fortalecer controles y optimizar la gestión del SG-SST.",
    image: "/images/servicios/2IA_análisis_predictivo.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 1v6m0 6v6"/>
      <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"/>
      <path d="M1 12h6m6 0h6"/>
      <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"/>
    </svg>`,
  },
  {
    id: 3,
    title: "3.	Soluciones integrales en gestión de riesgos laborales",
    description:
      "Garantice la seguridad de su equipo, cumpla con la normatividad vigente y optimice sus operaciones con servicios especializados en SST.",
    image: "/images/servicios/3SGSST.WEBP",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
    </svg>`,
  },
  {
    id: 4,
    title: "4.	Optimice su seguridad eléctrica con cumplimiento normativo",
    description:
      "Diseñamos controles y medidas técnicas alineadas con RETIE 2024 (Res. 40117), Resolución 5018 de 2019 y estándares internacionales como NFPA 70E.",
    image: "/images/servicios/4Seguridad_eléctrica .PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <path d="M12 9v4"/>
      <path d="M12 17h.01"/>
    </svg>`,
  },
  {
    id: 5,
    title: "5.	Formación práctica y segura en riesgos críticos",
    description:
      "Capacitamos en riesgos críticos mediante simuladores portátiles que recrean entornos mecánicos y eléctricos sin exposición real, consolidando un entorno laboral seguro.",
    image: "/images/servicios/5Riesgo_crítico.PNG",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>`,
  },
  {
    id: 6,
    title: "6.	Gamificación estratégica para una formación de alto impacto",
    description:
      "Transformamos la capacitación tradicional en experiencias dinámicas que incrementan la retención del conocimiento y modifican conductas.",
    image: "/images/servicios/6Gamificación.JPG",
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
</script>

<style scoped>
.section {
  padding: 5rem 0;
  background: var(--color-bg-light);
}

/* Grid de servicios - Flexible */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Tarjeta de servicio */
.service-item {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.service-item:hover {
  box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
  transform: translateY(-5px);
}

/* Imagen con efecto */
.service-img {
  position: relative;
  overflow: hidden;
  height: 180px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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

/* Overlay azul que crece al hover */
.service-img::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: 0;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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

/* Overlay oscuro que crece desde abajo */
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

/* Contenido interno */
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

/* Cambio de color al hover */
.service-item:hover .service-content-inner {
  color: white;
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

/* CTA final */
.services-cta {
  text-align: center;
  padding-top: 1rem;
}

/* Responsive */
@media (max-width: 1400px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 968px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .service-img {
    height: 160px;
  }

  .service-content-inner {
    padding: 1.25rem;
  }
}

@media (max-width: 640px) {
  .section {
    padding: 3rem 0;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .service-img {
    height: 200px;
  }

  .service-content-inner h4 {
    font-size: 1.125rem;
  }

  .service-content-inner p {
    font-size: 0.875rem;
  }
}
</style>
