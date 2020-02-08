<template>
  <v-list nav>
    <v-list-item v-for="item in items" :key="item.title" link>
      <v-list-item-avatar>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <router-link :to="item.to" class="text-uppercase subtitle-2">
          {{ item.title }}
        </router-link>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
export default {
  name: 'MenuDrawer',

  data() {
    return {
      items: [
        { title: 'Strona Główna', icon: 'fa-home', to: '' },
        {
          title: 'Miasta',
          icon: 'fa-city',
          to: '',
          expansion: [
            { title: 'Wrocław', to: '', icon: '' },
            { title: 'Warszawa', to: '', icon: '' },
            { title: 'Poznań', to: '', icon: '' },
          ],
        },
        { title: 'Imprezy', icon: 'fa-info', to: '' },
        { title: 'Warsztaty', icon: 'fa-info', to: '' },
        { title: 'Festiwale', icon: 'fa-info', to: '' },
        { title: 'Dje', icon: 'fa-info', to: '' },
        { title: 'Instruktorzy', icon: 'fa-info', to: '' },
        { title: 'Promotorzy', icon: 'fa-info', to: '' },
        { title: 'Kontakt', icon: 'fa-info', to: '' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
