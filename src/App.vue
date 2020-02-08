<template>
  <v-app>
    <AppHeader />

    <v-content>
      <router-view class="pa-5" />
    </v-content>

    <AppFooter />
  </v-app>
</template>

<script lang="ts">
import AppHeader from '~/components/app/AppHeader';
import AppFooter from '~/components/app/AppFooter';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss"></style>
