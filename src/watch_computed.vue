<template>
  <div>
    {{ displayMessage }}
    <hr>
    <button @click="removeMessage">删除名字</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "lgp",
        phone: "17397015285",
        email: "907090585@qq.com"
      },
      displayMessage: null
    }
  },
  watch:{
    "user.name":{
      handler(){
        console.log("name改变了");
        const {user:{name,phone,email}}=this
        this.displayMessage=name||phone||email
      },
      immediate:true
    },
    'user.phone':{
      handler(){
        console.log("phone改变了");
        const {user:{name,phone,email}}=this
        this.displayMessage=name||phone||email
      },
      immediate:true
    },
    'user.email':{
      handler(){
        console.log("email改变了");
        const {user:{name,phone,email}}=this
        this.displayMessage=name||phone||email
      },
      immediate:true
    },
  },

  methods: {
    removeMessage() {
      this.user.name = null
    }
  }
}
</script>