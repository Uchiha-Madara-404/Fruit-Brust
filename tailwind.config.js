/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage:
        {
          'bg-image1': "url('/images/banner1.png')",
          'bg-image2': "url('/images/banner2.png')",
          'bg-image3': "url('/images/banner3.png')",
          'bg-image4': "url('/images/banner4.png')",
        }
      },
    },
    plugins: [],
  }