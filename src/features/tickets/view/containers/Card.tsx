import React from 'react'
import { styled } from '@linaria/react'
import { nanoid } from 'nanoid'

import { Ticket } from '~/entities'

import { Header, Segment, Wrapper } from '../parts'

type Props = {
  ticket: Ticket
}

export const Card: React.FC<Props> = React.memo(({ ticket }) => (
  <Wrapper>
    <Header
      logo={ticket.logo}
      price={ticket.price}
      carrierName={ticket.carrierName}
    />
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
