import React from 'react'

import { ReactComponent as Logo } from '~/shared/ui/icons/logo.svg'
import { ReactComponent as Check } from '~/shared/ui/icons/check.svg'
import { ReactComponent as Arrow } from '~/shared/ui/icons/arrow.svg'

interface IconConfig {
  component: React.FC<React.SVGProps<SVGSVGElement>>
  width?: number
  height?: number
  fill?: string
}

interface IconsConfig {
  [key: string]: IconConfig
}

const icons: IconsConfig = {
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
  arrow: {
    component: Arrow,
    width: 16,
    height: 16,
  },
}

type Props = {
  icon: keyof typeof icons
} & React.SVGAttributes<SVGElement>

export const Icon = ({ icon, ...props }: Props) => {
  const { component: Component, width, height, fill } = icons[icon]
  return Component ? (
    <Component
      width={width || props.width}
      height={height || props.height}
      fill={fill || props.fill}
      {...props}
    />
  ) : null
}
