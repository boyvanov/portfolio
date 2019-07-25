<template lang="pug">
  nav.admin__menu
    .container.admin__menu-container
      ul.admin__menu-list
        li.admin__menu-item(v-for="tab in tabs")
          router-link(
            :to="tab.href"
            exact-active-class="active"
          ).admin__menu-link {{ tab.title }}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Отзывы", href: "/reviews" }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.admin__menu-list {
  display: flex;
  flex-direction: row;
}

.admin__menu-item {
}

.admin__menu-link {
  padding: 30px;
  border-bottom: 3px solid transparent;

  &:hover,
  &.active {
    border-bottom: 3px solid #383bcf;
    color: #383bcf;
  }
}
</style>