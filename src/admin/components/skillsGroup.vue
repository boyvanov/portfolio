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
      .cell__trash
        button(
          type='button'
          @click='removeExistedCategory'
          ).cell__edit-btn
          svg.edit__icon.edit__icon_trash
            use(xlink:href="sprite.svg#trash") 
    .title__row(v-else)
      .cell__group
        input(type="text" 
        name="group" 
        placeholder="Название"
        
        v-model='editedCategory.category'
        ).group 
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
          @click='editModeOn = false'
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
      .cell__new-skill
        input(
          type="text" 
          name="new-skill" 
          placeholder="Новый навык"
          v-model='newSkill.title'
          ).new-skill
      label.cell__number
        input(
          type="text" 
          name="number" 
          placeholder="0"
          v-model='newSkill.percent'
          ).number.new-number
        .percent %
      .cell__icon
        button(        
          type='button'
          @click='addNewSkill'
          ).about__title-add-circle_new  
</template>

<script>
import { mapActions } from "vuex";
export default {
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
    skillsItem: () => import("./skillsItem")
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    async addNewSkill() {
      this.formIsBlocked = true;
      try {
        await this.addSkill(this.newSkill);
        this.newSkill.title = "";
        this.newSkill.percent = "";
      } catch (error) {
        alert(error.message);
      } finally {
        this.formIsBlocked = false;
      }
    },
    async removeExistedCategory() {
      try {
        await this.removeCategory(this.category.id);
      } catch (error) {
        alert(error.message)
      }
    },
    async editCurrentCategory() {
      try {
        await this.editCategory(this.editedCategory);
        this.editModeOn = false;
      } catch (error) {
        alert(error.message)
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

