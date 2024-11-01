<template>
  <div class="users">
    <Sidebar />
    <Navbar />
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
import Navbar from '@/components/layout/Navbar.vue'

export default {
  name: "Users",
  components: {
    Sidebar,
    Navbar,
  }
}
</script>

<style scoped>

</style>
