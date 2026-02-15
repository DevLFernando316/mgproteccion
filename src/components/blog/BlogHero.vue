<template>
  <section class="blog-hero">
    <div class="hero-background"></div>
    <div class="container">
      <div class="hero-content">
        <h1 class="fade-in-up">Blog de Seguridad Laboral</h1>
        <p class="fade-in-up">
          Artículos, guías y consejos especializados en gestión de riesgos
          laborales
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-hero {
  position: relative;
  padding: 8rem 1.5rem 5rem;
  text-align: center;
  overflow: hidden;
  background: var(--gradient-primary);
}

.hero-background {
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

.blog-hero h1 {
  color: white;
  margin-bottom: 1rem;
  font-size: 3rem;
}

.blog-hero p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  line-height: 1.6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

@media (max-width: 768px) {
  .blog-hero {
    padding: 6rem 1.25rem 4rem;
  }

  .blog-hero h1 {
    font-size: 2rem;
  }

  .blog-hero p {
    font-size: 1rem;
  }
}
</style>
