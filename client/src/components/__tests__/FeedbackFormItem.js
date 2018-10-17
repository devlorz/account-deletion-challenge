import React from 'react'
import { render } from 'react-testing-library'

import FeedbackFormItem from '../FeedbackFormItem'

test('snapshot', () => {
  const { container } = render(
    <FeedbackFormItem
      item={{
        canComment: true,
        placeHolder: 'Please specify',
        stack: 'others',
        title: 'Other reason(s)...',
      }}
      isChecked={true}
      onCheckBoxClick={jest.fn()}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
