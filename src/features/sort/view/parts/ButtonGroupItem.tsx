import React from 'react'
import { styled } from '@linaria/react'

import { Button } from '~/ui/components'

type Props = {
  id: string
  label: string
  active: boolean
  onClick: (id: string) => void
}

export const ButtonGroupItem: React.FC<Props> = ({
  id,
  label,
  active,
  onClick,
  ...props
}) => (
  <GroupItem role="checkbox" aria-checked={active}>
    <Button id={id} onClick={() => onClick(id)} {...props}>
      {label}
    </Button>
  </GroupItem>
)

const GroupItem = styled.div`
  &:first-child button {
    border-radius: var(--border-radius-main) 0 0 var(--border-radius-main);
  }

  &:last-child button {
    border-radius: 0 var(--border-radius-main) var(--border-radius-main) 0;
  }

  button {
    border-radius: 0;
  }

  &[aria-checked='false'] {
    button {
      background-color: var(--color-white);
      border-color: var(--color-lightgray);
      color: var(--color-black);
    }

    &:not(:last-child) button {
      border-right-width: 0;
    }
  }
`
