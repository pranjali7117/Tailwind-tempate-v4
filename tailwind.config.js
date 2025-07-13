/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // Define colors at root level for gradient support in v4
        colors: {
            // Finance-themed color palette
            primary: {
                50: '#eff6ff',
                100: '#dbeafe',
                200: '#bfdbfe',
                300: '#93c5fd',
                400: '#60a5fa',
                500: '#1a365d', // Deep Navy Blue - Trust, stability
                600: '#1e40af',
                700: '#1e3a8a',
                800: '#1e3a8a',
                900: '#1e3a8a',
            },
            secondary: {
                50: '#fffbeb',
                100: '#fef3c7',
                200: '#fde68a',
                300: '#fcd34d',
                400: '#fbbf24',
                500: '#f59e0b', // Amber Gold - Wealth, prosperity
                600: '#d97706',
                700: '#b45309',
                800: '#92400e',
                900: '#78350f',
            },
            accent: {
                50: '#ecfdf5',
                100: '#d1fae5',
                200: '#a7f3d0',
                300: '#6ee7b7',
                400: '#34d399',
                500: '#10b981', // Emerald Green - Growth, success
                600: '#059669',
                700: '#047857',
                800: '#065f46',
                900: '#064e3b',
            },
            neutral: {
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#374151', // Slate Gray - Professional
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
            },
            // Preserve default colors for fallback
            transparent: 'transparent',
            current: 'currentColor',
            black: '#000',
            white: '#fff',
        },
        extend: {
            fontFamily: {
                'inter': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
                'display': ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui'],
                'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'bounce-gentle': 'bounceGentle 2s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                bounceGentle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
        },
    },
    plugins: [],
}; 