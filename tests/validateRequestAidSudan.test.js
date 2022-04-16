const validateResponseObj = require('../query/dataMonetaryHelpQuery');

test('find sudan id SD in year 2021 ', () => {
    return validateResponseObj.dataMonetaryHelp('SD',2021, response => {
      expect(response.status).toBe(200);
    });
  });