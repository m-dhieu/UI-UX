import { defineConfig } from 'vite';

export default defineConfig({
  base: '/UI-UX/',   // ← Add this line
  build: {
    rollupOptions: {
      external: [
        '@radix-ui/react-checkbox',
        'lucide-react',
        'sonner',
        '@radix-ui/react-switch',
        '@radix-ui/react-slot',
        'class-variance-authority',
        '@radix-ui/react-label',
        '@radix-ui/react-dialog',
      ],
      output: {
        globals: {
          sonner: 'Sonner',
          '@radix-ui/react-switch': 'RadixSwitch',
        }
      }
    }
  }
});

