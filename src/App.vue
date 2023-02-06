<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">{{ navBar }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="item in mainMenu" v-bind:key="item.id">
                        <router-link class="nav-link fs-5" :to="{ path: item.link }">{{ item.label }}</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link class="nav-link fs-5" to="/">Texto</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link fs-5" to="/file">Archivo</router-link>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>
    <main class="container">
        <router-view></router-view>
    </main>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            navBar: `Base64`,
            mainMenu: [
                {
                    id: 1,
                    label: `Texto`,
                    link: `/`
                },
                {
                    id: 2,
                    label: `Archivo`,
                    link: `/file`
                },
            ]
        }
    }
}
</script>

<style>
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
