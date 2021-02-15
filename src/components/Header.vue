<template>
  <div id="header" class="container-flex text-center">
    <nav class="navbar bg-light">
      <span class="navbar-brand">Cesar Franco - Examen 2</span>
        <ul class="navbar-nav list-group list-group-horizontal">
          <li class="nav-item" v-for="menu in menuItems" :key="menu.id">
            <router-link :to="{path:menu.name}" class="nav-link p-5 h2">{{menu.name}}</router-link>
          </li>
        </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
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
}
</style>