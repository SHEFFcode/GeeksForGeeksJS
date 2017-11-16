const StableSelectionSort = require('./StableSelectionSort');
const SelectionSort = require('./SelectionSort');
const InsertionSort = require('./InsertionSort');

const insertionSort = new InsertionSort();
insertionSort.run([23, 42, 4, 16, 8, 15]);

const selectionSort = new SelectionSort();
selectionSort.run([23, 42, 4, 16, 8, 15]);

const stableSelectionSort = new StableSelectionSort();
stableSelectionSort.run([23, 42, 4, 16, 8, 15]);