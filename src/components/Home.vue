<template>
  <div>
    HomePage
  </div>
  <div>
    <button href="javascript:;" @click.prevent="login">로그인</button>
    <button href="javascript:;" @click.prevent="join">회원가입</button>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  methods: {
    login(){
      location.href="/login"
    },
    join(){
      location.href="/join"
    },
  },
};
</script>