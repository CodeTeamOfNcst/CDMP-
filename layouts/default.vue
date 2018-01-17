<template>

  <div class="allBody">
    <my-header/>
    <div class="mainwidth">
      <nuxt/>
    </div>
    <my-footer/>
  </div>
</template>

<script>
    import MyHeader from '../components/Header.vue'
    import MyFooter from '../components/Footer.vue'

    export default {
        components: {
            MyHeader,
            MyFooter
        }
    }
</script>

<style>
  .allBody{
    width: 100%;
    background: #ffffff;
  }

  .mainwidth{
    width: 80%;
    margin-left: 10%;
    background: white;
  }
  .container
  {
    margin: 0;
    width: 100%;
    text-align: center;
    overflow: hidden;
    min-height: 800px;
    height: auto;
  }
  .button, .button:visited
  {
    display: inline-block;
    color: #063961;
    letter-spacing: 1px;
    background-color: #fff;
    border: 2px solid #063961;
    text-decoration: none;
    text-transform: uppercase;
    padding: 15px 45px;
  }
  .button:hover, .button:focus
  {
    color: #fff;
    background-color: #063961;
  }

  .title
  {
    color: #505153;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
  }
</style>
