import PropTypes from 'prop-types'
import React from 'react'

const Buttons = props => {
  const { disabled, onBackButton, onSubmit } = props
  return (
    <div>
      <button onClick={onBackButton}>Back</button>
      <button onClick={onSubmit} disabled={disabled}>
        Next
      </button>
    </div>
  )
}

Buttons.PropTypes = {
  disabled: PropTypes.boolean,
  onBackButton: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default Buttons
