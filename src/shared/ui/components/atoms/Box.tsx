import React from 'react'
import { styled } from '@linaria/react'

export const Box: React.FC = ({ children }) => <StyledBox>{children}</StyledBox>

const StyledBox = styled.div`
  width: 100%;
  background-color: var(--color-white);
  border-radius: var(--border-radius-main);
  box-shadow: var(--box-shadow-main);
`
