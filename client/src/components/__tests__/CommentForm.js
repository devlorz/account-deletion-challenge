import React from 'react'
import { render } from 'react-testing-library'

import CommentForm from '../CommentForm'

test('snapshot', () => {
  const { container } = render(
    <CommentForm
      isFocusCommentBox={true}
      onChangeComment={jest.fn()}
      comment={'Comment Text'}
      showCommentForm
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
