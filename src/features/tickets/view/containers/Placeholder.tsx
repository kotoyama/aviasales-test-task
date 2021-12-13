import React from 'react'
import { styled } from '@linaria/react'

import { Skeleton } from '~/ui'

import { Wrapper } from '../parts'

export const Placeholder: React.FC = () => (
  <Wrapper>
    <Skeleton width="40%" height="28px" />
    <InnerWrap>
      <Column>
        <Skeleton width="100%" height="11px" marginBottom="8px" />
        <Skeleton width="75%" height="9px" />
      </Column>
      <Column>
        <Skeleton width="100%" height="11px" marginBottom="8px" />
        <Skeleton width="75%" height="9px" />
      </Column>
    </InnerWrap>
  </Wrapper>
)

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
`
