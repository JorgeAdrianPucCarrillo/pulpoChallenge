const validateResponseObj = require('../query/dataMonetaryAidQuery');


//pruebas Json
test('find sudan id: SD in year 2021 ', () => {
    return validateResponseObj.dataMonetaryAidJson('SD',2021, response => {
      expect(response.status).toBe(200);
    });
  });

test('return empty obj with random invaid ID like: ASFWRGSASD with a valid year ', () => {
    return validateResponseObj.dataMonetaryAidJson('ASFWRGSASD',2021, response => {
      expect(response.data).toBe({});
    });
  });
test('returns error with a year greater than the current, with a valid ID', () => {
    return validateResponseObj.dataMonetaryAidJson('SD',2025, response => {
      expect(response.status).toBe(400);
    });
  });

// pruebas Array

test('find sudan id: SD in year 2021 ', () => {
  return validateResponseObj.dataMonetaryAidArray('SD',2021, response => {
    expect(response.status).toBe(200);
  });
});

test('return empty obj with random invaid ID like: ASFWRGSASD with a valid year ', () => {
  return validateResponseObj.dataMonetaryAidArray('ASFWRGSASD',2021, response => {
    expect(response.data).toBe([]);
  });
});
test('returns error with a year greater than the current, with a valid ID', () => {
  return validateResponseObj.dataMonetaryAidArray('SD',2025, response => {
    expect(response.status).toBe(400);
  });
});