<template>
  <section class="cta-section">
    <div class="cta-background">
      <img src="/imagen_cta.png" alt="CTA Background" class="cta-bg-image" />
    </div>
    <div class="container">
      <div class="cta-content">
        <div class="cta-text">
          <h2>¿Listo para transformar la seguridad en su empresa?</h2>
          <p>
            Nuestro equipo de expertos está preparado para ayudarle a
            implementar soluciones efectivas que protejan a su equipo y
            optimicen sus operaciones. Contacte con nosotros hoy mismo y reciba
            una asesoría personalizada.
          </p>
          <div class="cta-features">
            <div class="cta-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Asesoría personalizada gratuita</span>
            </div>
            <div class="cta-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Respuesta en menos de 24 horas</span>
            </div>
            <div class="cta-feature">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Propuesta adaptada a su industria</span>
            </div>
          </div>
        </div>
        <div class="cta-actions">
          <Button variant="primary" size="lg" to="/contacto">
            Solicitar Asesoría Gratuita
          </Button>
          <a
            href="https://wa.me/573168722357?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios%20de%20seguridad%20laboral"
            class="whatsapp-btn"
            target="_blank"
            rel="noopener"
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
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Button from "../common/Button.vue";
</script>

<style scoped>
.cta-section {
  position: relative;
  padding: 5rem 2rem;
  overflow: hidden;
  background: #6b7280;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-background {
  position: absolute;
  top: 0;
  left: 50%; /* Centrar horizontalmente */
  transform: translateX(-50%); /* Centrar horizontalmente */
  width: 100%;
  max-width: 1920px; /* Ancho máximo de la imagen */
  height: 100%;
  overflow: hidden;
}

.cta-bg-image {
  width: 100%;
  height: 100%;
  object-position: center;
  opacity: 0.9;
}

.cta-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.cta-text h2 {
  color: white;
  font-size: clamp(2rem, 4vw, 2.75rem);
  margin-bottom: 1.5rem;
}

.cta-text p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.cta-features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 0.9375rem;
  font-weight: 500;
}

.cta-feature svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.cta-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: white;
  color: #25d366;
  font-weight: 600;
  border-radius: 10px;
  transition: var(--transition-base);
  font-size: 1rem;
}

.whatsapp-btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.whatsapp-btn svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 640px) {
  .cta-section {
    padding: 3rem 1.25rem;
  }

  .cta-features {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .cta-actions {
    flex-direction: column;
    width: 100%;
  }

  .whatsapp-btn {
    width: 100%;
    justify-content: center;
  }

  .cta-background {
    background-size: cover;
    background-position: center;
    opacity: 0.5; /* Reducir opacidad en móvil para mejor legibilidad */
  }
}
</style>
