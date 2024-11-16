// https://nuxt.com/docs/api/configuration/nuxt-config
import { compression } from "vite-plugin-compression2";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  css: ['@/assets/css/main.css','@fortawesome/fontawesome-free/css/all.min.css'],
  devServer: {
    port: 3333,
  },
  image: {
    densities: [1, 2],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
    },
    domains: ["https://netzero.tranduc.com"],
    alias: {
      image: "/image/",
    },
    sizes: {
      'xs': '100vw',
      'sm': '50vw',
      'md': '33vw',
      'lg': '25vw',
      'xl': '20vw',
      'xxl': '15vw',
    },
    format: ["webp"],
    presets: {
      default: {
        modifiers: {
          quality: 75,
          format: "webp",
          loading: "eager",
        },
      },
    },
    cache: {
      maxAge: 60 * 60 * 24 * 30, // Cache trong 30 ngày
      dir: '@/node_modules/.cache/nuxt-image', // Đường dẫn lưu cache
    },
    optimize: {
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.65, 0.8],
        speed: 4,
      },
      svgo: {
        plugins: [
          { removeViewBox: false },
          { cleanupIDs: false },
        ],
      },
      webp: {
        quality: 75,
      },
    },
  },
  i18n: {
    locales: [
      {
        code: 'vi-VN',
        file: 'vi-VN.json'
      },
      {
        code: 'en-US',
        file: 'en-US.json'
      }
    ],
    defaultLocale: 'en-US',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales',
    vueI18n: './i18n.config.ts'
  },
  imports: {
    dirs: ["store"],
    autoImport: true,
  },
  build: {
    transpile: ['pinia-plugin-persistedstate'],
  },
  vite: {
    plugins: [
      compression({ 
        include: /\.(html|xml|css|json|js|mjs|svg|png|jpg|jpeg|gif|webp)$/,
        algorithm: "gzip",
        threshold: 10240,
        deleteOriginalAssets: false 
      }),
      compression({ 
        algorithm: "brotliCompress",
        threshold: 10240 
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  },

  nitro: {
    serveStatic: true,
    prerender: {},
    routeRules: {
      "/api/**": { headers: { "Cache-Control": "public, max-age=86400, must-revalidate" } },
      "/_nuxt/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
      "/**/*.webp": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
      "/**": { headers: { "Cache-Control": "public, max-age=604800, must-revalidate" } },
      "/image/**": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
      "/_ipx/**": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
    },
    compressPublicAssets: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {}, // Sử dụng Tailwind CSS
      autoprefixer: {}, // Tự động thêm các tiền tố CSS
      "@fullhuman/postcss-purgecss": {
        content: [
          "./components/**/*.{vue,js}",
          "./layouts/**/*.vue",
          "./pages/**/*.vue",
          "./plugins/**/*.{js,ts}",
          "./app.vue",
          "./error.vue",
          "./nuxt.config.{js,ts}",
          "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}",
        ],
        safelist: [
          "aos-init",
          "aos-animate",
          /^aos-/,
          /^data-aos-/,
          /^data-aos/,
          /^v3dp__/,
        ],
        defaultExtractor: (content: string) =>
          content.match(/[\w-/:]+(?<!:)/g) || [], // Explicitly typed 'content' parameter
      },
    },
  },

})