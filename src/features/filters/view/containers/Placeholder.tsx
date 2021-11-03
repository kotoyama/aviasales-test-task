import React from 'react'
import { styled } from '@linaria/react'

import { Skeleton } from 'ui/components'

// TODO: rewrite
export const Placeholder: React.FC = () => (
  <Wrap>
    <Skeleton width="100%" height="24px" marginBottom="16px" />
    <Skeleton width="100%" height="24px" marginBottom="16px" />
    <Skeleton width="100%" height="24px" marginBottom="16px" />
    <Skeleton width="100%" height="24px" marginBottom="16px" />
    <Skeleton width="100%" height="24px" marginBottom="16px" />
  </Wrap>
)

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px 0;
`
