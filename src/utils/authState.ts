export function userLogOut() {
  localStorage.removeItem("authorizationToken");
}
export function userLogIn(token: string) {
  localStorage.setItem("authorizationToken", token);
}

export function isUserLoggedIn() {
  return !!localStorage.getItem("authorizationToken");
}
