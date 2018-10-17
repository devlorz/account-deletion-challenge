import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { feedbackSurveyItems } from '../FeedbackSurveyItems'
import Buttons from '../components/Buttons'
import CommentForm from '../components/CommentForm'
import FeedbackFormItem from '../components/FeedbackFormItem'

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

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
          {_.map(feedbackSurveyItems, (item, key) => (
            <FeedbackFormItem
              item={item}
              key={key}
              isChecked={this.state[item.stack]}
              onCheckBoxClick={() => this.onToggleFeedback(item.stack)}
            />
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
