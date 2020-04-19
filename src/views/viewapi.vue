<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        id="profile-img"
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="updatePost">
        <div class="form-group">
          <label for="username">API Name</label>
          <input
           
            v-validate="'required'"
            type="text"
            class="form-control"
            name="apiname"
          />
          
        </div>
        <div class="form-group">
          <label for="username">Version</label>
          <input
           
            v-validate="'required'"
            type="text"
            class="form-control"
            name="version"
          />
          
        </div>
        <div class="form-group">
          <label for="username">Description</label>
          <input
           
            v-validate="'required'"
            type="text"
            class="form-control"
            name="description"
          />
          
        </div>
        <div class="form-group">
          <label for="password">Swagger</label>
          <input
            
            v-validate="'required'"
            type="text"
            class="form-control"
            name="swagger"
          />
         
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" :disabled="loading">
            
            <span>Upload API</span>
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>

<script>
//import Comment from '../models/comment';
import axios from 'axios';
    export default {
      data() {
        return {
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
      methods: {
        updatePost() {
         //console.log("the id "+this.$route.params.id);
         console.log("Method triggered");

         let uri='http://localhost:8080/api/postapi';
         axios.post(uri,{});
         //this.$router.push('/comment');
         location.reload();
        }
      }
    }
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px !important;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}
</style>