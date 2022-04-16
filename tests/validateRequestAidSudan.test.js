const validateResponseObj = require('../query/dataMonetaryAidQuery');

//test('find sudan id: SD in year 2021 ', () => {
//    return validateResponseObj.dataMonetaryHelp('SD',2021, response => {
//      expect(response.status).toBe(200);
//    });
//  });
//
//test('return empty obj with random invaid ID like: ASFWRGSASD with a valid year ', () => {
//    return validateResponseObj.dataMonetaryHelp('ASFWRGSASD',2021, response => {
//      expect(response.data).toBe({});
//    });
//  });
test('returns error with a year greater than the current, with a valid ID', () => {
    return validateResponseObj.dataMonetaryAidJson('SD',2025, response => {
      expect(response.status).toBe(400);
    });
  });