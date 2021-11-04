import React from 'react'
import { styled } from '@linaria/react'

import { Box } from '~/ui/components'

export const Wrapper: React.FC = ({ children }) => (
  <Wrap>
    <Box>
      <InnerWrap>{children}</InnerWrap>
    </Box>
  </Wrap>
)

const Wrap = styled.li`
  margin-bottom: 20px;
`

const InnerWrap = styled.div`
  padding: 20px;
`
