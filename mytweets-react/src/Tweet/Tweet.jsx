import React from 'react'
import PropTypes from 'prop-types'

import './Tweet.css'
import LikeBtn from '../LikeBtn/LikeBtn'

const Tweet = (props) => {
  return (
    <div className="tweet">
      <h4>{props.content}</h4>
      <LikeBtn likes={props.likes} />
    </div>
  );
};

Tweet.propTypes = {
  content: PropTypes.string,
  likes: PropTypes.string,
}

export default Tweet