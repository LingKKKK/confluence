import Mock from 'mockjs';

const getTable = Mock.mock(location.origin + '/api/getTable.json', 'get', {
  result: [
    {
      aaaaa: 11111,
      bbbbb: 11111,
      ccccc: 11111,
      ddddd: 11111,
      eeeeee: 11111,
      ffffff: 11111
    },
    {
      aaaaa: 22222,
      bbbbb: 22222,
      ccccc: 22222,
      ddddd: 22222,
      eeeeee: 22222,
      ffffff: 22222
    },
    {
      aaaaa: 33333,
      bbbbb: 33333,
      ccccc: 33333,
      ddddd: 33333,
      eeeeee: 33333,
      ffffff: 33333
    }
  ]
});

export { getTable };
