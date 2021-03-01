<template>
    <div>
        <div class="title">
          <h1 class="h1">
            <span v-if="loadProfile">César Franco</span>
          </h1>
          <p v-if="!loadProfile"><!-- infoProfile loadProfile=false -->
            Profil: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <div v-if="loadProfile" class="infoprofile"><!-- infoProfile loadProfile=true -->
              <p>Formation: AEC Développement Web Front-end, Cégep de Trois-Rivières</p>
              <p>Langages: HTML, Javascript, CSS, PHP, SQL, Typescript</p>
              <p>Autres connaissances: Vidéographie et montage vidéo</p>
          </div>
        </div>
        <div class="content img"><!-- img loadProfile=true -->
          <img
            class="resize"
            src="https://wallpapercave.com/wp/wp6350571.jpg"
          />
        </div>
        <div class="content"><!-- infoProfile loadProfile=true -->
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
    </div>
   

</template>

<script>

export default {
  name: 'accueil',
 data() {
        return {
            loadProfile: true,
        }
    },

  created() {
    let loggedIn = false;

    if (loggedIn) {
        this.loadProfile = true;
        console.log(this.loadProfile);
    }
}

}
</script>

<style scoped>
.title, .resize, .content {
  max-width: 600px;
  margin: auto;
  
}
</style>
