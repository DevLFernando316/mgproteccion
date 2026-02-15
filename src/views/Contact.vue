<template>
  <div class="contact-page">
    <!-- Hero -->
    <section class="page-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="fade-in-up">Contáctenos</h1>
          <p class="fade-in-up">
            Estamos listos para ayudarle a transformar la seguridad en su
            empresa. Escríbanos y reciba una asesoría personalizada sin costo.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <h2>Solicite una Asesoría Gratuita</h2>
            <p class="form-intro">
              Complete el formulario y nos pondremos en contacto con usted en
              menos de 24 horas.
            </p>

            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nombre completo *</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    required
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                <div class="form-group">
                  <label for="company">Empresa *</label>
                  <input
                    type="text"
                    id="company"
                    v-model="form.company"
                    required
                    placeholder="Nombre de su empresa"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Correo electrónico *</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    required
                    placeholder="ejemplo@empresa.com"
                  />
                </div>
                <div class="form-group">
                  <label for="phone">Teléfono *</label>
                  <input
                    type="tel"
                    id="phone"
                    v-model="form.phone"
                    required
                    placeholder="300 123 4567"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="service">Servicio de interés</label>
                <select id="service" v-model="form.service">
                  <option value="">Seleccione un servicio</option>
                  <option value="sgsst">Sistemas de Gestión SST</option>
                  <option value="mecanico">Gestión de Riesgo Mecánico</option>
                  <option value="electrico">Gestión de Riesgo Eléctrico</option>
                  <option value="tar">Tareas de Alto Riesgo</option>
                  <option value="energias">
                    Control de Energías Peligrosas
                  </option>
                  <option value="calderas">Trabajo en Calderas</option>
                  <option value="gamificacion">Gamificación</option>
                  <option value="otros">Otros / Asesoría General</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Mensaje</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Cuéntenos sobre su necesidad o proyecto..."
                ></textarea>
              </div>

              <div class="form-actions">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  :disabled="isSubmitting"
                  fullWidth
                >
                  {{ isSubmitting ? "Enviando..." : "Enviar Solicitud" }}
                </Button>
              </div>

              <p class="form-note">
                Al enviar este formulario acepta nuestra política de privacidad
                y tratamiento de datos.
              </p>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card">
              <h3>Información de Contacto</h3>
              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">
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
                  </div>
                  <div>
                    <h4>Teléfono</h4>
                    <a href="tel:+573168722357">+57 316 872 2357</a>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
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
                  </div>
                  <div>
                    <h4>Correo Electrónico</h4>
                    <a href="mailto:mgproteccionlaboralsas@gmail.com"
                      >mgproteccionlaboralsas@gmail.com</a
                    >
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
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
                  </div>
                  <div>
                    <h4>Ubicación</h4>
                    <p>Bucaramanga, Santander, Colombia</p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4>Horario de Atención</h4>
                    <p>
                      Lunes a Viernes: 8:00 AM - 6:00 PM<br />Sábados: 8:00 AM -
                      12:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="whatsapp-card">
              <div class="whatsapp-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </div>
              <h3>¿Prefiere WhatsApp?</h3>
              <p>Escríbanos directamente y reciba atención inmediata</p>
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
                Abrir WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "../components/common/Button.vue";

const form = ref({
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  // Simulación de envío (aquí iría la integración real)
  await new Promise((resolve) => setTimeout(resolve, 2000));

  alert("¡Gracias por contactarnos! Nos comunicaremos con usted pronto.");

  // Reset form
  form.value = {
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  };

  isSubmitting.value = false;
};
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

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  align-items: start;
}

/* Form */
.contact-form-wrapper h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--color-text-dark);
}

.form-intro {
  font-size: 1.0625rem;
  color: var(--color-text-light);
  margin-bottom: 2.5rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-text-dark);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.875rem 1.25rem;
  font-size: 1rem;
  font-family: var(--font-body);
  border: 2px solid var(--color-border);
  border-radius: 10px;
  transition: var(--transition-fast);
  background: white;
  color: var(--color-text-dark);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px rgba(32, 77, 50, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.form-note {
  font-size: 0.875rem;
  color: var(--color-text-light);
  text-align: center;
  margin-top: 0.5rem;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card {
  background: white;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--color-border);
}

.info-card h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--color-text-dark);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.info-icon {
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

.info-icon svg {
  width: 24px;
  height: 24px;
}

.info-item h4 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-text-dark);
}

.info-item a {
  color: var(--color-primary);
  font-weight: 500;
  transition: var(--transition-fast);
}

.info-item a:hover {
  text-decoration: underline;
}

.info-item p {
  font-size: 0.9375rem;
  color: var(--color-text-light);
  line-height: 1.6;
  margin: 0;
}

/* WhatsApp Card */
.whatsapp-card {
  background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  color: white;
  box-shadow: var(--shadow-md);
}

.whatsapp-icon {
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.whatsapp-icon svg {
  width: 40px;
  height: 40px;
  color: white;
}

.whatsapp-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: white;
}

.whatsapp-card p {
  font-size: 1rem;
  margin-bottom: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.whatsapp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  color: #25d366;
  font-weight: 600;
  border-radius: 10px;
  transition: var(--transition-base);
  font-size: 1rem;
}

.whatsapp-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.whatsapp-btn svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>
