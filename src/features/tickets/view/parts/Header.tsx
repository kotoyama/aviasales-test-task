import React from 'react'
import { styled } from '@linaria/react'

import { Ticket } from '~/entities'
import { useCurrency } from '~/features/currency'
import { formatPrice } from '~/lib/price'

type Props = Pick<Ticket, 'price' | 'logo' | 'carrier'>

export const Header = ({ price, logo, carrier }: Props) => {
  const currency = useCurrency()
  return (
    <Wrap>
      <Price>{formatPrice(price, currency)}</Price>
      <img
        src={logo.url}
        width={logo.size[0]}
        height={logo.size[1]}
        title={carrier.name}
        alt={carrier.name}
      />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Price = styled.span`
  font-size: 24px;
  color: var(--color-blue);
`
