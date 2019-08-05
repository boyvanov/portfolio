import Vue from 'vue';

const skill = {
  template: "#skill",
  props: {
    skillPercent: Number,
    skillName: String
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["circle"];
      const dashArray = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dasharray")
      );
      const percent = (dashArray / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percent;
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
    }
  },
  created() {
    const data = require("../data/skills.json");
    this.skills = data;
  }
});
