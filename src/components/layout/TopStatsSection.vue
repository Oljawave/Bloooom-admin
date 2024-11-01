<template>
    <div class="data-section">
      <div class="header">
        <h2>{{ title }}</h2>
        <div class="date-buttons">
          <button :class="{ active: activeTab === 'today' }" @click="activeTab = 'today'">СЕГОДНЯ</button>
          <button :class="{ active: activeTab === 'month' }" @click="activeTab = 'month'">МЕСЯЦ</button>
          <button :class="{ active: activeTab === 'year' }" @click="activeTab = 'year'">ГОД</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>{{ tableHeaders[0] }}</th>
            <th>{{ tableHeaders[1] }}</th>
            <th>{{ tableHeaders[2] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td>{{ item.name }}</td>
            <td>{{ item.price || item.orders }}</td>
            <td>{{ item.quantity || item.rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
      tableHeaders: {
        type: Array,
        required: true,
      },
      data: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        activeTab: 'month',
      };
    },
  };
  </script>
  
  <style scoped>

  .data-section {
    width: 586px;
    border: 1px solid #000;
    padding: 10px;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  
  h2 {
    font-size: 16px;
    font-weight: 500;
  }
  
  .date-buttons {
    display: flex;
    gap: 5px;
  }
  
  .date-buttons button {
    background: #fff;
    border: 1px solid #000;
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
  }
  
  .date-buttons button.active {
    background: #000;
    color: #fff;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }
  
  th,
  td {
    padding: 8px;
    font-size: 14px;
    text-align: left;
  }
  
  th {
    color: #888;
    font-weight: 400;
  }
  </style>
  