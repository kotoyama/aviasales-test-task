import { defaultSort } from '../lib'
import { $sortGroup } from './private'

export const $activeSort = $sortGroup.map(
  (group) => group.find((item) => item.active) || defaultSort,
)
