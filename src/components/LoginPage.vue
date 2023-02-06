<template>
    <div class="content">
        <span>ID</span> <input type="text" size="10" maxlength="10" v-model="id" />
        <span>PW</span> <input type="password" size="10" maxlength="12" v-model="pw"/>
    </div>
    <div>
      {{ id }} {{ pw }}
    </div>
    <div>
      <button href="javascript:;" @click.prevent="check">체크</button>
    </div>
</template>
  
<script>
import axios from 'axios'

export default {
  name: 'LoginPage',
  data() {
    return{
      id:'',
      pw:''
    }
  },
  methods: {
    check(){
      axios.post('/api/check',{
        id: this.id,
        pw: this.pw
      }).then((res) => {
        console.log('check() 성공')
        this.id = res.data.id
        this.pw = res.data.pw
      }).catch((err)=>{
        console.log('check() 실패')
        console.log(err)
      })
    }
  }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(../assets/css/Main.css);

</style>
  