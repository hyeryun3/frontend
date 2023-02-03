<template>
    <div class="content">
        <span>ID</span> <input type="text" size="10" maxlength="10" v-model="id" />
        <span>PW</span> <input type="password" size="10" maxlength="12" v-model="pw"/>
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

    },
    methods: {
      check(){
        console.log(this.id)
        axios.post('/api/check',{
          id: this.id,
          pw: this.pw
        }).then((res) => {
          console.log(res)          
          
        }).catch((err)=>{
          console.log(err)
        })
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  span {
    margin: 5px;
  }
  input {
    margin: 5px 20px;
    color: #42b983;
  }
  button {
    width: 100px;
  }
  </style>
  