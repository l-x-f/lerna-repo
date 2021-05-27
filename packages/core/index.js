const lodash = require('lodash')

console.log(
  lodash.cloneDeep({
    a: function () {},
    error: new Date('100'),
    r: new RegExp('/11/'),
    n: NaN,
    und: undefined,
    0: 0
  })
)
