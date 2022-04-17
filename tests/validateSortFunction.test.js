const sortInfo = require('../utils/sortInfo');

//pruebas json

test('return empty body with a no obj parm to sort', () => {
  expect(sortInfo.sortInformationAsArray('sampleinvalid',2020)).toStrictEqual({});
});

//pruebas array

test('return empty body with a no obj parm to sort', () => {
    expect(sortInfo.sortInformationAsArray('sampleinvalid',2020)).toStrictEqual([]);
  });

const infoExample ={docs:[
    {
      transaction_value: [ 51210 ],
      participating_org_ref: [ 'GB-GOV-1' ],
      participating_org_narrative: [ 'UK - Foreign, Commonwealth and Development Office' ],
      transaction_value_value_date: [ '2016-12-31T00:00:00Z' ]
    },
  ]}
const expectedObj =[
  {
      "yearTransaction": 2016,
      "organizations": [
          {
              "name": "UK - Foreign, Commonwealth and Development Office",
              "value": 51210
          }
      ]
  },
]

test('return sorted Info', () => {
    expect(sortInfo.sortInformationAsArray(infoExample ,2021)).toStrictEqual(expectedObj);
});