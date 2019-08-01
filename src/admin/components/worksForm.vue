<template lang="pug">
  .works__edit(:class='{blocked: formIsBlocked}')
    .works__edit-title
      .works__edit-name Редактирование работы
    .works__edit-content
      form.works__form
        .works__load
          label.works__load-pic(
            :class="{'filled' : this.renderedPhotoUrl.length, 'error' : validation.hasError('renderedPhotoUrl')}"
            :style="{'backgroundImage' : `url(${this.renderedPhotoUrl})`}"
          )
            input(
              type='file'
              @change='appendFileAndRenderPhoto'
            ).works__load-file-input
            .works__load-text(
              :class="{'filled' : this.renderedPhotoUrl.length}"
            )
              p Перетащите или загрузите для загрузки изображения
            .btn(
              :class="{'filled' : this.renderedPhotoUrl.length}"
            ) Загрузить
            errorTooltip(
              :errorText="validation.firstError('renderedPhotoUrl')"
            )
        //- .works__preview
        //-   .works__preview-img
        //-     img(src="../../images/content/slider_preview1.jpg").works__preview-pic
        //-   button(type='button').works__preview-btn Изменить превью
        .works__desc
          .works__desc-row
            label.works__desc-block(:class="{'error' : validation.hasError('workNew.title')}")
              .works__desc-block-title Название
              input.works__field(
                type="text" 
                name="name" 
                placeholder="Название"
                v-model='workNew.title'
              )
              errorTooltip(
                :errorText="validation.firstError('workNew.title')"
              )
          .works__desc-row
            label.works__desc-block(:class="{'error' : validation.hasError('workNew.link')}")
              .works__desc-block-title Ссылка
              input.works__field(
                type="text" 
                name="link" 
                placeholder="Ссылка"
                v-model='workNew.link'
              )
              errorTooltip(
                :errorText="validation.firstError('workNew.link')"
              )
          .works__desc-row
            label.works__desc-block(:class="{'error' : validation.hasError('workNew.description')}")
              .works__desc-block-title Описание
              textarea.works__textarea(
                name="message" 
                placeholder="Описание"
                v-model='workNew.description'
              )
              errorTooltip(
                :errorText="validation.firstError('workNew.description')"
              )
          .works__desc-row(
            v-if="!workForm.editMode"
          )
            label.works__desc-block(:class="{'error' : validation.hasError('workNew.techs')}")
              .works__desc-block-title Добавление тэга
              input.works__field(
                type="text" 
                name="tags" 
                placeholder="Тэги"
                v-model='workNew.techs'
                @keydown.enter='ADD_NEWTAGS(workNew.techs)'
              )
              errorTooltip(
                :errorText="validation.firstError('workNew.techs')"
              )
          .works__desc-row(
            v-if="workForm.editMode"
          )
            label.works__desc-block(:class="{'error' : validation.hasError('workNew.techs')}")
              .works__desc-block-title Добавление тэга
              input.works__field(
                type="text" 
                name="tags" 
                placeholder="Тэги"
                v-model='workNew.techs'
                @keydown.enter='EDIT_EDITEDTAGS(workNew.techs)'
              )
              errorTooltip(
                :errorText="validation.firstError('workNew.techs')"
              )
          tagsForm
              
          .works__buttons
            button(
              type='button'
              @click="CLOSE_FORM"
              ).btn-cancel Отмена    
            button(
              type='button'
              @click='addNewWork'
              v-if="!workForm.editMode"
              ).btn Сохранить
            button(
              type='button'
              @click='saveEditedWork'
              v-if="workForm.editMode"
              ).btn Сохранить  
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "workNew.title": value => {
      return Validator.value(value).required("Введите название");
    },
    "workNew.techs": value => {
      return Validator.value(value).required("Введите теги");
    },
    "renderedPhotoUrl": value => {
      return Validator.value(value).required("Загрузите изображение");
    },
    "workNew.link": value => {
      return Validator.value(value).required("Введите ссылку");
    },
    "workNew.description": value => {
      return Validator.value(value).required("Введите описание");
    }
  },
  data() {
    return {
      renderedPhotoUrl: "",
      workNew: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      },
      formIsBlocked: false
    };
  },
  components: {
    errorTooltip: () => import("./errorTooltip"),
    tagsForm: () => import("./tagsForm")
  },
  computed: {
    ...mapState("works", {
      workForm: state => state.workForm,
      editedWork: state => state.editedWork,
      editedTags: state => state.editedTags
    }),

    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.workNew.photo}`;
    }
  },
  methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    ...mapMutations("works", ["CLOSE_FORM", "ADD_NEWTAGS", "ADD_EDITEDTAGS", "EDIT_EDITEDTAGS"]),
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    appendFileAndRenderPhoto(e) {
      const file = e.target.files[0];
      this.workNew.photo = file;

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
    createWorkFormData() {
      const formData = new FormData();

      formData.append("title", this.workNew.title);
      formData.append("techs", this.workNew.techs);
      formData.append("photo", this.workNew.photo);
      formData.append("link", this.workNew.link);
      formData.append("description", this.workNew.description);

      return formData;
    },
    async addNewWork() {
      if ((await this.$validate()) === false) return;
      this.formIsBlocked = true;

      try {
        const workFormData = this.createWorkFormData();
        await this.addWork(workFormData);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Работа добавлена'
        });

        this.workNew.title = "";
        this.workNew.techs = "";
        this.workNew.link = "";
        this.workNew.description = "";
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
    setEditedWork() {
      this.workNew = { ...this.editedWork };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },
    async saveEditedWork() {
      if ((await this.$validate()) === false) return;
      try {
        await this.editWork(this.workNew);
        this['SHOW_TOOLTIP']({
          type: 'success',
          text: 'Работа изменена'
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
    if (this.workForm.editMode) {
      this.setEditedWork();
      this["ADD_EDITEDTAGS"](this.workNew);
    }
  }
};
</script>
<style lang="postcss">
@import url("../../styles/mixins.pcss");

.works__edit.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}

.works__load-pic {
  position: relative;
  flex: 1;
  background: #dee4ed;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 65px;
  margin-right: 30px;
  border: 1px dashed rgb(161, 161, 161);
  cursor: pointer;

  @include tablets {
    /* display: none; */
    margin-bottom: 50px;
    width: 100%;
  }

  &.filled {
    background: center center no-repeat / cover;
  }
}
.works__load-file-input {
  position: absolute;
  top: 0;
  left: -9999px;
}

.works__load-text.filled {
  visibility: hidden;
}

.btn.filled {
  visibility: hidden;
}
</style>
