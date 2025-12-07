const numbersList = [1,10,14,2,4,5,43,34];
const copiedNubersList = [...numbersList];
copiedNubersList.sort((a, b) => a - b);
console.log(copiedNubersList);
console.log(numbersList);