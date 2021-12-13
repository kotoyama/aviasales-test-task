const breakpoints = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

type Breakpoint = keyof typeof breakpoints

const breakpoint = (value: Breakpoint) => `${breakpoints[value]}px`

export const greaterThan = (value: Breakpoint) =>
  `@media (min-width: ${breakpoint(value)})`

export const lessThan = (value: Breakpoint) =>
  `@media (max-width: ${breakpoint(value)})`
