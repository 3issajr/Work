// const withMT = require("@material-tailwind/react/utils/withMT");
// module.exports = withMT({
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         customColor : '#F9F9F7'
//       }
//     },
//   },
//   plugins: [],
// });


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
       
      'xxs' : {'min' : '0px' , 'max' : '575.98px'},

      'xs': {'min': '576px', 'max': '767px'},

      'sm': {'min': '768px', 'max': '991.98px'},
      // => @media (min-width: 576px) { ... }

      'md': { 'min' : '992px', 'max' : '1199.98px'},
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors:{
        customColor : '#F9F9F7'
      }
    },
  },
  plugins: [],
}