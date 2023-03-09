/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // pages 폴더의 모든 폴더(**)의, 모든 파일(*) 인데 확장자명이 {}인 모든 파일에서 tailwind 를 사용한 내역을 찾음
    // tailwind 가 어느 경로에서 사용될 것인지 말해줘야 함
    // tailwind 는 현재 이 파일을 바라보고 있고,
    // 이 파일에서 우리는 어느 component 혹은 page 에서 tailwind 를 사용할 것인지 명시해야한다.
    // "./pages/**/*.js",
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms')],
};
