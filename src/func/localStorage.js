//get timezone array in localStorage
export function getLocalStorage() {
  return JSON.parse(localStorage.getItem('timer'));
}

//set timezone array to localStorage
export function setLocalStorage(setTime) {
  let strTimer = JSON.stringify(setTime);
  localStorage.setItem('timer', strTimer);
}