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
  font: inherit;
  letter-spacing: 0.5px;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--color-white);
  border: 1px solid var(--color-lightgray);

  &:focus {
    box-shadow: 0 0 0 2px var(--color-button-focus);
  }
`
