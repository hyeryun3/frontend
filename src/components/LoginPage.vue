<template>
  <div>
    LoginPage <button href="javascript:;" @click.prevent="home">홈</button>
  </div>
  <div>
    <span>아이디</span> <input type = 'text' size='10' id='id' ref="id" v-model="id"/>
    <span>비밀번호</span> <input type = 'password' size="10" id="password" ref="password" v-model="password"/>
  </div>
  <div>
    <button href="javascript:;" @click.prevent="login">로그인</button>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data(){
    return{
      id: this.id,
      password: this.password,
    }
  },
  methods: {
    login(){
      if(this.id && this.password){
        this.$axios.post('/api/login',{
          email: this.id,
          password: this.password
        }).then((res)=>{
          res = res.data
          if(res=='SUCCESS'){
            alert('회원임')
            store.dispatch('getToken',{
              email: this.id,
              password: this.password
            }).then(()=>{console.log(this.$store.state.token )})
          }else{
            alert('회원아님')
          }
        })
      }
    },
    home(){
      location.href="/"
    },
  },
};

</script>