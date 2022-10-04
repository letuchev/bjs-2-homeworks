let arr1 = [8, 9, 5, 4];
let arr2 = [8, 9, 5, 4, 8, 3, 5];

function compareArrays(arr1, arr2) {

  return (arr1.length === arr2.length && arr1.every((item, id) => item === arr2[id]));
}


let arr3 = [-10,-21,12,123];

function advancedFilter(arr3) {
  return arr3.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);
}
