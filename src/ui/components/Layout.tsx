import React from 'react'
import { styled } from '@linaria/react'

import { lessThan } from '../theme'

export const Layout: React.FC = ({ children }) => (
  <Wrap>
    <InnerWrap>{children}</InnerWrap>
  </Wrap>
)

const Wrap = styled.div`
  position: relative;
  width: 100%;
`

const InnerWrap = styled.div`
  width: 80%;
  margin: 0 auto;

  ${lessThan('xl')} {
    width: 90%;
  }

  ${lessThan('lg')} {
    width: 95%;
  }
`
