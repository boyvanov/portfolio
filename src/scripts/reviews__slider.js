import Vue from "vue";
import Flickity from "vue-flickity";

const review = {
  template: "#review",
  props: {
    review: Object
  }
};

new Vue({
  el: "#reviews-slider",
  template: "#reviews__slider-template",
  components: {
    Flickity,
    review
  },
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true
      },
      currentIndex: 0
    };
  },
  methods: {
    next() {
      this.currentIndex++;

      this.$refs.flickity.next();

      if (this.currentIndex >= this.reviews.length - 1) {
        this.currentIndex = this.reviews.length - 1;
      }
    },

    previous() {
      this.currentIndex--;

      this.$refs.flickity.previous();

      if (this.currentIndex <= 0) {
        this.currentIndex = 0;
      }
    },

    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.picture}`);
        item.picture = requirePic;

        return item;
      });
    }
  },
  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }
});
