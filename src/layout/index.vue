<template>
  <div class="">
    This is a layout index <br>
    <RouterLink to="/welcome">welcome</RouterLink> <br>
    <RouterLink to="/publicaciones">publicaciones</RouterLink> <br>
    <RouterLink to="/ingreso">ingreso</RouterLink>
    <RouterView />
  </div>    
</template>
<script lang="ts">

export default {
  mixins: [],
  components: {
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style>

</style>