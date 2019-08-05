import Vue from "vue";

const btns = {
  template: "#slider-btn",
  props: {
    currentIndex: Number,
    worksLength: Number
  },
  methods: {
    // slide(direction) {
    //   this.$emit('slide', direction)
    // }
  }
};

const previews = {
  template: "#slider-previews",
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
  },
  computed: {
    translate() {
      const step = 100 / this.works.length;

      if (this.currentIndex >= this.works.length - 1) return;
      else if (this.currentIndex < 2) return 0;
      else if (this.currentIndex >= 2) return step * (this.currentIndex - 1);
    }
  }
};

const display = {
  template: "#slider-display",
  components: {
    previews,
    btns
  },
  computed: {
    // reversedWorks() {
    //   return [...this.works].reverse();
    // }
  },
  methods: {
    handleSlide(direction) {
      this.$emit("slide", direction);
    }
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number
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
      return this.currentWork.skills.split(", ");
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
      this.updateCurrentIndex(value);
      // if (value < 0) this.currentIndex = 0;
      // if (value > (this.works.length - 1)) this.currentIndex = this.works.length - 1;

      // if (value < 0) this.currentIndex = this.works.length - 1;
      // if (value > (this.works.length - 1)) this.currentIndex = 0;
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

    updateCurrentIndex(value) {
      if (value >= this.works.length - 1) {
        this.currentIndex = this.works.length - 1;
      } else if (value <= 0) this.currentIndex = 0;
    },

    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
        default:
          this.currentIndex = direction;
          break;
      }
    }
  },
  created() {
    const data = require("../data/slider.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});
