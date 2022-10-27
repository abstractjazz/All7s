import { ProductBrowser } from '@ecwid/nextjs-ecwid-plugin'
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

  export default function Ecwid() {
     return (
      <>
      <ProductBrowser
      storeId="81732001"
      />
      </>
     )  
  }
      
  