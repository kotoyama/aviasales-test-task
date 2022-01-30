import React from 'react'
import { styled } from '@linaria/react'

import { lessThan } from '~/ui'

import { ButtonGroup } from '../containers'

export const SortTabs = () => (
  <StyledTabs>
    <ButtonGroup />
  </StyledTabs>
)

const StyledTabs = styled.div`
  ${lessThan('lg')} {
    width: 100%;
    overflow: hidden;

    &:after {
      display: block;
      margin-bottom: -20px;
      content: '';
    }
  }
`
