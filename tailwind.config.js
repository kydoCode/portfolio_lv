/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'left-img': '100%',
        'right-img': '100%',
      },
      maxWidth: {
        'left-img': '150px',
        'right-img': '300px',
      },
      height: {
        'left-img': 'auto',
        'right-img': 'auto',
      },
      borderRadius: {
        'left-img': '50%',
        'right-img': '8px',
      },
      borderWidth: {
        'left-img': '2px',
        'right-img': '2px',
      },
      padding: {
        'left-img': '5px',
      },
      objectFit: {
        'left-img': 'cover',
        'right-img': 'cover',
      },
      borderColor: {
        'left-img': '#ddd',
        'right-img': '#ddd',
      },
    },
  },
  plugins: [],
}
