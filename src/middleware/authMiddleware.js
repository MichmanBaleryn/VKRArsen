
const authMiddleware = {
  beforeRouteEnter(to, from, next) {
    console.log("123");
    const token = getCookiesToken();
    if (token) {
      next();
    } else {
      next("/");
    }
  },
};

function getCookiesToken() {
  const token = this.cookies.get("jwt");
  return token;
}

export default authMiddleware;
