import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { feedbackSurveyItems } from '../FeedbackSurveyItems'
import Buttons from '../components/Buttons'
import CommentForm from '../components/CommentForm'

class FeedbackSurveyModal extends React.PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func,
    onBackButton: PropTypes.func,
    title: PropTypes.node,
    showCommentForm: PropTypes.bool,
    comment: PropTypes.string,
    onChangeComment: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = this.setInitialState()
  }

  state = {
    isFocusCommentBox: false,
  }

  setInitialState = () => {
    return _.chain(feedbackSurveyItems)
      .map(item => [item.stack, false])
      .fromPairs()
      .value()
  }

  hasAllUnchecked = () => {
    const FeedbackSurveyItems = this.state
    return (
      _.every(FeedbackSurveyItems, val => val === false) &&
      !this.state.isFocusCommentBox
    )
  }

  onToggleFeedback(stack) {
    this.setState({ [stack]: !this.state[stack] })
  }

  onFocusCommentBox = () => {
    this.setState({ isFocusCommentBox: !this.state.isFocusCommentBox })
  }

  renderInputForm({ stack, canComment, placeHolder }) {
    const prefill = placeHolder && canComment ? placeHolder : ''
    return !this.state[stack] ? null : (
      <div style={!canComment ? { display: 'none' } : null}>
        <input type="text" name={stack} ref={stack} placeholder={prefill} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          {_.map(feedbackSurveyItems, (item, key) => (
            <div key={key}>
              <label>
                <input
                  type="checkbox"
                  checked={this.state[item.stack]}
                  onClick={() => this.onToggleFeedback(item.stack)}
                />
                {item.title}
              </label>
              {this.renderInputForm(item)}
            </div>
          ))}
        </div>
        <CommentForm
          isFocusCommentBox={this.state.isFocusCommentBox}
          onChangeComment={this.props.onChangeComment}
          comment={this.props.comment}
          showCommentForm={this.props.showCommentForm}
        />
        <Buttons
          disabled={this.hasAllUnchecked()}
          onBackButton={this.props.onBackButton}
          onSubmit={this.props.onSubmit}
        />
      </div>
    )
  }
}

export default FeedbackSurveyModal
