<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
    <sidebar/>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

        <v-menu :nudge-width="100" :class="searching ? 'hidden-xs-only' : ''">
            <v-toolbar-title slot="activator">
                <v-icon>more_vert</v-icon>
            </v-toolbar-title>
            <v-list>
                <v-list-tile v-for="(item, index) in menuItems" :key="index" @click="item.action()">
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        <!--
        <v-menu :nudge-width="100" :class="searching ? 'hidden-xs-only' : ''">
            <v-toolbar-title slot="activator">
                <span>{{ menuItems[0].title }}</span>
                <v-icon>arrow_drop_down</v-icon>
            </v-toolbar-title>
            <v-list>
                <v-list-tile v-for="item in menuItems" :key="item">
                    <v-list-tile-title v-text="item.title"></v-list-tile-title>
                </v-list-tile>
                <v-list-tile @click="$router.push('/login')">
                    <v-list-tile-title>Login</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        -->
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="secondary" app>
      <span class="white--text">&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  data: () => ({
    drawer: null,
    menuItems: [],
    searching: false
  }),
  components: {
    sidebar: Sidebar
  },
  mounted () {
    this.menuItems = [
      {
        title: 'Hello',
        action: () => {
          console.log(this.$router)
        }
      },
      { title: 'World', action: () => {} },
      {
        title: 'Login',
        action: () => {
          this.$router.push('/login')
        }
      }
    ]
  }
}
</script>

<style scoped>
</style>
