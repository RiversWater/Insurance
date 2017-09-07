<template>
  <label>
    {{text}}
    <input type="checkbox" :name="name" />
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  props:
  {
    text:{
      define: "文字"
    },
    name: {
      define: "name"
    }
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
label{
  margin: 0 2px;
}
</style>
