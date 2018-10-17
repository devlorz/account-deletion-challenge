import PropTypes from 'prop-types'
import React from 'react'

import InputForm from './InputForm'

const FeedbackFormItem = ({ item, isChecked, onCheckBoxClick }) => (
  <div>
    <label>
      <input
        type="checkbox"
        defaultChecked={isChecked}
        onClick={onCheckBoxClick}
      />
      {item.title}
    </label>
    <InputForm
      stack={item.stack}
      canComment={item.canComment}
      placeHolder={item.placeHolder}
      isRender={isChecked}
    />
  </div>
)

FeedbackFormItem.PropTypes = {
  item: PropTypes.object,
  isChecked: PropTypes.bool,
  onCheckBoxClick: PropTypes.func,
}

export default FeedbackFormItem
