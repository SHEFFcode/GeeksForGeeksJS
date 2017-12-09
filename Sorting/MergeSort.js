class MergeSort {
  // Merges two subarrays of arr[].
  // First subarray is arr[l..m]
  // Second subarray is arr[m+1..r]
  Merge(arr, l, m, r) {
    // Find sizes of two subarrays to be merged
    var n1 = m - l + 1;
    var n2 = r - m;
    var i, j; //declare iterator loop variables
    
    /* Create temp arrays */
    var L = [];
    var R = [];
    
    /*Copy data to temp arrays*/
    for (i = 0; i < n1; ++i) {
      L[i] = arr[l + i];
    }
    for (j = 0; j < n2; ++j) {
      R[j] = arr[m + 1 + j];
    }
    
    
    /* Merge the temp arrays */
    
    // Initial indexes of first and second subarrays
    i = 0;
    j = 0;
    
    // Initial index of merged subarry array
    var k = l;
    while (i < n1 && j < n2)
    {
      if (L[i] <= R[j])
      {
        arr[k] = L[i];
        i++;
      }
      else
      {
        arr[k] = R[j];
        j++;
      }
      k++;
    }
    
    /* Copy remaining elements of L[] if any */
    while (i < n1)
    {
      arr[k] = L[i];
      i++;
      k++;
    }
    
    /* Copy remaining elements of R[] if any */
    while (j < n2)
    {
      arr[k] = R[j];
      j++;
      k++;
    }
  }
  
  // Main function that sorts arr[l..r] using
  // merge()
  Run(arr, l, r) {
    if (l < r)
    {
      // Find the middle point
      var m = Math.floor((l + r) / 2);
      
      // Sort first and second halves
      this.Run(arr, l, m);
      this.Run(arr, m + 1, r);
      
      // Merge the sorted halves
      this.Merge(arr, l, m, r);
    }
  }
}

module.exports = MergeSort;