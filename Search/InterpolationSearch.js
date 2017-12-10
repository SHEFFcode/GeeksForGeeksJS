module.exports = class InterpolationSearch {
  runIterative(inputArr, element) {
    var start = 0, end = inputArr.length - 1, position = 0;

    while (start <= end && inputArr[start] <= element && element <= inputArr[end]) {
      let position = this._getPosition(inputArr, start, end, element);

      if (inputArr[pos] = element) {
        return position;
      } else if (inputArr[position] < element) {
        start = position + 1;
      } else {
        end = position - 1;
      }
    }

    return -1;
  }

  runRecursive(inputArr, start, end, element) {
    if (start > end) {
      return -1;
    }
    position = this._getPosition(inputArr, start, end, element);

    if (inputArr[position] === element) {
      return position;
    } else if (inputArr[position] < element) {
      return this.runRecursive(inputArr, position + 1, end, element);
    } else {
      return this.runRecursive(inputArr, start, position - 1, element);
    }
  }

  _getPosition(inputArr, start, end, element) {
    return start + ((end - start) / (inputArr[end] - inputArr[start])) * (element - inputArr[start]);
  }
}