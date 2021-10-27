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
  justify-content: center;
  align-items: center;
  height: 160px;
`
