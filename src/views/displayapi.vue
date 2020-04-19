<template>
  <div class="container">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <header class="jumbotron">
    <li v-for="c in content":key="c.APIRecords">
         <ul>
            
             <br>
            
             <!-- <h1>{{this.$route.params.admin}}</h1> -->
             
               <div class="card w3-hover-shadow">
               <div class="container">
              <h4>API NAME:{{content.apiname}}</h4>
              <h4>Creator:{{ content.CreatedBy}}</h4>
              <h4>Version:{{ content.Version}}</h4>
              <h4>API id:{{ content._id}}</h4>
              
              </div>
               </div>
            
         </ul>
     </li>

    </header>
    
</div>
</template>

<script>

import UserService from '../services/user.service';
//import Comment from '../models/comment';
import APIRecords from '../models/APIRecords';
import axios from 'axios';
    export default {
      data() {
        return {
        content:'',
        APIRecords: new APIRecords('', ''),
         // id:'',
          //comment: new Comment('', '') 
        //   post: {}
        }
      },
      created() {
        //   this.id=this.$route.param.id;
         // console.log("the id "+this.$route.params.id);
        // let uri = `http://localhost:4000/posts/edit/${this.$route.params.title}`;
        // this.axios.get(uri).then((response) => {
        //     this.post = response.data;
        // });
      },
       mounted() {
       console.log("Method triggered");

          UserService.getTest().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
       },
      methods: {
        updatePost() {
         //console.log("the id "+this.$route.params.id);
         console.log("Method triggered");

         let uri='http://localhost:8080/api/viewapi';
         this.content=axios.post(uri,{});
         //this.$router.push('/comment');
         //location.reload();
        }
      }
    }
</script>

<style scoped>
.card{
    /* Add shadows to create the "card" effect */
    /* height: 280px; */
    /* width: 200px; */
    /* background-color:; */
    /* border-radius: 10px; */
    /* box-shadow: -1rem 0 3rem #000; */
    /* width: 2000px; */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
.card-header{
  /* border-style: double; */
  background-color:#C0C0C0;
  width: 2000px;
}
.card-body{
  width: 2000px;
}
.card-footer{
  width: 2000px;
}
/* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  /* Add some padding inside the card container */
  .container {
    width: 1300px;
  
    padding: 2px 16px 20px;
  }
</style>