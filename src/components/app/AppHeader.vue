<template>
  <div>
    <v-navigation-drawer app v-model="showDrawer">
      <MenuDrawer />
    </v-navigation-drawer>

    <v-app-bar app hide-on-scroll>
      <v-app-bar-nav-icon @click="showDrawer = !showDrawer">
        <v-icon>fa-bars</v-icon>
      </v-app-bar-nav-icon>
      <span class="px-5">Kizomba Info Platform</span>

      <v-spacer />

      <span class="px-3">Łukasz Tucholski</span>
      <v-menu min-width="200" offset-y close-on-click close-on-content-click>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon><v-icon>fa-ellipsis-v</v-icon></v-btn>
        </template>

        <v-list avatar>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="n in 6" :key="n">
              <v-list-item-avatar class="pa-0 ma-0">
                <v-icon small>fa-angle-right</v-icon>
              </v-list-item-avatar>
              <v-list-item-content class="pa-0 ma-0">
                Menu {{ n }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import MenuDrawer from '~/components/menu/MenuDrawer';

export default {
  name: 'AppHeader',

  components: {
    MenuDrawer,
  },

  data() {
    return {
      showDrawer: true,
    };
  },
};
</script>

<style lang="sass"></style>
