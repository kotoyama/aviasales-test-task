import { root } from 'root'

import { buttonGroup, SortButton } from '../types'

export const sort = root.domain('sort-public')

export const $buttonGroup = sort.store<SortButton[]>(Object.values(buttonGroup))
export const $sortType = $buttonGroup.map((tabs) =>
  tabs.reduce((acc, { id, active }) => (active ? id : acc), tabs[0].id),
)
