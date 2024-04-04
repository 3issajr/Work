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
    extend: {
      colors:{
        customColor : '#F9F9F7'
      }
    },
  },
  plugins: [],
}