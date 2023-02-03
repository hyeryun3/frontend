<template>
  <LoginPage/>
  <div>
    <h3>{{ a }}</h3>
    <h3>{{ b }}</h3>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LoginPage from './components/LoginPage.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    LoginPage
  },
  data(){
    return {
      a:'',
      b:''
    }
  },
  methods: {
    aa(){
      const url = '/api/aa'
      axios.get(url).then((res) => {
        console.log(res)  
        this.a = res.data.id
        this.b = res.data.pw     
      }).catch((err)=>{
        console.log(err)
      })
    },
    home(){
      const url = '/api/home'
      axios.get(url).then((res) => {
        console.log(res)
      })
    }
  },
  mounted(){
    this.aa()
    this.home()
  }
}
</script>

<style>

</style>
