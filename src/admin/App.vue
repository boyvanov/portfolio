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
}

.title {
  font-size: 21px;
  font-weight: 800;
}
.about__title-name {
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
  width: calc(50%-30px);
}

.about__block {
  display: flex;
  flex-direction: column;
  background-color: $white;
  padding: 20px;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  margin-bottom: 30px;
  justify-content: space-between;
}

.about__block_add {
  /* display: none; */
}

.about__block-title {
  border-bottom: 1px solid rgba($text-color, 0.15);
  padding: 10px;
}

.about__block-content {
  padding: 10px;
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
  &::before {
    font-size: 30px;
  }
}

.works__title {
  margin-bottom: 60px;
}

.works__edit {
  padding: 20px;
  background-color: $white;
  margin-bottom: 35px;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
}

.works__edit-content {
  display: flex;
  padding: 45px 15px 10px;
}

.works__edit-title {
  padding-bottom: 25px;
  border-bottom: 1px solid rgba($text-color, 0.15);
}

.works__edit-name {
  font-size: 18px;
  font-weight: 700;
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
}

.works__load-text {
  font-weight: 600;
  opacity: 0.5;
  width: 50%;
  padding-bottom: 30px;
}

.works__btn {
  padding: 15px 40px;
  background-image: linear-gradient(
    90deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
  text-transform: uppercase;
  color: $white;
  font-weight: 800;
  border-radius: 30px;
}

.works__desc {
  flex: 1;
}

.works__desc-row {
  margin-bottom: 25px;
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
  min-height: 150px;
  resize: none;
  overflow: hidden;
  border: 1px solid rgba($text-color, 0.15);
  line-height: 1.75;
}

.works__tags {
  display: flex;
  margin-bottom: 40px;
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

.works__buttons {
  display: flex;
  justify-content: flex-end;
}

.works__buttons-cancel {
  margin-right: 50px;
  color: #383bcf;
  font-weight: 600;
  align-self: center;
  padding: 10px;
}

.works__list {
  display: flex;
  flex-wrap: wrap;
}

.works__item {
  width: calc(100% / 3 - 20px);
  margin-right: 30px;
  margin-bottom: 30px;

  &:nth-child(3n) {
    margin-right: 0;
  }
}

.work {
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.07);
  background-color: $white;
}

.work-add {
  background-image: linear-gradient(
    90deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
}

.work-add-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.work-add__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.work-add__circle {
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
  }
}

.work-add__text {
  text-align: center;
  width: 60%;
  color: $white;
  font-size: 18px;
  font-weight: 800;
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
}

.work__desc-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
}
.work__desc-text {
  font-weight: 00;
  margin-bottom: 25px;
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

.work__desc-btns-edit,
.work__desc-btns-delete {
  font-weight: 600;
  color: rgba($text-color, 0.5);
  font-size: 16px;

}

.work__desc-btns-edit {
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
.work__desc-btns-delete {
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
                      input(type="text" name="number" placeholder="90").number
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
                      input(type="text" name="number" placeholder="80").number
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
                      input(type="text" name="number" placeholder="70").number
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
            li.about__item.about__block
              .about__block-title
                table
                  tr.title__row
                    td.cell__group
                      input(type="text" name="group" placeholder="Frontend").group
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
                      input(type="text" name="skill" placeholder="HTML5").skill
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
                      input(type="text" name="skill" placeholder="CSS3").skill
                    td.cell__number(colspan='2')
                      input(type="text" name="number" placeholder="90").number
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
                      input(type="text" name="skill" placeholder="JavaScript").skill
                    td.cell__number(colspan='2')
                      input(type="text" name="number" placeholder="80").number
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
                      input(type="text" name="skill" placeholder="Jquery и Vue.js").skill
                    td.cell__number(colspan='2')
                      input(type="text" name="number" placeholder="70").number
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

    section.section.works
      .container.works__container
        h1.title.works__title Блок "Работы"
        .works__content
          .works__edit
            .works__edit-title
              h1.works__edit-name Редактирование работы
            .works__edit-content
              .works__load
                .works__load-text Перетащите или загрузите для загрузки изображения
                button(type='button').works__btn Загрузить
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
                  button(type='button').works__buttons-cancel Отмена    
                  button(type='button').works__btn Сохранить    
          ul.works__list
            li.works__item.work-add
                button(type='button').work-add-btn
                  .work-add__content
                    .work-add__circle
                    .work-add__text Добавить работу
            li.works__item.work
              .work__img
                img(src="../images/content/slider_preview1.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').work__desc-btns-edit Править
                  button(type='button').work__desc-btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../images/content/slider_preview2.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').work__desc-btns-edit Править
                  button(type='button').work__desc-btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../images/content/slider_preview3.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').work__desc-btns-edit Править
                  button(type='button').work__desc-btns-delete Удалить
            li.works__item.work
              .work__img
                img(src="../images/content/slider_preview4.jpg").work__pic
              .work__desc
                .work__desc-title Сайт школы образования
                .work__desc-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href='#').work__desc-link http://loftschool.ru
                .work__desc-btns
                  button(type='button').work__desc-btns-edit Править
                  button(type='button').work__desc-btns-delete Удалить




              


</template>



