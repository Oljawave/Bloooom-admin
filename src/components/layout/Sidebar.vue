<template>
  <div :class="['sidebar', { collapsed: isCollapsed }]">
    <div class="logo" @click="toggleSidebar">
      <img src="@/assets/img/logo.png" alt="Blooooom Logo" />
    </div>
    <ul class="menu-list">
      <li>
        <router-link to="/dashboard" exact>
          <span class="iconify icon" data-icon="lets-icons:darhboard-alt" style="font-size: 24px;"></span>
          <span v-if="!isCollapsed">ДЭШБОРД</span>
        </router-link>
      </li>
      <li>
        <router-link to="/users" exact>
          <span class="iconify icon" data-icon="lets-icons:group-add-light" style="font-size: 24px;"></span>
          <span v-if="!isCollapsed">ПОЛЬЗОВАТЕЛИ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/orders" exact>
          <span class="iconify icon" data-icon="lets-icons:order-light" style="font-size: 24px;"></span>
          <span v-if="!isCollapsed">ЗАКАЗЫ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/partners" exact>
          <span class="iconify icon" data-icon="lets-icons:user-alt-light" style="font-size: 24px;"></span>
          <span v-if="!isCollapsed">ПАРТНЕРЫ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/analytics" exact>
          <span class="iconify icon" data-icon="lets-icons:doughnut-chart-light" style="font-size: 24px;"></span>
          <span v-if="!isCollapsed">АНАЛИТИКА</span>
        </router-link>
      </li>
      <li>
        <router-link to="/notifications" exact>
          <span class="iconify icon" data-icon="lets-icons:bell-pin-light" style="font-size: 24px;"></span>
          <span v-if="!isCollapsed">УВЕДОМЛЕНИЯ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/support" exact>
          <span class="iconify icon" data-icon="lets-icons:headphones-fill-light" style="font-size: 24px;"></span>
          <span v-if="!isCollapsed">ПОДДЕРЖКА</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {
    toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    document.documentElement.style.setProperty(
      '--sidebar-width', 
      this.isCollapsed ? '80px' : '250px'
    );
  }
  }
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 250px;
  background-color: white;
  height: 100vh;
  padding-top: 20px;
  border-right: 1px solid #000;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: width 0.3s;
}

.sidebar.collapsed {
  width: 80px;
}

.logo {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  cursor: pointer;
  transition: all 0.3s;
}

.logo img {
  max-width: 150px;
  transition: max-width 0.3s;
}

.sidebar.collapsed .logo img {
  max-width: 50px;
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

.menu-list a:hover,
.menu-list .router-link-active {
  background-color: black;
  color: white;
}

.icon {
  margin-right: 15px;
  width: 34px;
  transition: margin 0.3s;
}

.sidebar.collapsed .icon {
  margin-right: 0;
}

.menu-list span {
  font-family: 'SF Pro Display', sans-serif;
  font-size: 16px;
}

.sidebar.collapsed .menu-list span {
  display: none;
}

@media (max-width: 768px) {
  .sidebar {
    width: 80px;
  }

  .sidebar.collapsed {
    width: 80px;
  }

  .sidebar.collapsed .menu-list span {
    display: none;
  }

  .sidebar.collapsed .logo img {
    max-width: 50px;
  }

  .icon {
    margin-right: 0;
  }
}
</style>
