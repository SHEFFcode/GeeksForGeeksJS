const StableSelectionSort = require('./StableSelectionSort');
const SelectionSort = require('./SelectionSort');
const InsertionSort = require('./InsertionSort');
const QuickSort = require('./Quicksort');
const MergeSort = require('./MergeSort');


const mergeSort = new MergeSort();
var inputArr = [38, 27, 43, 3, 9, 82, 10];
mergeSort.Run(inputArr, 0, inputArr.length);
inputArr.forEach((item) => {
  console.log(item);
});

// const quickSort = new QuickSort();
// var inputArr = [7, 2, 1, 6, 8, 5, 3, 4];
// quickSort.QuicksortWrapper(inputArr, 0, inputArr.length - 1);
// inputArr.forEach((item) => {
//   console.log(item);
// });



// const insertionSort = new InsertionSort();
// insertionSort.run([23, 42, 4, 16, 8, 15]);

// const selectionSort = new SelectionSort();
// selectionSort.run([23, 42, 4, 16, 8, 15]);

// const stableSelectionSort = new StableSelectionSort();
// stableSelectionSort.run([23, 42, 4, 16, 8, 15]);