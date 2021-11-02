import React from 'react'
import { useList } from 'effector-react'
import { styled } from '@linaria/react'

import { ButtonGroupItem } from '../parts'
import { sortTypeChanged } from '../../model/private'
import { $buttonGroup } from '../../model/public'

export const ButtonGroup: React.FC = () => (
  <StyledButtonGroup role="group">
    {useList($buttonGroup, ({ id, ...props }) => (
      <ButtonGroupItem id={id} onClick={() => sortTypeChanged(id)} {...props} />
    ))}
  </StyledButtonGroup>
)

const StyledButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: 2 / 3;
  grid-row: span 1;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 2 / 3;
  }
`
