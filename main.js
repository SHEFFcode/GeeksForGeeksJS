const StableSelectionSort = require('./StableSelectionSort');
const SelectionSort = require('./SelectionSort');


const selectionSort = new SelectionSort();
selectionSort.run([23, 42, 4, 16, 8, 15]);

const stableSelectionSort = new StableSelectionSort();
stableSelectionSort.run([23, 42, 4, 16, 8, 15]);