<template>
    <div class="footer container-flex bg-light">
        <div class="footer-copyright text-center">
          <p class="text-align-center">
            Copyright &copy; {{ getYearDate }} - Cesar Franco - All Rights Reserved<!-- Copyright -->
          </p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Footer',
  computed: {
    getYearDate: function() {
      const date = new Date();
      return date.getFullYear();
    },
  },


}
</script>

<style scoped>
  .footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   text-align: center;
}
</style>