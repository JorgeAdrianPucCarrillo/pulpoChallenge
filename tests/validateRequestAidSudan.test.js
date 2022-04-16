const validateResponseObj = require('../query/dataMonetaryHelpQuery');
const sortInfo = require('../utils/sortInfo');

test('find sudan id: SD in year 2021 ', () => {
    return validateResponseObj.dataMonetaryHelp('SD',2021, response => {
      expect(response.status).toBe(200);
    });
  });

test('return empty obj with random invaid ID like: ASFWRGSASD with a valid year ', () => {
    return validateResponseObj.dataMonetaryHelp('ASFWRGSASD',2021, response => {
      expect(response.data).toBe({});
    });
  });
test('returns error with a year greater than the current, with a valid ID', () => {
    return validateResponseObj.dataMonetaryHelp('SD',2025, response => {
      expect(response.status).toBe(400);
    });
  });
test('return empty body with a no obj parm to sort', () => {
      expect(sortInfo.sortInformation('sampleinvalid',2020)).toStrictEqual({});
  });