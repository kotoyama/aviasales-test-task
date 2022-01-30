import React from 'react'
import { styled } from '@linaria/react'

import { lessThan } from '~/shared/ui/theme'

export const Container: React.FC = ({ children }) => <Wrap>{children}</Wrap>

const Wrap = styled.main`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr minmax(auto, 2fr);
  grid-gap: 20px;
  padding-bottom: 20px;

  ${lessThan('lg')} {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
  }
`
