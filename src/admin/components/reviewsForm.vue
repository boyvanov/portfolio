<template lang="pug">
  .reviews__new(:class='{blocked: formIsBlocked}')
    .reviews__new-title
      .reviews__new-name Новый отзыв
    .reviews__new-content
      form.reviews__new-form
        .reviews__new-avatar-wrap
          label.reviews__new-avatar(:class="{'error' : validation.hasError('renderedPhotoUrl')}")
            input(
              type='file'
              @change='appendFileAndRenderPhoto'
            ).reviews__new-file-input
            errorTooltip(
              :errorText="validation.firstError('renderedPhotoUrl')"
            )
            .reviews__new-pic
              .reviews__new-avatar-empty(
                :class="{'filled' : this.renderedPhotoUrl.length}"
                :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
              )
            .reviews__new-addphoto Добавить фото
        .reviews__new-desc
          .reviews__new-row
            label.reviews__new-block(:class="{'error' : validation.hasError('reviewNew.author')}")
              .reviews__new-block-title Имя автора
              input.reviews__new-field(
                  type="text" 
                  name="name" 
                  placeholder="Имя автора"
                  v-model='reviewNew.author'
              )
              errorTooltip(
                :errorText="validation.firstError('reviewNew.author')"
              )
            label.reviews__new-block(:class="{'error' : validation.hasError('reviewNew.occ')}")
              .reviews__new-block-title Титул автора
              input.reviews__new-field(
                type="text" 
                name="position" 
                placeholder="Титул автора"
                v-model='reviewNew.occ'
              )
              errorTooltip(
                :errorText="validation.firstError('reviewNew.occ')"
              )
          .reviews__new-row
            label.reviews__new-block(:class="{'error' : validation.hasError('reviewNew.text')}")
              .reviews__new-block-title Отзыв
              textarea.reviews__new-textarea(
                type="text" 
                name="review" 
                placeholder="Отзыв"
                v-model='reviewNew.text'
              )
              errorTooltip(
                :errorText="validation.firstError('reviewNew.text')"
              )
          .reviews__buttons
            button(
              type='button'
              @click="CLOSE_FORM"
            ).btn-cancel Отмена    
            button(
              type='button'
              @click='addNewReview'
              v-if="!reviewForm.editMode"
            ).btn Сохранить
            button(
              type='button'
              @click='saveEditedReview'
              v-if="reviewForm.editMode"
            ).btn Сохранить
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "reviewNew.author": value => {
      return Validator.value(value).required("Введите имя");
    },
    "reviewNew.occ": value => {
      return Validator.value(value).required("Введите позицию");
    },
    "renderedPhotoUrl": value => {
      return Validator.value(value).required("Загрузите изображение");
    },
    "reviewNew.text": value => {
      return Validator.value(value).required("Введите отзыв");
    }
  },
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
  components: {
    errorTooltip: () => import("./errorTooltip")
  },
  computed: {
    ...mapState("reviews", {
      reviewForm: state => state.reviewForm,
      editedReview: state => state.editedReview
    }),

    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.reviewNew.photo}`;
    }
  },
  methods: {
    ...mapActions("reviews", ["addReview", "editReview"]),
    ...mapMutations("reviews", ["CLOSE_FORM"]),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
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
    createReviewFormData() {
      const formData = new FormData();

      formData.append("author", this.reviewNew.author);
      formData.append("photo", this.reviewNew.photo);
      formData.append("text", this.reviewNew.text);
      formData.append("occ", this.reviewNew.occ);

      return formData;
    },
    async addNewReview() {
      if ((await this.$validate()) === false) return;
      this.formIsBlocked = true;

      try {
        const reviewFormData = this.createReviewFormData();
        await this.addReview(reviewFormData);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Отзыв добавлен'
        });
        this.reviewNew.author = "";
        this.reviewNew.occ = "";
        this.reviewNew.text = "";
        this.renderedPhotoUrl = "";
        
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
    setEditedReview() {
      this.reviewNew = { ...this.editedReview };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },
    async saveEditedReview() {
      if ((await this.$validate()) === false) return;
      try {
        await this.editReview(this.reviewNew);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Отзыв изменен'
        });
        this["CLOSE_FORM"]();
      } catch (error) {
        this['SHOW_TOOLTIP']({
          type: 'error',
          text: 'Произошла ошибка'
        });
      }
    }
  },
  created() {
    if (this.reviewForm.editMode) {
      this.setEditedReview();
    }
  }
};
</script>

<style lang="postcss">

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

  &::before {
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
    &::before {
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
