<template>
  <div>
    {{ n }}
    <button @click="add">+1</button>
    <hr>
    <button @click="unDo">撤销</button>
    <hr>
    {{ history }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      history: [],
      inUndoModel: false
    }
  },
  watch: {
    n: function (newValue, oldValue) {
      if (this.inUndoModel === false) {
        this.history.push({from: oldValue, to: newValue})
      }
    }
  },
  methods: {
    add() {
      this.n += 1
    },
    unDo() {
      this.inUndoModel = true
      const last = this.history.pop()
      this.n = last.from
      // setTimeout(()=>{
      //   this.inUndoModel=false
      // },0)
      this.$nextTick(() => {
        this.inUndoModel = false
      }, 0)
    }
  }

}
</script>

<style scoped>

</style>