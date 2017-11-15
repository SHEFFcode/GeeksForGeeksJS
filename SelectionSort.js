class SelectionSort {
  run(inputArr) {
    const length = inputArr.length; //to make life easier

    //The unsorted region starts at the length of the array, moves on by 1
    for (let i = 0; i < length - 1; i++) //This can run till length - 1 as another way to optimize
    {
      //Let's keep track of the lowest item's index by first setting it to i as a initial value.
      var lowestItemIndex = i;

      //The loop that finds the lowest element in the unsorted region of the array.
      for (let j = i + 1; j < length; j++) {
        if (inputArr[j] < inputArr[lowestItemIndex]) {
          lowestItemIndex = j; // current passes's lowest item
        }
      }

      let key = inputArr[lowestItemIndex]; // keep track of the min key
      while (lowestItemIndex > i) // while loop to shift items to the right
      {
        inputArr[lowestItemIndex] = inputArr[lowestItemIndex - 1]; // actual shift to right
        lowestItemIndex--; // move on till u hit i
      }

      inputArr[i] = key; //place key in the new "opened up slot"


    } //once we are done with this loop we have a table sorted array.

    inputArr.forEach((item) => {
      console.log(item);
    })
  }
}

module.exports = SelectionSort;