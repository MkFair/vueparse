<template>
<div class="container">
	<div v-if="error_records">
    <div class="alert alert-danger">
        Временные неполадки с получением данных. Попробуйте позже.
    </div>
  </div>
  <div v-else>
    <table class="table table-striped" >
    <tr>
      <th>№</th>
      <th>Заголовок</th>
      <th>Пользователь</th>
      <th></th>
    </tr>
    <tr v-for="record in records_list" v-bind:key="record.id">
      <td>{{record.id}}</td>
      <td>{{record.title}}</td>
      <td><span v-if="users[record.userId]">{{users[record.userId].name}}</span></td>
       <td>
        
        <router-link class="btn btn-sm btn-outline-secondary" :to="{ name:'RecordView',params:{id:record.id}} ">Просмотр</router-link>
       </td>
     </tr>
    </table>
    
  </div>
  
  </div>

</template>
<script>
    export default{
        name:"Records",
        data:function(){
            return {
                records_list:Object,
                users: [],
                error_records:false
            }
        },
        methods : {
            set_users: function(raw_users){
                for(var i=0; i<raw_users.length;i++){
        
                    this.users[raw_users[i].id] = raw_users[i]
                }
            },
           load_list:function(){
        
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(data=>this.records_list=data)
            .catch(() => {
              this.error_records = true
            });
            fetch("https://jsonplaceholder.typicode.com/users")
            .then(response=>response.json())
            .then(data=>this.set_users(data))
            .catch(() => {
              this.error_records = true
            });
            }
        },
        created:function(){this.load_list()}
    }

</script>