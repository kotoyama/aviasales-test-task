import React from 'react'
import { useList } from 'effector-react'
import { styled } from '@linaria/react'

import { Checkbox } from 'ui/components'

import { $filters, filterChanged } from '../../model/private'

export const CheckboxGroup: React.FC = () => (
  <StyledCheckboxGroup role="group">
    {useList($filters, ({ label, active, stops }) => (
      <Checkbox
        label={label}
        checked={active}
        onChange={() => filterChanged(stops)}
      />
    ))}
  </StyledCheckboxGroup>
)

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`
