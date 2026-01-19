import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Aptos', 'sans-serif'], // Use Aptos as default sans
      },
    },
  },
  plugins: [],
}
export default config