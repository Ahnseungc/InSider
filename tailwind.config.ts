import type { Config } from 'tailwindcss';
import tailwindScrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Pretendard', 'sans-serif'],
      },
      colors: {
        main: '#FF5C00',
      },
      borderRadius: {
        large: '32px',
      },
      boxShadow: {
        header: '0px 4px 10px 3px rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [tailwindScrollbar],
};

export default config;
