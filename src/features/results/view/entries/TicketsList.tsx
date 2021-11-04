import React from 'react'
import { useStore } from 'effector-react'
import { styled } from '@linaria/react'

import { Card, Placeholder } from '../containers'
import { $firstBundleLoaded, $loading, $results } from '../../model/public'

export const TicketsList: React.FC = () => {
  const bundleLoaded = useStore($firstBundleLoaded)
  const loading = useStore($loading)
  const tickets = useStore($results)

  return (
    <List>
      {bundleLoaded
        ? tickets
            .slice(0, 5)
            .map((ticket) => <Card key={ticket.id} ticket={ticket} />)
        : [...Array(5)].map((_, i) => <Placeholder key={i} />)}
      {tickets.length === 0 && !loading && (
        <NotFound>Ничего не найдено</NotFound>
      )}
    </List>
  )
}

const List = styled.ul`
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
