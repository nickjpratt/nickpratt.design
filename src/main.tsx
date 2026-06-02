import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Four type voices, self-hosted as variable fonts.
import '@fontsource-variable/geist'                 // sans: body, nav, UI
import '@fontsource-variable/geist-mono'            // mono: system-UI moments, meta
import '@fontsource-variable/newsreader/opsz.css'   // serif: personality (roman + optical sizing)
import '@fontsource-variable/newsreader/opsz-italic.css'
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
