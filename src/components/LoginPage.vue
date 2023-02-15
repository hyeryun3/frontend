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
  methods: {
    login(){
      if(this.id && this.password){
        axios.post('/api/login',{
          email: this.id,
          password: this.password,
        }).then((res)=>{
          if(res.data == 'SUCCESS'){
            console.log('login() 성공',res)
            location.href="/"
          }else{
            console.log('계정 틀림',res)
            alert("계정이 존재하지 않습니다.")
          }
        }).catch((err)=>{
          console.log('login() 실패',err)
        })
      }
    },
    home(){
      location.href="/"
    }
  }
};
</script>