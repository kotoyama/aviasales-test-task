import React from 'react'
import { styled } from '@linaria/react'

import { ChoiceGroup } from '../containers'

export const CurrencySwitcher: React.FC = () => (
  <Wrap>
    <Title>Валюта</Title>
    <ChoiceGroup />
  </Wrap>
)

const Wrap = styled.div`
  margin: 0 20px 10px;
`

const Title = styled.span`
  display: block;
  margin-bottom: 10px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
