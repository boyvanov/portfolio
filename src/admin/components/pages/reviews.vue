<template lang="pug">
section.reviews
      .container.reviews__container
        h2.title.reviews__title Блок "Отзывы"
        .reviews__content
          .reviews__new
            .reviews__new-title
              .reviews__new-name Новый отзыв
            .reviews__new-content
              form.reviews__new-form
                .reviews__new-avatar-wrap
                  .reviews__new-avatar
                    svg.reviews__new-avatar-icon
                      use(xlink:href="sprite.svg#user")
                  button(type='button').reviews__new-avatar-add-btn Добавить фото
                .reviews__new-desc
                  .reviews__new-row
                    label.reviews__new-block
                      .reviews__new-block-title Имя автора
                      input.reviews__new-field(type="text" name="name" placeholder="Ковальчук Дмитрий")
                    label.reviews__new-block
                      .reviews__new-block-title Титул автора
                      input.reviews__new-field(type="text" name="position" placeholder="Основатель LoftSchool")
                  .reviews__new-row
                    label.reviews__new-block
                      .reviews__new-block-title Отзыв
                      textarea.reviews__new-textarea(type="text" name="review" placeholder="Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!")
                  .reviews__buttons
                    button(type='button').btn-cancel Отмена    
                    button(type='button').btn Сохранить
          ul.reviews__list
            li.reviews__item.add
              button(type='button').add-btn
                .add__content
                  .add__circle
                  .add__text Добавить отзыв
            li.reviews__item
              .review__user
                .review__avatar
                  img(src="../../../images/content/reviews1.png").review__pic
                .review__user-desc
                  .review__user-name Дмитрий Ковальчук
                  .review__user-position Основатель LoftSchool
              .review__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .review__btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
            li.reviews__item
              .review__user
                .review__avatar
                  img(src="../../../images/content/reviews2.png").review__pic
                .review__user-desc
                  .review__user-name Владимир Сабанцев
                  .review__user-position Преподаватель
              .review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .review__btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
            li.reviews__item
              .review__user
                .review__avatar
                  img(src="../../../images/content/reviews1.png").review__pic
                .review__user-desc
                  .review__user-name Дмитрий Ковальчук
                  .review__user-position Основатель LoftSchool
              .review__text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .review__btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
            li.reviews__item
              .review__user
                .review__avatar
                  img(src="../../../images/content/reviews2.png").review__pic
                .review__user-desc
                  .review__user-name Владимир Сабанцев
                  .review__user-position Преподаватель
              .review__text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
              .review__btns
                button(type='button').btns-edit Править
                button(type='button').btns-delete Удалить
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");

.reviews__title {
  margin-bottom: 60px;

  @include phones {
    padding-left: 20px;
  }
}

.reviews__new {
  padding: 20px;
  background-color: $white;
  margin-bottom: 35px;
  box-shadow: 4.096px 2.868px 20px 0 rgba(0, 0, 0, 0.07);

  @include phones {
    padding: 20px 0;
  }
}

.reviews__new-content {
  padding: 45px 15px 10px;

  @include phones {
    padding: 45px 20px 10px;
  }
}

.reviews__new-form {
  display: flex;

  @include phones {
    flex-direction: column;
  }
}

.reviews__new-title {
  padding-bottom: 25px;
  border-bottom: 1px solid rgba($text-color, 0.15);
}

.reviews__new-name {
  font-size: 18px;
  font-weight: 700;

  @include phones {
    padding-left: 20px;
  }
}

.reviews__new-avatar-wrap {
  display: flex;
  flex-direction: column;
  margin-right: 30px;

  @include phones {
    margin-right: 0;
    align-items: center;
    margin-bottom: 50px;
  }
}

.reviews__new-avatar {
  background-color: #dee4ed;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  position: relative;
  margin-bottom: 30px;
}

.reviews__new-avatar-icon {
  width: 85px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  fill: $white;
}

.reviews__new-avatar-add-btn {
  color: #383bcf;
  font-weight: 600;
}

.reviews__new-desc {
  width: 62%;

  @include tablets {
    width: 68%;
  }

  @include phones {
    width: 100%;
  }
}
.reviews__new-row {
  display: flex;
  margin-bottom: 40px;

  @include tablets {
    &:first-child {
      flex-direction: column;
    }

    margin-bottom: 30px;
  }
}
.reviews__new-block {
  flex: 1;
  margin-right: 30px;

  &:last-child {
    margin-right: 0;
  }

  @include tablets {
    margin-right: 0;

    &:first-child {
      margin-bottom: 30px;
    }
  }
}

.reviews__new-field {
  @include tablets {
    width: 70%;
  }

  @include phones {
    width: 100%;
  }
}

.reviews__item {
  display: flex;
  flex-direction: column;
  background-color: $white;
  padding: 20px;
  box-shadow: 4.096px 2.868px 20px 0 rgba(0, 0, 0, 0.07);
  width: calc(100% / 3 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;

  @include tablets {
    width: calc(100% / 2 - 30px);
  }

  @include phones {
    width: 100%;

    padding: 20px 0;
  }
}

.review__user {
  display: flex;
  padding: 0 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba($text-color, 0.15);
  margin-bottom: 30px;
}

.review__avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;
}

.review__pic {
  object-fit: cover;
  object-position: top;
  width: 100%;
}

.review__user-name {
  font-size: 18px;
  font-weight: 700;
}

.review__user-position {
  font-weight: 600;
  opacity: 0.5;
}

.review__text {
  flex: 1;
  padding: 0 15px;
  opacity: 0.7;
  font-weight: 600;
  margin-bottom: 20px;
  min-height: 170px;
  line-height: 1.875;

  @include phones {
    min-height: 100px;
  }
}

.reviews__new-block-title {
  opacity: 0.5;
  font-weight: 600;
  margin-bottom: 15px;
}

.reviews__new-field {
  width: 100%;
  padding-bottom: 15px;
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid $text-color;
}

.reviews__new-textarea {
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

.reviews__buttons {
  display: flex;
  justify-content: flex-end;

  @include phones {
    justify-content: center;
  }
}

.reviews__list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;

  @include phones {
    flex-direction: column;
  }
}

.review__btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 30px;
  margin-bottom: 0;
}
</style>