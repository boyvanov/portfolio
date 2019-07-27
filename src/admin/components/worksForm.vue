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
          .works__desc-row
            label.works__desc-block
              .works__desc-block-title Ссылка
              input.works__field(
                type="text" 
                name="link" 
                placeholder="Ссылка"
                v-model='workNew.link'
                )
          .works__desc-row
            label.works__desc-block
              .works__desc-block-title Описание
              textarea.works__textarea(
                name="message" 
                placeholder="Описание"
                v-model='workNew.description'
                )
          .works__desc-row
            label.works__desc-block
              .works__desc-block-title Добавление тэга
              input.works__field(
                type="text" 
                name="tags" 
                placeholder="Тэги"
                v-model='workNew.techs')
          ul.works__tags
            li.works__tag
              button(type='button').works__tag-btn HTML
              
            li.works__tag
              button(type='button').works__tag-btn CSS
              
            li.works__tag
              button(type='button').works__tag-btn Javascript
              
          .works__buttons
            button(type='button').btn-cancel Отмена    
            button(
              type='button'
              @click='addNewWork').btn Сохранить   
</template>

<script>
import { mapActions } from "vuex";
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
  methods: {
    ...mapActions("works", ["addWork"]),
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
    async addNewWork() {
      this.formIsBlocked = true;

      try {
        await this.addWork(this.workNew);
        this.workNew.title = "";
        this.workNew.techs = "";
        this.workNew.photo = "";
        this.workNew.link = "";
        this.workNew.description = "";
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
