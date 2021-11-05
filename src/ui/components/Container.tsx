import React from 'react'
import { styled } from '@linaria/react'

export const Container: React.FC = ({ children }) => <Wrap>{children}</Wrap>

const Wrap = styled.main`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr minmax(auto, 2fr);
  padding-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-rows: auto auto auto;
    grid-template-columns: 1fr;
  }
`
