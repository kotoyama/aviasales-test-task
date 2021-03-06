import React from 'react'
import { styled } from '@linaria/react'

import { classNames } from '~/shared/lib/classNames'
import { Icon } from '~/shared/ui'

export const ScrollToTop = () => {
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
    <Button
      aria-label="scroll to top"
      className={classNames({ show: showButton })}
      onClick={scrollTop}
    >
      <Icon icon="arrow" />
    </Button>
  )
}

const Button = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--color-white);
  border-radius: 50%;
  box-shadow: var(--box-shadow-main);
  opacity: 0;
  transition: all 200ms;
  transform: scale(0);

  &.show {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background-color: #fafafa;
  }
`
