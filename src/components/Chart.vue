<script>
import { Bar } from './BaseCharts';

export default {
  props: {
    names: Array,
    heights: Array
  },
  extends: Bar, 
  mounted() {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'height',
          backgroundColor: '#B19ED6',
          data: this.heights
        }
      ]
    }, { responsive: true, maintainAspectRatio: false });
  }
};

</script>