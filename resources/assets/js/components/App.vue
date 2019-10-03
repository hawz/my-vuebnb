<template>
  <div>
    <custom-toolbar></custom-toolbar>
    <router-view></router-view>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import Toolbar from './UI/Toolbar';
import CustomFooter from "./footer/CustomFooter";
export default {
  components: {
    CustomFooter,
    customToolbar: Toolbar
  }
};
</script>

<style>
</style>
