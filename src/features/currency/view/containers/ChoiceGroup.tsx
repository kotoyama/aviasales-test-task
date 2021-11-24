import React from 'react'
import { useList } from 'effector-react'
import { styled } from '@linaria/react'

import { Choice } from '~/ui/components'

import { $currencies, currencyChanged } from '../../model/private'

export const ChoiceGroup: React.FC = () => (
  <StyledChoiceGroup role="group">
    {useList($currencies, ({ label, active, type }) => (
      <Choice
        id={type}
        name="currency"
        label={label}
        checked={active}
        onChange={() => currencyChanged(type)}
      />
    ))}
  </StyledChoiceGroup>
)

const StyledChoiceGroup = styled.div`
  display: flex;
`
