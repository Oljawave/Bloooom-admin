<template>
    <div class="stat-box">
      <div class="stat-label">{{ label }}</div>
      <div class="stat-value">{{ value }}</div>
      <div class="stat-chart" :class="{ positive: trend > 0, negative: trend < 0 }"></div>
      <div class="stat-trend" :class="{ positive: trend > 0, negative: trend < 0 }">
        {{ trend }}%
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "StatBox",
    props: {
      label: {
        type: String,
        required: true
      },
      value: {
        type: [String, Number],
        required: true
      },
      trend: {
        type: Number,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .stat-box {
    border: 1px solid #000;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    width: 251px;
    height: 145px;
    font-family: 'SF Pro', sans-serif;
  }
  
  .stat-label {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .stat-value {
    font-size: 36px;
    font-weight: regular;
    margin-bottom: 10px;
  }
  
  .stat-chart {
    width: 134px;
    height: 54px;
    background-size: cover;
    margin-bottom: 10px;
  }
  
 
  .stat-chart.positive {
    background-image: url('@/assets/img/positive-graph.png');
  }
  
  .stat-chart.negative {
    background-image: url('@/assets/img/negative-graph.png');
  }
  
  .stat-trend {
    position: absolute;
    bottom: 10px;
    right: 10px;
    padding: 5px 10px;
    border-radius: 15px;
    color: #fff;
    font-size: 12px;
  }
  
  .stat-trend.positive {
    background-color: #000;
  }
  
  .stat-trend.negative {
    background-color: #000;
  }
  </style>
  