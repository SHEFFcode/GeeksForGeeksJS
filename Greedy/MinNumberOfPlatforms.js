module.exports = class MinNumberOfPlatforms {
  run(arrivalArr, departureArr) {
    // Assume that arrays given are sorted
    let n = arrivalArr.length;
    let maxPlatforms = 1, result = 1, i = 1, j = 0;

    while (i < n && j < n) {
      if (arrivalArr[i] < departureArr[j]) {
        maxPlatforms++;
        i++;
        if (maxPlatforms > result) {
          result = maxPlatforms;
        }
      } else {
        maxPlatforms--;
        j++;
      }
    }

    console.log(`You need to have ${result} platforms for this schedule.`);
    return result;
  }
}