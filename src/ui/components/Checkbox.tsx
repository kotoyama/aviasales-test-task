import React from 'react'
import { styled } from '@linaria/react'

import { Icon } from './Icon'

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox: React.FC<Props> = ({ id, checked, label, ...props }) => (
  <Label htmlFor={id}>
    <Input id={id} type="checkbox" checked={checked} {...props} />
    <StyledCheckbox checked={checked || false}>
      <Icon icon="check" />
    </StyledCheckbox>
    {label}
  </Label>
)

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    background: #f1fcff;
  }

  &:focus-within {
    background: #f1fcff;
    outline: 0;
  }
`

const Input = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 20px;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: 1px solid var(--color-grayblue);

  & svg {
    visibility: ${({ checked }) => (checked ? 'visible' : 'hidden')};
  }
`
