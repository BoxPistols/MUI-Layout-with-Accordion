import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material/styles'
import { ControlledAccordions } from './demo'

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ControlledAccordions InnerContents={<h2>Contents</h2>} />
    </StyledEngineProvider>
  </React.StrictMode>,
)
