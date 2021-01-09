import ListView from "./ListView.vue";
import bus from "../utils/bus.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    // 라우터 네비게이션 가드로 대체
    // created() {
    //   bus.$emit("start:spinner");
    //   this.$store
    //     .dispatch("FETCH_LIST", this.$route.name)
    //     .then(() => {
    //       // 데이터를 다 불러온 후 end:spinner
    //       bus.$emit("end:spinner");
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
