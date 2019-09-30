import Vue from 'vue';
import ListingPage from './components/ListingPage';

// My main vue instance, mounted on the div#app
new Vue({
  el: '#app',
  render: h => h(ListingPage)
});
