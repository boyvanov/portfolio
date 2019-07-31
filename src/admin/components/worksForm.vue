<template lang="pug">
  .works__edit(:class='{blocked: formIsBlocked}')
    .works__edit-title
      .works__edit-name Редактирование работы
    .works__edit-content
      form.works__form
        .works__load
          label.works__load-pic(
            :class="{'filled' : this.renderedPhotoUrl.length}"
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
            errorTooltip
        //- .works__preview
        //-   .works__preview-img
        //-     img(src="../../images/content/slider_preview1.jpg").works__preview-pic
        //-   button(type='button').works__preview-btn Изменить превью
        .works__desc
          .works__desc-row
            label.works__desc-block
              .works__desc-block-title Название
              input.works__field(
                type="text" 
                name="name" 
                placeholder="Название"
                v-model='workNew.title'
              )
              errorTooltip
          .works__desc-row
            label.works__desc-block
              .works__desc-block-title Ссылка
              input.works__field(
                type="text" 
                name="link" 
                placeholder="Ссылка"
                v-model='workNew.link'
              )
              errorTooltip
          .works__desc-row
            label.works__desc-block
              .works__desc-block-title Описание
              textarea.works__textarea(
                name="message" 
                placeholder="Описание"
                v-model='workNew.description'
              )
              errorTooltip
          .works__desc-row
            label.works__desc-block
              .works__desc-block-title Добавление тэга
              input.works__field(
                type="text" 
                name="tags" 
                placeholder="Тэги"
                v-model='workNew.techs'
                @keydown.enter='ADD_TAGS(workNew.techs)'
              )
              errorTooltip
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
export default {
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
      editedWork: state => state.editedWork
    }),

    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.workNew.photo}`;
    }
  },
  methods: {
    ...mapActions("works", ["addWork", "editWork"]),
    ...mapMutations("works", ["CLOSE_FORM", "ADD_TAGS"]),
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
      this.formIsBlocked = true;

      try {
        const workFormData = this.createWorkFormData();
        await this.addWork(workFormData);
        this.workNew.title = "";
        this.workNew.techs = "";
        this.workNew.link = "";
        this.workNew.description = "";
      } catch (error) {
        alert(error.message);
      } finally {
        this.formIsBlocked = false;
      }
    },
    setEditedWork() {
      this.workNew = { ...this.editedWork };
      this.renderedPhotoUrl = this.remotePhotoPath;
    },
    async saveEditedWork() {
      try {
        await this.editWork(this.workNew);
        this["CLOSE_FORM"]();
      } catch (error) {
        alert(error.message);
      }
    }
  },
  created() {
    if (this.workForm.editMode) {
      this.setEditedWork();
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
