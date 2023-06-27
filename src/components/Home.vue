<template>
  <div>
    HomePage
  </div>
  <div v-if="check">
    <button href="javascript:;" @click.prevent="login">로그인</button>
    <button href="javascript:;" @click.prevent="join">회원가입</button>
  </div>
  <div v-else>
    로그인되었습니다.
    <button href="javascript:;" @click.prevent="logout">로그아웃</button>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return{
      check : this.$store.getters.isLogin
    }
  },
  methods: {
    login(){
      location.href="/login"
    },
    join(){
      location.href="/join"
    },
    logout(){
      localStorage.removeItem('user');
      location.href="/"
    }
  },
  computed: {
    isLogin(){
      return this.check
    }
  }
};
</script>