<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid">
      <lists></lists>
    </div>
  </div>
</template>

<script>
import navbar from './NavBar'
import lists from './Lists'

export default {
  name: 'ToDoLists',
  components: { navbar, lists },
  data () {
    return {
      msg: 'To Do Lists'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.container-fluid{
  margin-top: 20px;
}
</style>
