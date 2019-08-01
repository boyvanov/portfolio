<template lang="pug">
.works__group
  .work__img
    img(:src="remotePhotoPath" alt='work-pic').work__pic
    .work__img-tags
      tagsWork(
        :tags="tagsArray"
      )
  .work__desc
    h4.work__desc-title {{work.title}}
    .work__desc-text
      p {{work.description}}
    a(href='#').work__desc-link {{work.link}}
  .work__desc-btns
    button(
      type='button'
      @click='showFormAndTurnEditModeOn'
      ).btns-edit Править
    button(
      type='button'
      @click='removeExistedWork'
      ).btns-delete Удалить
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  props: {
    work: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`;
    },
    tagsArray() {
      return this.work.techs.split(" ");
    },

    ...mapState("works", {
      workForm: state => state.workForm
    })
  },
  components: {
    tagsWork: () => import("./tagsWork")
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    ...mapMutations("works", ["SHOW_FORM", "TURN_EDIT_MODE_ON"]),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    async removeExistedWork() {
      try {
        await this.removeWork(this.work.id);
        this["SHOW_TOOLTIP"]({
          type: "success",
          text: "Работа удалена"
        });
      } catch (error) {
        this["SHOW_TOOLTIP"]({
          type: "error",
          text: "Произошла ошибка"
        });
      }
    },
    showFormAndTurnEditModeOn() {
      this["TURN_EDIT_MODE_ON"](this.work);
      this["SHOW_FORM"]();
    }
  }
};
</script>
<style lang="postcss">
.work__img {
  position: relative;
}

.work__img-tags {
  position: absolute;
  bottom: 5%;
  right: 2%;

  & .works__tag-btn {
    cursor: initial;
  }
}

.works__group {
  &.current {
    &::before {
      content: "";
      display: block;
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba($white, 0.7);
    }
  }
}
</style>
