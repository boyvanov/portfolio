import Vue from 'vue';
import Flickity from 'vue-flickity';

const review = {
  template: '#review',
  props: {
    review: Object
  }
}

new Vue ({
  el: '#reviews-slider',
  template: '#reviews-template', 
  components: {
    Flickity, review
  },
  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: false,
        groupCells: true
      }
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
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