<template>
    <div class="projet">
        <h2>{{ 'myProjects' | translate }}</h2>
        <ul>
            <li v-for="(projet, i) in projets" :key="i">{{ 'myProjects' | translate }}</li>
        </ul>
    </div>
</template>

<script>
// import { MixinTranslate } from "@/mixins/MixinTranslate.js"

export default {
  // mixins: [MixinTranslate],
  name: 'projet',
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

<style scoped>
  .projet {
  max-width: 250px;
  margin: auto;
  text-justify: center;
}
</style>

