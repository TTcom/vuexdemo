<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    
       {{appUserName}}
       {{appBoom}}
  
        <h3 @click="tocommit">commit</h3>

    </div>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import { mapState,mapGetters,mapActions } from 'vuex'
export default{
   data(){
     return{
       visible:true
     }
   },
   computed:{
     ...mapState('app',{
        appUserName : state => state.userName
     }),
     ...mapState('boom',{
        appBoom : state => state.boom
     }),
 
   },
   created(){
       console.log(this.$store.state.app.userName);
   },
   methods:{
     ...mapActions("app",[
       'setUsername'
     ]),
     tocommit(){
       console.log(123);
       this.setUsername("llk").then(res=>{
         console.log('kkljkl')
       })
       console.log("sdsafsa");
       //this.$store.commit('setUserName',"jack"); //提交一个mutation
       //this.$store.dispatch('actionUsername',"rose") //提交一个action

     }
   }

}

</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
