import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers'
import ImageCarousel from './components/ImageCarousel';

let model = window.vuebnb_listing_model;
model = populateAmenitiesAndPrices(model);

// My main vue instance, mounted on the div#app
new Vue({
  el: '#app',
  components: {
    ImageCarousel
  },
  data: {
    ...model,
    isContracted: true,
    headerImageStyle: {
      'background-image': `url(${model.images[0]})`
    },
    modalOpen: false
  },
  methods: {
    escapeKeyListener(event) {
      if (event.keyCode === 27 && this.modalOpen) {
        this.modalOpen = false;
      }
    }
  },
  watch: {
    modalOpen(newVal) {
      const className = 'modal-open';
      if (newVal) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    }
  },
  created() {
    document.addEventListener('keyup', this.escapeKeyListener);
  },
  destroyed() {
    document.removeEventListener('keyup', this.escapeKeyListener);
  }
});
