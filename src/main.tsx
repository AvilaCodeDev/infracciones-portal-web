import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TanStackProvider } from './plugins/TanstackProvider.tsx'
import { AppRouter } from './router/AppRouter.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </TanStackProvider>
  </StrictMode>,
)
