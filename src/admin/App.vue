<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

@import "normalize.css";

@import "../styles/mixins.pcss";

@import "./base.pcss";

.header__admin {
  color: $white;
  background-image: linear-gradient(
    90deg,
    rgb(62, 62, 89) 0%,
    rgb(69, 69, 115) 100%
  );
  padding: 15px 0;

  @include phones {
    padding: 15px 20px;
  }
}

.header__container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__admin-content {
  display: flex;
  align-items: center;
  width: 100%;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
  }
}

.header__admin-name-wrap {
  display: flex;
  align-items: center;
  margin-right: auto;
}

.header__admin-close {
  text-decoration: underline;
  opacity: 0.7;
}

.header__admin-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
  flex-shrink: 0;
}

.header__admin-avatar-pic {
  object-fit: cover;
}

.header__admin-name {
  margin-right: 25px;
  font-size: 18px;
  font-weight: 600;
}

.header__admin-title {
  font-size: 14px;
  opacity: 0.5;

  @include phones {
    display: none;
  }
}

.admin__menu-list {
  display: flex;
  flex-direction: row;
}

.admin__menu-link {
  padding: 30px;

  &.active {
    color: #383bcf;
    border-bottom: 3px solid #383bcf;
  }
}

.section {
  background-image: url("../images/admin/bg/MountainBaloon.png");
  padding-top: 60px;

  @include bgcover();
}

.about__title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;

  @include phones {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;
  }
}

.title {
  font-size: 21px;
  font-weight: 700;
}
.about__title-name {
  margin-right: 60px;

  @include phones {
    margin-bottom: 30px;
  }
}

.about__title-add {
  display: flex;
  align-items: center;
}

.about__title-add-name {
  color: #383bcf;
  font-weight: 600;
  margin-left: 15px;
}

.about__title-add-circle {
  position: relative;
  width: 20px;
  height: 20px;
  background-image: linear-gradient(
    90deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
  border-radius: 50%;

  &::before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
  }
}

.about__list {
  display: flex;
  flex-wrap: wrap;
}

.about__item {
  margin-right: 30px;
  width: calc(50%-15px);

  &:nth-child(2) {
    margin-right: initial;
  }

  @include phones {
    width: 100%;
    margin-right: initial;
  }
}

.about__block {
  display: flex;
  flex-direction: column;
  background-color: $white;
  padding: 20px;
  box-shadow: 4.096px 2.868px 20px 0 rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;
  justify-content: space-between;

  @include phones {
    padding: 20px 0;
  }
}

.about__block_add {
  /* display: none; */
}

.about__block-title {
  border-bottom: 1px solid rgba($text-color, 0.15);
  padding: 10px;

  @include phones {
    padding: 10px 20px;
  }
}

.title__row {
  display: flex;
  align-items: center;
}

.skill__row {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.content__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.about__block-content {
  padding: 10px;
  min-height: 180px;

  @include phones {
    padding: 10px 20px;
  }
}

.about__block-add-skill {
  padding: 0 10px;

  @include phones {
    padding: 0 20px;
  }
}

.group {
  width: 70%;
  font-size: 18px;
  font-weight: 700;
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 12px 0;
  border-bottom: 1px solid $text-color;

  @include tablets {
    width: 95%;
  }
}

.edit__icon {
  height: 15px;
  width: 16px;

  &_ok {
    fill: #00d70a;
  }
  &_delete {
    fill: #bf2929;
  }
  &_pencil,
  &_trash {
    fill: $text-color;
    fill-opacity: 0.5;
  }
}

.cell__group {
  width: 90%;
}

.cell__ok {
  padding-right: 15px;
}

.skill,
.number,
.new-skill {
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
}

.skill {
  width: 100%;
}

.new-skill {
  width: 100%;
  padding: 14px 0;
  padding-left: 20px;
}

.number {
  width: 50px;
  padding: 14px 10px;
}

.number,
.percent {
  display: inline-block;
}

.cell__skill {
  width: 300px;
  padding-bottom: 15px;
}

.cell__number {
  width: 65px;
  flex-shrink: 0;
}

.cell__number_new {
  width: 80px;
  border-bottom: 1px solid $text-color;
}

.cell__new-skill {
  margin-right: 10px;
  border-bottom: 1px solid $text-color;
}

.cell__pencil {
  margin-left: 30px;
}

.cell__trash {
  margin-left: 15px;
}
.cell__icon {
  margin-left: 30px;
}

.about__title-add-circle_new {
  width: 40px;
  height: 40px;
  &::before {
    font-size: 30px;
  }
}

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
  display: flex;
  padding: 45px 15px 10px;

  @include tablets {
    flex-direction: column;
    padding: 30px 85px 10px;
  }

  @include phones {
    padding: 30px 0 10px;
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

.btn {
  padding: 15px 40px;
  background-image: linear-gradient(
    90deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
  text-transform: uppercase;
  color: $white;
  font-weight: 700;
  border-radius: 30px;
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

.works__desc-block-title,
.reviews__new-block-title {
  opacity: 0.5;
  font-weight: 600;
  margin-bottom: 15px;
}

.works__field,
.reviews__new-field {
  width: 100%;
  padding-bottom: 15px;
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
  border-bottom: 1px solid $text-color;
}

.works__textarea,
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

.works__tags-btn {
  background-color: #f4f4f4;
  border-radius: 20px;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 13px;
  opacity: 0.7;
}

.works__icon-delete {
  width: 11px;
  height: 11px;
  fill: $text-color;
  margin-left: 10px;
}

.works__buttons,
.reviews__buttons {
  display: flex;
  justify-content: flex-end;
}

.works__buttons {
  @include tablets {
    justify-content: center;
  }
}

.reviews__buttons {
  @include phones {
    justify-content: center;
  }
}

.btn-cancel {
  margin-right: 50px;
  color: #383bcf;
  font-weight: 600;
  align-self: center;
  padding: 10px;
}

.works__list,
.reviews__list {
  display: flex;
  flex-wrap: wrap;

  @include phones {
    flex-direction: column;
  }
}

.works__item,
.reviews__item {
  width: calc(100% / 3 - 20px);
  margin-right: 30px;
  margin-bottom: 30px;

  &:nth-child(3n) {
    margin-right: auto;
  }

  @include tablets {
    width: calc(100% / 2 - 15px);
    margin-right: 30px;

    &:nth-child(2n) {
      margin-right: initial;
    }
  }

  @include phones {
    width: 100%;
    margin-right: initial;
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

.add {
  background-image: linear-gradient(
    90deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );

  @include phones {
    padding: 30px 20px;
  }
}

.add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @include phones {
    justify-content: flex-start;
  }
}

.add__content {
  display: flex;
  flex-direction: column;
  align-items: center;

  @include phones {
    flex-direction: row;
  }
}

.add__circle {
  width: 150px;
  height: 150px;
  border: 2px solid $white;
  border-radius: 50%;
  position: relative;
  margin-bottom: 30px;

  &::before {
    content: "+";
    font-size: 72px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;

    @include phones {
      font-size: 24px;
    }
  }

  @include phones {
    margin-bottom: 0;
    margin-right: 20px;
    flex-direction: row;
    width: 50px;
    height: 50px;
  }
}

.add__text {
  text-align: center;
  width: 60%;
  color: $white;
  font-size: 18px;
  font-weight: 700;

  @include phones {
    white-space: nowrap;
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

.work__desc-btns,
.review__btns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.btns-edit,
.btns-delete {
  color: rgba($text-color, 0.5);
  font-weight: 600;
}

.btns-edit {
  &::after {
    content: "";

    @include inlineblock(middle);
    width: 20px;
    height: 20px;
    margin-left: 11px;
    background: svg-load("pencil.svg", fill=#383bcf, width=100%, height=100%);

    @include bgcover;
  }
}
.btns-delete {
  &::after {
    content: "";

    @include inlineblock(middle);
    width: 15px;
    height: 15px;
    margin-left: 11px;
    background: svg-load("remove.svg", fill=#c92e2e, width=100%, height=100%);

    @include bgcover;
  }
}

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
  display: flex;
  padding: 45px 15px 10px;

  @include phones {
    flex-direction: column;
    padding: 45px 20px 10px;
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
  background-color: $white;
  padding: 20px;
  box-shadow: 4.096px 2.868px 20px 0 rgba(0, 0, 0, 0.07);

  @include phones {
    padding: 20px 0;
  }
}

.add {
  @include phones {
    padding: 30px 20px;
  }
}

.review__user {
  display: flex;
  padding: 0 15px;
  padding-bottom: 30px;
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

.review__btns {
  padding: 0 15px;
  margin-bottom: 0;
}
</style>

<template lang="pug">
  .maincontent

    header.header__admin
      .container.header__container
        a(href='#').header__admin-avatar
          img.header__admin-avatar-pic(src="../images/content/user.jpg")
        .header__admin-content
          .header__admin-name-wrap
            .header__admin-name Сергей Бойванов
            .header__admin-title Панель администрирования
          .header__admin-close 
            a(href='#').header__admin-close-link Выйти

    nav.admin__menu
      .container.admin__menu-container
        ul.admin__menu-list
          - var items = ['Обо мне', 'Работы', 'Отзывы']
          each item in items
            li.admin__menu-item
              a.admin__menu-link(href='#')= item

    section.section.about
      .container.about__container
        .about__title 
          h1.title.about__title-name Блок "Обо мне"
          button(type='button').about__title-add
            .about__title-add-circle
            .about__title-add-name Добавить группу
        .about__content
          ul.about__list
            li.about__item.about__block.about__block_add
              .about__block-title
                
                  .title__row
                    .cell__group
                      input(type="text" name="group" placeholder="Название новой группы").group
                    .cell__ok 
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_ok
                          use(xlink:href="sprite.svg#tick")
                    .cell__delete
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_delete
                          use(xlink:href="sprite.svg#remove")

              .about__block-content
              .about__block-add-skill
                
                  .skill__row
                    .cell__new-skill
                      input(type="text" name="new-skill" placeholder="Новый навык").new-skill
                    .cell__number.cell__number_new
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    .cell__icon
                      button(type='button').about__title-add-circle.about__title-add-circle_new
            li.about__item.about__block
              .about__block-title
                
                  .title__row
                    .cell__group
                      input(type="text" name="group" placeholder="Workflow").group
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
              .about__block-content
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="Git").skill
                    .cell__number
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="Webpack").skill
                    .cell__number
                      input(type="text" name="number" placeholder="90").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="Terminal").skill
                    .cell__number
                      input(type="text" name="number" placeholder="80").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="Gulp").skill
                    .cell__number
                      input(type="text" name="number" placeholder="70").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
              .about__block-add-skill
                
                  .skill__row
                    .cell__new-skill
                      input(type="text" name="new-skill" placeholder="Новый навык").new-skill
                    .cell__number.cell__number_new
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    .cell__icon
                      button(type='button').about__title-add-circle.about__title-add-circle_new
            li.about__item.about__block
              .about__block-title
                
                  .title__row
                    .cell__group
                      input(type="text" name="group" placeholder="Frontend").group
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
              .about__block-content
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="HTML5").skill
                    .cell__number
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="CSS3").skill
                    .cell__number
                      input(type="text" name="number" placeholder="90").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="JavaScript").skill
                    .cell__number
                      input(type="text" name="number" placeholder="80").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  .content__row
                    .cell__skill
                      input(type="text" name="skill" placeholder="Jquery и Vue.js").skill
                    .cell__number
                      input(type="text" name="number" placeholder="70").number
                      .percent %
                    .cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    .cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
              .about__block-add-skill
                
                  .skill__row
                    .cell__new-skill
                      input(type="text" name="new-skill" placeholder="Новый навык").new-skill
                    .cell__number.cell__number_new
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    .cell__icon
                      button(type='button').about__title-add-circle.about__title-add-circle_new

    section.section.works
      .container.works__container
        h1.title.works__title Блок "Работы"
        .works__content
          .works__edit
            .works__edit-title
              .works__edit-name Редактирование работы
            .works__edit-content
              .works__load
                .works__load-text Перетащите или загрузите для загрузки изображения
                button(type='button').btn Загрузить
              .works__preview
                .works__preview-img
                  img(src="../images/content/slider_preview1.jpg").works__preview-pic
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
                  li.works__tags-btn
                    .works__tag HTML
                    button(type='button').works__btn-delete
                      svg.works__icon-delete
                        use(xlink:href="sprite.svg#remove")
                  li.works__tags-btn
                    .works__tag CSS
                    button(type='button').works__btn-delete
                      svg.works__icon-delete
                        use(xlink:href="sprite.svg#remove")
                  li.works__tags-btn
                    .works__tag Javascript
                    button(type='button').works__btn-delete
                      svg.works__icon-delete
                        use(xlink:href="sprite.svg#remove")
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
                img(src="../images/content/slider_preview1.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').btns-edit Править
                  button(type='button').btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../images/content/slider_preview2.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').btns-edit Править
                  button(type='button').btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../images/content/slider_preview3.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').btns-edit Править
                  button(type='button').btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../images/content/slider_preview4.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').btns-edit Править
                  button(type='button').btns-delete Удалить
    section.section.reviews
      .container.reviews__container
        h1.title.reviews__title Блок "Отзывы"
        .reviews__content
          .reviews__new
            .reviews__new-title
              .reviews__new-name Новый отзыв
            .reviews__new-content
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
                  img(src="../images/content/reviews1.png").review__pic
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
                  img(src="../images/content/reviews2.png").review__pic
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
                  img(src="../images/content/reviews1.png").review__pic
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
                  img(src="../images/content/reviews2.png").review__pic
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


