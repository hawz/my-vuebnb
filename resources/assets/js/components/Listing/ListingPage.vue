<template>
  <div>
    <header-image v-if="listing.images[0]" :image-url="listing.images[0]" @header-clicked="openModal" :id="listing.id"></header-image>
    <div class="container">
      <div class="heading">
        <h1>{{ listing.title }}</h1>
        <p>{{ listing.address }}</p>
      </div>
      <hr />
      <div class="about">
        <h3>About this listing</h3>
        <expandable-text>{{ listing.about }}</expandable-text>
      </div>
      <div class="lists">
        <feature-list title="Amenities" :items="listing.amenities">
          <template slot-scope="amenity">
            <i class="fa fa-lg" :class="amenity.icon"></i>
            <span>{{ amenity.title }}</span>
          </template>
        </feature-list>
        <feature-list title="Prices" :items="listing.prices">
          <template slot-scope="price">
            {{ price.title }}:
            <strong>{{ price.value }}</strong>
          </template>
        </feature-list>
      </div>
    </div>
    <modal-window ref="imagemodal">
      <image-carousel :images="listing.images"></image-carousel>
    </modal-window>
  </div>
</template>

<script>
import { populateAmenitiesAndPrices } from "../../helpers";
import ImageCarousel from "../Carousel/ImageCarousel";
import ModalWindow from "../UI/ModalWindow";
import HeaderImage from "../UI/HeaderImage";
import FeatureList from "../UI/FeatureList";
import ExpandableText from "../UI/ExpandableText";

export default {
  components: {
    ImageCarousel,
    ModalWindow,
    HeaderImage,
    FeatureList,
    ExpandableText
  },
  computed: {
    listing() {
      return populateAmenitiesAndPrices(
        this.$store.getters.getListing(this.$route.params.listing)
      )
    }
  },
  methods: {
    openModal() {
      this.$refs.imagemodal.modalOpen = true;
    }
  }
};
</script>

<style>
.about {
  margin-top: 2em;
}

.about h3 {
  font-size: 22px;
}
</style>