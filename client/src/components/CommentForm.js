import PropTypes from 'prop-types'
import React from 'react'

const CommentForm = ({
  isFocusCommentBox,
  onChangeComment,
  comment,
  showCommentForm,
}) =>
  !showCommentForm ? null : (
    <div style={{ marginTop: '2rem' }}>
      Comments:
      <div>
        <textarea
          type="text"
          name="comment"
          style={
            isFocusCommentBox
              ? { border: '1px solid blue' }
              : { border: '1px solid black' }
          }
          onChange={onChangeComment}
          value={comment}
        />
      </div>
    </div>
  )

CommentForm.PropTypes = {
  isFocusCommentBox: PropTypes.bool,
  onChangeComment: PropTypes.func,
  comment: PropTypes.string,
  showCommentForm: PropTypes.bool,
}

export default CommentForm
