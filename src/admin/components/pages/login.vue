<template lang="pug">
section.login
      .login__form-wrap
        form.login__form(
          @submit.prevent='login'
          )
          .login__form-title Авторизация
          .login__form-row
            label.login__form-block(:class="{'error' : validation.hasError('user.name')}")
              .login__form-block-title Логин
              .login__form-field-wrap
                svg.login__form-field-icon
                    use(xlink:href="sprite.svg#user")
                input.login__form-field(
                  type="text" 
                  name="login" 
                  placeholder="Введите логин"
                  v-model='user.name'
                )
                errorTooltip(
                  :errorText="validation.firstError('user.name')"
                )
          .login__form-row
            label.login__form-block(:class="{'error' : validation.hasError('user.password')}")
              .login__form-block-title Пароль
              .login__form-field-wrap
                svg.login__form-field-icon
                    use(xlink:href="sprite.svg#key")
                input.login__form-field(
                  type="password" 
                  name="password" 
                  placeholder="Введите пароль"
                  v-model='user.password'
                )
                errorTooltip(
                  :errorText="validation.firstError('user.password')"
                )
          .login__form-row
            button.login__form-btn(type='submit') Отправить
        a.login__form-btn-close(href='https://boyvanov.github.io/portfolio/')
          svg.login__form-btn-close-icon
            use(xlink:href="sprite.svg#remove") 
</template>

<script>
import { mapMutations } from "vuex";
import $axios from "../../requests";
import { Validator } from "simple-vue-validator";
export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "user.name": value => {
      return Validator.value(value).required("Введите логин");
    },
    "user.password": value => {
      return Validator.value(value).required("Введите пароль");
    }
  },
  data() {
    return {
      user: {
        name: "benya-072019",
        password: "benchik"
      }
    };
  },
  components: {
    errorTooltip: () => import("../errorTooltip")
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    async login() {
      try {
        const {
          data: { token }
        } = await $axios.post("/login", this.user);
        this["SHOW_TOOLTIP"]({
          type: "success",
          text: "Вход в админку"
        });
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
      } catch (error) {
        this["SHOW_TOOLTIP"]({
          type: "error",
          text: "Произошла ошибка"
        });
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
@import url("../../../styles/mixins.pcss");

.login {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  z-index: 100;

  background-image: url("../../../images/bg/Mountain-Baloon.png");

  @include bgcover();

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(45, 60, 78);
    opacity: 0.902;
  }
}

.login__form-wrap {
  position: relative;
  padding: 60px 75px;
  background-color: $white;

  @include phones {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 150px 30px;
  }
}

.login__form {
  display: flex;
  flex-direction: column;
}

.login__form-row {
  display: flex;
  margin-bottom: 35px;

  &:last-child {
    margin-bottom: 0;

    @include phones {
      align-self: center;
    }
  }
}

.login__form-title {
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
}

.login__form-block {
  flex: 1;
  position: relative;
}

.login__form-field-wrap {
  display: flex;
  border-bottom: 1px solid $text-color;
  padding-bottom: 15px;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    border-color: $hover-color;

    .login__form-field-icon {
      opacity: 1;
      fill: $hover-color;
    }
  }
}

.login__form-field-icon {
  opacity: 0.3;
  margin-right: 20px;
  transition: 0.1s;
  width: 35px;
  height: 35px;
  fill: $text-color;
}

.login__form-field {
  color: $text-color;
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  border: 0 none;
  outline: none;
  background: none;
  cursor: pointer;
}

.login__form-block-title {
  margin-bottom: 20px;
  padding-left: 50px;
  opacity: 0.3;
}

.login__form-btn {
  padding: 30px 120px;
  background-image: linear-gradient(
    90deg,
    rgb(173, 0, 237) 0%,
    rgb(129, 0, 240) 25%,
    rgb(85, 0, 242) 100%
  );
  border-radius: 50px 5px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: $white;
  outline: none;
  cursor: pointer;

  @include phones {
    padding: 30px 100px;
  }
}

.login__form-btn-close {
  position: absolute;
  top: 5%;
  right: 5%;
}

.login__form-btn-close-icon {
  width: 18px;
  height: 18px;
  fill: $text-color;
}
</style>