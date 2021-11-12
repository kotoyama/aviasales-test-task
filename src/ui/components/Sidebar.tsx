import React from 'react'
import { styled } from '@linaria/react'

export const Sidebar: React.FC = ({ children }) => (
  <Wrap>
    <InnerWrap>{children}</InnerWrap>
  </Wrap>
)

const Wrap = styled.aside`
  height: fit-content;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-radius: var(--border-radius-main);
  box-shadow: var(--box-shadow-main);
  background-color: var(--color-white);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1 / 2;
  }
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`
