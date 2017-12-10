module.exports = class BinarySearch {
  runRecursive(inputArr, element, left, right) {
    if (left >= right) {
      console.log(`Element ${element} is not in the input array`);
    }

    let mid = left + (right - left) / 2;
    if (inputArr[mid] == element) {
      console.log(`Found element ${element} at position ${mid + 1}`);
    } else if (inputArr[mid] > element) {
      right = mid - 1;
      this.runRecursive(inputArr, element, left, right);
    } else {
      left = mid + 1;
      this.runRecursive(inputArr, element, left, right);
    }
  }

  runIterative(inputArr, element) {
    left = 0;
    right = inputArr.length;

    while (right >= left) {
      let mid = left + (right - left) / 2;
      if (inputArr[mid] == element) {
        console.log(`Found element ${element} at position ${mid + 1}`);
        break;
      } else if (inputArr[mid] > element) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (left >= right) {
      console.log(`${element} does not exist in this list.`);
    }
  }
}