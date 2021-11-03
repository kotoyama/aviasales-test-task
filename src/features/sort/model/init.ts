import { $buttonGroup, sortTypeChanged } from './private'

$buttonGroup.on(sortTypeChanged, (buttons, type) =>
  buttons.map((item) => ({ ...item, active: item.id === type })),
)
