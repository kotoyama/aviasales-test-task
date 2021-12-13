import React from 'react'
import { styled } from '@linaria/react'

import { lessThan } from '../theme'

export const Container: React.FC = ({ children }) => <Wrap>{children}</Wrap>

const Wrap = styled.main`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr minmax(auto, 2fr);
  padding-bottom: 20px;

  ${lessThan('md')} {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
  }
`
