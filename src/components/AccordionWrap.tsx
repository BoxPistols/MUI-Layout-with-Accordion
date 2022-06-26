// https://mui.com/material-ui/react-accordion/
import React from 'react'
import { ElementType, ReactNode, VFC } from 'react'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionSummaryProps,
  AccordionProps,
  Typography,
  Box,
  Tooltip,
  SxProps,
  styled,
} from '@mui/material'
// Icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'

type setProps = {
  AccordionTitle: string
  AccordionSubTitle?: string
  ExpandedName?: string
  id?: string
  InitOpen?: string
  InlineCss?: SxProps
  children?: ReactNode
  additionalProps?: JSX.Element
  TooltipPropsTiitle?: ReactNode
  // TooltipPropsTiitle?:
  //   | string
  //   | number
  //   | boolean
  //   | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  //   | React.ReactFragment
  //   | React.ReactPortal
}

// Stylings
const AccordionStyle = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: 10,
  mb: 4,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummaryStyle = styled((props: AccordionSummaryProps) => (
  <AccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .015)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, .03)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
    borderRadius: '10px, 10px , 0 , 0',
  },
}))

const AccordionDetailsStyle = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  borderRadius: '0, 0,10px,10px',
  // borderBottom: '1px solid rgba(0, 0, 0, .125)',
}))

export const AccordionWrap = ({
  AccordionTitle,
  AccordionSubTitle,
  children,
  ExpandedName,
  id,
  InlineCss,
  InitOpen,
  additionalProps,
  TooltipPropsTiitle,
  ...props
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
      <AccordionStyle
        expanded={expanded === `${ExpandedName}`}
        onChange={handleChange(`${ExpandedName}`)}
        sx={InlineCss}
        style={{ marginBottom: 40 }}
      >
        <AccordionSummaryStyle
          expandIcon={<ExpandMoreIcon />}
          aria-controls={id}
          id={id}
          // style={{ marginBottom: 24 }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              width: '100%',
              pr: 5,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-center',
                }}
              >
                <Typography>{AccordionTitle}</Typography>
                {TooltipPropsTiitle && (
                  <Typography>
                    <Tooltip // 別コンポーネント
                      title={TooltipPropsTiitle}
                      placement="top-start"
                      arrow
                      sx={
                        {
                          // TODO: Styling FontSize, Position
                          // .MuiTooltip-tooltip
                          // .MuiTooltip-tooltipArrow
                          // .MuiTooltip-tooltipPIacementTop
                        }
                      }
                    >
                      <HelpOutlineIcon fontSize="small" />
                    </Tooltip>
                  </Typography>
                )}
              </Box>

              <Typography sx={{ display: 'block', color: 'text.secondary' }}>
                {AccordionSubTitle}
              </Typography>
            </Box>
            <Box>{additionalProps}</Box>
          </Box>
        </AccordionSummaryStyle>
        <AccordionDetailsStyle>{children}</AccordionDetailsStyle>
      </AccordionStyle>
    </>
  )
}
