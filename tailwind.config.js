/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFDD00", // Amarillo similar al de la imagen
        },
        secundary: {
          DEFAULT: "#006400", // Verde oscuro
        },
        tertiary: {
          DEFAULT: "#FFFFFF", // Blanco (puede ser usado como color neutro)
        },
        fourth: {
          DEFAULT: "#F5F5DC", // Beige (puede ser un color neutro adicional)
        },
        border: {
          DEFAULT: "#006400", // Usando el mismo verde oscuro para bordes
        },
        background: {
          primary: "#FFDD00", // Fondo Principal Amarillo
          secondary: "#F2F2F2", // Fondo Secundario (opcionalmente gris claro para secciones)
        },
        textPrimary: {
          DEFAULT: "#006400", // Texto Principal Verde Oscuro
        },
        textSecundary: {
          DEFAULT: "#333333", // Texto Secundario Gris Carbón
        },
      },
    },
  },
  plugins: [],
};
