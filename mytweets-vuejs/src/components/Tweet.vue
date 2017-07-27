<template>
  <div class="tweet">
    {{data.content}}
    <like-btn :data="data" @onClickEvent="onClick($event)"></like-btn>
  </div>
</template>

<script>
import LikeBtn from '@/components/LikeBtn'

export default {
    name: 'tweet',
    props: [
        'data'
    ],
    components: {
        LikeBtn
    },
    methods: {
        onClick(tweet) {
            tweet.isLiked ? tweet.likes-- : tweet.likes++;
            tweet.isLiked = !tweet.isLiked;
        }
    }
}
</script>

<style>
  .tweet {
   display: flex;
   justify-content: space-between;
   border: 1px solid #BBB;
   margin: 5px;
   padding: 5px 20px;
}
</style>

