import Vue from "vue";
import Flickity from "vue-flickity";
import axios from "axios";

const review = {
  template: "#review",
  props: {
    review: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.review.photo}`
    }
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
      reviewsss: [],
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,
        groupCells: true
      },
      currentIndex: 0
    };
  },
  methods: {
    onInit() {
      this.$refs.flickity.on("change", event => {
        this.currentIndex = event;
        if (!this.$refs.flickity.$flickity.nextButton.isEnabled)
          this.currentIndex = this.reviews.length;
      });
    },
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
    this.reviewsss = this.makeArrWithRequiredImages(data);

    console.log(this.reviewsss);
    

    axios
    .get("https://webdev-api.loftschool.com/reviews/156")
    .then(response => {
      
      this.reviews = response.data;

      console.log(this.reviews);
    })
    .catch(error => console.error(error));
  }
});
