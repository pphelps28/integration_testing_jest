let app = {
  waitingForOperand: false,
  history: [],
  numClick: function (e) {
    let output = document.getElementById("output")
    output.textContent === "" ? output.textContent = e.target.textContent : output.textContent += e.target.textContent
  },
  clear: function (e) {
    let output = document.getElementById("output")
    output.textContent = ""
    app.history = []
    app.waitingForOperand = false
  },
  addOperator: function (e,) {
    if (!app.waitingForOperand) {
      let output = document.getElementById("output")
      app.history.push(output.textContent, e.target.textContent)
      output.textContent = ""
      app.waitingForOperand = true
    }
  },
  compute: function compute(e) {
    let output = document.getElementById("output")
    app.history.push(output.textContent)
    if (app.waitingForOperand && output.textContent) {
      output.textContent = parseArray(app.history)
    }
  }
}

function parseArray(arr) {
  let operator = arr[1]
  switch (operator) {
    case "x":
      return +arr[0] * +arr[2]
    case "+":
      return +arr[0] + +arr[2]
  }
}

module.exports = { parseArray, app }

