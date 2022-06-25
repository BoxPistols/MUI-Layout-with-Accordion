import React from 'react'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'

import { StyledEngineProvider } from '@mui/material/styles'
import { ControlledAccordions } from './demo'

render(
  <>
    <StyledEngineProvider injectFirst>
      <ControlledAccordions InnerContents={<h2>Contents</h2>} />
    </StyledEngineProvider>
  </>,
  document.getElementById('root'),
)
