<template>
  <div class="hello">
    <h2>{{ output }}</h2>
    <ul>
      <li v-for="item in outputArray" :key="item.message">
        {{ item }}
      </li>
    </ul>
    <input v-on:keyup.enter="executeCommand" autofocus="true">
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
      outputArray: [],
      commands: {
        clear: () => {
          this.outputArray = [];
        },
        add: (x, y) => {
          return parseInt(x) + parseInt(y);
        },
        echo: (...x) => {
          console.log(x);
          return x.join(' ');
        }
      }
    }
  },
  methods: {
    executeCommand(event) {
      const commandArray = event.target.value.split(' ');
      const command = commandArray.shift();
      const args = commandArray;
      let outputString;
      if(this.commands[command]){
        outputString = this.commands[command](...args);
      } else {
        outputString = `Command ${command} not found `;
      }
      this.displayOutput(outputString);
      event.target.value = "";
    },
    displayOutput(outputString) {
      if(outputString) this.outputArray.push(outputString);
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
