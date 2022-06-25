import * as React from 'react'
import { CmpAccordion } from './components/CmpAccordion'

type setProps = {
  // TODO:
  InnerContents: JSX.Element
}

export function ControlledAccordions({ InnerContents }: setProps): JSX.Element {
  return (
    <>
      <CmpAccordion
        InitOpen="panel1"
        ExpandedName="panel1"
        AriaControls="panel1-content"
        CmpAccordionTitle="アコーディオンのタイトル"
        CmpAccordionSubTitle="サブタイトル"
        CmpAccordionDetails={InnerContents}
        InlineCss={{ mb: 1 }} />

      <CmpAccordion
        ExpandedName="panel2"
        AriaControls="panel2-content"
        CmpAccordionTitle="特別な項目設定2"
        CmpAccordionDetails={<h1>Develop</h1>} />

      <CmpAccordion
        InitOpen="panel3"
        ExpandedName="panel3"
        AriaControls="panel3-content"
        CmpAccordionTitle="特別な項目設定3"
        CmpAccordionDetails={<h1>Develop</h1>} />
    </>
  )
}
