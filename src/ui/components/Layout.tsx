import React from 'react'
import { styled } from '@linaria/react'

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
  padding: 0 10px;
`
