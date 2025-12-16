// simple auth helper
export const auth = {
  saveToken(token) { localStorage.setItem("token", token); },
  getToken() { return localStorage.getItem("token"); },
  clear() { localStorage.removeItem("token"); localStorage.removeItem("role"); },
  saveRole(role) { localStorage.setItem("role", role); },
  getRole() { return localStorage.getItem("role"); },
  saveUser(username) { localStorage.setItem("username", username); },
  getUser() { return localStorage.getItem("username"); }
};
