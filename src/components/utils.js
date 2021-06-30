const localStorageHelpers = {
  getLocalStorage: () => {
    let list = localStorage.getItem("list");
    if (list) {
      return (list = JSON.parse(localStorage.getItem("list")));
    } else {
      return [];
    }
  },
  getLocalCompleted: () => {
    let orderedList = localStorage.getItem("orderedList");
    if (orderedList) {
      return (orderedList = JSON.parse(localStorage.getItem("orderedList")));
    } else {
      return [];
    }
  },
};

export default localStorageHelpers;
