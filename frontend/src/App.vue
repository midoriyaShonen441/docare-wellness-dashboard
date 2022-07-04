<script >

export default{
  components:{

  },
  data(){
    return{
 
    }
  },
  methods:{
    
  },
  mounted(){
      // this.testing = this.$store.state.message
      // console.log(this.testing);
  }
}

</script>

<template>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <!-- <h1>{{testing}}</h1> -->
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@100;200;300;400;500;600&family=Roboto&display=swap');

body {
  margin: 0px;
  padding: 0px;
  font-family: 'Noto Sans Thai', sans-serif  !important;
}

</style>
