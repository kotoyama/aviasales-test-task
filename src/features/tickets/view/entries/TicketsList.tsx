import React from 'react'
import { styled } from '@linaria/react'
import { useStore } from 'effector-react'

import { Button } from '~/ui/components'

import { Card, Placeholder } from '../containers'
import {
  $limit,
  $results,
  $loading,
  $firstBundleLoaded,
  limitChanged,
} from '../../model/private'

export const TicketsList: React.FC = () => {
  const firstBundleLoaded = useStore($firstBundleLoaded)
  const results = useStore($results)
  const loading = useStore($loading)
  const limit = useStore($limit)

  return (
    <Wrap>
      <List>
        {firstBundleLoaded
          ? results
              .slice(0, limit)
              .map((ticket) => <Card key={ticket.id} ticket={ticket} />)
          : [...Array(5)].map((_, i) => <Placeholder key={i} />)}
        {results.length === 0 && !loading && (
          <NotFound>Ничего не найдено</NotFound>
        )}
      </List>
      {results.length > 0 && (
        <Button onClick={() => limitChanged()}>Показать ещё 5 билетов!</Button>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  grid-column: 2 / 3;

  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 3 / 4;
  }
`

const List = styled.ul``

const NotFound = styled.h2`
  font-size: 18px;
  text-align: center;
`
