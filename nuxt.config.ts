export default {
  ssr: false,
  target: "static",
  plugins: ["~/plugins/aos.client.ts"],

  app: {
    head: {
      title: "LoanIQ",
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0",
        },
      ],
      htmlAttrs: { lang: "en" },
      meta: [
        { name: "description", content: "Your website description for SEO" },
        { name: "keywords", content: "keyword1, keyword2, keyword3" },
        { name: "author", content: "Your Name or Brand" },
        { property: "og:title", content: "Your Website Title" },
        { property: "og:description", content: "Your website description for social media" },
        { property: "og:image", content: "/og-image.jpg" },
        { property: "og:url", content: "https://yourwebsite.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Your Website Title" },
        { name: "twitter:description", content: "Your website description for Twitter" },
        { name: "twitter:image", content: "/twitter-image.jpg" }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
    pageTransition: false,
  },
  // Alternatively, for finer control, you can disable loading indicators and other settings:
  loading: false,
  loadingIndicator: false, // Completely removes the default Nuxt loading screen

  modules: ["@nuxtjs/tailwindcss"],
  css: ["@/assets/css/main.css", '@/assets/css/fonts.css'],

  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  axios: {
    // Axios options here
    timeout: 10000, // Example: set timeout to 10 seconds
  },

  compatibilityDate: "2024-10-30",
};