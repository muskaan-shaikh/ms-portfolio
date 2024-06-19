/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'radial-gradient(circle at 105%, #000000, #000000 5%, #c47820 25%, #000000 25%)',
        'custom-radial-bottom-right': 'radial-gradient(circle at 130% 75%, #000000, #000000 5%, #c47820 25%, #000000 25%)',
        'logo': 'radial-gradient(circle at 100%, #000000, #000000 0%, #c47820 100%,  #000000 100%)',
        'header-logo': 'radial-gradient(circle at 100%, #c47820, #000000 30%)',
      },
    },
  },
  plugins: [],
};
