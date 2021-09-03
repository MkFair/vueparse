<template>
    <div v-if="error_records">
    <div class="alert alert-danger">
        Временные неполадки с получением данных. Попробуйте позже.
    </div>
  </div>
  <div class="row" v-else>
    <div class="col-lg-8 col-md-8">
      <h3 >{{record.title}}</h3>
      {{record.body}}
    </div>
    <div class="col-lg-4 col-md-4">
        <div class="row">
            <div class="col-6">
                Имя
            </div>
            <div class="col-6">
                {{user.name}}
            </div>
            <div class="col-6">
                Username
            </div>
            <div class="col-6">
                {{user.username}}
            </div>
            <div class="col-6">
                Email
            </div>
            <div class="col-6">
                {{user.email}}
            </div>
            <div class="col-6">
                Phone            
            </div>
            <div class="col-6">
                {{user.phone}}
            </div>
        </div>
    </div>
  </div>

</template>
<script>
export default{
  name : "RecordView",
  
  data:function(){
    return {
      error_records:false,
      record:Object,
      user:Object
    }
  },
  methods:{
    show_record:function(record_id){
      var b = this
      fetch("https://jsonplaceholder.typicode.com/posts/"+record_id)
      .then(response=>response.json())
      .then(function(data){b.record=data
      console.log(data)
        fetch("https://jsonplaceholder.typicode.com/users/"+b.record.userId)
      .then(response=>response.json())
      .then(data=>b.user=data)
      .catch(() => {
          this.error_records = true
       });
    })
      .catch(() => {
          this.error_records = true
       });
    }
  },
  created:function(){
    var id = this.$route.params.id
    this.show_record(id)
  }
}

</script>