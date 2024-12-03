/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: {
    DEFAULT: "#000",
    100: "#828282",
  },
  white: {
    DEFAULT: "#fff",
  },
  blue: {
    DEFAULT: "#21325E",
  },
  red: {
    DEFAULT: "#FF0000",
  }

};

module.exports = {
  content: ["./**/*.{php,js,html}", "!./node_modules,*"],
  theme: {
    extend: {
      screens: {
        xsm: "450px",
        sm: "640px",
        md: "768px",
        xmd: "860px",
        xlg: "991px",
        lg: "1025px",
        xl: "1280px",
        "2xl": "1536px",
      },
      boxShadow: {
        custom: "0px 12px 40px 0px #1018401A",

      },
      backgroundImage: {
        hero_bg: "url('../src/img/herobg-min.jpg')",
        cardGradient: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.67) 65.1%)",
        arrow_white:"url('../src/img/arrow-white.svg')",
        // cta
        cta_bg: "url('../src/img/ctabg.jpg')",
        blue_arrow: "url('../src/img/blue-arrow.svg')",
        // form
        name: "url('../src/img/name.svg')",
        // footer
        link_arrow: "url('../src/img/linkarrow.svg')",
        location_icon:"url('../src/img/whitelocation.svg')",
        call_icon: "url('../src/img/call-white.svg')",
        mail_icon: "url('../src/img/mailfooter.svg')",
        // About US
        about_bg:  "url('../src/img/Aboutus.jpg')",
      },
      fontFamily: {
        jost: ["Jost"],
      },
      colors: {
        ...colors,
      },
      fontSize: {
        h1: ["clamp(3rem, 2.725rem + 1.375vw, 4.375rem)", //70px
          { lineHeight: "clamp(4.2rem, 3.815rem + 1.925vw, 6.125rem)", 
            fontWeight: "600" 
          }],
        h2: ["clamp(2rem, 1.8375rem + 0.8125vw, 2.8125rem)", //45px
          {  lineHeight: " clamp(2.8rem, 2.5725rem + 1.1375vw, 3.9375rem)",
            fontWeight: "600"
          }
        ],  
        h3: ["clamp(1.375rem, 1.3rem + 0.375vw, 1.75rem)", //28px
          { lineHeight: " clamp(1.925rem, 1.82rem + 0.525vw, 2.45rem)", 
            fontWeight: "600" 
          }],
        h4:["clamp(1.125rem, 1.1rem + 0.125vw, 1.25rem)", //20px
          { lineHeight: " clamp(1.575rem, 1.54rem + 0.175vw, 1.75rem)", 
            fontWeight: "600" 
          }
        ],
        
        p:["clamp(1rem, 0.975rem + 0.125vw, 1.125rem)", //18px
          { lineHeight: "clamp(1.4rem, 1.365rem + 0.175vw, 1.575rem)", 
            fontWeight: "500" 
          }
        ], 
        body:["clamp(0.9375rem, 0.925rem + 0.0625vw, 1rem)", //16px
          { lineHeight: "clamp(1.3125rem, 1.295rem + 0.0875vw, 1.4rem)", 
            fontWeight: "400" 
          }
        ],
        sm_text:["clamp(0.875rem, 0.875rem + 0vw, 0.875rem)", //14px
          { lineHeight: "clamp(1.125rem, 1.1rem + 0.1vw, 1.25rem)", 
            fontWeight: "500" 
          }
        ]
      },
    },
    
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
