function setStorage(item, people) {
  if (window.localStorage) {
    localStorage.setItem(item, people);
  }
}

function getStorageValues(item, people) {
  if (window.localStorage) {
    return localStorage.getItem(item, people);
  }
}

export { setStorage, getStorageValues };
