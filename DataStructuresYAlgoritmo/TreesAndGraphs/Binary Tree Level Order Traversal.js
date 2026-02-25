// -------- función --------

// 🧠 El problema

// Dado el root de un árbol binario, devolver sus valores por nivel.

// Ejemplo:

// Árbol:

//         3
//        / \
//       9  20
//          /  \
//         15   7

// Output:

// [[3], [9,20], [15,7]]





const levelOrder = (root) => {
  if (!root) return [];

  const result = [];
  const queue = [root];
  let index = 0;

  while (index < queue.length) {
    const levelSize = queue.length - index;
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const { val, left, right } = queue[index++];
      level.push(val);

      if (left) queue.push(left);
      if (right) queue.push(right);
    }

    result.push(level);
  }

  return result;
};

// -------- árbol de prueba --------
const tree = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: null,
    right: { val: 6, left: null, right: null }
  }
};

// -------- ejecutar --------
console.log(levelOrder(tree));