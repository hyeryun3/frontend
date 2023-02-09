<template>
    <div class="content">
        <span>이름</span> <input type="text" size="10" maxlength="10" id="name" ref="name" v-model="name" /><br/>
        <span>이메일</span> <input type="text" size="10" maxlength="10" ref="email" v-model="email" id="email"/> @ 
        <select @change="mailSelect($event)" ref="opt" id="opt">
          <option :key="i" :value="d.value" v-for="(d,i) in options">{{  d.text  }}</option>
        </select>
        <input type="text" v-model="email2" disabled="true" ref="email2" id="email2"/>
        <button href="javascript:;" @click.prevent="mailAuth" id="mailAuthBtn">메일 인증</button>
        <input type="text" v-model="mailAuthNo" id="mailAuth" />
        <button href="javascript:;" @click.prevent="authCheck" id="authCheck">OK</button>
        <br/>
        <span>패스워드</span> <input type="password" id="pw" ref="password" maxlength="15"  v-model="pw" placeholder="8~15자리 특수문자 문자 숫자 포함" /> <br/>
        <span>패스워드 확인</span> <input type="password" id="pw2" ref="password2" maxlength="15"  v-model="pw2"/>
    </div>
    <div>
      <button href="javascript:;" @click.prevent="check">저장</button>
    </div>
</template>
  
<script>
import axios from 'axios'

var authNo;
var mailChecking = false;

export default {
  name: 'JoinPage',
  data() {
    return{
      name:'',
      pw:'',
      email:'',
      email2:'',
      options: [
        {value: "-", text: "선택하기"},
        {value: "naver.com", text: "naver.com"},
        {value: "nate.com", text: "nate.com"},
        {value: "hanmail.com", text: "hanmail.com"},
        {value: "kakao.com", text: "kakao.com"},
        {value: "직접 입력", text: "직접 입력"},
      ]
    }
  },
  methods: {
    check(){
      if(!this.name){
        alert('이름을 입력하세요')
        document.getElementById('name').focus();
        return
      }else if(!this.email){
        alert('메일을 입력하세요')
        this.$refs.email.focus()
        return
      }else if(this.email2 == '-' || !this.email2){
        alert('이메일 선택하세요')
        this.$refs.opt.focus()
        return
      }else if(!mailChecking){
        alert('메일 인증이 필요합니다.')
        return
      }else if(!this.pw){
        alert('비밀번호를 입력하세요')
        this.$refs.password.focus()
        return
      }else if(!this.pw2){
        alert('비밀번호를 입력하세요')
        this.$refs.password2.focus()
        return
      }else if(this.pw != this.pw2){
        alert('비밀번호를 동일하게 입력해주세요.')
        document.getElementById('pw2').value=''
        this.$refs.password2.focus()
        return
      }

      if(!this.pw.match( /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/)){
        alert('비밀번호 형식에 맞지 않습니다.')
        document.getElementById('pw').value=''
        document.getElementById('pw2').value=''
        this.$refs.password.focus()
      }
      axios.post('/api/join',{
        name: this.name,
        password: this.pw,
        email: this.email,
        email2: this.email2
      }).then((res) => {
        console.log('join() 성공')
        this.name = res.data.name
        this.pw = res.data.password
      }).catch((err)=>{
        console.log('join() 실패')
        console.log(err)
      })
    },
    mailSelect(event){
      if(event.target.value=='직접 입력'){
        this.email2= ''
        this.$refs.email2.disabled = false
        this.$refs.email2.focus()
      }else{
        this.$refs.email2.disabled = true
        this.email2= event.target.value
      }
      document.getElementById('mailAuthBtn').setAttribute('style','display:show')
    },
    mailAuth(){
      if(this.email && this.email2){
        axios.post('/api/checkEmail',{
          email: this.email,
          email2: this.email2
        }).then((res) => {
          console.log('인증번호 발송')
          console.log(res)
          console.log('인증번호',res.data)
          authNo = res.data
          console.log(authNo)
        }).catch((err)=>{
          console.log('인증번호 발송 실패')
          console.log(err)
        })
        document.getElementById('mailAuth').setAttribute('style','display:show')
        document.getElementById('authCheck').setAttribute('style','display:show')
        document.getElementById('mailAuth').value = ''
      }
    },
    authCheck(){
      if(authNo == this.mailAuthNo){
        console.log("인증OK")
        mailChecking=true
        document.getElementById('email').setAttribute('disabled','true')
        document.getElementById('opt').setAttribute('disabled','true')
        document.getElementById('authCheck').setAttribute('style','display:none')
        document.getElementById('mailAuthBtn').setAttribute('style','display:none')
        document.getElementById('mailAuth').setAttribute('style','display:none')
        return
      }else{
        console.log("인증FAILED")
        alert('인증번호가 틀렸습니다.')
        document.getElementById('mailAuth').value = ''
        document.getElementById('mailAuth').setAttribute('style','display:none')
        document.getElementById('authCheck').setAttribute('style','display:none')
        return
      }
    }
  },
  mounted(){
    document.getElementById('mailAuth').setAttribute('style','display:none')
    document.getElementById('mailAuthBtn').setAttribute('style','display:none')
    document.getElementById('authCheck').setAttribute('style','display:none')
  }
}


</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(../assets/css/Main.css);

</style>
  