<template>
  <div class="container">
    <form>

      <label for="nom"> {{'nom' | translate }}</label>      <!-- nom -->
      <input type="text" name="nom" />
 
      <label for="prenom">{{'prenom' | translate }} :</label>     <!-- prénom -->
      <input type="text" name="prenom" />

      <label for="email">{{ 'Email' | translate }}:</label>      <!-- email -->
      <input type="text" name="email" />

      <label for="categorie">{{ categorie | translate }}:</label>      <!-- dropdown -->
      <select name="categorie" class="form-control">
        <option v-for="(categorie, i) in categories" :key="i"> {{ categorie | translate }}</option>
    </select>
    <br>
      <button class="button">Submit</button>
    </form>
  </div>
</template>

<script>
// import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
  // mixins: [MixinTranslate],
  name: 'contact',
  data() {
      return {
          categories: [
              "Détails",
              "Soumission",
              "Rendezvous"
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