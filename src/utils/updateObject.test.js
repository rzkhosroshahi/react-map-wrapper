import { updateObject } from './index';

const targetObject = { a: 1, b: 2 };
test('updateObject', () => {
  const updatedObject = updateObject(targetObject, 'b', 4);
  expect(updatedObject).toEqual({ a: 1, b: 4 });
});

test(`updateObject with field that target object hasn't it`, () => {
  const updatedObject = updateObject(targetObject, 'z', 4);
  expect(updatedObject).toEqual(targetObject);
});
