import React from 'react'
import { styled } from '@linaria/react'

type Props = {
  width?: string
  height?: string
  marginBottom?: string
} & React.HTMLAttributes<HTMLDivElement>

export const Skeleton: React.FC<Props> = ({
  width,
  height,
  style,
  marginBottom,
  ...props
}) => (
  <StyledSkeleton
    style={{
      width,
      height,
      marginBottom,
      ...style,
    }}
    {...props}
  />
)

const StyledSkeleton = styled.div`
  display: inline-block;
  background-color: var(--color-placeholder);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  width: 100%;
  animation: pulse 0.6s ease-in-out alternate infinite;

  @keyframes pulse {
    from {
      opacity: 0.5;
    }
    to {
      opacity: 1;
    }
  }
`
