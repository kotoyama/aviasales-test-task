const breakpoints = {
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
}

type Breakpoint = keyof typeof breakpoints

export const greaterThan = (value: Breakpoint) =>
  `@media (min-width: calc(${breakpoints[value] + 0.02}px))`

export const lessThan = (value: Breakpoint) =>
  `@media (max-width: ${breakpoints[value]}px)`
