<template>
  <div>
    {{Helloevue}}
  </div>
</template>
<style>

</style>
<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      Helloevue: 'Helloe Vue'
    }
  },
  methods: {
    getUser () {
      axios.get('api/user', {a: '666'}).then((res) => {
        console.log(res)
      })
    }
  },
  created () {
    this.getUser()
  }
}
</script>
