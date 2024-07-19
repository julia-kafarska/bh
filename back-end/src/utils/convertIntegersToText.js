export const convertIntegersToText = (obj) => {
  const newObj = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "number") {
      newObj[key] = value.toString();
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
};
