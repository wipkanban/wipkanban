const __DEV__ =
  process.env.NODE_ENV === "development" ||
  process.env.NODE_ENV === "test"
    ? true
    : false;

export default __DEV__;
