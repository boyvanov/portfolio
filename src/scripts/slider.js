import Vue from "vue";

const btns = {
  template: "#slider-btn",
  methods: {
    // slide(direction) {
    //   this.$emit('slide', direction)
    // }
  }
};

const reviews = {
  template: "#slider-reviews",
  props: {
    works: Array,
    currentWork: Object
  }
};

const display = {
  template: "#slider-display",
  components: {
    reviews,
    btns
  },
  computed: {
    reversedWorks() {
      return [...this.works].reverse();
    }
  },
  methods: {
    // handleSlide(direction) {
    //   this.$emit('slide', direction)
    // }
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number,
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    tags: Array
  }
};

const description = {
  template: "#slider-desc",
  components: {
    tags
  },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(', ');
    }
  }
};

new Vue({
  el: "#slider-container",
  template: "#slider-template",
  components: {
    display,
    description
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },
  watch: {
    currentIndex(value) {
      if (value < 0) this.currentIndex = this.works.length - 1;
      if (value > (this.works.length - 1)) this.currentIndex = 0;
    }
  },
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.slide}`);
        item.slide = requirePic;

        return item;
      });
    },
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require("../data/slider.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});
