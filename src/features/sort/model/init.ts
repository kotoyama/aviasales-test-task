import { sortTypeChanged } from './private'
import { $buttonGroup } from './public'

$buttonGroup.on(sortTypeChanged, (buttons, type) =>
  buttons.map((item) => ({ ...item, active: item.id === type })),
)
