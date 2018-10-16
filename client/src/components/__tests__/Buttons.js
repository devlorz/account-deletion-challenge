import React from 'react'
import { render } from 'react-testing-library'

import Buttons from '../Buttons'

test('snapshot', () => {
  const { container } = render(
    <Buttons disabled={false} onBackButton={jest.fn()} onSubmit={jest.fn()} />
  )
  expect(container.firstChild).toMatchSnapshot()
})
