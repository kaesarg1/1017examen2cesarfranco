<template>
    <div class="projet">
        <h2>Projets</h2>
        <ul>
            <li v-for="(projet, i) in projets" :key="i">{{projet}}</li>
        </ul>
    </div>
</template>

<script>

export default {
  name: 'Projet',
  data() {
    return {
      projets: [
        "Dismortem website",
        "Architecture Coherence website",
        "IIAEJP website"
        
      ]
    }
  }

}
</script>

<style>

</style>