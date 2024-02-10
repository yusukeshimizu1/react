class Const {
  CONDITIONS = ["../img/smile.png", "../img/inexpressive.png", "../img/cry.png"];

  API_URL = "http://localhost:8080/diaries";

  getConditionValue(condition) {
    for (let i = 0; i < this.CONDITIONS.length; i++) {
      if(condition === this.CONDITIONS[i]) {
        return i + 1;
      }
    }
    return 1;
  }
}

export default new Const();