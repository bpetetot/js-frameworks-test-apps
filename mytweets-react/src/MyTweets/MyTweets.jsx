import React from 'react'
import PropTypes from 'prop-types'

import './MyTweets.css'
import Tweet from '../Tweet/Tweet'

const MyTweets = (props) => {
  return (
    <div>
      <h1 className="title">My tweets</h1>
      <div className="tweet-list">
        { props.tweets.map((tweet, i) => <Tweet key={i} {...tweet} />)}
      </div>
    </div>
  )
}

MyTweets.propTypes = {
  tweets: PropTypes.array.isRequired
}

export default MyTweets