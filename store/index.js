import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
		// need promise if async
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit("setPosts", [
				{
                    id: '1',
                    // author: 'Veev',
                    title: 'My First Awesome Post',
                    previewText: 'First blah blah',
                    thumbnailLink: 'https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ'
                },
				{
                    id: '2',
                    // author: 'Veev',
                    title: 'My Second Awesome Post',
                    previewText: 'Second blah blah',
                    thumbnailLink: 'https://miro.medium.com/max/12032/0*__5nhm_2qHSrTVoZ'
                },
            ]);
            resolve();
          }, 1000);
        });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
