import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Type voices, self-hosted as variable fonts.
import '@fontsource-variable/archivo'               // display: the oversized kinetic name
import '@fontsource-variable/geist'                 // sans: body, nav, UI, role line
import '@fontsource-variable/geist-mono'            // mono: meta, the "Currently" label
import '@fontsource-variable/caveat'                // handwriting: placeholder for Nick's real scan

import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './theme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
