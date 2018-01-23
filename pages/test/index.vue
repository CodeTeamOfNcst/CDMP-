<template lang="pug">
    .wrapper
        h1 {{ data }}
        h1 {{title}}
        h1 {{ addResult }}
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
        let  addDataResult  = await axios.get(`http://localhost:3000/api/initDataBase`)
        return { 
            title: data.message,
            addResult: addDataResult.message
        }
    }
}
</script>

<style scoped>

</style>
