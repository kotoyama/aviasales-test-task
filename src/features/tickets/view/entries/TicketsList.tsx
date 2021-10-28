import React from 'react'
import { useStore } from 'effector-react'
import { styled } from '@linaria/react'

import { Card } from '../containers'
import { $loading } from '../../model/private'
import { $tickets } from '../../model/public'

export const TicketsList: React.FC = () => {
  const tickets = useStore($tickets)
  const loading = useStore($loading)

  if (loading) return null

  return (
    <Wrap>
      {tickets.slice(0, 5).map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
      {tickets.length === 0 && <NotFound>Ничего не найдено</NotFound>}
    </Wrap>
  )
}

const Wrap = styled.ul`
  grid-column: 2 / 3;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3 / 4;
  }
`

const NotFound = styled.h2`
  font-size: 18px;
  text-align: center;
`
