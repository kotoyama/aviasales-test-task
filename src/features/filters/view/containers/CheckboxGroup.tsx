import React from 'react'
import { useList } from 'effector-react'
import { styled } from '@linaria/react'

import { Checkbox } from 'ui/components'

import { $filters, filterChanged } from '../../model/private'

export const CheckboxGroup: React.FC = () => (
  <StyledCheckboxGroup role="group">
    {useList($filters, ({ id, type, label, active }) => (
      <Checkbox
        id={id}
        label={label}
        checked={active}
        onChange={() => filterChanged(id)}
      />
    ))}
  </StyledCheckboxGroup>
)

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`
