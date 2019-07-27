<template lang="pug">
  .reviews__new(:class='{blocked: formIsBlocked}')
    .reviews__new-title
      .reviews__new-name Новый отзыв
    .reviews__new-content
      form.reviews__new-form
        .reviews__new-avatar-wrap
          label.reviews__new-avatar
            input(
              type='file'
              @change='appendFileAndRenderPhoto'
            ).reviews__new-file-input
            .reviews__new-pic
              .reviews__new-avatar-empty(
                :class="{'filled' : this.renderedPhotoUrl.length}"
                :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
              )
            .reviews__new-addphoto Добавить фото
        .reviews__new-desc
          .reviews__new-row
            label.reviews__new-block
              .reviews__new-block-title Имя автора
              input.reviews__new-field(
                type="text" 
                name="name" 
                placeholder="Имя автора"
                v-model='reviewNew.author'
                )
            label.reviews__new-block
              .reviews__new-block-title Титул автора
              input.reviews__new-field(type="text" 
              name="position" 
              placeholder="Титул автора"
              v-model='reviewNew.occ'
              )
          .reviews__new-row
            label.reviews__new-block
              .reviews__new-block-title Отзыв
              textarea.reviews__new-textarea(type="text" 
              name="review" 
              placeholder="Отзыв"
              v-model='reviewNew.text'
              )
          .reviews__buttons
            button(type='button').btn-cancel Отмена    
            button(
              type='button'
              @click='addNewReview').btn Сохранить
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      renderedPhotoUrl: "",
      reviewNew: {
        author: "",
        occ: "",
        photo: "",
        text: ""
      },
      formIsBlocked: false
    };
  },
  methods: {
    ...mapActions("reviews", ["addReview"]),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.reviewNew.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhotoUrl = reader.result;
        };
      } catch (error) {
        alert(error.message);
      }
    },
    async addNewReview() {
      this.formIsBlocked = true;

      try {
        await this.addReview(this.reviewNew);
        this.reviewNew.author = "";
        this.reviewNew.occ = "";
        this.reviewNew.photo = "";
        this.reviewNew.text = "";
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
.reviews__new-avatar {
  position: relative;
  cursor: pointer;
}

.reviews__new-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}

.reviews__new-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 27px;
}

.reviews__new-avatar-empty {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #dee4ed;
  position: relative;

  &:before {
    content: "";
    height: 115px;
    width: 85px;
    background: svg-load("user.svg", fill=#fff) center center no-repeat;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &.filled {
    background: center center no-repeat / cover;
    &:before {
      display: none;
    }
  }
}

.reviews__new-addphoto {
  color: #383bcf;
  font-weight: 600;
  text-align: center;
}

.reviews__new.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>
