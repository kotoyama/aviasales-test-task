import React from 'react'
import { styled } from '@linaria/react'
import { nanoid } from 'nanoid'

import { Ticket } from '../../types'
import { Header, Segment } from '../parts'

type Props = {
  ticket: Ticket
}

export const Card: React.FC<Props> = React.memo(({ ticket }) => (
  <Item>
    <Header price={ticket.price} logo={ticket.logo} carrier={ticket.carrier} />
    <Segments>
      {ticket.segments.map((segment) => (
        <Segment key={nanoid()} segment={segment} />
      ))}
    </Segments>
  </Item>
))

const Item = styled.li`
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: var(--border-radius-main);
  box-shadow: var(--box-shadow-main);
  background-color: var(--color-white);
`

const Segments = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`
