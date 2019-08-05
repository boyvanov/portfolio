export default {
  namespaced: true,
  state: {
    reviews: [],
    reviewForm: {
      show: false,
      editMode: false
    },
    editedReview: {}
  },
  mutations: {
    SET_REVIEWS: (state, reviews) => {
      state.reviews = reviews;
    },
    ADD_REVIEWS: (state, review) => {
      state.reviews.push(review);
    },
    REMOVE_REVIEW: (state, removedReviewId) => {
      state.reviews = state.reviews.filter(
        review => review.id !== removedReviewId
      );
    },
    EDIT_REVIEW: (state, editedReview) => {
      state.reviews = state.reviews.map(review => {
        return review.id === editedReview.id ? editedReview : review;
      });
    },
    SHOW_FORM: state => {
      state.reviewForm.show = true;
    },
    CLOSE_FORM: state => {
      state.reviewForm.show = false;
    },
    TURN_EDIT_MODE_ON: (state, review) => {
      state.reviewForm.editMode = true;
      state.editedReview = {...review};
    },
    TURN_EDIT_MODE_OFF: (state) => {
      state.reviewForm.editMode = false;
      state.editedReview = {};
    }
  },
  actions: {
    async addReview({ commit }, reviewNew) {
      try {
        
        const response = await this.$axios.post("/reviews", reviewNew);

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
    async editReview({ commit }, review) {
      try {
        const formData = new FormData();

        formData.append("author", review.author);
        formData.append("photo", review.photo);
        formData.append("text", review.text);
        formData.append("occ", review.occ);

        const response = await this.$axios.post(`/reviews/${review.id}`, formData);

        commit("EDIT_REVIEW", review);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchReviews({ commit }) {
      try {
        const response = await this.$axios.get("/reviews/156");
        commit("SET_REVIEWS", response.data.reverse());
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
