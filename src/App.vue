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

<style>

</style>
