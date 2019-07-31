export default {
  namespaced: true,
  state: {
    works: [],
    workForm: {
      show: false,
      editMode: false
    },
    editedWork: {},
    editedTags: [],
    newTags: [],
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
    EDIT_WORK: (state, editedWork) => {
      state.works = state.works.map(work => {
        return work.id === editedWork.id ? editedWork : work;
      });
    },
    SHOW_FORM: state => {
      state.workForm.show = true;
    },
    CLOSE_FORM: state => {
      state.workForm.show = false;
    },
    TURN_EDIT_MODE_ON: (state, work) => {
      state.workForm.editMode = true;
      state.editedWork = { ...work };
    },
    TURN_EDIT_MODE_OFF: state => {
      state.workForm.editMode = false;
      state.editedWork = {};
    },
    ADD_TAGS: (state, newTags) => {
      state.newTags = newTags.split(' ');
    },
    REMOVE_TAG: (state, deletedTag) => {
      state.newTags = state.newTags.filter(tag => tag !== deletedTag);
    },
  },
  actions: {
    async addWork({ commit }, workNew) {
      try {
        const response = await this.$axios.post("/works", workNew);

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
    async editWork({ commit }, work) {
      try {
        const formData = new FormData();

        formData.append("title", work.title);
        formData.append("techs", work.techs);
        formData.append("photo", work.photo);
        formData.append("link", work.link);
        formData.append("description", work.description);

        const response = await this.$axios.post(`/works/${work.id}`, formData);

        commit("EDIT_WORK", work);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchWorks({ commit }) {
      try {
        const response = await this.$axios.get("/works/156");
        commit("SET_WORKS", response.data.reverse());
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
