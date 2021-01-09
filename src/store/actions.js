import { fetchList, fetchUserInfo, fetchCommentItem } from "../api/index.js";

export default {
  async FETCH_USER({ commit }, userName) {
    const response = await fetchUserInfo(userName);
    commit("SET_USER", response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchCommentItem(itemId);
    commit("SET_ITEM", response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit("SET_LIST", response.data);
    return response;
    // return fetchList(pageName)
    //   .then(({ data }) => {
    //     commit("SET_LIST", data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
};
