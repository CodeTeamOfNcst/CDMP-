<template>

</template>
<style scoped>

</style>

<script>
    export default {
        layout: 'admina',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>