<template lang="pug">
.works__group
  .work__img
    img(:src="remotePhotoPath" alt='work-pic').work__pic
  .work__desc
    h4.work__desc-title {{work.title}}
    .work__desc-text
      p {{work.description}}
    a(href='#').work__desc-link {{work.link}}
  .work__desc-btns
    button(type='button').btns-edit Править
    button(
      type='button'
      @click='removeExistedWork').btns-delete Удалить
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    work: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`
    }
  },
  methods: {
    ...mapActions("works", ["removeWork", "editWork"]),
    async removeExistedWork() {
      try {
        await this.removeWork(this.work.id);
      } catch (error) {
        alert(error.message)
      }
    },
    // async editCurrentWork() {
    //   try {
    //     await this.editWork(this.editedWork);
        
    //   } catch (error) {
    //     alert(error.message)
    //   }
    // }
  }
}
</script>
