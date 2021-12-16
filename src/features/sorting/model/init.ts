import { $sortGroup, sortChanged } from './private'

$sortGroup.on(sortChanged, (group, type) =>
  group.map((item) => ({ ...item, active: item.type === type })),
)
