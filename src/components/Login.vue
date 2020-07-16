<template>
  <div class="Login">
    <div style="text-align:center;font-size:24px; padding-top:40px"><h1>{{ msg }}</h1></div>
    <div style="text-align:center;font-size:20px"><h1>{{ msg1 }}</h1></div>
    <mt-field label="用户名" placeholder="请输入你的用户名" type="text" v-model="username"></mt-field>
    <mt-field label="邀请码" placeholder="请输入你的邀请码" type="number" v-model="password"></mt-field>
    <mt-butten type="primary" size="large">接入车联网</mt-butten> 
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '舜宇车联网平台',
      msg1:"车端模拟系统"
    }
  }
}
</script>

<style>
/* @import "https://unpkg.com/mint-ui/lib/style.css"; */
</style>
