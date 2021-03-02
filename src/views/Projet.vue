<template>
    <div class="projets">
        <h2>{{ 'Projects' | translate }}</h2>
        <ul>
            <li v-for="projets in projets" :key="projets">{{projets }}</li>
        </ul>
    </div>
</template>

<script>
import { MixinTranslate } from "../mixins/MixinTranslate" //MixinTranslate

export default {
  mixins: [MixinTranslate],
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
  .projets {
  max-width: 250px;
  margin: auto;
  text-justify: center;
}
</style>

