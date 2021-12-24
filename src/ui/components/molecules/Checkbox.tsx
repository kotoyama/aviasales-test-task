import React from 'react'
import { styled } from '@linaria/react'

import { Icon } from '../atoms/Icon'

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Checkbox: React.FC<Props> = ({ id, checked, label, ...props }) => (
  <Label htmlFor={id}>
    <Input id={id} type="checkbox" checked={checked} {...props} />
    <StyledCheckbox>{checked && <Icon icon="check" />}</StyledCheckbox>
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
  user-select: none;

  &:hover {
    background: #f1fcff;
  }

  &:focus-within {
    background: #f1fcff;
    outline: 0;
  }
`

const Input = styled.input`
  &:checked + div {
    border: 1px solid var(--color-blue);
  }
`

const StyledCheckbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  margin-left: 20px;
  border: 1px solid var(--color-grayblue);
  border-radius: 2px;
`
