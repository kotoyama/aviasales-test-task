import React from 'react'
import { styled } from '@linaria/react'

import { CheckboxGroup } from '../containers'

export const Filters: React.FC = () => (
  <>
    <Title>Количество пересадок</Title>
    <CheckboxGroup />
  </>
)

const Title = styled.span`
  display: block;
  margin-left: 20px;
  margin-bottom: 10px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
