// src/services/wordpress.js - Versión de prueba

const MOCK_POSTS = [
  {
    id: 1,
    title: "Guía Completa de Gestión de Riesgos Eléctricos",
    excerpt:
      "Todo lo que necesitas saber sobre el cumplimiento de RETIE 2024 y las mejores prácticas en seguridad eléctrica.",
    content: "<p>Contenido completo del artículo...</p>",
    slug: "guia-gestion-riesgos-electricos",
    date: "2024-02-15T10:00:00",
    author: "MG Protección",
    featuredImage: "/images/blog-default.png",
    categories: [
      { id: 1, name: "Seguridad Eléctrica", slug: "seguridad-electrica" },
    ],
  },
  {
    id: 2,
    title: "5 Pasos para Implementar un SG-SST Efectivo",
    excerpt:
      "Aprende cómo diseñar e implementar un Sistema de Gestión de Seguridad y Salud en el Trabajo según el Decreto 1072.",
    content: "<p>Contenido completo del artículo...</p>",
    slug: "5-pasos-sgsst",
    date: "2024-02-10T10:00:00",
    author: "MG Protección",
    featuredImage: "/images/blog-default.png",
    categories: [{ id: 2, name: "SG-SST", slug: "sg-sst" }],
  },
  {
    id: 3,
    title: "Control de Energías Peligrosas: Lockout/Tagout",
    excerpt:
      "Procedimientos esenciales para el control de energías peligrosas según OSHA.",
    content: "<p>Contenido completo del artículo...</p>",
    slug: "control-energias-peligrosas",
    date: "2024-02-05T10:00:00",
    author: "MG Protección",
    featuredImage: "/images/blog-default.png",
    categories: [
      { id: 3, name: "Seguridad Industrial", slug: "seguridad-industrial" },
    ],
  },
  {
    id: 3,
    title: "Control de Energías Peligrosas: Lockout/Tagout",
    excerpt:
      "Procedimientos esenciales para el control de energías peligrosas según OSHA.",
    content: "<p>Contenido completo del artículo...</p>",
    slug: "control-energias-peligrosas",
    date: "2024-02-05T10:00:00",
    author: "MG Protección",
    featuredImage: "/images/blog-default.png",
    categories: [
      { id: 3, name: "Seguridad Industrial", slug: "seguridad-industrial" },
    ],
  },
  {
    id: 3,
    title: "Control de Energías Peligrosas: Lockout/Tagout",
    excerpt:
      "Procedimientos esenciales para el control de energías peligrosas según OSHA.",
    content: "<p>Contenido completo del artículo...</p>",
    slug: "control-energias-peligrosas",
    date: "2024-02-05T10:00:00",
    author: "MG Protección",
    featuredImage: "/images/blog-default.png",
    categories: [
      { id: 3, name: "Seguridad Industrial", slug: "seguridad-industrial" },
    ],
  },
  {
    id: 3,
    title: "Control de Energías Peligrosas: Lockout/Tagout",
    excerpt:
      "Procedimientos esenciales para el control de energías peligrosas según OSHA.",
    content: "<p>Contenido completo del artículo...</p>",
    slug: "control-energias-peligrosas",
    date: "2024-02-05T10:00:00",
    author: "MG Protección",
    featuredImage: "/images/blog-default.png",
    categories: [
      { id: 3, name: "Seguridad Industrial", slug: "seguridad-industrial" },
    ],
  },
  {
    id: 3,
    title: "Control de Energías Peligrosas: Lockout/Tagout",
    excerpt:
      "Procedimientos esenciales para el control de energías peligrosas según OSHA.",
    content: "<p>Contenido completo del artículo...</p>",
    slug: "control-energias-peligrosas",
    date: "2024-02-05T10:00:00",
    author: "MG Protección",
    featuredImage: "/images/blog-default.png",
    categories: [
      { id: 3, name: "Seguridad Industrial", slug: "seguridad-industrial" },
    ],
  },
];

export const wordpressService = {
  async getPosts(params = {}) {
    // Simular delay de red
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      posts: MOCK_POSTS,
      totalPages: 1,
      totalPosts: MOCK_POSTS.length,
    };
  },

  async getPostBySlug(slug) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return MOCK_POSTS.find((post) => post.slug === slug) || null;
  },

  async getCategories() {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return [
      {
        id: 1,
        name: "Seguridad Eléctrica",
        slug: "seguridad-electrica",
        count: 5,
      },
      { id: 2, name: "SG-SST", slug: "sg-sst", count: 8 },
      {
        id: 3,
        name: "Seguridad Industrial",
        slug: "seguridad-industrial",
        count: 6,
      },
    ];
  },
};
