import React from 'react'

import { TicketsList } from 'features/tickets'
import { Layout, Logo } from 'ui/components'

import '../init'
import { AppGate } from './model'

export const App: React.FC = () => (
  <>
    <AppGate />
    <Logo />
    <Layout>
      <TicketsList />
    </Layout>
  </>
)
