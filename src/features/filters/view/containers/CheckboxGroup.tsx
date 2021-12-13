import React from 'react'
import { useList } from 'effector-react'
import { styled } from '@linaria/react'

import { Checkbox } from '~/ui'

import { $filters, filterChanged } from '../../model/private'

export const CheckboxGroup: React.FC = () => (
  <StyledCheckboxGroup role="group">
    {useList($filters, ({ label, active, type }) => (
      <Checkbox
        id={type.toString()}
        label={label}
        checked={active}
        onChange={() => filterChanged(type)}
      />
    ))}
  </StyledCheckboxGroup>
)

const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
`
