import Vue from 'vue';
import App from '~/App';
import router from 'router';
import store from 'store';
import vuetify from 'plugins/vuetify';

import '~/assets/styles/index.scss';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App />'
})