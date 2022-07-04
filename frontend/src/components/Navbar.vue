
<script>
import Sidebar from "./Sidebar.vue"

export default {
    components:{
        Sidebar
    },
 
    data(){
        return{

        }
    }
}
</script>

<template>
  <div class="navbar-container">
 
    
    <div class="set-container-menu-profile">
        <div class="sidebar-menu">
            <Sidebar/>
        </div>
        <div class="menu-container">
            <h3>ระบบดูแลสุขภาพ</h3>
        </div>
        <div class="profile-container">
            <h3>User Earth</h3>
        </div>
    </div>
    
  </div>
</template>

<style scoped> 
.sidebar-menu{
    width: 5%;
}
.navbar-container{
    top:0;
    height: 80px;
    background-color: #1a649e;
    color: white;
}

.menu-container{
    margin-top: 10px;
    margin-right: 60%;
    width:500px; 
 
}

.profile-container{
    margin-top: 10px;
    width: 10%;
}

.set-container-menu-profile{
    display: flex; 
    justify-content: space-between;
}
</style>