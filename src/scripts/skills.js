import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillPercent: Number,
    skillName: String
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["circle"];
      let findBlcTop = this.$root.findCircle();
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);


      window.addEventListener("scroll", function () {
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
    skill: Object
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
      skills: []
    };
  },
  methods: {
    findCircle() {
      let circleBlock = this.$refs["skills-block"];
          return {
        findTop: circleBlock
      };
    }
  },
  created() {
    const data = require("../data/skills.json");
    this.skills = data;
  }
});
