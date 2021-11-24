import React from 'react'
import { styled } from '@linaria/react'

import { CheckboxGroup } from '../containers'

export const Filters: React.FC = () => (
  <Wrap>
    <Title>Количество пересадок</Title>
    <CheckboxGroup />
  </Wrap>
)

const Wrap = styled.div`
  margin-top: 10px;
`

const Title = styled.span`
  display: block;
  margin-left: 20px;
  margin-bottom: 10px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
