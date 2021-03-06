import React from 'react'
import { styled } from '@linaria/react'

import { greaterThan, lessThan } from '~/shared/ui/theme'

type Props = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Choice = ({ id, label, ...props }: Props) => (
  <Wrap>
    <Input id={id} type="radio" {...props} />
    <Label htmlFor={id}>{label}</Label>
  </Wrap>
)

const Wrap = styled.div`
  ${greaterThan('sm')} {
    &:first-child label {
      border-right: none;
      border-radius: var(--border-radius-main) 0 0 var(--border-radius-main);
    }

    &:last-child label {
      border-left: none;
      border-radius: 0 var(--border-radius-main) var(--border-radius-main) 0;
    }
  }

  ${lessThan('sm')} {
    &:first-child label {
      border-bottom: none;
      border-radius: var(--border-radius-main) var(--border-radius-main) 0 0;
    }

    &:last-child label {
      border-top: none;
      border-radius: 0 0 var(--border-radius-main) var(--border-radius-main);
    }
  }
`

const Input = styled.input`
  &:checked + label {
    color: var(--color-white);
    background: var(--color-blue);
    border-color: var(--color-blue);
  }
`

const Label = styled.label`
  display: block;
  padding: 12px 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-blue);
  text-align: center;
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--color-lightgray);

  &:hover {
    background-color: var(--color-radio-hover);
    border-color: var(--color-blue);
  }
`
