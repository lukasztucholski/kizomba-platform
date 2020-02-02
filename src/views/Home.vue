<template>
  <div>
    <AppHeader />
    <v-alert type="error">Under Construction</v-alert>
    <v-alert type="info">
      <a href="http://lukasztucholski.pl">
        Visit ->
        <v-btn light class="ml-3">
          <v-icon color="red" class="mr-2">mdi-mouse</v-icon>LukaszTucholski.pl
        </v-btn>
      </a>
    </v-alert>
  </div>
</template>

<script lang="ts">
import AppHeader from '~/components/AppHeader';

export default {
  name: 'Home',

  components: { AppHeader },
};
</script>

<style lang="scss">
.v-alert {
  font-size: 20px;
}
a,
a:visited {
  text-decoration: none;
  color: #fff;
}
</style>
