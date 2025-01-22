import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import './index.css'

import App from './App.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App>


    </App>
  </StrictMode>,
)
