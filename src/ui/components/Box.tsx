import React from 'react'
import { styled } from '@linaria/react'

export const Box: React.FC = ({ children }) => <StyledBox>{children}</StyledBox>

const StyledBox = styled.div`
  width: 100%;
  border-radius: var(--border-radius-main);
  box-shadow: var(--box-shadow-main);
  background-color: var(--color-white);
`
