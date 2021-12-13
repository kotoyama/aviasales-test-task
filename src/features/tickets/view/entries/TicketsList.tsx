import React from 'react'
import { styled } from '@linaria/react'
import { useStore } from 'effector-react'

import { plural } from '~/lib/plural'
import { Button, lessThan } from '~/ui'

import { Card, Placeholder } from '../containers'
import {
  $limit,
  $results,
  $loading,
  $canLoadMore,
  $firstChunkLoaded,
  limitChanged,
  CHUNK_SIZE,
} from '../../model/private'

export const TicketsList: React.FC = () => {
  const firstChunkLoaded = useStore($firstChunkLoaded)
  const canLoadMore = useStore($canLoadMore)
  const results = useStore($results)
  const loading = useStore($loading)
  const limit = useStore($limit)

  return (
    <Wrap>
      <List>
        {firstChunkLoaded
          ? results
              .slice(0, limit)
              .map((ticket) => <Card key={ticket.id} ticket={ticket} />)
          : [...Array(CHUNK_SIZE)].map((_, i) => <Placeholder key={i} />)}
        {results.length === 0 && !loading && (
          <NotFound>Ничего не найдено</NotFound>
        )}
      </List>
      {results.length > 0 && canLoadMore && (
        <Button onClick={() => limitChanged()}>
          Показать ещё {plural(CHUNK_SIZE, ['билет', 'билета', 'билетов'])}!
        </Button>
      )}
    </Wrap>
  )
}

const Wrap = styled.div`
  grid-column: 2 / 3;

  ${lessThan('lg')} {
    grid-column: 1;
    grid-row: 3 / 4;
  }
`

const List = styled.ul``

const NotFound = styled.h2`
  font-size: 18px;
  text-align: center;
`
