<template>
    <div class="chart-wrapper">
      <div class="header">
        <h2>ГРАФИК ИЗМЕНЕНИЯ ОБЪЕМА ПРОДАЖ</h2>
        <div class="button-group">
          <button :class="{ active: selectedRange === 'week' }" @click="setRange('week')">Неделя</button>
          <button :class="{ active: selectedRange === 'month' }" @click="setRange('month')">Месяц</button>
          <button :class="{ active: selectedRange === 'year' }" @click="setRange('year')">Год</button>
        </div>
      </div>
      <div class="chart-container">
        <canvas ref="chartCanvas"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, reactive } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'SalesChart',
    setup() {
      const chartCanvas = ref(null);
      const chartInstance = ref(null);
      const selectedRange = ref('year');
  
      const dataSets = reactive({
        week: [100000, 200000, 150000, 300000, 400000, 350000, 500000],
        month: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500000 + 200000)),
        year: [200000, 800000, 3200000, 2000000, 1500000, 900000, 400000, 500000, 1200000, 3000000, 4000000, 5000000],
      });
  
      const labels = reactive({
        week: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        month: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
        year: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      });
  
      const createChart = () => {
        chartInstance.value = new Chart(chartCanvas.value, {
          type: 'line',
          data: {
            labels: labels[selectedRange.value],
            datasets: [
              {
                label: 'Объем продаж',
                data: dataSets[selectedRange.value],
                borderColor: '#000',
                borderWidth: 2,
                fill: false,
                tension: 0.4,
              }
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  callback: function(value) {
                    if (value >= 1000000) return `${value / 1000000} млн`;
                    if (value >= 1000) return `${value / 1000}K`;
                    return value;
                  },
                  color: '#b0b0b0',
                },
                grid: { color: '#e0e0e0', drawBorder: false },
              },
              x: {
                ticks: { color: '#b0b0b0' },
                grid: { display: false },
              },
            },
          },
        });
      };
  
      const setRange = (range) => {
        selectedRange.value = range;
        updateChart();
      };
  
      const updateChart = () => {
        if (chartInstance.value) {
          chartInstance.value.data.labels = labels[selectedRange.value];
          chartInstance.value.data.datasets[0].data = dataSets[selectedRange.value];
          chartInstance.value.update();
        }
      };
  
      onMounted(() => {
        createChart();
      });
  
      return { chartCanvas, setRange, selectedRange };
    },
  };
  </script>
  
  <style scoped>
  .chart-wrapper {
    border: 1px solid black;
    padding: 20px;
    margin-top: 20px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
  }
  
  .header h2 {
    margin: 0;
    font-size: 18px;
    font-family: 'SF Pro Display', sans-serif;
    font-weight: 500;
  }
  
  .button-group {
    display: flex;
    gap: 10px;
  }
  
  .button-group button {
    padding: 5px 15px;
    border: 1px solid #000;
    background: none;
    cursor: pointer;
    font-size: 14px;
  }
  
  .button-group button.active {
    background-color: #000;
    color: #fff;
  }
  
  .chart-container {
    width: 100%;
    height: 400px;
    margin-top: 20px;
  }
  </style>
  