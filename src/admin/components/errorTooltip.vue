<template lang="pug">
  .input__error-tooltip-container {{errorText}}
</template>

<script>
export default {
  props: {
    errorText: {
      type: String,
      default: "Ошибка"
    }
  }
};
</script>


<style lang="postcss">
@import url("../../styles/mixins.pcss");
.input__error-tooltip-container {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background: $errors-color;
  color: #fff;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top: 0;
    border-bottom-color: $errors-color;
    border-bottom-width: 7px;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
}

.login__form-block,
.cell__new-skill,
.cell__skill,
.cell__number,
.cell__group,
.reviews__new-block,
.reviews__new-avatar,
.works__desc-block,
.works__load-pic {
  &.error {
    .input__error-tooltip-container {
      display: block;
    }
  }
}

.cell__new-skill {
  .input__error-tooltip-container {
    left: 39%;
  }
}
.cell__number {
  .input__error-tooltip-container {
    left: 60%;
  }
}
</style>

