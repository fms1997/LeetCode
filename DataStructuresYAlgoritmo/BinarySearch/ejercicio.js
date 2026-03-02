function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } 
    else if (nums[mid] < target) {
      left = mid + 1;  // Buscar en la derecha
    } 
    else {
      right = mid - 1; // Buscar en la izquierda
    }
  }

  return -1; // No encontrado
}
console.log("Resultado:", binarySearch([1, 3, 5, 7, 9, 11], 7));