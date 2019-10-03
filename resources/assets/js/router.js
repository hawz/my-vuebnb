import Vue from 'vue';
import VueRouter from 'vue-router';

import axios from 'axios';
import store from './store';

import HomePage from './components/Home/HomePage';
import ListingPage from './components/Listing/ListingPage';
import SavedPage from './components/Saved/SavedPage';
import LoginPage from './components/Login/LoginPage';

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/listing/:listing', component: ListingPage, name: 'listing' },
    { path: '/saved', component: SavedPage, name: 'saved' },
    { path: '/login', component: LoginPage, name: 'login' }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  let serverData = window.vuebnb_server_data;
  if (to.name === 'listing' ? store.getters.listing(to.params.listing) : store.state.listing_summaries.length > 0 || to.name === 'login') {
    next();
  } else if (!serverData.path || to.path !== serverData.path) {
    axios.get(`/api${to.path}`).then(({ data }) => {
      store.commit('addData', { route: to.name, data });
      next();
    })
  } else {
    store.commit('addData', { route: to.name, data: serverData });
    next();
  }
})

export default router;
