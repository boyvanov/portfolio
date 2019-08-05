<template lang="pug">
.content__row(v-if='editModeOn === false')
  .cell__skill-val {{skill.title}}
  .cell__number-val {{skill.percent}} %
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
      @click='removeExistedSkill'
      ).cell__edit-btn
      svg.edit__icon.edit__icon_trash
        use(xlink:href="sprite.svg#trash") 
.content__row(v-else)
  .cell__skill
    input(
      type="text" 
      name="skill" 
      placeholder="Название"
      v-model='editedSkill.title'
      ).skill
  label.cell__number
    input(
      type="text" 
      name="number" 
      placeholder="Проценты"
      v-model='editedSkill.percent'
      ).number
    .percent %
  .cell__ok 
    button(
      type='button'
      @click='editCurrentSkill'
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
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    skill: Object
  },
  data() {
    return {
      editModeOn: false,
      editedSkill: { ...this.skill }
    };
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
      } catch (error) {
        alert(error.message)
      }
    },
    async editCurrentSkill() {
      try {
        this.editModeOn = false;
        await this.editSkill(this.editedSkill);
        
      } catch (error) {
        alert(error.message)
      }
    }
  }
};
</script>

<style lang="postcss">
.cell__skill-val {
  flex: 1;
}
</style>
