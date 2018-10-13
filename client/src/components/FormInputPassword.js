import PropTypes from 'prop-types'
import React from 'react'

const FormInputPassword = props => {
  const { onTypeEmail, errorMessage } = props
  return (
    <div>
      <input
        type="text"
        placeholder="ross@example.com"
        style={{ width: '350px' }}
        onChange={onTypeEmail}
      />
      <span style={{ color: 'red' }}>{errorMessage}</span>
    </div>
  )
}

FormInputPassword.PropTypes = {
  onTypeEmail: PropTypes.func,
  errorMessage: PropTypes.string,
}

export default FormInputPassword
