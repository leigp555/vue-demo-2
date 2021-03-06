// import Vue from 'vue'
const Vue = window.Vue
Vue.config.productionTip = false

//
console.log("版本一普通写法展示用户名");
// new Vue({
//     data:{
//         user:{
//             name:"lgp",
//             phone:"17397015285",
//             email:"907090585@qq.com"
//         }
//     },
//     template:`
//     <div>
//     {{user.name||user.phone||user.email}}
//     <button @click="fix">删除名字</button>
//     </div>`,
//     methods:{
//         fix(){this.user.name=null}
//     }
// }).$mount("#app")

//
console.log("版本二computed 2种写法展示用户名");
// new Vue({
//     data: {
//         user: {
//             name: "lgp",
//             phone: "17397015285",
//             email: "907090585@qq.com"
//         }
//     },
//     // computed:{
//     //   displayName(){
//     //       return this.user.name||this.user.phone||this.user.email
//     //   }
//     // },
//     computed: {
//         displayName: {
//             get() {
//                 return this.user.name || this.user.phone || this.user.email
//             },
//             set(value) {
//                 this.user.name = value
//             }
//         }
//     },
//     template: `
//       <div>
//       {{ displayName }}
//       <button @click="out">删除名字</button>
//       <button @click="fix">修改名字</button>
//       </div>`,
//     methods: {
//         out() {
//             this.user.name = null
//         },
//         fix() {
//             this.displayName = "fang"
//         }
//     }
// }).$mount("#app")


//
console.log("普通方法展示一个列表 版本一");
// let n = 0
//
// function createUser(name, gender) {
//     n += 1
//     return {id: n, name: name, gender: gender}
// }
//
// new Vue({
//     data: {
//         user: [
//             createUser("老大", "男"),
//             createUser("老二", "女"),
//             createUser("老三", "男"),
//             createUser("老四", "女")
//         ],
//         displayName: null
//     },
//     created() {
//         this.displayName = this.user
//     },
//     template: `
//       <div>
//       <div>
//         <button @click="all">全部</button>
//         <button @click="male">男</button>
//         <button @click="female">女</button>
//       </div>
//       <ul>
//         <li v-for="(n,index) in displayName" :key="index">{{ n.name }}-{{ n.gender }}</li>
//       </ul>
//       </div>`,
//     methods: {
//         all() {
//             this.displayName = this.user
//         },
//         male() {
//             this.displayName = this.user.filter(x => x.gender === "男")
//         },
//         female() {
//             this.displayName = this.user.filter(x => x.gender === "女")
//         }
//     }
// }).$mount("#app")

console.log("computed 方法展示一个列表 版本二")


// let n = 0
//
//
// function createUser(name, gender) {
//     n += 1
//     return {id: n, name: name, gender: gender}
// }
//
// new Vue({
//     data: {
//         user: [
//             createUser("老大", "男"),
//             createUser("老二", "女"),
//             createUser("老三", "男"),
//             createUser("老四", "女")
//         ],
//         gender: '',
//     },
//     computed: {
//         // eslint-disable-next-line vue/return-in-computed-property
//         displayName() {
//             // console.log("计算了一次")   证明computed有缓存
//             const hash={
//                 male:"男",
//                 female: "女"
//             }
//             const {user, gender} = this
//             if (gender === "") {
//                 return user
//             } else if (gender === "female"||gender==="male" ) {  //还可以简化成 typeof gender==="string"
//                 return user.filter(x => x.gender === hash[gender])
//             }else {
//                 throw new Error("gender值不存在")
//             }
//         }
//     },
//     template: `
//       <div>
//       <div>
//         <button @click="setGender('')">全部</button>
//         <button @click="setGender('male')">男</button>
//         <button @click="setGender('female')">女</button>
//       </div>
//       <ul>
//         <li v-for="(n,index) in displayName" :key="index">{{ n.name }}-{{ n.gender }}</li>
//       </ul>
//       </div>`,
//     methods: {
//         setGender(string) {
//             this.gender = string
//         },
//     }
// }).$mount("#app")


console.log("watch的用法是");

import Demo from "./watch.vue"
import Demo2 from "./watch_computed.vue"
new Vue({
    render:h=>h(Demo),
}).$mount("#app")

new Vue({
    render:h=>h(Demo2),
}).$mount("#app2")









