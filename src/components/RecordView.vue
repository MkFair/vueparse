<template>
  <div class="row">
    <div class="col-lg-8 col-md-8">
      <h3 v-if="record">{{record.title}}</h3>
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
  props:[
    "record",
	"user"
  ],
  data:function(){
    return {
      
    }
  }
}

</script>