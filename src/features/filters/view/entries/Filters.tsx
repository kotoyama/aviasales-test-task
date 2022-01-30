import React from 'react'
import { styled } from '@linaria/react'

import { CheckboxGroup } from '../containers'

export const Filters = () => (
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
  margin-bottom: 10px;
  margin-left: 20px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`
