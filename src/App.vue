<template>
  <div id="app">
    <div id="chart">
      <h3>STAR WARS</h3>
        <Chart
         v-if="names && heights" 
        :names="names"
        :heights="heights"
         />
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart';
import api from '../services.js';

export default {
  data() {
    return {
      names: null,
      heights: null
    };
  },
  components: {
    Chart
  },
  created() {
    api.getAllCharacters()
      .then(response => {
        return this.characters = response;
      })
      .then(() => this.names = this.getNames())
      .then(() => this.heights = this.getHeights());
  },
  methods: {
    getNames() {
      return this.characters.results.map(result => {
        return result.name;
      });
    },
    getHeights() {
      return this.characters.results.map(result => {
        return result.height;
      });
    }
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  font-size: 6vh;
  margin: 2vh 35vw 2vh 35vw;
  border: solid gray 2px;
  border-radius: 20vw;
  color: gray;
  width: 25vw;
  justify-content: center;
}
#list {
  background-color: rgba(227, 227, 227, 0.5);
  padding: 1vh;
  margin-top: 0;
}
</style>
