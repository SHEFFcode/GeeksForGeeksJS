module.exports = class ActivitySelection {
  run(startArr, endArr) {
    let i = 0, j = 0;
    console.log(i);

    for (j = 0; j < startArr.length; i++) {
      if (startArr[j] >= endArr[i]) {
        console.log(j);
        i = j;
      }
    }
  }
}