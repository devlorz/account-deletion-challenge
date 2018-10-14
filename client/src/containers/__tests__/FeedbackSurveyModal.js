import React from 'react'
import { render } from 'react-testing-library'

import FeedbackSurveyModal from '../FeedbackSurveyModal'

test('snapshot', () => {
  const { container } = render(
    <FeedbackSurveyModal
      title="Why would you leave us?"
      onSubmit={jest.fn()}
      onBackButton={jest.fn()}
      showCommentForm
      comment={''}
      onChangeComment={jest.fn()}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
