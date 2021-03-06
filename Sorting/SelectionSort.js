class SelectionSort {
  run(inputArr) {
    const length = inputArr.length; //to make life easier
    
    //The unsorted region starts at the length of the array, moves on by 1
    for (let i = 0; i < length - 1; i++) //This can run till length - 1 as another way to optimize
    {
      //Let's keep track of the lowest item's index by first setting it to i as a initial value.
      var lowestItemIndex = i;
      
      //The loop that finds the lowest element in the unsorted region of the array.
      for (let j = i + 1; j < length; j++)
      {
        if (inputArr[j] < inputArr[lowestItemIndex])
        {
          lowestItemIndex = j; // current passes's lowest item
        }
      }
      
      //This is an optimization to prevent swapping if lowest index is equal to i.
      //If i is equal to lowest item idex, no swap is necessary.
      if (lowestItemIndex !== i && inputArr[lowestItemIndex] !== inputArr[i]) //don't swap same values
      {
        /* =============== standard swap ================ */
        // var temp = inputArr[lowestItemIndex];
        // inputArr[lowestItemIndex] = inputArr[i];
        // inputArr[i] = temp;
        
        /* =============== no extra var swap ================ */
        // inputArr[lowestItemIndex] = inputArr[lowestItemIndex] + inputArr[i];
        // inputArr[i] = inputArr[lowestItemIndex] - inputArr[i];
        // inputArr[lowestItemIndex] = inputArr[lowestItemIndex] - inputArr[i];

        /* =============== Elegant Swap ===================== */
        [inputArr[lowestItemIndex], inputArr[i]] = [inputArr[i], inputArr[lowestItemIndex]];
      }
    } //once we are done with this loop we have a sorted array.
    
    inputArr.forEach(item => {
      console.log(item);
    });
  }
}

module.exports = SelectionSort;