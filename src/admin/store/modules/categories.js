export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, categories) => {
      state.categories = categories;
    },
    ADD_CATEGORY: (state, category) => {
      state.categories.push(category);
    },
    REMOVE_CATEGORY: (state, removedCategoryId) => {
      state.categories = state.categories.filter(
        category => category.id !== removedCategoryId
      );
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.categories = state.categories.map(category =>
        category.id === editedCategory.id ? editedCategory : category
      );
    }
  },
  actions: {
    async addCategory(store, newCategoryTitle) {
      try {
        const response = await this.$axios.post("/categories", {
          title: newCategoryTitle
        });
        store.commit("ADD_CATEGORY", response.data);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async removeCategory(store, categoryId) {
      try {
        const response = await this.$axios.delete(`/categories/${categoryId}`);
        store.commit("REMOVE_CATEGORY", categoryId);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editCategory(store, category) {
      try {
        const response = await this.$axios.post(`/categories/${category.id}`, {
          title: category.category
        });
        store.commit("EDIT_CATEGORY", category);
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchCategories(store) {
      try {
        const response = await this.$axios.get("/categories/156");
        store.commit("SET_CATEGORIES", response.data.reverse());
        return response;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    }
  }
};
