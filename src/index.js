
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let newMatrix = [];

  if (matrix === undefined || matrix.length === 0) {
    return [];
  } else {
    matrix.forEach( (item, i, ) => {
      if (i === 0) {
        newMatrix.push(item);
      } else if (i % 2 === 0) {
        newMatrix.push(item);
      } else {
        newMatrix.push(item.reverse());
      }
    });
    let finalMatrix = newMatrix.join().split(','),
      newFinalMatrix = [];

    finalMatrix.forEach(function (item, index, array) {
      newFinalMatrix.push(parseInt(item));
    });
    return newFinalMatrix;
  }
}
