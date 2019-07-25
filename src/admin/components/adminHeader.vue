<template lang="pug">
  header.header__admin
    .container.header__container
      a(href='#').header__admin-avatar
        img.header__admin-avatar-pic(src="../../images/content/user.jpg")
      .header__admin-content
        .header__admin-name-wrap
          .header__admin-name Сергей Бойванов
          .header__admin-title Панель администрирования
        .header__admin-close 
          a(href='#').header__admin-close-link Выйти
</template>

<script>

export default {
  
};

</script>

<style lang="postcss" scoped>

@import url("../../styles/mixins.pcss");

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
</style>



