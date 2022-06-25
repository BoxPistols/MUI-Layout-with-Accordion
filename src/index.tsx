import React from 'react'
import { render } from 'react-dom'
import { StyledEngineProvider } from '@mui/material/styles'
import { SandBox } from './SandBox'

render(
  <>
    <StyledEngineProvider injectFirst>
      <SandBox />
    </StyledEngineProvider>
  </>,
  document.getElementById('root'),
)
