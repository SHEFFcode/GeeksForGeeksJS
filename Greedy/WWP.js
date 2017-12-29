class WWP {
  runWWP(input, max = 6) {
    var line = '';
    const words = input.split(' ');

    words.forEach((word) => {
      if ((line + word).length < max) {
        line += `${word} `;
      } else if ((line + word).length === max) {
        line += word;
        console.log(line);
        line = '';
      } else {
        console.log(line);
        line = '';
        line += `${word} `;
      }
    });

    if (line.length > 0) {
      console.log(line);
      line = '';
    }
  }
}

module.exports = WWP;