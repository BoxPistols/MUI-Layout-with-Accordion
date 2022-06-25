import React from 'react'
import { AccordionWrap } from '../components/AccordionWrap'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export function SandBox(): JSX.Element {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ padding: '32px', bgcolor: '#f8f8f8' }}>
          <AccordionWrap
            InitOpen="panel1"
            ExpandedName="panel1"
            id="panel1-content"
            AccordionTitle="アコーディオンのタイトル"
            AccordionSubTitle="サブタイトル"
            // InlineCss={{ mb: 1 }}
            additionalProps={<Box>additionalProps</Box>}
          >
            <Box>コンテンツ</Box>
            <Box>コンテンツ</Box>
            <Box>コンテンツ</Box>
          </AccordionWrap>

          <AccordionWrap
            ExpandedName="panel2"
            id="panel2-content"
            AccordionTitle="特別な項目設定2"
            // children={undefined}
          >
            ABC
          </AccordionWrap>

          <AccordionWrap
            // InitOpen="panel3"
            ExpandedName="panel3"
            id="panel3-content"
            AccordionTitle="特別な項目設定3"
          >
            ABC
          </AccordionWrap>
        </Box>
      </Container>
    </>
  )
}
