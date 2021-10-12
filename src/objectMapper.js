const kid = {
  name: 'test',
  age: 20,
};

//value from server --real value
const _kid = {
  kid_name: 'new test',
  kid_age: 22,
};

const schema = {
  kid_name: 'name',
  kid_age: 'age',
};

export const objectMapper = (obj, mapSchema) => {
  let mappedObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    const matchedKey = schema?.[key];
    mappedObj = { ...mappedObj, [matchedKey]: value };
  });
  console.log({ mappedObj });
  return mappedObj;
};

objectMapper(_kid, schema);
