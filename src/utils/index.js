export const defaultViewPort = {
  width: 800,
  height: 400,
  latitude: 35.72343054503254,
  longitude: 51.38949088069012,
  zoom: 12
};

/**
 *
 * @param target {any}
 * @param field is string
 * @param value any
 * @returns {any}
 */
export const updateObjectField = (target, field, value) => {
  if (target.hasOwnProperty(field)) {
    return Object.assign({}, target, {
      [field]: value
    });
  }
  return target;
};

export const isRenderingDefault = markerCords => {
  const { lat, long } = markerCords;
  return !!(lat || long);
};
