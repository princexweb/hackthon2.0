module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trustworthy focus, calming presence
        primary: {
          DEFAULT: "#4A90E2", // blue-500
          50: "#EBF4FD", // blue-50
          100: "#D1E7FA", // blue-100
          200: "#A3CEF5", // blue-200
          300: "#75B5F0", // blue-300
          400: "#5FA2E9", // blue-400
          500: "#4A90E2", // blue-500
          600: "#3A73B8", // blue-600
          700: "#2A568E", // blue-700
          800: "#1A3964", // blue-800
          900: "#0A1C3A", // blue-900
        },
        // Secondary Colors - Growth celebration, progress acknowledgment
        secondary: {
          DEFAULT: "#50C878", // emerald-500
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#50C878", // emerald-400
          500: "#50C878", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
        },
        // Accent Colors - Motivational spark, achievement highlights
        accent: {
          DEFAULT: "#FF8C42", // orange-500
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#FF8C42", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
        },
        // Background Colors
        background: "#FAFBFC", // slate-50
        surface: "#F1F3F5", // slate-100
        // Text Colors
        text: {
          primary: "#2D3748", // gray-800
          secondary: "#718096", // gray-500
        },
        // Status Colors
        success: {
          DEFAULT: "#38A169", // green-600
          50: "#F0FDF4", // green-50
          100: "#DCFCE7", // green-100
          600: "#38A169", // green-600
        },
        warning: {
          DEFAULT: "#D69E2E", // yellow-600
          50: "#FFFBEB", // yellow-50
          100: "#FEF3C7", // yellow-100
          600: "#D69E2E", // yellow-600
        },
        error: {
          DEFAULT: "#E53E3E", // red-500
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#E53E3E", // red-500
        },
        // Border Colors
        border: {
          DEFAULT: "#E2E8F0", // slate-200
          light: "#F1F5F9", // slate-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        accent: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(45, 55, 72, 0.08)',
        'medium': '0 4px 16px rgba(45, 55, 72, 0.12)',
        'strong': '0 8px 32px rgba(45, 55, 72, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out forwards',
        'slide-up': 'slideUp 300ms ease-out forwards',
        'celebration': 'celebration 600ms ease-out forwards',
        'pulse-gentle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}