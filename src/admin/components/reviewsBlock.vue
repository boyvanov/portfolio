<template lang="pug">
 .review
    .review__user
      .review__avatar
        img(:src="review.photo" alt='review-pic').review__pic
      .review__user-desc
        .review__user-name {{review.author}}
        .review__user-position {{review.occ}}
    .review__text {{review.text}}
    .review__btns
      button(type='button').btns-edit Править
      button(
        type='button'
        @click='removeExistedReview'
        ).btns-delete Удалить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    review: Object
  },
  methods: {
    ...mapActions("reviews", ["removeReview", "editReview"]),
    async removeExistedReview() {
      try {
        await this.removeReview(this.review.id);
      } catch (error) {
        alert(error.message)
      }
    },
    // async editCurrentSkill() {
    //   try {
    //     await this.editSkill(this.editedSkill);
        
    //   } catch (error) {
    //     alert(error.message)
    //   }
    // }
  }
}
</script>
