<template>
  <div class="data-table">
    <div class="header">
      <div class="title-search">
        <h2 class="table-title">{{ title }}</h2>
        <div class="search-bar">
          <input type="text" placeholder="Поиск" v-model="searchTerm" />
        </div>
      </div>
      <div class="button-group">
        <button :class="{ active: activeTab === 'filter' }" @click="openFilterModal">ФИЛЬТР</button>
        <button :class="{ active: activeTab === 'addEntry' }" @click="openAddEntryModal">ДОБАВИТЬ</button>
      </div>
    </div>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th v-for="header in headers" :key="header">{{ header }}</th>
            <th>ДЕЙСТВИЕ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entry in paginatedEntries" :key="entry.id">
            <td v-for="(value, key) in entry" :key="key">{{ value }}</td>
            <td class="actions">
                <button 
                  :class="{ active: activeTab === 'edit' }" 
                  @click="openEditModal(entry)" 
                  style="font-size: 24px; cursor: pointer; border: none; background: none;">
                  <span class="iconify icon edit" data-icon="lets-icons:edit-light"></span>
                </button>
                <button 
                  :class="{ active: activeTab === 'delete' }" 
                  @click="openDeleteModal(entry)" 
                  style="font-size: 24px; cursor: pointer; border: none; background: none;">
                  <span class="iconify icon trash" data-icon="lets-icons:trash-light"></span>
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Назад</button>
      <span>Страница {{ currentPage }} из {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Вперед</button>
    </div>


    <modal v-if="isFilterModalOpen" @close="isFilterModalOpen = false">
      <template #header>
        <h3>ФИЛЬТРЫ</h3>
      </template>
      <template #body>
        <p>Пока пусто</p>
      </template>
      <template #footer>
        <button class="modal_button" @click="isFilterModalOpen = false">Закрыть</button>
      </template>
    </modal>

    <modal v-if="isAddEntryModalOpen" @close="isAddEntryModalOpen = false">
      <template #header>
        <h3>ДОБАВИТЬ ЗАПИСЬ</h3>
      </template>
      <template #body>
        <p>Пока пусто</p>
      </template>
      <template #footer>
        <button class="modal_button" @click="isAddEntryModalOpen = false">Закрыть</button>
      </template>
    </modal>

    <delete-modal v-if="isDeleteModalOpen" @close="isDeleteModalOpen = false">
      <template #header>
        <h3>УдалитьЬ</h3>
      </template>
      <template #body>
        <p>Пока пусто</p>
      </template>
      <template #footer>
        <button class="modal_button" @click="isAddEntryModalOpen = false">Закрыть</button>
      </template>
    </delete-modal>

    <edit-modal v-if="isEditModalOpen" @close="isEditModalOpen = false">
      <template #header>
        <h3>Редактировать</h3>
      </template>
      <template #body>
        <p>Пока пусто</p>
      </template>
      <template #footer>
        <button class="modal_button" @click="isAddEntryModalOpen = false">Закрыть</button>
      </template>
    </edit-modal>


  </div>
</template>

<script>
import Modal from './Modal.vue';
import DeleteModal from './modal/DeleteModal.vue';
import EditModal from './modal/EditModal.vue';


export default {
  name: "DataTable",
  props: {
    title: {
      type: String,
      default: "ВСЕ ДАННЫЕ"
    },
    headers: {
      type: Array,
      required: true
    },
    entries: {
      type: Array,
      required: true
    }
  },
  components: {
    Modal,
    EditModal,
    DeleteModal
  },
  data() {
    return {
      activeTab: null,
      isFilterModalOpen: false,
      isAddEntryModalOpen: false,
      isDeleteModalOpen: false,
      isEditModalOpen: false,
      currentPage: 1,
      pageSize: 8,
      searchTerm: ""
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.filteredEntries.length / this.pageSize);
    },
    filteredEntries() {
      return this.entries.filter(entry =>
        Object.values(entry).some(value =>
          value.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    },
    paginatedEntries() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredEntries.slice(start, end);
    }
  },
  methods: {
    openFilterModal() {
      this.activeTab = 'filter';
      this.isFilterModalOpen = true;
    },
    openEditModal() {
      this.activeTab = 'edit';
      this.isEditModalOpen = true;
    },
    openDeleteModal() {
      this.activeTab = 'delete';
      this.isDeleteModalOpen = true;
    },
    openAddEntryModal() {
      this.activeTab = 'addEntry';
      this.isAddEntryModalOpen = true;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
  }
};
</script>

<style scoped>
.data-table {
  width: 1190px;
  border: 1px solid #000;
  padding: 20px;
  margin-top: 20px;
  overflow-x: auto;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
}

.table-title {
  text-transform: uppercase;
}

.title-search {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header h2 {
  font-size: 18px;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 500;
}

.search-bar input {
  height: 28px;
  border-radius: 0;
  padding: 0 10px;
  border: 1px solid #000;
  font-size: 14px;
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

.modal_button {
  padding: 5px 15px;
  border: 1px solid #000;
  background: none;
  cursor: pointer;
  font-size: 14px;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  min-width: 150px;
  padding: 20px;
  text-align: left;
  border-bottom: 1px solid #ccc; 
}

th {
  color: #CCCCCC;
  font-family: 'SF Pro Display', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
}

.actions {
  display: flex;
  gap: 10px;
}

.iconify.icon {
  cursor: pointer;
}

.iconify.icon.view:hover {
  color: rgb(23, 114, 194);
}

.iconify.icon.trash:hover {
  color: red;
}

.iconify.icon.edit:hover {
  color: rgb(12, 187, 12);
}

.pagination {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid #000;
  background: none;
  cursor: pointer;
}

.pagination button:disabled {
  color: #aaa;
  cursor: not-allowed;
}

.pagination span {
  font-size: 14px;
}
</style>
