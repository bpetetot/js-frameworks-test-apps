import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './LikeBtn.css'

class LikeBtn extends Component {

  state = {
    likes: Number(this.props.likes),
    isLiked: false
  }

  handleClick = () => {
    this.setState((state) => ({
      likes: state.isLiked ? state.likes - 1 : state.likes + 1,
      isLiked: !state.isLiked
    }))
  }

  render() {
    const { isLiked, likes } = this.state
    return (
      <div className={isLiked ? "like-btn liked" : "like-btn"} onClick={this.handleClick}>
        <i className="material-icons">favorite</i>
        <span>{likes}</span>
      </div>
    )
  }
}

LikeBtn.propTypes = {
  likes: PropTypes.string,
}

export default LikeBtn