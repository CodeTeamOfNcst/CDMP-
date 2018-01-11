<template lang="pug">
    div
        input#name(type="email")
        input.caa(type="number")
        div
            input(type="text")
</template>

<script>
  export default {
    data () {
      return {
        radio3: '北京',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海',
        inputvalue:"211111333"
      }
    },
    methods:{
        click1: () => {
            return alert('ok')
        }
    }
  }
</script>
