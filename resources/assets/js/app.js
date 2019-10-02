import Vue from 'vue';

import router from './router';
import store from './store';

import App from './components/App';

// My main vue instance, mounted on the div#app
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
