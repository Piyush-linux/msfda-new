<template>
    <div class="">
    	<div class="flex gap-6">
    		<div class="w-1/2 h-64 shadow-2xl p-6">
        		<BarChart :chartData="data" :options="options" :height="300" />
    		</div>
    		<div class="w-1/2 h-64 shadow-2xl p-6">
        		<LineChart :chartData="data" :options="options" :height="300" />
    		</div>
    	</div>
    </div>
</template>
<script setup>
definePageMeta({
    layout: "admin",
});

// edit this to change the graph

import { defineComponent } from 'vue';
import { BarChart , LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);




const data = {
  labels: [
    'Food',
    'Venue',
    'Review'
  ],
  datasets: [
    {
      label: 'Feedback',
      backgroundColor: '#f87979',
      data: [40, 20, 55]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: true
}




// var data = {
//   // A labels array that can contain any sort of values
//   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
//   // Our series array that contains series objects or in this case series data arrays
//   series: [
//     [5, 2, 4, 2, 0]
//   ]
// };

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
// new Chartist.Line('.ct-chart', data);
</script>