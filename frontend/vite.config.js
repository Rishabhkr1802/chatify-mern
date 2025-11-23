import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import daisyui from "daisyui";

export default defineConfig({
  plugins: [react(),tailwindcss(),daisyui],
  server : {
    host : '0.0.0.0',  //For run project on multiple devices like http:192.168.1.43:3000
    port : 3000,
  }
})
