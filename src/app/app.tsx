import React from 'react'

import { SortTabs } from '~/features/sort'
import { Filters } from '~/features/filters'
import { TicketsList } from '~/features/tickets'
import { ScrollToTop } from '~/features/scroll-to-top'

import { Container, Layout, Logo } from '~/ui/components'

import '../init'
import { AppGate } from './model'

export const App: React.FC = () => (
  <>
    <AppGate />
    <Layout>
      <Logo />
      <ScrollToTop />
      <Container>
        <Filters />
        <SortTabs />
        <TicketsList />
      </Container>
    </Layout>
  </>
)
