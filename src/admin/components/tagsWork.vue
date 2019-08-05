<template lang="pug">
ul.works__tags-preview
  li.works__tag-preview(
    v-for='tag in tags'
  )
    button(type='button').works__tag-btn-preview {{tag}}


</template>

<script>
export default {
  props: {
    tags: Array
  }
};
</script>

<style lang="postcss">
@import url("../../styles/mixins.pcss");
.works__tags-preview {
  display: flex;
  pointer-events: none;

  @include phones {
    justify-content: center;
  }
}

.works__tag-btn-preview {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-size: 13px;
}

.works__tag-preview {
  background-color: $white;
  margin-right: 10px;
  border-radius: 20px;

  &:last-child {
    margin-right: 0;
  }
}
</style>
