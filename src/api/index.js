import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: "https://api.hnpwa.com/v0",
};

// 2. API 함수들을 정리
const fetchList = async (pageName) => {
  try {
    const response = await axios.get(`${config.baseUrl}/${pageName}/1.json`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

const fetchUserInfo = async (username) => {
  try {
    return await axios.get(`${config.baseUrl}/user/${username}.json`);
  } catch (error) {
    console.log(error);
  }
};

const fetchCommentItem = async (itemId) => {
  try {
    return await axios.get(`${config.baseUrl}/item/${itemId}.json`);
  } catch (error) {
    console.log(error);
  }
};

export { fetchList, fetchUserInfo, fetchCommentItem };
