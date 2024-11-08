import { join } from 'path'
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin'
import { iconsPlugin, getIconCollections } from "@egoist/tailwindcss-icons"

export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        preset: [
          {
            name: 'crimson',
            enhancements: true,
          },
        ],
      },
    }),
    iconsPlugin({
      // Select the icon collections you want to use
      // You can also ignore this option to automatically discover all icon collections you have installed
    collections: getIconCollections(["tabler", "lucide", "ri", "ion", "iconoir"]),
    }),
  ],
} satisfies Config;
