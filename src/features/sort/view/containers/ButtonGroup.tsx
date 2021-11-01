import React from 'react'
import { useList } from 'effector-react'
import { styled } from '@linaria/react'

import { ButtonGroupItem } from '../parts'
import { $buttonGroup, sortTypeChanged } from '../../model/private'

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
  margin-bottom: 20px; // TODO: убрать потом
`
