export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEWS: (state, reviews) => {
      state.reviews = reviews;
    },
    ADD_REVIEWS: (state, review) => {
      state.reviews.push(review);
    },
    REMOVE_REVIEW: (state, removedReviewId) => {
      state.reviews = state.reviews.filter(review => review.id !== removedReviewId);
    },
    // EDIT_SKILL: (state, editedSkill) => {
    //   state.skills = state.skills.map(skill => {
    //     return skill.id === editedSkill.id ? editedSkill : skill;
    //   });
    // }
  },
  actions: {
    async addReview({ commit }, reviewNew) {
      try {
        const formData = new FormData();

        formData.append("author", reviewNew.author);
        formData.append("photo", reviewNew.photo);
        formData.append("text", reviewNew.text);
        formData.append("occ", reviewNew.occ);


        const response = await this.$axios.post("/reviews", formData);

        commit("ADD_REVIEWS", response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeReview({ commit }, reviewId) {
      try {
        const response = await this.$axios.delete(`/reviews/${reviewId}`);
        commit("REMOVE_REVIEW", reviewId);
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
    async fetchReviews({ commit }) {
      try {
        const response = await this.$axios.get("/reviews/156");
        commit("SET_REVIEWS", response.data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
