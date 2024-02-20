/**
 * Check the token is expired or not
 * @param {number} dateTime - The datetime to check
 * @return {Boolean}
 */

const isExpired = (exp) => {
  // Convert to timestamp milliseconds
  const time = new Date(exp).getTime();

  const now = Date.now();

  // exp < now => Expired!

  return exp < now;
};

const jwt_decode = (token) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
};

export { isExpired, jwt_decode };
