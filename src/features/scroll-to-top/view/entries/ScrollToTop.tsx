import React from 'react'
import { styled } from '@linaria/react'

import { Icon } from 'ui/components'
import { classNames } from 'lib/classNames'

export const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = React.useState(false)

  const onScrollHandler = React.useCallback(() => {
    const triggerHeight = 400
    const currentScrollHeight = window.pageYOffset
    if (!showButton && currentScrollHeight > triggerHeight) {
      setShowButton(true)
    } else if (showButton && currentScrollHeight <= triggerHeight) {
      setShowButton(false)
    }
  }, [showButton])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  React.useEffect(() => {
    window.addEventListener('scroll', onScrollHandler)
    return () => window.removeEventListener('scroll', onScrollHandler)
  }, [onScrollHandler])

  return (
    <Button className={classNames({ show: showButton })} onClick={scrollTop}>
      <Icon icon="arrow" />
    </Button>
  )
}

const Button = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  box-shadow: var(--box-shadow-main);
  background-color: var(--color-white);
  transition: all 200ms;

  &.show {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    opacity: 1;
    background-color: var(--color-blue);

    svg path {
      fill: white;
    }
  }
`