<template>
  <div class="home-container">
    <listing-summary-group
      class="listing-summary-group"
      v-for="(listings, country) in home_listings"
      :key="country"
      :country="country"
      :listings="listings"
    ></listing-summary-group>
  </div>
</template>

<script>
import axios from "axios";

import { mapGetters } from "vuex";
import ListingSummaryGroup from "../Listing/ListingSummaryGroup";

export default {
  components: { ListingSummaryGroup },
  computed: {
    ...mapGetters(['home_listings'])
  }
};
</script>

<style>
</style>
