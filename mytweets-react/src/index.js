import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import MyTweets from "./MyTweets/MyTweets.jsx";

const tweets = [
  {
    content: "Angular is the best framework EVER for sure!",
    likes: "5"
  },
  {
    content: "Nop. It is react sorry :)",
    likes: "2"
  },
  {
    content: "Wow guys you are so old-fashioned, plz checkout Vuejs...",
    likes: "9"
  }
];

ReactDOM.render(<MyTweets tweets={tweets} />, document.getElementById("root"));
