type Classes = {
  [x: string]: boolean
}

export const classNames = (classes: Classes): string =>
  Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(' ')
