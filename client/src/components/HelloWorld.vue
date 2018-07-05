<template>
  <div>
  <div style="margin-bottom: 5px">
    <button @click='getAll'> View All </button>
  </div>
    <div  v-for='post in posts' :key='post._id' style="border:1px solid black;" >
      <h2> {{post.title}}</h2>
      <hr>
      <div> {{post.content}}</div>
      <p> <sub>category: <a href="#" @click='findCategory(post.category)'> {{post.category}}</a></sub></p>
      <p> <sub>Created by:  <a href="#" @click='findAuthor(post.author._id)'> {{post.author.name}} </a></sub></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created(){
      this.getAll()
    },
  data(){
    return{
      posts: null,
    }
  },
  methods:{
    getAll(){
      let self = this;
      axios({
        method: 'get',
        url:'http://localhost:3000/'
      })
      .then(function(response){
        console.log("masuk masuk")
        // console.log(response.data.articles);
        self.posts = response.data.articles
      })
      .catch(function(err){
        console.log(err);
      })
    },
    findCategory(category){
      console.log(category)
      let self = this;
      let query = `http://localhost:3000/find?category=${category}`
      console.log(query);
      axios({
        method: 'get',
        url: query
      })
      .then(function(response){
        self.posts = response.data.articles
      })
      .catch(function(err){
        console.log(err);
      })
    },
    findAuthor(id){
      console.log(id);
      let self = this;
      axios({
        method: 'get',
        url: `http://localhost:3000/find/${id}`
      })
      .then(function(response){
        console.log("hello")
        self.posts = response.data.articles
      })
      .catch(function(err){
        console.log(err);
      })
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
