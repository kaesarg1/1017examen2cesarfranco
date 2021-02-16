<template>
  <div class="container">
    <form>
      <!-- nom -->
      <label for="nom"> {{'nom' | translate }}</label>
      <input type="text" name="nom" />
      <!-- prénom -->
      <label for="prenom">{{'prenom' | translate }} :</label>
      <input type="text" name="prenom" />
      <!-- email -->
      <label for="email">{{ 'Email' | translate }}:</label>
      <input type="text" name="email" />
      <!-- dropdown -->
      <label for="cateorie">{{ categorie | translate }}:</label>
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