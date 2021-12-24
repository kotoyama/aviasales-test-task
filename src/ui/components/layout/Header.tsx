import React from 'react'
import { styled } from '@linaria/react'

import { Icon } from '../atoms/Icon'

export const Header: React.FC = () => (
  <Wrap>
    <Icon icon="logo" />
  </Wrap>
)

const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
`
