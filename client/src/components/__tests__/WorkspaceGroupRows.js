import React from 'react'
import { render } from 'react-testing-library'

import WorkspaceGroupRows from '../WorkspaceGroupRows'

test('snapshot', () => {
  const { container } = render(
    <WorkspaceGroupRows
      workspaces={[
        {
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
        },
      ]}
      groupTitle="The following workspaces require ownership transfer:"
      shouldDisplay={true}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
})
