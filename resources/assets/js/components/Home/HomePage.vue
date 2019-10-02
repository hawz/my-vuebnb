<template>
  <div class="home-container">
    <listing-summary-group
      class="listing-summary-group"
      v-for="(listings, country) in listing_groups"
      :key="country"
      :country="country"
      :listings="listings"
    ></listing-summary-group>
  </div>
</template>

<script>
import axios from "axios";

import { groupByCountry } from "../../helpers";
import ListingSummaryGroup from "../Listing/ListingSummaryGroup";

export default {
  components: { ListingSummaryGroup },
  computed: {
    listing_groups() {
      return groupByCountry(this.$store.state.listing_summaries);
    }
  }
};
</script>

<style>
.home-container {
  margin: 0 auto;
  padding: 0 25px;
}

@media (min-width: 1131px) {
  .home-container {
    width: 1080px;
  }
}

.listing-summary-group {
  scroll-padding-bottom: 20px;
}
</style>