import React from 'react'
import { styled } from '@linaria/react'

import { CheckboxGroup } from '../containers'

export const Filters: React.FC = () => (
  <Wrap>
    <InnerWrap>
      <Title>Количество пересадок</Title>
      <CheckboxGroup />
    </InnerWrap>
  </Wrap>
)

const Wrap = styled.aside`
  height: 262px;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-radius: var(--border-radius-main);
  box-shadow: var(--box-shadow-main);
  background-color: var(--color-white);

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1 / 2;
  }
`

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`

const Title = styled.span`
  display: block;
  margin-left: 20px;
  margin-bottom: 10px;
  line-height: 1;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`
