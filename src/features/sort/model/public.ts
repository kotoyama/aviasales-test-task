import { root } from '~/root'

import { $buttonGroup } from './private'

export const sort = root.domain('sort-public')

export const $sortType = $buttonGroup.map((tabs) =>
  tabs.reduce((acc, { id, active }) => (active ? id : acc), tabs[0].id),
)
