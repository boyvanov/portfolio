<template lang="pug">
 .review
    .review__user
      .review__avatar
        img(:src="remotePhotoPath" alt='review-pic').review__pic
      .review__user-desc
        .review__user-name {{review.author}}
        .review__user-position {{review.occ}}
    .review__text {{review.text}}
    .review__btns
      button(
        type='button'
        @click='showFormAndTurnEditModeOn'
        ).btns-edit Править
      button(
        type='button'
        @click='removeExistedReview'
        ).btns-delete Удалить
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  props: {
    review: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`;
    }
  },
  methods: {
    ...mapActions("reviews", ["removeReview"]),
    ...mapMutations("reviews", ["SHOW_FORM", "TURN_EDIT_MODE_ON"]),
    async removeExistedReview() {
      try {
        await this.removeReview(this.review.id);
      } catch (error) {
        alert(error.message);
      }
    },
    showFormAndTurnEditModeOn() {
      this["TURN_EDIT_MODE_ON"](this.review);
      this["SHOW_FORM"]();
    }
  }
};
</script>
