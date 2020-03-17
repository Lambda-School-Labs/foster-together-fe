import React, { useState, useEffect } from 'react'
import { FlexContainer } from '../../../GlobalStyles'
import { LabelContainer, RadioSpan } from '../styles/radioButtonStyles'
import { handleCheck } from './handleCheck'

export const RadioButton = ({ setIsNeighbor }) => {
  const [checked, setChecked] = useState({ family: true, neighbor: false })
  useEffect(() => {
    setIsNeighbor(checked.neighbor)
  }, [setIsNeighbor, checked])

  return (
    <FlexContainer>
      <LabelContainer
        onClick={() => handleCheck(checked, setChecked, 'neighbor')}
        class='container'
      >
        Neighbor
        <RadioSpan checked={checked.neighbor}></RadioSpan>
      </LabelContainer>
      <LabelContainer
        onClick={() => handleCheck(checked, setChecked, 'family')}
        class='container'
      >
        Family
        <RadioSpan checked={checked.family}></RadioSpan>
      </LabelContainer>
    </FlexContainer>
  )
}
