<template>
  <div class="hello">
    <h2>{{ output }}</h2>
    <ul>
      <li v-for="item in outputArray" :key="item.message">
        {{ item }}
      </li>
    </ul>
    <input v-on:keyup.enter="func" autofocus="true">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      output: "",
      outputArray: []
    }
  },
  methods: {
    func(event) {
      const input = event.target;
      if(input.value == "clear") {
        this.outputArray = [];
      } else {
        this.outputArray.push(input.value);
      } 
      input.value = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  background-color: darkblue;
  color: white;
  caret-color: white;
  border:none;
  margin: auto;
  font-size: 18px;
}
input:focus{
  outline: none;
}
</style>
