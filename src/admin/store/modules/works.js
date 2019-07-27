export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORKS: (state, works) => {
      state.works = works;
    },
    ADD_WORKS: (state, work) => {
      state.works.push(work);
    },
    REMOVE_WORK: (state, removedWorkId) => {
      state.works = state.works.filter(work => work.id !== removedWorkId);
    },
    // EDIT_SKILL: (state, editedSkill) => {
    //   state.skills = state.skills.map(skill => {
    //     return skill.id === editedSkill.id ? editedSkill : skill;
    //   });
    // }
  },
  actions: {
    async addWork({ commit }, workNew) {
      try {
        const formData = new FormData();

        formData.append("title", workNew.title);
        formData.append("techs", workNew.techs);
        formData.append("photo", workNew.photo);
        formData.append("link", workNew.link);
        formData.append("description", workNew.description);
        
        const response = await this.$axios.post("/works", formData);

        commit("ADD_WORKS", response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeWork({ commit }, workId) {
      try {
        const response = await this.$axios.delete(`/works/${workId}`);
        commit("REMOVE_WORK", workId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    // async editSkill({ commit }, skill) {
    //   try {
    //     const response = await this.$axios.post(`/skills/${skill.id}`, skill);
    //     commit("EDIT_SKILL", skill);
    //     return response;
    //   } catch (error) {
    //     throw new Error(
    //       error.response.data.error || error.response.data.message
    //     );
    //   }
    // },
    async fetchWorks({ commit }) {
      try {
        const response = await this.$axios.get("/works/156");
        commit("SET_WORKS", response.data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
