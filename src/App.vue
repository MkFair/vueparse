<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
    
    <div class="" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" v-on:click="load_list" href="#">Список данных</a>
      </li>
      
      </ul>
      
    </div>
    </div>
  </nav>
  
  
  
  <div class="container">
  <div v-if="show_list">
    <table class="table table-striped" >
    <tr>
      <th>№</th>
      <th>Заголовок</th>
      <th>Владелец</th>
      <th></th>
    </tr>
    <tr v-for="record in records_list" v-bind:key="record.id">
      <td>{{record.id}}</td>
      <td>{{record.title}}</td>
      <td><span v-if="users[record.userId]">{{users[record.userId].name}}</span></td>
       <td><button class="btn btn-sm btn-outline-secondary" v-on:click="show_record(record.id)">Просмотр</button></td>
     </tr>
    </table>
  </div>
  <div v-else>
  <RecordView :record="record_show" :user="user_info" ></RecordView>
  </div>
  </div>
</template>

<script>
import RecordView from "./components/RecordView.vue"
export default {
  name: 'App',
  components: {
    RecordView
  },
  data:function(){
  return {
    records_list: null,
    users:[],
    show_list:true,
    record_show: {},
  user_info:{}
  }
  },
  methods:{
    show_record:function(record_id){
      var b = this
      fetch("https://jsonplaceholder.typicode.com/posts/"+record_id)
      .then(response=>response.json())
      .then(function(data){b.record_show=data
      console.log(data)
        fetch("https://jsonplaceholder.typicode.com/users/"+b.record_show.userId)
      .then(response=>response.json())
      .then(data=>{b.user_info=data;b.show_list = false;console.log(data)})
    })
      
      
  },
    set_users: function(raw_users){
    
      for(var i=0; i<raw_users.length;i++){
    
        this.users[raw_users[i].id] = raw_users[i]
      }
    },
    load_list:function(){
    this.show_list = true;
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(data=>this.records_list=data)
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(data=>{this.set_users(data);console.log(this.users)})
      }
    },
    created:function(){this.load_list()}
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</style>
