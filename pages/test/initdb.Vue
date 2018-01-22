<template lang="pug">
    .wrapper
        h1 {{ data }}
        h1 {{ title }}
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
        let { data } = await axios.get(`http://localhost:3000/api/initDataBase`)
        return { title: data.status }
    }
}
</script>

<style scoped>

</style>
