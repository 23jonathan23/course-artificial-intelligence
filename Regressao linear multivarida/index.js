const multivarieteRegression = require('./multivariate-regression')

const config = {
  input: [[1,2], [2,3], [3,4], [4,5]],
  output: [3,5,7,9]
}

const regression = new multivarieteRegression()

regression.train(config)

const resul = regression.prediser([[5,6], [6,7]])

console.log(resul)