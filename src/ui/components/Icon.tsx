import * as React from 'react'

import { ReactComponent as Loader } from '../icons/loader.svg'
import { ReactComponent as Logo } from '../icons/logo.svg'
import { ReactComponent as Check } from '../icons/check.svg'

interface IconConfig {
  component: React.FC<React.SVGAttributes<SVGElement>>
  width?: number
  height?: number
  fill?: string
}

interface IconsConfig {
  [key: string]: IconConfig
}

const icons: IconsConfig = {
  loader: {
    component: Loader,
    width: 50,
    height: 50,
    fill: '#007aff',
  },
  logo: {
    component: Logo,
    width: 82,
    height: 89,
    fill: '#2196F3',
  },
  check: {
    component: Check,
    width: 12,
    height: 8,
  },
}

type Props = {
  icon: keyof typeof icons
} & React.SVGAttributes<unknown>

export const Icon: React.FC<Props> = ({ icon, ...props }) => {
  const { component, width, height, fill } = icons[icon]
  const IconComponent = component

  return (
    <IconComponent
      width={width || props.width}
      height={height || props.height}
      fill={fill || props.fill}
      {...props}
    />
  )
}
