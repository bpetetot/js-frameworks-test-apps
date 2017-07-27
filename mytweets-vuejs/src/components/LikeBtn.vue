<template>
  <div :class="['like-btn', {'liked': data.isLiked}]" >
    <div>
        {{data.likes}}
    </div>
    <i class="material-icons" @click="onClick()">favorite</i>
  </div>
</template>

<script>
export default {
    name: 'like-btn',
    props: [
        'data'
    ],
    methods: {
        onClick() {
            this.$emit('onClickEvent', this.data);
        }
    }
}
</script>

<style>
.like-btn {
   display: flex;
   justify-content: center;
   align-items: center;
   color: #777;
}
.liked {
   color: red;
}
.material-icons {
   cursor: pointer;
   margin-right: 5px;
}  
</style>
