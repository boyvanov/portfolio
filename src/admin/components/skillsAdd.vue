<template lang="pug">
.about__block-container
  .about__block-title
    .title__row(:class='{blocked: formIsBlocked}')
      .cell__group
        input(
          type="text" 
          name="group" 
          placeholder="Название новой группы"
          v-model='categoryTitle'
          ).group
      .cell__ok 
        button(
          type='button'
          @click='addNewCategory'
          ).cell__edit-btn
          svg.edit__icon.edit__icon_ok
            use(xlink:href="sprite.svg#tick")
      .cell__delete
        button(
          type='button'
          ).cell__edit-btn
          svg.edit__icon.edit__icon_delete
            use(xlink:href="sprite.svg#remove")

  .about__block-content
  .about__block-add-skill
    .skill__row(:class='{blocked: formIsBlocked}')
      .cell__new-skill
        input(type="text" name="new-skill" placeholder="Новый навык").new-skill
      label.cell__number
        input(type="text" name="number" placeholder="0").number.new-number
        .percent %
      .cell__icon
        button(type='button').about__title-add-circle_new  
      
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      categoryTitle: "",
      formIsBlocked: false
    };
  },
  methods: {
    ...mapActions("categories", ["addCategory"]),
    async addNewCategory() {
      this.formIsBlocked = true;
      try {
        await this.addCategory(this.categoryTitle);
        this.categoryTitle = "";
      } catch (error) {
        alert(error.message);
      } finally {
        this.formIsBlocked = false;
      }
    }
  }
};
</script>

<style lang="postcss">
.title__row.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>


