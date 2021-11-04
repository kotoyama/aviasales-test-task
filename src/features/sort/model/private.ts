import { root } from '~/root'

import { buttonGroup, SortType, SortButton } from '~/entities'

export const sort = root.domain('sort')

export const $buttonGroup = sort.store<SortButton[]>(Object.values(buttonGroup))
export const sortTypeChanged = sort.event<SortType>()
