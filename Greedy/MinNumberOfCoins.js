module.exports = class MinNumberOfCoins {
  run(denominationsArray, changeToGive) {
    let coinsUsed = [];

    for (let i = denominationsArray.length - 1; i > -1; i--) {
      while (changeToGive >= denominationsArray[i] && changeToGive > 0) {
        changeToGive -= denominationsArray[i];
        coinsUsed.push(denominationsArray[i]);
      }
    }

    for (coin in coinsUsed) {
      console.log(coin);
    }
  }
}