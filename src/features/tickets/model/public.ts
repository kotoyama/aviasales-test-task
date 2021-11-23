import { attach } from 'effector'

import { getSearchIdReqFx } from '../api'

export const loadSearchIdFx = attach({
  effect: getSearchIdReqFx,
})
