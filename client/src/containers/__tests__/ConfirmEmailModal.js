import React from 'react'
import { render } from 'react-testing-library'

import ConfirmEmailModal from '../ConfirmEmailModal'

test('snapshot', () => {
  const { container } = render(
    <ConfirmEmailModal
      onClickToDelete={jest.fn()}
      onBackButton={jest.fn()}
      email={'test@mail.com'}
      onTypeEmail={jest.fn()}
      terminateAccountStatus={{}}
      resetTerminateAccountStatus={jest.fn()}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
