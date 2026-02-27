function darCambioGreedy(monto, monedas) {
  // Aseguramos monedas de mayor a menor (greedy necesita eso)
  monedas = [...monedas].sort((a, b) => b - a);

  let restante = monto;
  const usadas = [];

  console.log(`Monto inicial: ${monto}`);
  console.log(`Monedas disponibles: ${monedas.join(", ")}`);
  console.log("---- Paso a paso ----");

  for (const moneda of monedas) {
    // Mientras pueda usar esta moneda sin pasarme, la uso
    while (restante >= moneda) {
      usadas. push(moneda);
      restante -= moneda;

      console.log(
        `Tomo ${moneda} -> restante: ${restante} | monedas: [${usadas.join(", ")}]`
      );
    }
  }

  console.log("---- Resultado ----");
  console.log(`Cambio para ${monto}: [${usadas.join(", ")}]`);
  console.log(`Cantidad de monedas: ${usadas.length}`);

  return usadas;
}

// Ejemplo
darCambioGreedy(87, [50, 20, 10, 5, 2, 1]);