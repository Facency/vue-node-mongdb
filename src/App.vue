<template>
  <div>
    <!-- {{Helloevue}} -->
    <!--editor的div为富文本的承载容器-->
　  <div id="editor"></div>
    <button @click="gettext">点击</button>
  </div>
</template>
<style>

</style>
<script>
import axios from 'axios'
import './plugin/Ueditor/ueditor.config.js'
import './plugin/Ueditor/ueditor.all.js'
import '../static/Ueditor/lang/zh-cn/zh-cn.js'
import './plugin/Ueditor/ueditor.parse.min.js'
export default {
  name: 'app',
  data () {
    return {
      Helloevue: 'Helloe Vue',
      editor: null
    }
  },
  methods: {
    getUser () {
      axios.get('api/user', {a: '666'}).then((res) => {
        console.log(res)
      })
    },
    gettext () {
      console.log(this.editor.getContent())
    }
  },
  created () {
    // this.getUser()
  },
  mounted () {
    this.editor = window.UE.getEditor('editor', this.config)
  },
  destroyed () {
    this.editor.destroy()
  }
}
</script>
