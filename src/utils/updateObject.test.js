import { updateObjectField } from './index';

const targetObject = { a: 1, b: 2 };
test('updateObjectField', () => {
  const updatedObject = updateObjectField(targetObject, 'b', 4);
  expect(updatedObject).toEqual({ a: 1, b: 4 });
});

test(`updateObject with field that target object hasn't it`, () => {
  const updatedObject = updateObjectField(targetObject, 'z', 4);
  expect(updatedObject).toEqual(targetObject);
});
