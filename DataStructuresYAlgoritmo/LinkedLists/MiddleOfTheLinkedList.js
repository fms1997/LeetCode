// linkedlist-middle.js

// ===============================
// 1. Definición de un nodo
// ===============================
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// ===============================
// 2. Función: encontrar el nodo del medio
// ===============================
const middleNode = head => {
  let slow = head;
  let fast = head;

  // fast avanza de a 2, slow de a 1
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// ===============================
// 3. Helper: imprimir lista completa
// ===============================
const printList = head => {
  let current = head;
  let result = [];

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  console.log(result.join(" → "));
};

// ===============================
// 4. Ejemplo 1: lista impar
// ===============================
console.log("📌 Ejemplo 1: Lista impar");

const head1 =
  new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(4,
          new ListNode(5)
        )
      )
    )
  );

printList(head1);

const middle1 = middleNode(head1);
console.log("✅ Nodo del medio:", middle1.val); // 3

console.log("\n-----------------------------\n");

// ===============================
// 5. Ejemplo 2: lista par
// ===============================
console.log("📌 Ejemplo 2: Lista par");

const head2 =
  new ListNode(1,
    new ListNode(2,
      new ListNode(3,
        new ListNode(4,
          new ListNode(5,
            new ListNode(6)
          )
        )
      )
    )
  );

printList(head2);

const middle2 = middleNode(head2);
console.log("✅ Nodo del medio:", middle2.val); // 4

console.log("\n🎉 Fin del programa");
