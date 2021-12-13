import React from 'react'
import { styled } from '@linaria/react'

import { lessThan } from '../theme'

export const Sidebar: React.FC = ({ children }) => (
  <Wrap>
    <InnerWrap>{children}</InnerWrap>
  </Wrap>
)

const Wrap = styled.aside`
  display: grid;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: fit-content;
  border-radius: var(--border-radius-main);
  box-shadow: var(--box-shadow-main);
  background-color: var(--color-white);

  ${lessThan('lg')} {
    grid-column: 1;
    grid-row: 1 / 2;
  }
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`
