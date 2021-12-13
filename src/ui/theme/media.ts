const breakpoints = {
  sm: 480,
  md: 768,
}

type Breakpoint = keyof typeof breakpoints

const breakpoint = (value: Breakpoint) => `${breakpoints[value]}px`

export const greaterThan = (value: Breakpoint) =>
  `@media (min-width: ${breakpoint(value)})`
export const lessThan = (value: Breakpoint) =>
  `@media (max-width: ${breakpoint(value)})`
export const between = (min: Breakpoint, max: Breakpoint) =>
  `@media (min-width: ${breakpoint(min)}) and (max-width: ${breakpoint(max)})`
