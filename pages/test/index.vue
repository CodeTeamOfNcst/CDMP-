<template lang="pug">
    .wrapper
        h1 {{ data }}
        h1 {{title}}
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            data: 'hello world'
        }
    },
    async asyncData({}) {
        let { data } = await axios.get(`http://localhost:3000/api/test`)
        return { title: data.message }
    }
}
</script>

<style scoped>

</style>
