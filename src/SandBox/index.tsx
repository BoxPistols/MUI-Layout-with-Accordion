import React from 'react'
import { AccordionWrap } from '../components/AccordionWrap'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export function SandBox(): JSX.Element {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ padding: '32px', bgcolor: '#cfe8fc' }}>
          <AccordionWrap
            InitOpen="panel1"
            ExpandedName="panel1"
            AriaControls="panel1-content"
            AccordionTitle="アコーディオンのタイトル"
            AccordionSubTitle="サブタイトル"
            InlineCss={{ mb: 1 }}
          >
            ABC
          </AccordionWrap>

          <AccordionWrap
            ExpandedName="panel2"
            AriaControls="panel2-content"
            AccordionTitle="特別な項目設定2"
            children={undefined}
          />

          <AccordionWrap
            // InitOpen="panel3"
            ExpandedName="panel3"
            AriaControls="panel3-content"
            AccordionTitle="特別な項目設定3"
            children={undefined}
          />
        </Box>
      </Container>
    </>
  )
}
