const linearRegression = require('./regressao-linear-OO')

const regression = new linearRegression()
regression.loadModel('./Regressao linear/model/model-regression.json')
const result = regression.prediser([5,6,7,8,9,10])
console.log(result)