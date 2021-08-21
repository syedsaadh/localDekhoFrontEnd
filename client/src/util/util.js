export const formatException = (e) => {
  if (e instanceof Error) {
    return e;
  } else if (typeof e === "object") {
    return JSON.stringify(e);
  } else if (typeof e === "string") {
    return e;
  } else {
    return "Undefined Error Type";
  }
};
