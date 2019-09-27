import Vue from 'vue';
import { populateAmenitiesAndPrices } from './helpers'

let model = window.vuebnb_listing_model;
model = populateAmenitiesAndPrices(model);

Vue.component('image-carousel', {
  template: `
    <div class="image-carousel">
      <img :src="image">
      <div class="controls">
        <carousel-control dir="left" @change-image="changeImage"></carousel-control>
        <carousel-control dir="right" @change-image="changeImage"></carousel-control>
      </div>
    </div>
  `,
  props: ['images'],
  data() {
    return {
      index: 0
    }
  },
  methods: {
    changeImage(val) {
      const newIndex = this.index + parseInt(val);
      if (newIndex < 0) {
        this.index = this.images.length - 1;
      } else if (newIndex === this.images.length) {
        this.index = 0;
      } else {
        this.index = newIndex;
      }
    }
  },
  computed: {
    image() {
      return this.images[this.index];
    }
  },
  components: {
    'carousel-control': {
      props: ['dir'],
      template: `<i :class="classes" @click="clicked"></i>`,
      methods: {
        clicked() {
          this.$emit('change-image', this.dir === 'left' ? -1 : 1);
        }
      },
      computed: {
        classes() {
          return `carousel-control fa fa-2x fa-chevron-${this.dir}`
        }
      }
    }
  }
});

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
