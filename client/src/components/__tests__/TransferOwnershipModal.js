import React from 'react'
import { render } from 'react-testing-library'

import TransferOwnershipModal from '../TransferOwnershipModal'

test('snapshot', () => {
  const { container } = render(
    <TransferOwnershipModal
      nextPage={jest.fn()}
      loading={true}
      disabledNextPage={true}
    >
      Test
    </TransferOwnershipModal>
  )
  expect(container.firstChild).toMatchSnapshot()
})
