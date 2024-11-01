<template>
  <div class="sidebar">
    <div class="logo">
      <img src="@/assets/img/logo.png" alt="Blooooom Logo" />
    </div>
    <ul class="menu-list">
      <li>
        <router-link to="/dashboard" exact>
          <span class="iconify icon" data-icon="lets-icons:darhboard-alt" style="font-size: 24px;"></span>
          <span>ДЭШБОРД</span>
        </router-link>
      </li>
      <li>
        <router-link to="/users" exact>
          <span class="iconify icon" data-icon="lets-icons:group-add-light" style="font-size: 24px;"></span>
          <span>ПОЛЬЗОВАТЕЛИ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/orders" exact>
          <span class="iconify icon" data-icon="lets-icons:order-light" style="font-size: 24px;"></span>
          <span>ЗАКАЗЫ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/partners" exact>
          <span class="iconify icon" data-icon="lets-icons:user-alt-light" style="font-size: 24px;"></span>
          <span>ПАРТНЕРЫ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/analytics" exact>
          <span class="iconify icon" data-icon="lets-icons:doughnut-chart-light" style="font-size: 24px;"></span>
          <span>АНАЛИТИКА</span>
        </router-link>
      </li>
      <li>
        <router-link to="/notifications" exact>
          <span class="iconify icon" data-icon="lets-icons:bell-pin-light" style="font-size: 24px;"></span>
          <span>УВЕДОМЛЕНИЯ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/support" exact>
          <span class="iconify icon" data-icon="lets-icons:headphones-fill-light" style="font-size: 24px;"></span>
          <span>ПОДДЕРЖКА</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>
.sidebar {
  position: fixed; /* Зафиксированное позиционирование */
  width: 250px;
  background-color: white;
  height: 100vh;
  padding-top: 20px;
  border-right: 1px solid #000;
  top: 0; /* Чтобы сайдбар начинался от верхней части окна */
  left: 0; /* Чтобы сайдбар был привязан к левой стороне */
  z-index: 1000; /* Добавьте z-index, если элементы перекрываются */
}

.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.logo img {
  max-width: 150px;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li {
  margin-bottom: 20px;
}

.menu-list a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  padding: 10px 20px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 0px;
  margin-right: 5px;
  margin-left: 5px;
}

.menu-list a:hover {
  background-color: black;
  color: white;
}

.menu-list >>> .router-link-active {
  background-color: black;
  color: white;
}

.icon {
  margin-right: 15px;
  width: 34px;
}

.menu-list span {
  font-family: 'SF Pro Display', sans-serif;
  font-size: 16px;
}
</style>

