import React from 'react'
import { render } from 'react-testing-library'

import InputForm from '../InputForm'

test('snapshot', () => {
  const { container } = render(
    <InputForm
      stack={'stack'}
      canComment={true}
      placeHolder={'placeholder'}
      isRender={true}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
