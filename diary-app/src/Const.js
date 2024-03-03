class Const {
  CONDITIONS = ["../img/smile.png", "../img/inexpressive.png", "../img/cry.png"];

  ORDER_OPTIONS = [
    { value: 'desc', label: '作成日時の降順' },
    { value: 'asc', label: '作成日時の昇順' }
  ];

  DIARIES_API_URL = "http://localhost:8080/diaries";
  DIARY_API_URL = "http://localhost:8080/diary";

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