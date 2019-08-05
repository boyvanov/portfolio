<template lang="pug">
section.works
      .container.works__container
        h2.title.works__title Блок "Работы"
        .works__content
          .works__edit
            .works__edit-title
              .works__edit-name Редактирование работы
            .works__edit-content
              form.works__form
                .works__load
                  .works__load-text
                    p Перетащите или загрузите для загрузки изображения
                  button(type='button').btn Загрузить
                .works__preview
                  .works__preview-img
                    img(src="../../../images/content/slider_preview1.jpg").works__preview-pic
                  button(type='button').works__preview-btn Изменить превью
                .works__desc
                  .works__desc-row
                    label.works__desc-block
                      .works__desc-block-title Название
                      input.works__field(type="text" name="name" placeholder="Дизайн сайта для авто салона Porsche")
                  .works__desc-row
                    label.works__desc-block
                      .works__desc-block-title Ссылка
                      input.works__field(type="text" name="link" placeholder="https://www.porsche-pulkovo.ru")
                  .works__desc-row
                    label.works__desc-block
                      .works__desc-block-title Описание
                      textarea.works__textarea(name="message" placeholder="Порше Центр Пулково - является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей")
                  .works__desc-row
                    label.works__desc-block
                      .works__desc-block-title Добавление тэга
                      input.works__field(type="text" name="tags" placeholder="Jquery, Vue.js, HTML5")
                  ul.works__tags
                    li.works__tag
                      button(type='button').works__tag-btn HTML
                      
                    li.works__tag
                      button(type='button').works__tag-btn CSS
                      
                    li.works__tag
                      button(type='button').works__tag-btn Javascript
                      
                  .works__buttons
                    button(type='button').btn-cancel Отмена    
                    button(type='button').btn Сохранить    
          ul.works__list
            li.works__item.add
              button(type='button').add-btn
                .add__content
                  .add__circle
                  .add__text Добавить работу
            li.works__item.work
              .work__img
                img(src="../../../images/content/slider_preview1.jpg").work__pic
              .work__desc
                h4.work__desc-title Сайт школы образования
                .work__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
              .work__desc-btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../../../images/content/slider_preview2.jpg").work__pic
              .work__desc
                h4.work__desc-title Сайт школы образования
                .work__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
              .work__desc-btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../../../images/content/slider_preview3.jpg").work__pic
              .work__desc
                h4.work__desc-title Сайт школы образования
                .work__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
              .work__desc-btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../../../images/content/slider_preview4.jpg").work__pic
              .work__desc
                h4.work__desc-title Сайт школы образования
                .work__desc-text
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
              .work__desc-btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
</template>

<script>

export default {

}
</script>

<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");

.works__title {
  margin-bottom: 60px;

  @include phones {
    padding-left: 20px;
  }
}

.works__edit {
  padding: 20px;
  background-color: $white;
  margin-bottom: 35px;
  box-shadow: 4.096px 2.868px 20px 0 rgba(0, 0, 0, 0.07);

  @include phones {
    padding: 20px 0;
  }
}

.works__edit-content {
  padding: 45px 15px 10px;

  @include tablets {
    flex-direction: column;
    padding: 30px 85px 10px;
  }

  @include phones {
    padding: 30px 0 10px;
  }
}

.works__form {
  display: flex;

  @include tablets {
    flex-direction: column;
  }
}

.works__edit-title {
  padding-bottom: 25px;
  border-bottom: 1px solid rgba($text-color, 0.15);
}

.works__edit-name {
  font-size: 18px;
  font-weight: 700;

  @include phones {
    padding-left: 20px;
  }
}

.works__load {
  flex: 1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 65px;
  margin-right: 30px;
  border: 1px dashed rgb(161, 161, 161);

  @include tablets {
    display: none;
  }
}

.works__load-text {
  font-weight: 600;
  opacity: 0.5;
  width: 50%;
  padding-bottom: 30px;
  text-align: center;
}

.works__preview {
  display: none;
  flex-direction: column;
  padding: 0 15px;
  margin-bottom: 50px;

  @include tablets {
    display: flex;
  }
}

.works__preview-pic {
  width: 100%;
  object-fit: cover;
  margin-bottom: 30px;
}

.works__preview-btn {
  color: #383bcf;
  font-weight: 600;
}

.works__desc {
  flex: 1;

  @include phones {
    padding: 0 20px;
  }
}

.works__desc-row {
  margin-bottom: 25px;
}

.works__desc-block {
  display: block;
}

.works__desc-block-title {
  opacity: 0.5;
  font-weight: 600;
  margin-bottom: 15px;
}

.works__field {
  width: 100%;
  padding-bottom: 15px;
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid $text-color;
}

.works__textarea {
  width: 100%;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 20px;
  min-height: 180px;
  resize: none;
  overflow: hidden;
  border: 1px solid rgba($text-color, 0.15);
  line-height: 1.75;
}

.works__textarea {
  @include phones {
    min-height: 200px;
  }
}

.works__tags {
  display: flex;
  margin-bottom: 40px;

  @include phones {
    justify-content: center;
  }
}

.works__tag-btn {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  font-size: 13px;

  &::after {
    display: block;
    content: "X";
    margin-left: 10px;
  }
}

.works__tag {
  background-color: #f4f4f4;
  opacity: 0.7;
  margin-right: 10px;
  border-radius: 20px;
}

.works__buttons {
  display: flex;
  justify-content: flex-end;
}

.works__buttons {
  @include tablets {
    justify-content: center;
  }
}

.works__list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;

  @include phones {
    flex-direction: column;
  }
}

.works__item {
  width: calc(100% / 3 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  @include tablets {
    width: calc(100% / 2 - 30px);
  }

  @include phones {
    width: 100%;
  }
}

.work {
  box-shadow: 4.096px 2.868px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: $white;
  position: relative;

  &:nth-child(2) {
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

.work__img {
  margin-bottom: 40px;
}

.work__pic {
  object-fit: cover;
  width: 100%;
}

.work__desc {
  padding: 0 30px;

  @include phones {
    padding: 0 20px;
  }
}

.work__desc-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
}
.work__desc-text {
  font-weight: 600;
  margin-bottom: 25px;
  opacity: 0.7;
  line-height: 1.875;
}

.work__desc-link {
  color: #383bcf;
  margin-bottom: 45px;
  font-weight: 600;
}

.work__desc-btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.work__desc-btns {
  padding: 0 30px;
}


</style>