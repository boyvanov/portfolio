<template lang="pug">
  .query-tooltip(
    v-if='show'
    :class="{'success' : type === 'success', 'error' : type === 'error'}"
  ) {{text}}
    button(
      type='button'
      @click='CLOSE_TOOLTIP'
    ).query-tooltip__btn X
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      timeOut: 3000
    };
  },
  computed: {
    ...mapState("tooltip", {
      show: state => state.show,
      type: state => state.type,
      text: state => state.text
    })
  },
  methods: {
    ...mapMutations("tooltip", ["CLOSE_TOOLTIP"])
  },
  updated() {
    setTimeout(this["CLOSE_TOOLTIP"], this.timeOut);
  }
};
</script>
<style lang="postcss">
.query-tooltip {
  display: block;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;

  &.error {
    background: $errors-color;
  }

  &.success {
    background: $success-color;
  }
}

.query-tooltip__btn {
  color: $white;
  margin-left: 20px;
}
</style>
