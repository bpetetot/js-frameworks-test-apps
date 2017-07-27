<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="tweet-list">
      <tweet v-for="tweet in tweets" :data="tweet"></tweet>
    </div>
  </div>
</template>

<script>
import Tweet from './components/Tweet'

export default {
  name: 'app',
  data() {
    return {
      tweets: [{
        content: 'Angular is the best framework EVER for sure!',
        likes: '5'
      }, {
        content: 'Nop. It is react sorry :)',
        likes: '2'
      }, {
        content: 'Wow guys you are so old-fashioned, plz checkout Vuejs...',
        likes: '9'
      }]
    }
  },
  components: {
    Tweet
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tweet-list {
   width: 60%;
   margin: auto;
   color: #222;
}
</style>
