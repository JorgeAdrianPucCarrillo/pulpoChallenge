const sortInfo = require('../utils/sortInfo');

test('return empty body with a no obj parm to sort', () => {
      expect(sortInfo.sortInformation('sampleinvalid',2020)).toStrictEqual({});
  });