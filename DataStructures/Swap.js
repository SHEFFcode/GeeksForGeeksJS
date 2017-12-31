class Swap {
  swap(x, y) {
    console.log(x, y);
    [x, y] = [y, x];
    console.log(x, y);
  }
}