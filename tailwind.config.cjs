const typography = require('@tailwindcss/typography');
// const forms = require('@tailwindcss/forms')({strategy: "class"});
const defaultTheme = require("tailwindcss/defaultTheme");
// const aspect = require('@tailwindcss/aspect-ratio');
const ui = require("daisyui");


// const pluginBase = require('./config/plugin-base.js');
// const pluginPreloader = require('./config/plugin-preloader.js');
//const pluginHairlines = require('./config/plugin-hairlines.cjs');
// const pluginTouchRipple = require('./config/plugin-touch-ripple.js');
// const pluginIosMaterial = require('./config/plugin-ios-material.js');
// const pluginLineClamp = require('./config/plugin-line-clamp.js');
//const pluginSafeAreas = require('./config/plugin-safe-areas.cjs');
// const pluginTranslucent = require('./config/plugin-translucent.cjs');
// const pluginRange = require('./config/plugin-range.js');
// const pluginTouch = require('./config/plugin-touch.js');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts,md}','mdsvex.config.js'],
  mode: "jit",
  // corePlugins: {
  //   aspectRatio: false,
  // },
	theme: {
		extend: {
            fontFamily: {
              display: ["Gilroy", ...defaultTheme.fontFamily.sans],
              sans: ["Gilroy", ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
              'xxs': '0.5rem',
              '2xs': '.75rem',
              // 'xs': '.875rem',
              // 'sm': '1rem',
              // 'base': '1.0625rem',
              // 'lg': '1.125rem',
              // 'xl': '1.25rem',
              // '2xl': '1.5rem',
              // '3xl': '1.875rem',
              // '4xl': '2.25rem',
              // '5xl': '3rem',
              // '6xl': '4rem',
              // '7xl': '5rem',
            },
            colors: {
              'teci-blue-dark': '#002b7f',
              'teci-blue-light': '#0072C6',
              'teci-gray': '#b1b1b1',
              'pyrosim': '#990000',
              'pathfinder': '#006000'
            },
            lineHeight: {
              'extra-loose': '2.5',
            },
            spacing: {
              '14': '3.5rem',
              '22': '5.5rem',
              '72': '18rem',
              '200': '50rem',
            },
            width: {
              '7/10': '70%',
              '3/10': '30%',
            },
        }
	},

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],

          primary: "#ff0000",
          "primary-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#F3F3F3",
          "base-300": "#E3E5E8",
          "base-content": "#1f2937",
          
          "--btn-text-case": "normal-case",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.2rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "1.066", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          
          primary: "#ff0000",
          "primary-content": "#ffffff",
          
          secondary: "#D926AA",
          "secondary-content": "#ffffff",
          
          accent: "#1FB2A5",
          "accent-content": "#ffffff",
          
          neutral: "#191D24",
          "neutral-focus": "#111318",
          "neutral-content": "#D3D5DA",

          "base-200": "#000000",
          "base-100": "#131416",
          "base-300": "#2A2D32",
          "base-content": "#ffffff",  

          "--btn-text-case": "normal-case",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "1.5rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.2rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "1.066", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        }, 

      },

      "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"


    ],
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
	plugins: [ typography, ui]
};

module.exports = config; 