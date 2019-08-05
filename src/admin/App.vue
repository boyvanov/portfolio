<template lang="pug">
  .maincontent
    adminHeader(v-if='userIsLogged')
    adminMenu(v-if='userIsLogged')
    .admin-content
      router-view
    queryTooltip
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {
    adminHeader: () => import("./components/adminHeader"),
    adminMenu: () => import("./components/adminMenu"),
    queryTooltip: () => import("./components/queryTooltip")
  },
  computed: {
    ...mapGetters("user", ["userIsLogged"])
  }
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");

@import "normalize.css";

@import "../styles/mixins.pcss";

@import "./base.pcss";

.maincontent {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.admin-content {
  background-image: url("../images/admin/bg/MountainBaloon.png");
  padding-top: 60px;

  @include bgcover();
  flex: 1;
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

.btn-cancel {
  margin-right: 50px;
  color: #383bcf;
  font-weight: 600;
  align-self: center;
  padding: 10px;
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
</style>
