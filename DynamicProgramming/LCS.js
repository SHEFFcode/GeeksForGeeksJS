class LCS {
  runLCS(stringOne, stringTwo, m, n) {
    var container = [];
    this._setupContainer(container, m, n);


    for (let i = 0; i <= stringOne.length; i++) {
      for (let j = 0; j <= stringTwo.length; j++) {

        if (i === 0 || j === 0) {
          container[i][j] = 0;
        } else if (stringOne[i - 1] === stringTwo[j - 1]) {
          container[i][j] = container[i - 1][j - 1] + 1;
        } else {
          container[i][j] = Math.max(container[i - 1][j], container[i][j - 1])
        }

      }
    }

    return container[m][n];
  }

  _setupContainer(container, m, n) {
    for (let i = 0; i <= m; i++) {
      container[i] = [];
      for (let j = 0; j <= n; j++) {
        container[i][j] = null;
      }
    }
  }
}

module.exports = LCS;