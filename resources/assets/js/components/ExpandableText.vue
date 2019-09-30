<template>
  <div>
    <p :class="{contracted: isContracted}">
      <slot></slot>
    </p>
    <button class="more" @click="isContracted = !isContracted">
      <span v-if="isContracted">+ More</span>
      <span v-else>- Less</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isContracted: true
    };
  }
};
</script>

<style>
.about p {
  white-space: pre-wrap;
}

.about p.contracted {
  height: 250px;
  overflow: hidden;
}

.about button.more {
  background: transparent;
  border: 0;
  color: #008489;
  padding: 0;
  font-size: 17px;
  font-weight: bold;
}

.about button.more:hover,
.about button.more:active,
.about button.more:focus {
  text-decoration: underline;
  outline: none;
}
</style>