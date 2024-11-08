<template>
    <div class="navbar">
      <div class="navbar-left">
        <router-link to="" class="close-button">
          <span class="iconify" data-icon="lets-icons:arrow-alt-left-alt" style="color: black; font-size: 34px;"></span>
        </router-link>
        <div class="search-bar">
          <input type="text" placeholder="Поиск" />
        </div>
      </div>
      <div class="navbar-right">
        <div class="language-selector" @click="toggleDropdown">
          <span>{{ selectedLanguage }}</span>
          <i class="fas fa-chevron-down"></i>
          <span class="iconify" data-icon="lets-icons:expand-down-light" style="color: black; font-size: 16px;"></span>
          <div class="dropdown" v-if="isDropdownOpen">
            <div class="dropdown-item" @click="selectLanguage('RUS')">RUS</div>
            <div class="dropdown-item" @click="selectLanguage('KAZ')">KAZ</div>
            <div class="dropdown-item" @click="selectLanguage('ENG')">ENG</div>
          </div>
        </div>
        <div class="user-info">
          <span class="iconify user-icon" data-icon="lets-icons:user-cicrle-light" style="color: black;"></span>
          <div class="user-details">
            <span>Olzhas Gabdullin</span>
            <small>Bloooom Admin</small>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  
  
  <script>
  export default {
    name: 'Navbar',
    data() {
      return {
        selectedLanguage: 'RUS', 
        isDropdownOpen: false,
      };
    },
    methods: {
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen; 
      },
      selectLanguage(language) {
        this.selectedLanguage = language; 
        this.isDropdownOpen = false;
      },
      handleClickOutside(event) {
        const dropdown = this.$el.querySelector('.dropdown');
        const languageSelector = this.$el.querySelector('.language-selector');
   
        if (
          dropdown && !dropdown.contains(event.target) &&
          languageSelector && !languageSelector.contains(event.target)
        ) {
          this.isDropdownOpen = false; 
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside); 
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    },
  };
  </script>
  


  
  <style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #000;
  padding: 0 15px;
  width: calc(100% - var(--sidebar-width, 280px));
  margin-left: var(--sidebar-width, 250px);
  position: fixed;
  top: 0;
  z-index: 10;
  flex-wrap: wrap;
}
  
  .navbar-left {
    display: flex;
    align-items: center;
  }
  
  .close-button {
    color: black;
    font-size: 18px;
    margin-right: 20px;
    text-decoration: none;
  }
  
  .search-bar input {
    width: 300px;
    padding: 8px;
    border: 1px solid #e0e0e0;
    border-radius: 0%;
    font-size: 14px;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
  }
  
  .language-selector {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: black;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .language-selector i {
    margin-left: 5px;
  }
  
  .notification-icon {
    font-size: 20px;
    color: black;
    margin-right: 20px;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    color: black;
  }
  
  .user-icon {
    font-size: 40px;
    margin-right: 10px;
  }
  
  .user-details span {
    font-weight: bold;
    font-size: 14px;
  }
  
  .user-details small {
    display: block;
    font-size: 12px;
    color: #666;
  }

.language-selector {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: black;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
}

.language-selector i {
  margin-left: 5px;
}

.dropdown {
  position: absolute;
  top: 30px; 
  left: 0;
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.dropdown-item {
  padding: 8px 12px;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: #f0f0f0; 
}



</style>