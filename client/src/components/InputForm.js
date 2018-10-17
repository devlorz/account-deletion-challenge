import PropTypes from 'prop-types'
import React from 'react'

const InputForm = ({ stack, canComment, placeHolder, isRender }) => {
  const prefill = placeHolder && canComment ? placeHolder : ''
  return !isRender ? null : (
    <div style={!canComment ? { display: 'none' } : null}>
      <input type="text" name={stack} placeholder={prefill} />
    </div>
  )
}

InputForm.PropTypes = {
  stack: PropTypes.string,
  canComment: PropTypes.bool,
  placeHolder: PropTypes.string,
  isRender: PropTypes.bool,
}

export default InputForm
