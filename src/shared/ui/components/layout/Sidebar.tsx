import React from 'react'
import { styled } from '@linaria/react'

import { lessThan } from '~/shared/ui/theme'

export const Sidebar: React.FC = ({ children }) => (
  <Wrap>
    <InnerWrap>{children}</InnerWrap>
  </Wrap>
)

const Wrap = styled.aside`
  display: grid;
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  height: fit-content;
  background-color: var(--color-white);
  border-radius: var(--border-radius-main);
  box-shadow: var(--box-shadow-main);

  ${lessThan('lg')} {
    grid-row: 1 / 2;
    grid-column: 1;
  }
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`
