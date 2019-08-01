<template lang="pug">
.about__block-container
  .about__block-title
    .title__row(:class='{blocked: formIsBlocked}')
      .cell__group(:class="{'error' : validation.hasError('categoryTitle')}")
        input(
          type="text" 
          name="group" 
          placeholder="Название новой группы"
          v-model='categoryTitle'
          ).group
        errorTooltip(
          :errorText="validation.firstError('categoryTitle')"
        )
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
          @click="$emit('closeNewCategory')"
          ).cell__edit-btn
          svg.edit__icon.edit__icon_delete
            use(xlink:href="sprite.svg#remove")

  .about__block-content
  .about__block-add-skill
    .skill__row.blocked
      .cell__new-skill
        input(type="text" name="new-skill" placeholder="Новый навык").new-skill
      label.cell__number
        input(type="text" name="number" placeholder="0").number.new-number
        .percent %
      .cell__icon
        button(type='button').about__title-add-circle_new  
      
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    categoryTitle: value => {
      return Validator.value(value).required("Введите название");
    }
  },
  data() {
    return {
      categoryTitle: "",
      formIsBlocked: false
    };
  },
  components: {
    errorTooltip: () => import("./errorTooltip")
  },
  methods: {
    ...mapActions("categories", ["addCategory"]),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    async addNewCategory() {
      if ((await this.$validate()) === false) return;
      this.formIsBlocked = true;
      try {
        await this.addCategory(this.categoryTitle);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Группа добавлена'
        });
        this.categoryTitle = "";
        this.validation.reset();
      } catch (error) {
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
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

.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>


