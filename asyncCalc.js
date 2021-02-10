async function asyncSum(a, b) {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b)
    }, 3000)
  })
  return result
}

module.exports = asyncSum

asyncCalc = {
  asyncSum: async function (a, b) {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b)
      }, 3000)
    })
    return result
  },
  asyncSub: async function (a, b) {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a - b)
      }, 3000)
    })
    return result
  },
  asyncMult: async function (a, b) {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a * b)
      }, 3000)
    })
    return result
  },
  asyncDivide: async function (a, b) {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a / b)
      }, 3000)
    })
    return result
  },
  asyncSquare: async function (a) {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a ** 2)
      }, 3000)
    })
    return result
  },
  asyncSquareRoot: async function (a, b) {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Math.sqrt(a))
      }, 3000)
    })
    return result
  }
}

module.exports = asyncCalc