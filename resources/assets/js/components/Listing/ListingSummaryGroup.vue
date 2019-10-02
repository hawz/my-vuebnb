<template>
  <div class="listing-summary-group">
    <h1>Places in {{ country }}</h1>
    <div class="listing-carousel">
      <div class="controls">
        <carousel-control dir="left" @change-image="change"></carousel-control>
        <carousel-control dir="right" @change-image="change"></carousel-control>
      </div>
    </div>
    <div class="listing-summaries-wrapper">
      <div class="listing-summaries" :style="style">
        <listing-summary v-for="listing in listings" :key="listing.id" :listing="listing"></listing-summary>
      </div>
    </div>
  </div>
</template>

<script>
import ListingSummary from "./ListingSummary";
import CarouselControl from "../Carousel/CarouselControl";

const rowSize = 3;
const ListingSummaryWidth = 365;

export default {
  props: ["country", "listings"],
  data() {
    return {
      offset: 0
    };
  },
  methods: {
    change(val) {
      let newVal = this.offset + parseInt(val);
      if (newVal >= 0 && newVal <= this.listings.length - rowSize) {
        this.offset = newVal;
      } else {
        if (newVal < 0) {
          this.offset = this.listings.length - rowSize;
        } else {
          this.offset = 0;
        }
      }
    }
  },
  computed: {
    style() {
      return {
        transform: `translateX(${this.offset * -ListingSummaryWidth}px)`
      };
    }
  },
  components: {
    ListingSummary,
    CarouselControl
  }
};
</script>

<style>
.listing-summary-group {
  padding-bottom: 20px;
}

.listing-summaries {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: transform 0.5s;
}

.listing-summaries .listing-summary {
  margin-right: 15px;
}

.listing-summaries .listing-summary:last-child {
  margin-right: 0;
}

.listing-carousel {
  position: relative;
}

.listing-carousel .controls {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 100px;
  left: -45px;
  width: calc(100% + 90px);
}

.listing-carousel .controls .carousel-control {
  color: #c5c5c5;
  font-size: 1.5rem;
  cursor: pointer;
}

.listing-summaries-wrapper {
  overflow: hidden;
}
</style>