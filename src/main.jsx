import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root')

// Draw the page at once, before the browser looks for the address's #fragment,
// so that a link such as /work/#amazon lands on its row.
flushSync(() => {
  createRoot(root).render(
    <StrictMode>
      <App page={root.dataset.page} />
    </StrictMode>,
  )
})
