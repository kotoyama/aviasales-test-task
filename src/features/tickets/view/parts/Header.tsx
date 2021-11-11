import React from 'react'
import { styled } from '@linaria/react'

import { Ticket } from '~/entities'

import { formatPrice } from '~/lib/price'

type Props = Omit<Ticket, 'id' | 'segments' | 'totalDuration' | 'totalStops'>

export const Header: React.FC<Props> = ({ price, logo, carrier }) => (
  <Wrap>
    <Price>{formatPrice(price)}</Price>
    <LogoWrap>
      <Logo src={logo} alt={carrier} />
    </LogoWrap>
  </Wrap>
)

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Price = styled.span`
  font-size: 24px;
  color: var(--color-blue);
`

const LogoWrap = styled.div`
  height: 36px;
`

const Logo = styled.img`
  height: auto;
`
