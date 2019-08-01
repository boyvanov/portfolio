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
  .cell__skill(:class="{'error' : validation.hasError('editedSkill.title')}")
    input(
      type="text" 
      name="skill" 
      placeholder="Название"
      v-model='editedSkill.title'
      ).skill
    errorTooltip(
      :errorText="validation.firstError('editedSkill.title')"
    )
  label.cell__number(:class="{'error' : validation.hasError('editedSkill.percent')}")
    input(
      type="text" 
      name="number" 
      placeholder="0"
      v-model='editedSkill.percent'
      ).number
    .percent %
    errorTooltip(
      :errorText="validation.firstError('editedSkill.percent')"
    )
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
import { mapActions, mapMutations } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "editedSkill.title": value => {
      return Validator.value(value).required("Введите название");
    },
    "editedSkill.percent": value => {
      return Validator.value(value)
        .required("Введите значение")
        .digit("Введите число")
        .between(0, 100, "Число от 0 до 100");
    }
  },
  props: {
    skill: Object
  },
  data() {
    return {
      editModeOn: false,
      editedSkill: { ...this.skill }
    };
  },
  components: {
    errorTooltip: () => import("./errorTooltip")
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill.id);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Навык удален'
        });
      } catch (error) {
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    },
    async editCurrentSkill() {
      try {
        this.editModeOn = false;
        await this.editSkill(this.editedSkill);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Навык изменен'
        });
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
.cell__skill-val {
  flex: 1;
}
</style>
