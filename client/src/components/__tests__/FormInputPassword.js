import React from 'react'
import { render } from 'react-testing-library'

import FormInputPassword from '../FormInputPassword'

test('snapshot', () => {
  const { container } = render(
    <FormInputPassword onTypeEmail={jest.fn()} errorMessage={''} />
  )
  expect(container.firstChild).toMatchSnapshot()
})
