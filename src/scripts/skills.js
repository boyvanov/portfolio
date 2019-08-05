import Vue from "vue";
import axios from "axios";

const skill = {
  template: "#skill",
  props: {
    skill: Object
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["circle"];
      let findBlcTop = this.$root.findCircle();
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skill.percent);

      window.addEventListener("scroll", function() {
        const posTop = findBlcTop.findTop.getBoundingClientRect().top;
        const exactTop = posTop.toFixed();

        if (exactTop > 280 && exactTop < 330) {
          circle.style.strokeDashoffset = percent;
        }
      });
    }
  },
  mounted() {
    this.drawCircle();
  }
};

const row = {
  template: "#skills-row",
  props: {
    category: Object,
    skills: Array
  },
  components: {
    skill
  }
};

new Vue({
  el: "#skills-container",
  template: "#skills-template",
  components: {
    row
  },
  data() {
    return {
      skills: [],
      categories: []
    };
  },
  methods: {
    filterSkillsByCategoryId(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    },
    findCircle() {
      let circleBlock = this.$refs["skills-block"];
      return {
        findTop: circleBlock
      };
    }
  },
  created() {
    // const data = require("../data/skills.json");
    // this.skills = data;

    axios
      .get("https://webdev-api.loftschool.com/categories/156")
      .then(response => {
        this.categories = response.data.reverse()
      })
      .catch(error => console.error(error.message));

    axios
      .get("https://webdev-api.loftschool.com/skills/156")
      .then(response => {
        this.skills = response.data
      })
      .catch(error => console.error(error.message));
  }
});
