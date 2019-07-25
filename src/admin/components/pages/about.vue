<template lang="pug">
section.about
  .container.about__container
    .about__title 
      h2.title.about__title-name Блок "Обо мне"
      button.about__title-add(
        type='button'
        v-if="showAddingForm === false"
        @click="showAddingForm = true"
      )
        .about__title-add-name Добавить группу
    .about__content
      ul.about__list
        li.about__item.about__block.about__block_add(
          v-if="showAddingForm"
          )
          skillsAdd
        li.about__item.about__block(
          v-for='category in categories'
          :key="category.id"
        )
          skillsGroup(
            :category='category'
            :skills='filterSkillsByCategoryId(category.id)'
          )

</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  components: {
    skillsAdd: () => import("../skillsAdd"),
    skillsGroup: () => import("../skillsGroup")
  },
  data() {
    return {
      showAddingForm: false
    };
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    }),
    ...mapState("skills", {
      skills: state => state.skills
    })
  },
  methods: {
    ...mapActions("skills", ["fetchSkills"]),
    ...mapActions("categories", ["fetchCategories"]),
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  async created() {
    try {
      await this.fetchCategories();
    } catch (error) {
      alert(error.message);
    }

    try {
      await this.fetchSkills();
    } catch (error) {
      alert(error.message);
    }
  }
};
</script>

<style lang="postcss">
@import url("../../../styles/mixins.pcss");

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

  &::before {
    content: "+";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: linear-gradient(
      90deg,
      rgb(0, 106, 237) 0%,
      rgb(32, 80, 220) 48%,
      rgb(63, 53, 203) 100%
    );
    border-radius: 50%;
    margin-right: 15px;
    text-align: center;
    color: $white;
  }

  @include phones {
    margin-left: 0;
  }
}

.about__list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -30px;
}

.about__item {
  margin-left: 30px;
  width: calc(100% / 2 - 30px);

  @include phones {
    width: 100%;
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
  align-items: flex-end;
  justify-content: flex-end;
}

.content__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
  color: $text-color;
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
  padding-bottom: 10px;
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
  flex: 1;
  font-size: 18px;
  font-weight: 700;
}

.cell__ok {
  margin-right: 15px;
}

.skill,
.number,
.new-skill {
  color: $text-color;
  border: 0 none;
  border-bottom: 1px solid $text-color;
  outline: none;
  background: none;
  cursor: pointer;
}

.skill {
  flex: 1;
}

.new-skill {
  width: 100%;
  padding: 5px 0;
  padding-left: 20px;
}

.new-number {
  padding: 5px 0;
}

.number {
  width: 28px;
  text-align: right;
  margin-right: 5px;
}

.number,
.percent {
  display: inline-block;
}

.cell__skill {
  flex: 1;
}

.cell__number {
  width: 65px;
  flex-shrink: 0;
  margin-right: 10px;
}

.cell__new-skill {
  margin-right: 10px;
}

.cell__pencil {
  margin-left: 30px;
}

.cell__trash {
  margin-left: 15px;
}

.about__title-add-circle_new {
  width: 40px;
  height: 40px;
  background-image: linear-gradient(
    90deg,
    rgb(0, 106, 237) 0%,
    rgb(32, 80, 220) 48%,
    rgb(63, 53, 203) 100%
  );
  border-radius: 50%;

  &::before {
    display: block;
    content: "+";
    font-size: 30px;
    color: $white;
  }
}
</style>

    