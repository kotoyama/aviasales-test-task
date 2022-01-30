import React from 'react'
import { useList } from 'effector-react'
import { styled } from '@linaria/react'

import { lessThan } from '~/ui'

import { useScrollTo } from '../../hooks'
import { ButtonGroupItem } from '../parts'
import { $sortGroup, sortChanged } from '../../model/private'

const BASE_OFFSET = 60

export const ButtonGroup = () => {
  const listRef = React.useRef<HTMLDivElement | null>(null)
  const scrollToBtn = useScrollTo({
    containerRef: listRef,
    baseOffset: BASE_OFFSET,
  })

  return (
    <StyledButtonGroup ref={listRef} role="group">
      {useList($sortGroup, ({ type, label, active }) => (
        <ButtonGroupItem
          id={type}
          label={label}
          active={active}
          onScrollTo={scrollToBtn}
          onClick={() => sortChanged(type)}
        />
      ))}
    </StyledButtonGroup>
  )
}

const StyledButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: span 1;
  grid-column: 2 / 3;

  ${lessThan('lg')} {
    grid-row: 2 / 3;
    grid-column: 1;
    padding: 0 0 20px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
  }
`
