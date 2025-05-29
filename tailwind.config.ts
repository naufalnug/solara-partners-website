import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                "cool-blue": {
                    DEFAULT: 'hsl(var(--cool-blue))',
                    foreground: 'hsl(var(--cool-blue-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '2rem',
                    lg: '4rem',
                    xl: '5rem',
                    '2xl': '6rem',
                },
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1536px',
                },
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                }
            },
            animation: {
                'fade-in': 'fade-in 0.8s ease-out forwards'
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            color: 'hsl(var(--cool-blue))',
                            '&:hover': {
                                color: 'hsl(var(--cool-blue) / 0.8)',
                            },
                        },
                        h2: {
                            color: 'hsl(var(--primary))',
                            fontWeight: '700',
                            fontFamily: '"Red Hat Display", sans-serif',
                        },
                        h3: {
                            color: 'hsl(var(--primary))',
                            fontWeight: '700',
                            fontFamily: '"Red Hat Display", sans-serif',
                        },
                        h4: {
                            color: 'hsl(var(--primary))',
                            fontWeight: '700',
                            fontFamily: '"Red Hat Display", sans-serif',
                        },
                        blockquote: {
                            borderLeftColor: 'hsl(var(--accent))',
                        },
                    },
                },
            },
        }
    },
    plugins: [
        require("tailwindcss-animate"),
        require('@tailwindcss/typography'),
    ],
} satisfies Config;
