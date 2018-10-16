import React from 'react'
import { render } from 'react-testing-library'

import AssignOwnership from '../AssignOwnership'

test('snapshot', () => {
  const { container } = render(
    <AssignOwnership
      user={{
        email: 'ross@example.com',
        name: 'Ross Lynch',
        _id: 'user1',
      }}
      transferData={[
        {
          status: 'completed',
          toUser: {
            name: 'Ryan Lynch',
            _id: 'user2',
          },
          workspaceId: 'workspace1',
        },
      ]}
      workspace={{
        displayName: 'Lightning strike',
        spaceId: 'workspace1',
        transferableMembers: [
          {
            name: 'Ryan Lynch',
            _id: 'user2',
          },
          {
            name: 'Riker Lynch',
            _id: 'user3',
          },
          {
            name: 'Rydel Lynch',
            _id: 'user4',
          },
        ],
      }}
      onAssignToUser={jest.fn()}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
