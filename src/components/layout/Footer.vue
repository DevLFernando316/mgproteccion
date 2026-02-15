<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <!-- Columna 1: Empresa -->
          <div class="footer-column">
            <div class="footer-logo">
              <img
                src="/Logo_MG.png"
                alt="MG Protección Laboral"
                class="footer-logo-image"
              />
            </div>
            <p class="footer-description">
              Soluciones integrales en gestión de riesgos laborales. Proteja a
              su equipo y garantice el cumplimiento normativo con nuestros
              servicios especializados.
            </p>
          </div>

          <!-- Columna 2: Enlaces -->
          <div class="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/nosotros">Quiénes Somos</router-link></li>
              <li><router-link to="/servicios">Servicios</router-link></li>
              <li>
                <router-link to="/por-que-elegirnos"
                  >Por Qué Elegirnos</router-link
                >
              </li>
              <li><router-link to="/contacto">Contacto</router-link></li>
            </ul>
          </div>

          <!-- Columna 3: Servicios -->
          <div class="footer-col">
            <h4>Servicios Principales</h4>
            <ul>
              <li>
                <router-link to="/servicios"
                  >Sistemas de Gestión SST</router-link
                >
              </li>
              <li>
                <router-link to="/servicios"
                  >Gestión de Riesgo Mecánico</router-link
                >
              </li>
              <li>
                <router-link to="/servicios"
                  >Gestión de Riesgo Eléctrico</router-link
                >
              </li>
              <li>
                <router-link to="/servicios"
                  >Control de Energías Peligrosas</router-link
                >
              </li>
              <li>
                <router-link to="/servicios"
                  >Tareas de Alto Riesgo (TAR)</router-link
                >
              </li>
              <li>
                <router-link to="/servicios"
                  >Gamificación para Gestión de Riesgos Laborales</router-link
                >
              </li>
            </ul>
          </div>

          <!-- Columna 4: Contacto -->
          <div class="footer-col">
            <h4>Contacto</h4>
            <ul class="footer-contact">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:mgproteccionlaboralsas@gmail.com"
                  >mgproteccionlaboralsas@gmail.com</a
                >
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                  />
                </svg>
                <a href="tel:+573168722357">+57 316 872 2357</a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Bucaramanga, Colombia</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container">
        <div class="footer-bottom-content">
          <p>
            &copy; {{ currentYear }} MG Protección Laboral S.A.S. Todos los
            derechos reservados.
          </p>
          <div class="footer-social">
            <a
              href="https://wa.me/573168722357"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- WhatsApp Flotante -->
    <a
      href="https://wa.me/573168722357"
      class="whatsapp-float"
      target="_blank"
      rel="noopener"
      aria-label="Contactar por WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        />
      </svg>
    </a>
  </footer>
</template>

<script setup>
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: var(--gradient-primary);
  color: white;
  position: relative;
}

.footer-content {
  padding: 4rem 0 2rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

/* Logo Footer */
.footer-logo {
  margin-bottom: 1.25rem;
}

.footer-logo-image {
  height: 70px;
  width: 105px;
  filter: brightness(0) invert(1);
  opacity: 0.95;
  transition: all 0.3s ease;
}

.footer-logo-image:hover {
  opacity: 1;
  transform: scale(1.02);
}

.footer-description {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

/* Columnas */
.footer-col h4 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  color: white;
}

.footer-col ul {
  list-style: none;
}

.footer-col ul li {
  margin-bottom: 0.75rem;
}

.footer-col ul li a,
.footer-col ul li span {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.9375rem;
  transition: var(--transition-fast);
  display: inline-block;
}

.footer-col ul li a:hover {
  color: white;
  transform: translateX(5px);
}

/* Contacto */
.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.footer-contact svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-contact a {
  word-break: break-word;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.5rem 0;
  margin-top: 2rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}

.footer-social {
  display: flex;
  gap: 1rem;
}

.footer-social a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: var(--transition-base);
}

.footer-social a:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer-social svg {
  width: 20px;
  height: 20px;
}

/* WhatsApp Flotante */
.whatsapp-float {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  z-index: 999;
  transition: var(--transition-base);
  animation: pulse 2s infinite;
}

.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: var(--shadow-xl);
}

.whatsapp-float svg {
  width: 32px;
  height: 32px;
  color: white;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
  }

  .whatsapp-float {
    width: 55px;
    height: 55px;
    bottom: 20px;
    right: 20px;
  }

  .whatsapp-float svg {
    width: 28px;
    height: 28px;
  }

  .footer-logo-image {
    height: 60px;
    width: 90px;
  }
}

@media (max-width: 480px) {
  .footer-logo-image {
    height: 50px;
    width: 80px;
  }
}
</style>
