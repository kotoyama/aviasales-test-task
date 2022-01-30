import React from 'react'

import { Filters } from '~/features/filters'
import { SortTabs } from '~/features/sorting'
import { CurrencySwitcher } from '~/features/currency'
import { ScrollToTop } from '~/features/scroll-to-top'
import { TicketsList, LoadingBar } from '~/features/tickets'
import { Container, Layout, Sidebar, Header } from '~/shared/ui'

import '../init'
import { AppGate } from './model'

export const App = () => (
  <>
    <AppGate />
    <Layout>
      <LoadingBar />
      <Header />
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
