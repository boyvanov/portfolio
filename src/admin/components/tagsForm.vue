<template lang="pug">
ul.works__tags
  li.works__tag(
    v-for='tag in newTags'
  )
    button(
      type='button'
      @click='REMOVE_TAG(tag)'
    ).works__tag-btn {{tag}}
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("works", {
      newTags: state => state.newTags
    })
  },
  methods: {
    ...mapMutations("works", ["REMOVE_TAG"])
  }
};
</script>

<style lang="postcss">
</style>
