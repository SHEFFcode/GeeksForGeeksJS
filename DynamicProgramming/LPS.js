const AdvancedDataStructures = require('./AdvancedDataStructures');

class LPS extends AdvancedDataStructures {
  runLPS(sequence) {
    const n = sequence.length;
    var cl;
    var container = new this.Matrix(n, n);

    for (let i = 0; i < n; i++) {
      container[i][i] = 1;
    }

    /*cl: cl here is the current length of the substring. j will be based off it, and we will use it to see
      when we should stop, specifically when its length equalizes with the length of the given sequence, which
      is why the loop is from 2 to <= n. It starts at 2 because we have done all subsequences of length 1 with
      the for loop directly above, per definition, and we stop when cl > n (ie we reach the end of the string
      with the last character included.*/
    for (cl = 2; cl <= n; cl++) {
      for (let i = 0; i < n - cl + 1; i++) {
        let j = i + cl - 1;
        if (sequence[i] === sequence[j] && cl == 2) {
          container[i][j] = 2;
        } else if (sequence[i] === sequence[j]) {
          container[i][j] = container[i + 1][j - 1] + 2;
        } else {
          container[i][j] = Math.max(container[i][j - 1], container[i + 1][j]);
        }
      }
    }

    return container[0][n - 1];
  }
}

module.exports = LPS;