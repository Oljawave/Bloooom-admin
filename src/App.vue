<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
#app {
  display: flex;
}

@font-face {
  font-family: 'SF Pro Display';
  font-weight: 400; 
  font-style: normal;
  src: url('@/assets/fonts/SF-Pro-Display-Light.otf') format('opentype');
}

@font-face {
  font-family: 'SF Pro Display';  
  font-weight: 600;
  font-style: normal;
  src: url('@/assets/fonts/SF-Pro-Display-Semibold.otf') format('opentype');
}

@font-face {
  font-family: 'SF Pro Display';  
  font-weight: 500;
  font-style: normal;
  src: url('@/assets/fonts/SF-Pro-Display-Medium.otf') format('opentype');
}


body {
  font-family: 'SF Pro Display', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
