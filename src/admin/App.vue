<style lang="postcss">
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
}

.header__container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__admin-content {
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
}

.header__admin-close {
  display: flex;
  justify-content: flex-end;
  flex: 1;
  text-decoration: underline;
  opacity: 0.7;
}

.header__admin-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
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

.about {
  padding-top: 60px;
  background-image: url("../images/admin/bg/MountainBaloon.png");

  @include bgcover();
}

.about__title {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 60px;
}
.about__title-name {
  font-size: 21px;
  font-weight: 800;
  margin-right: 60px;
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
  width: calc(50%-30px);
}

.about__block {
  display: flex;
  flex-direction: column;
  background-color: $white;
  padding: 20px;
}

.about__block_add {
  .about__block-add-skill {
    padding-top: 218px;
  }
  /* display: none; */
}

.about__block-title {
  border-bottom: 1px solid rgba($text-color, 0.15);
  padding: 10px;
}

.about__block-content {
  padding: 10px;
  padding-bottom: 50px;
}

.group {
  width: 66%;
  font-size: 18px;
  font-weight: 700;
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 12px 0;
  border-bottom: 1px solid $text-color;
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
  }
}

.cell__group {
  /* padding-right: 140px; */
  width: 420px;
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
  width: 100px;
}

.new-skill {
  width: 225px;
  border-bottom: 1px solid $text-color;
  padding: 14px 0;
  padding-left: 20px;
}

.number {
  width: 30px;
}

.number,
.percent {
  display: inline-block;
}

.cell__skill {
  width: 300px;
  padding-bottom: 15px;
}

.cell__new-skill {
  padding-left: 70px;
  padding-right: 10px;
}

.cell__number {
  width: 60px;
}
.cell__number_new {
  /* width: 70px; */
  padding-left: 10px;
  border-bottom: 1px solid $text-color;
}

.cell__pencil {
  padding-left: 30px;
}

.cell__trash {
  padding-left: 15px;
}
.cell__icon {
  padding-left: 30px;
}

.about__title-add-circle_new {
  width: 40px;
  height: 40px;
}
</style>

<template lang="pug">
  .maincontent

    header.header__admin
      .container.header__container
        .header__admin-content
          a(href='#').header__admin-avatar
            img.header__admin-avatar-pic(src="../images/content/user.jpg")
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

    section.about
      .container.about__container
        .about__title
          .about__title-name Блок "Обо мне"
          a(href='#').about__title-add
            .about__title-add-circle
            .about__title-add-name Добавить группу
        .about__content
          ul.about__list
            li.about__item.about__block.about__block_add
              .about__block-title
                table
                  tr.title__row
                    td.cell__group
                      input(type="text" name="group" placeholder="Название новой группы").group
                    td.cell__ok 
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_ok
                          use(xlink:href="sprite.svg#tick")
                    td.cell__delete
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_delete
                          use(xlink:href="sprite.svg#remove")
              
              .about__block-add-skill
                table
                  tr.skill__row
                    td.cell__new-skill
                      input(type="text" name="new-skill" placeholder="Новый навык").new-skill
                    td.cell__number.cell__number_new(colspan='2')
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    td.cell__icon
                      button(type='button').about__title-add-circle.about__title-add-circle_new
            li.about__item.about__block
              .about__block-title
                table
                  tr.title__row
                    td.cell__group
                      input(type="text" name="group" placeholder="Workflow").group
                    td.cell__ok
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_ok
                          use(xlink:href="sprite.svg#tick")
                    td.cell__delete
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_delete
                          use(xlink:href="sprite.svg#remove")
              .about__block-content
                table
                  tr.content__row
                    td.cell__skill
                      input(type="text" name="skill" placeholder="Git").skill
                    td.cell__number(colspan='2')
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    td.cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    td.cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  tr.content__row
                    td.cell__skill
                      input(type="text" name="skill" placeholder="Webpack").skill
                    td.cell__number(colspan='2')
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    td.cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    td.cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  tr.content__row
                    td.cell__skill
                      input(type="text" name="skill" placeholder="Terminal").skill
                    td.cell__number(colspan='2')
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    td.cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    td.cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
                
                  tr.content__row
                    td.cell__skill
                      input(type="text" name="skill" placeholder="Gulp").skill
                    td.cell__number(colspan='2')
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    td.cell__pencil
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_pencil
                          use(xlink:href="sprite.svg#pencil")
                    td.cell__trash
                      button(type='button').cell__edit-btn
                        svg.edit__icon.edit__icon_trash
                          use(xlink:href="sprite.svg#trash")
              .about__block-add-skill
                table
                  tr.skill__row
                    td.cell__new-skill
                      input(type="text" name="new-skill" placeholder="Новый навык").new-skill
                    td.cell__number.cell__number_new(colspan='2')
                      input(type="text" name="number" placeholder="100").number
                      .percent %
                    td.cell__icon
                      button(type='button').about__title-add-circle.about__title-add-circle_new


</template>