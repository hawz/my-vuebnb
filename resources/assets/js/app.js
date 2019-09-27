import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers'

let model = window.vuebnb_listing_model;
model = populateAmenitiesAndPrices(model);

Vue.component('image-carousel', {
  template: `
    <div class="image-carousel">
      <img :src="image">
      <div class="controls">
        <carousel-control></carousel-control>
        <carousel-control></carousel-control>
      </div>
    </div>
  `,
  data() {
    return {
      images: [
        '/images/1/Image_1.jpg',
        '/images/1/Image_2.jpg',
        '/images/1/Image_3.jpg',
        '/images/1/Image_4.jpg'
      ],
      index: 0
    }
  },
  computed: {
    image() {
      return this.images[this.index];
    }
  },
  components: {
    'carousel-control': {
      template: `<i class="carousel-control fa fa-2x fa-chevron-left"></i>`
    }
  }
})

var app = new Vue({
  el: '#app',
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
