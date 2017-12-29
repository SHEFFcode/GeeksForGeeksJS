class Fibonacci {

  runRecursive(desiredFib) {
    return desiredFib === 0 || desiredFib === 1 ?  desiredFib : this.runRecursive(desiredFib - 1) 
      + this.runRecursive(desiredFib - 2);
  }

  runMemoization(desiredFib, memoizationArray = []) {
    if (desiredFib === 0 || desiredFib === 1) {
      return desiredFib;
    }

    if (memoizationArray[desiredFib]) {
      return memoizationArray[desiredFib];
    } else {
      memoizationArray[desiredFib] = this.runMemoization(desiredFib - 1, memoizationArray) 
        + this.runMemoization(desiredFib - 2, memoizationArray);
        return memoizationArray[desiredFib];
    }
  }

  runTabulation(desiredFib, tabulationArray = [0, 1]) {
    for (let i = 2; i <= desiredFib; i++) {
      tabulationArray[i] = tabulationArray[i - 1] + tabulationArray[i - 2];
    }

    return tabulationArray[desiredFib];
  }
}

module.exports = Fibonacci;