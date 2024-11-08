<template>
  <div class="dashboard">
    <Sidebar />
    <Navbar />
    <div class="content">
      <h1 class="dashboard-title">ДЭШБОРД</h1>
      <div class="stats">
        <StatBox value="1232" trend="+18" label="Количество активных заказов" />
        <StatBox value="89" trend="-8" label="Активные пользователи" />
        <StatBox value="673" trend="+11" label="Количество активных флористов" />
        <StatBox value="45" trend="+4" label="Продажи на сегодня" />
      </div>
      <div class="chart-container">
        <SalesChart />
      </div>
      <div class="top-stats-container">
        <TopStatsSection 
          title="САМЫЕ ПРОДАВАЕМЫЕ ЦВЕТЫ" 
          :tableHeaders="['НАЗВАНИЕ', 'ЦЕНА (BLM)', 'КОЛИЧЕСТВО']" 
          :data="topSellingFlowers"
        />
        <TopStatsSection 
          title="ТОП ЛУЧШИХ ФЛОРИСТОВ" 
          :tableHeaders="['ФЛОРИСТ', 'ВСЕГО ЗАКАЗОВ', 'РЕЙТИНГ']" 
          :data="topFlorists"
        />
      </div>
    </div>
  </div>
</template> 

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navbar.vue';
import StatBox from '@/components/layout/StatBox.vue';
import SalesChart from '@/components/layout/SalesChart.vue';
import TopStatsSection from '@/components/layout/TopStatsSection.vue';

export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Navbar,
    StatBox,
    SalesChart,
    TopStatsSection,
  },
  data() {
    return {
      topSellingFlowers: [
        { id: 1, name: 'КОМПОЗИЦИЯ РОМАНТИЧЕСКАЯ СИМФОНИЯ', price: '2.12', quantity: 329 },
        { id: 2, name: 'КОМПОЗИЦИЯ РОМАНТИЧЕСКАЯ СИМФОНИЯ', price: '2.12', quantity: 329 },
        { id: 2, name: 'КОМПОЗИЦИЯ РОМАНТИЧЕСКАЯ СИМФОНИЯ', price: '2.12', quantity: 329 },
        { id: 2, name: 'КОМПОЗИЦИЯ РОМАНТИЧЕСКАЯ СИМФОНИЯ', price: '2.12', quantity: 329 },
        { id: 2, name: 'КОМПОЗИЦИЯ РОМАНТИЧЕСКАЯ СИМФОНИЯ', price: '2.12', quantity: 329 },
      ],
      topFlorists: [
        { id: 1, name: 'ROMANTIC FLOWERS', orders: 134, rating: 5.0 },
        { id: 2, name: 'LUI BUTON', orders: 110, rating: 4.96 },
        { id: 2, name: 'LUI BUTON', orders: 110, rating: 4.96 },
        { id: 2, name: 'LUI BUTON', orders: 110, rating: 4.96 },
        { id: 2, name: 'LUI BUTON', orders: 110, rating: 4.96 },

      ],
    };
  },
}
</script>

<style scoped>
.dashboard {
  display: flex;
}

.content {
  margin-top: 60px;
  margin-left: 250px;
  padding: 20px;
  width: calc(100% - 250px);
}

.stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.chart-container {
  width: 100%;
  height: 400px;
  margin-top: 35px;
}

.dashboard-title {
  font-weight: 400;
  font-size: 24px;
}

.top-stats-container {
  display: flex;
  gap: 20px;
  margin-top: 120px;
}
</style>
