const LOGIN_KEY = "Login_User_Movie";

export function setLocalLogin(data) {
  localStorage.setItem(LOGIN_KEY, JSON.stringify(data));
}

export function getLocalLogin() {
  return JSON.parse(localStorage.getItem(LOGIN_KEY));
}

export function clearLocalLogin() {
  localStorage.clear(LOGIN_KEY);
  
}
