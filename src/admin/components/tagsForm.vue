<template lang="pug">
ul.works__tags
  li.works__tag(
    v-if="!workForm.editMode"
    v-for='tag in newTags'
  )
    button(
      type='button'
      @click='REMOVE_NEWTAG(tag)'
    ).works__tag-btn {{tag}}
    
  li.works__tag(
    v-if="workForm.editMode"
    v-for='tag in editedTags'
  )
    button(
      type='button'
      @click='REMOVE_EDITEDTAG(tag)'
    ).works__tag-btn {{tag}}
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("works", {
      newTags: state => state.newTags,
      workForm: state => state.workForm,
      editedTags: state => state.editedTags
    })
  },
  methods: {
    ...mapMutations("works", ["REMOVE_NEWTAG", "REMOVE_EDITEDTAG"])
  }
};
</script>

<style lang="postcss">
</style>
