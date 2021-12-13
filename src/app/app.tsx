import React from 'react'

import { SortTabs } from '~/features/sort'
import { Filters } from '~/features/filters'
import { CurrencySwitcher } from '~/features/currency'
import { ScrollToTop } from '~/features/scroll-to-top'
import { TicketsList, LoadingBar } from '~/features/tickets'
import { Container, Layout, Sidebar, Logo } from '~/ui'

import '../init'
import { AppGate } from './model'

export const App: React.FC = () => (
  <>
    <AppGate />
    <Layout>
      <LoadingBar />
      <Logo />
      <ScrollToTop />
      <Container>
        <Sidebar>
          <CurrencySwitcher />
          <Filters />
        </Sidebar>
        <SortTabs />
        <TicketsList />
      </Container>
    </Layout>
  </>
)
