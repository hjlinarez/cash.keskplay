import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});

/*export default defineConfig({
  base: '/cash.keskplay/', // 👈 Añade esta línea
  plugins: [react({
    babel: {
      plugins: [["module:@preact/signals-react-transform"]],
    },
  })],
});*/
