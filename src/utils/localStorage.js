import auth from "@/constants/auth";

// Access Token
export function getAccessToken() {
  return window.localStorage.getItem(auth.storageTokenKeyName);
}

export function setAccessToken(payload) {
  return window.localStorage.setItem(auth.storageTokenKeyName, payload);
}

export function removeAccessToken() {
  return window.localStorage.removeItem(auth.storageTokenKeyName);
}

// Refresh Token
export function getRefreshToken() {
  return window.localStorage.getItem(auth.onTokenExpiration);
}

export function setRefreshToken(payload) {
  return window.localStorage.setItem(auth.onTokenExpiration, payload);
}

export function removeRefreshToken() {
  return window.localStorage.removeItem(auth.onTokenExpiration);
}

// User data
export function getUserData() {
  return window.localStorage.getItem(auth.userData);
}

export function setUserData(payload) {
  return window.localStorage.setItem(auth.userData, payload);
}

export function removeUserData() {
  return window.localStorage.removeItem(auth.userData);
}

// const [task, updateTask] = useReducer(
//   (prev, next) => ({
//     ...prev,
//     ...next
//   }),
//   {
//     value: ''
//   }
// )
