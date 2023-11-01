module.exports = {
  theme: {
    extend: {
        keyframes: {
            'fade-in-down': {
                '0%': {
                    opacity: '0',
                    transform: 'translateY(-20px)'
                },
                '100%': {
                    opacity: '1',
                    transform: 'translateY(0)'
                },
            }
        },
        animation: {
            'fade-in-down': 'fade-in-down 1s ease-out'
        }
    },
},
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
    // other configurations...
    plugins: [
     
      require('@tailwindcss/line-clamp'),
      require("tailwindcss-animate")
    ],
    
  };
  