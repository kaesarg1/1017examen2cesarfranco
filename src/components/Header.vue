<template>
  <div id="header" class="container-flex text-center"><!-- navBar-->
    <nav class="navbar bg-light">
      <span class="navbar-brand">Cesar Franco - Examen 2</span>
        <ul class="navbar-nav list-group list-group-horizontal">
          <li class="nav-item" v-for="menu in menuItems" :key="menu.id">
            <router-link :to="{path:menu.name}" class="nav-link p-3 h2">{{menu.name | translate }}</router-link><!--Router Link-->
          </li>
        </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { MixinTranslate } from "../mixins/MixinTranslate" //MixinTranslate

export default {
  mixins: [MixinTranslate],
  name: 'Header',
  
  data() {
      return {
        menuItems: [
          { 
            id: 1,
            name: "accueil",
            path: "/Accueil",
          },
          { 
            id: 2,
            name: "projets",
            path: "/Projets",
          },
          { 
            id: 3,
            name: "contact",
            path: "/Contact",
          }
        ]
      }

  }
}
</script>

<style scoped>
.navbar-brand {
  font-size: xx-large;
  padding-top: -120px;
}
.navbar {
  
  height: 80px;


}
</style>