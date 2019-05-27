export const defaultViewPort = {
  width: 800,
  height: 400,
  latitude: 35.72343054503254,
  longitude: 51.38949088069012,
  zoom: 12
};

export const updateObject = (target, field, value) => {
  if (target.hasOwnProperty(field)) {
    return Object.assign({}, target, {
      [field]: value
    });
  }
  return target;
};
