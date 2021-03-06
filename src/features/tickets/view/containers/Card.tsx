import React from 'react'
import { styled } from '@linaria/react'
import { nanoid } from 'nanoid'

import { Ticket } from '~/shared/api'

import { Header, Segment, Wrapper } from '../parts'

type Props = {
  ticket: Ticket
}

export const Card = React.memo(({ ticket }: Props) => (
  <Wrapper>
    <Header price={ticket.price} logo={ticket.logo} carrier={ticket.carrier} />
    <Segments>
      {ticket.segments.map((segment) => (
        <Segment key={nanoid()} segment={segment} />
      ))}
    </Segments>
  </Wrapper>
))

const Segments = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`
