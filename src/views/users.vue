<template>
  <div class="users">
    <Sidebar />
    <Navbar />
    <div class="content">
      <h1 class="users-title">ПОЛЬЗОВАТЕЛИ</h1>
      <div class="stats">
        <StatBox value="1232" trend="+18" label="Количество активных заказов" style="background-color: black; color: white;" />
        <StatBox value="89" trend="-8" label="Активные пользователи" />
        <StatBox value="673" trend="+11" label="Количество активных флористов" />
        <StatBox value="45" trend="+4" label="Продажи на сегодня" />
      </div>

      <DataTable :title="title" :headers="userHeaders" :entries="users" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue';
import Navbar from '@/components/layout/Navbar.vue';
import StatBox from '@/components/layout/StatBox.vue';
import DataTable from '@/components/layout/DataTable.vue';

export default {
  name: "Users",
  components: {
    Sidebar,
    Navbar,
    StatBox,
    DataTable
  },
  data() {
    return {
      users: [
        { name: 'Иван Иванов', birthDate: '1990-01-01', gender: 'Мужской', phoneNumber: '+7 (777) 123-45-67', email: 'ivan@example.com', address: 'Город, Улица, 1' },
        { name: 'Анна Петрова', birthDate: '1992-02-02', gender: 'Женский', phoneNumber: '+7 (777) 234-56-78', email: 'anna@example.com', address: 'Город, Улица, 2' },
        { name: 'Сергей Сергеев', birthDate: '1985-03-03', gender: 'Мужской', phoneNumber: '+7 (777) 345-67-89', email: 'sergey@example.com', address: 'Город, Улица, 3' },
        { name: 'Мария Сидорова', birthDate: '1995-04-04', gender: 'Женский', phoneNumber: '+7 (777) 456-78-90', email: 'maria@example.com', address: 'Город, Улица, 4' },
        { name: 'Дмитрий Николаев', birthDate: '1988-05-05', gender: 'Мужской', phoneNumber: '+7 (777) 567-89-01', email: 'dmitry@example.com', address: 'Город, Улица, 5' },
        { name: 'Елена Васильева', birthDate: '1993-06-06', gender: 'Женский', phoneNumber: '+7 (777) 678-90-12', email: 'elena@example.com', address: 'Город, Улица, 6' },
        { name: 'Александр Петров', birthDate: '1987-07-07', gender: 'Мужской', phoneNumber: '+7 (777) 789-01-23', email: 'alexander@example.com', address: 'Город, Улица, 7' },
        { name: 'Татьяна Кузнецова', birthDate: '1991-08-08', gender: 'Женский', phoneNumber: '+7 (777) 890-12-34', email: 'tatiana@example.com', address: 'Город, Улица, 8' }
      ],
      userHeaders: ['ФИО', 'Дата рождения', 'Пол', 'Телефон', 'Email', 'Адрес'],
      title: 'Список пользователей'
    };
  }
}
</script>

<style scoped>
.users {
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

.users-title {
  font-weight: 400;
  font-size: 24px;
}
</style>
