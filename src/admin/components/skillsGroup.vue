<template lang="pug">
.about__block-container
  .about__block-title
    .title__row(v-if='editModeOn === false')
      .cell__group {{category.category}}
      .cell__pencil
        button(
          type='button'
          @click='editModeOn = true'
          ).cell__edit-btn
          svg.edit__icon.edit__icon_pencil
            use(xlink:href="sprite.svg#pencil")
    .title__row(v-else)
      .cell__group(:class="{'error' : validation.hasError('editedCategory.category')}")
        input(type="text" 
        name="group" 
        placeholder="Название"
        v-model='editedCategory.category'
        ).group 
        errorTooltip(
          :errorText="validation.firstError('editedCategory.category')"
        )
      .cell__ok 
        button(
          type='button'
          @click='editCurrentCategory'
          ).cell__edit-btn
          svg.edit__icon.edit__icon_ok
            use(xlink:href="sprite.svg#tick")
      .cell__delete
        button(
          type='button'
          @click='removeExistedCategory'
          ).cell__edit-btn
          svg.edit__icon.edit__icon_delete
            use(xlink:href="sprite.svg#remove")
  
  .about__block-content
    skillsItem(
      v-for='skill in skills'
      :key='skill.id'
      :skill='skill'
    )
  .about__block-add-skill
    .skill__row(:class='{blocked: formIsBlocked}')
      .cell__new-skill(:class="{'error' : validation.firstError('newSkill.title')}")
        input(
          type="text" 
          name="new-skill" 
          placeholder="Новый навык"
          v-model='newSkill.title'
          ).new-skill
        errorTooltip(
          :errorText="validation.firstError('newSkill.title')"
        )
      label.cell__number(:class="{'error' : validation.firstError('newSkill.percent')}")
        input(
          type="text" 
          name="number" 
          placeholder="0"
          v-model='newSkill.percent'
          ).number.new-number
        errorTooltip(
          :errorText="validation.firstError('newSkill.percent')"
        )
        .percent %
      .cell__icon
        button(        
          type='button'
          @click='addNewSkill'
          ).about__title-add-circle_new  
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "editedCategory.category": value => {
      return Validator.value(value).required("Введите название");
    },
    "newSkill.title": value => {
      return Validator.value(value).required("Введите название");
    },
    "newSkill.percent": value => {
      return Validator.value(value)
        .required("Введите значение")
        .digit("Введите число")
        .between(0, 100, "Число от 0 до 100");
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percent: "",
        category: this.category.id
      },
      formIsBlocked: false,
      editModeOn: false,
      editedCategory: { ...this.category }
    };
  },
  props: {
    category: Object,
    skills: Array
  },
  components: {
    skillsItem: () => import("./skillsItem"),
    errorTooltip: () => import("./errorTooltip")
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    async addNewSkill() {
      if ((await this.$validate()) === false) return;

      this.formIsBlocked = true;
      try {
        await this.addSkill(this.newSkill);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Навык добавлен'
        });
        this.newSkill.title = "";
        this.newSkill.percent = "";
        this.validation.reset();
      } catch (error) {
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      } finally {
        this.formIsBlocked = false;
      }
    },
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category.id);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Группа удалена'
        });
      } catch (error) {
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    },
    async editCurrentCategory() {
      try {
        await this.editCategory(this.editedCategory);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Группа изменена'
        });
        this.editModeOn = false;
      } catch (error) {
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    }
  }
};
</script>

<style lang="postcss">
.skill__row.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>

