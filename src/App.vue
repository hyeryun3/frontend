<template>
  <LoginPage/>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    LoginPage
  },
  methods: {
    home(){
      const url = '/api/home'
      axios.get(url).then((res) => {
        console.log('home() 성공')
        console.log(res.data)
      }).catch((err) => {
        console.log('home() 실패')
        console.log(err)
      })
    }
  },
  mounted(){
    this.home()
  }
}
</script>