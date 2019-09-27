import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers'
import ImageCarousel from './components/ImageCarousel';
import ModalWindow from './components/ModalWindow';
import HeaderImage from './components/HeaderImage';
import FeatureList from './components/FeatureList';

let model = window.vuebnb_listing_model;
model = populateAmenitiesAndPrices(model);

// My main vue instance, mounted on the div#app
new Vue({
  el: '#app',
  components: {
    ImageCarousel,
    ModalWindow,
    HeaderImage,
    FeatureList
  },
  data: {
    ...model,
    isContracted: true
  },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    }
  }
});
