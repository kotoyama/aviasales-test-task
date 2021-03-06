import React from 'react'
import { styled } from '@linaria/react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({ children, ...props }) => (
  <StyledButton type="button" {...props}>
    {children}
  </StyledButton>
)

const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  color: var(--color-white);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: var(--color-blue);
  border: 1px solid var(--color-blue);
  border-radius: var(--border-radius-main);

  &:focus {
    box-shadow: 0 0 0 2px var(--color-button-focus);
  }
`
