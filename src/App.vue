<template lang="pug">
#app
    div 路由列表：
    router-link(to='/') 首页 <br/>
    router-link(to='/button') button <br/>
    router-link(to='/form') form <br/>
    router-link(to='/menu') menu <br/>
    div === 以下是页面内容 ===
    router-view
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="stylus" type="text/stylus">
body
    font-size 14px

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
</style>
