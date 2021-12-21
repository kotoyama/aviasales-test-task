import React from 'react'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '../Button'

describe('Button component', () => {
  const buttonText = 'Click me'
  const clickHandler = jest.fn()

  test('should render correctly', () => {
    const component = renderer.create(
      <Button onClick={clickHandler}>{buttonText}</Button>,
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should be clickable', () => {
    const { getByText } = render(
      <Button onClick={clickHandler}>{buttonText}</Button>,
    )
    userEvent.click(getByText(buttonText))
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })
})
