const replaceSpace = (url) => {
  if (url.split("_").length === 1) {
    return url.split(" ").join("_");
  } else {
    return url.split("_").join(" ");
  }
};

export default replaceSpace;
