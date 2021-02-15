<template>
  <div class="container">
    <form>
      <!-- nom -->
      <label for="nom">Nom :</label>
      <input type="text" name="nom" />
      <!-- prénom -->
      <label for="prenom">Prénom :</label>
      <input type="text" name="prenom" />
      <!-- email -->
      <label for="email">Email :</label>
      <input type="text" name="email" />
      <!-- dropdown -->
      <label for="cateorie">Catégorie</label>
      <select name="categorie" class="form-control">
        <option v-for="(categorie, i) in categories" :key="i">{{categorie}}</option>
    </select>
    <br>
      <button class="button">Submit</button>
    </form>
  </div>
</template>

<script>

export default {

  name: 'contact',
  data() {
      return {
          categories: [
              "Détails",
              "Demande de soumission",
              "Prendre un rendez vous"
          ]
      }
  },
}
</script>

<style scoped>
.container {
  max-width: 250px;
  margin: auto;
  
}
</style>