<template>
    <div id="Home">
        <div style="text-align:center;font-size:24px; padding-top:40px"><h1>欢迎{{userName}}接入舜宇车联网</h1></div>
        <mt-switch v-model="value">开关</mt-switch>
        <mt-switch v-model="value">开关</mt-switch>
        <mt-switch v-model="value">开关</mt-switch>
        <mt-switch v-model="value">开关</mt-switch>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      userName: "",
    }
  }
}
</script>
<style scoped>

</style>