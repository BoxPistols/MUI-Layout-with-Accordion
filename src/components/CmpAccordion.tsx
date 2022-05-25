// https://mui.com/material-ui/react-accordion/
// https://mui.com/system/flexbox/
// import React from 'react'
import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { SxProps } from '@mui/material/styles'
//
import Box from '@mui/material/Box'

type setProps = {
  CmpAccordionTitle: string
  CmpAccordionSubTitle?: string
  ExpandedName: string
  AriaControls: string
  InlineCss?: SxProps
  InitOpen?: string
  // TODO:
  CmpAccordionDetails: JSX.Element
}

export const CmpAccordion = ({
  CmpAccordionTitle,
  CmpAccordionSubTitle,
  CmpAccordionDetails,
  ExpandedName,
  AriaControls,
  InlineCss,
  InitOpen,
  ...props
}: setProps) => {
  const [expanded, setExpanded] = React.useState<string | boolean>(
    `${InitOpen}`,
  )

  const handleChange = (panel: string) => (
    _event: React.SyntheticEvent,
    isExpanded: boolean,
  ) => {
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
          // aria-controls="panel1bh-content"
          // id="panel1bh-header"
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
            {/* <Typography sx={{ width: 'fit-content', mr: 1 }}> */}
            <Typography sx={{ display: 'block' }}>
              {CmpAccordionTitle}
            </Typography>
            <Typography sx={{ display: 'block', color: 'text.secondary' }}>
              {CmpAccordionSubTitle}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>{CmpAccordionDetails}</Typography> */}
          {CmpAccordionDetails}
        </AccordionDetails>
      </Accordion>{' '}
    </>
  )
}
