<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <!-- Logo -->
        <!-- Logo -->
        <router-link to="/" class="logo">
          <img
            src="/Logo_MG.png"
            alt="MG Protección Laboral"
            class="logo-image"
          />
        </router-link>

        <!-- Menu Desktop -->
        <ul class="nav-menu" :class="{ 'nav-menu-active': mobileMenuOpen }">
          <li>
            <router-link to="/" @click="closeMobileMenu">Inicio</router-link>
          </li>
          <li>
            <router-link to="/nosotros" @click="closeMobileMenu"
              >Quiénes Somos</router-link
            >
          </li>
          <li>
            <router-link to="/servicios" @click="closeMobileMenu"
              >Servicios</router-link
            >
          </li>
          <li>
            <router-link to="/blog" @click="closeMobileMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" /></svg
              >Blog</router-link
            >
          </li>
          <li>
            <router-link to="/por-que-elegirnos" @click="closeMobileMenu"
              >Por Qué Elegirnos</router-link
            >
          </li>
          <li class="nav-cta-wrapper">
            <router-link to="/contacto" @click="closeMobileMenu" class="nav-cta"
              >Contacto</router-link
            >
          </li>
        </ul>

        <!-- Hamburger -->
        <button
          class="hamburger"
          @click="toggleMobileMenu"
          :class="{ active: mobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  document.body.style.overflow = mobileMenuOpen.value ? "hidden" : "";
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = "";
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = "";
});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #0f3d3e 0%, #0d545f 50%, #2d3e54 100%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

.header-scrolled {
  background: linear-gradient(
    135deg,
    rgba(15, 61, 62, 0.85) 0%,
    rgba(13, 84, 95, 0.85) 50%,
    rgba(45, 62, 84, 0.85) 100%
  );
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.logo:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.logo-image {
  height: 70px;
  width: 105px;
  filter: brightness(0) invert(1);
  transition: all 0.3s ease;
}

.logo:hover .logo-image {
  filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.3));
}

/* Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  list-style: none;
}

.nav-menu li a {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.2px;
}

.nav-menu li a svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: -1px; /* Ajuste fino para centrado perfecto */
}

.nav-menu li a::before {
  content: "";
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: white;
  transition: width 0.3s ease;
}

.nav-menu li a:hover {
  background: rgba(255, 255, 255, 0.12);
  color: white;
}

.nav-menu li a:hover::before {
  width: 50%;
}

.nav-menu li a.router-link-active {
  background: rgba(255, 255, 255, 0.18);
  color: white;
  font-weight: 600;
}

.nav-menu li a.router-link-active::before {
  width: 50%;
}

/* CTA Button */
.nav-cta-wrapper {
  margin-left: 0.75rem;
}

.nav-cta {
  background: white !important;
  color: #0f3d3e !important;
  padding: 0.55rem 1.5rem !important;
  border-radius: 50px !important;
  font-weight: 600 !important;
  font-size: 0.8125rem !important;
  transition: all 0.3s ease !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  border: 2px solid transparent !important;
  letter-spacing: 0.2px;
}

.nav-cta::before {
  display: none !important;
}

.nav-cta:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2) !important;
  background: rgba(255, 255, 255, 0.95) !important;
  color: #0f3d3e !important;
}

.nav-cta.router-link-active {
  background: white !important;
  color: #0f3d3e !important;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}

.hamburger span {
  width: 26px;
  height: 2.5px;
  background: white;
  transition: all 0.3s ease;
  border-radius: 3px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

/* Responsive */
@media (max-width: 968px) {
  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background: linear-gradient(180deg, #0f3d3e 0%, #0d545f 50%, #2d3e54 100%);
    flex-direction: column;
    justify-content: center;
    gap: 0;
    padding: 2rem 0;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.3);
  }

  .nav-menu-active {
    right: 0;
  }

  .nav-menu li {
    width: 100%;
  }

  .nav-menu li a {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 0;
    border-left: 3px solid transparent;
  }

  .nav-menu li a:hover {
    background: rgba(255, 255, 255, 0.1);
    border-left-color: white;
    color: white;
  }

  .nav-menu li a::before {
    display: none;
  }

  .nav-menu li a.router-link-active {
    background: rgba(255, 255, 255, 0.12);
    border-left-color: white;
    font-weight: 600;
    color: white;
  }

  .nav-cta-wrapper {
    margin: 1.5rem 2rem 0;
  }

  .nav-cta {
    width: 100% !important;
    text-align: center !important;
    border-radius: 10px !important;
    padding: 0.75rem 1.5rem !important;
    font-size: 0.9375rem !important;
  }

  .nav-cta:hover {
    transform: translateY(0) !important;
  }
}

@media (max-width: 480px) {
  .logo-icon {
    width: 36px;
    height: 36px;
  }

  .logo-main {
    font-size: 0.875rem;
  }

  .logo-sub {
    font-size: 0.6rem;
  }

  .nav-menu {
    width: 280px;
  }
}

@media (max-width: 968px) {
  .logo-image {
    height: 60px;
    width: 90px;
  }
}

@media (max-width: 480px) {
  .logo-image {
    height: 50px;
    width: 80px;
  }
}
</style>
