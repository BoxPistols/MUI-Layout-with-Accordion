// https://mui.com/material-ui/react-accordion/
// https://mui.com/system/flexbox/
// import React from 'react'
// import * as React from 'react'
import React from 'react'
import { ElementType, ReactNode, VFC } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
  SxProps,
} from '@mui/material'

// import { SxProps } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
//

type setProps = {
  AccordionTitle: string
  AccordionSubTitle?: string
  ExpandedName?: string
  AriaControls?: string
  InitOpen?: string
  InlineCss?: SxProps
  children?: ReactNode
}

export const AccordionWrap = ({
  AccordionTitle,
  AccordionSubTitle,
  children,
  ExpandedName,
  AriaControls,
  InlineCss,
  InitOpen,
}: setProps) => {
  const [expanded, setExpanded] = React.useState<string | boolean>(
    `${InitOpen}`,
  )

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <>
      <Accordion
        expanded={expanded === `${ExpandedName}`}
        onChange={handleChange(`${ExpandedName}`)}
        sx={InlineCss}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={AriaControls}
          id={AriaControls}
          sx={{
            minHeight: '3em',
            '&:hover': {
              backgroundColor: '#cccccc99',
            },
          }}
          style={{ marginBottom: 24 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              width: '100%',
              height: '2em',
              pr: 3,
            }}
          >
            <Typography sx={{ display: 'block' }}>{AccordionTitle}</Typography>
            <Typography sx={{ display: 'block', color: 'text.secondary' }}>
              {AccordionSubTitle}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>{' '}
    </>
  )
}
