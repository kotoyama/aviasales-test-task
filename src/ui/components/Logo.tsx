import React from 'react'
import { styled } from '@linaria/react'

import { Icon } from './Icon'

export const Logo: React.FC = () => (
  <Header>
    <Icon icon="logo" />
  </Header>
)

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
`
