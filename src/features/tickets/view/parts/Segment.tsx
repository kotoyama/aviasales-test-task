import React from 'react'
import { styled } from '@linaria/react'

import { SegmentEntity } from '~/entities'
import { plural } from '~/lib/plural'

import { formatDuration, getTimeInterval } from '../../lib'

type Props = {
  segment: SegmentEntity
}

export const Segment = React.memo(({ segment }: Props) => (
  <Wrap>
    <RowWrap>
      <Title>
        {segment.origin} – {segment.destination}
      </Title>
      <Description>
        {getTimeInterval(segment.date, segment.duration)}
      </Description>
    </RowWrap>
    <RowWrap>
      <Title>В Пути</Title>
      <Description>{formatDuration(segment.duration)}</Description>
    </RowWrap>
    <RowWrap>
      <Title>
        {plural(
          segment.stops.length,
          ['пересадка', 'пересадки', 'пересадок'],
          'Без пересадок',
        )}
      </Title>
      <Description>
        {segment.stops.length ? segment.stops.join(', ') : 'Прямой'}
      </Description>
    </RowWrap>
  </Wrap>
))

const Wrap = styled.div`
  display: flex;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const RowWrap = styled.div`
  display: flex;
  flex-basis: calc(100% / 3);
  flex-direction: column;

  &:not(:last-child) {
    padding-right: 20px;
  }
`

const Title = styled.span`
  line-height: 1.5;
  color: var(--color-gray);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const Description = styled.span`
  font-size: 14px;
  line-height: 1.5;
`
