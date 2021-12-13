import React from 'react'
import { styled } from '@linaria/react'

import { lessThan } from '~/ui'

import { ButtonGroup } from '../containers'

export const SortTabs: React.FC = () => (
  <StyledTabs>
    <ButtonGroup />
  </StyledTabs>
)

const StyledTabs = styled.div`
  ${lessThan('lg')} {
    overflow: hidden;
    width: 100%;

    &:after {
      content: '';
      display: block;
      margin-bottom: -20px;
    }
  }
`
