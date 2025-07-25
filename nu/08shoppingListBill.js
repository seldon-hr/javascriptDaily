function findLowestPrice(products, discounts) {
  const discountMap = new Map();
  // Mapear los descuentos: tag -> { type, amount }
  for (let [tag, type, amount] of discounts) {
    discountMap.set(tag, {
      type: Number(type),
      amount: parseFloat(amount)
    });
  }
  let total = 0;
  for (let product of products) {
    const basePrice = parseFloat(product[0]);
    let minPrice = basePrice;
    for (let i = 1; i < product.length; i++) {
      const tag = product[i];
      if (tag === "EMPTY" || !discountMap.has(tag)) continue;
      const { type, amount } = discountMap.get(tag);
      let discounted = basePrice;
      // Usamos switch en lugar de if
      switch (type) {
        case 0:
          discounted = amount;
          break;
        case 1:
          discounted = basePrice * (1 - amount);
          break;
        case 2:
          discounted = basePrice - amount;
          break;
        default:
          // No se aplica ningún descuento si el tipo es inválido
          break;
      }
      if (discounted < minPrice) {
        minPrice = discounted;
      }
    }
    total += Math.round(minPrice); // Redondear al número entero más cercano
  }
  return total;
}


const products = [
  ["10", "d0", "d1"],
  ["15", "EMPTY", "EMPTY"],
  ["20", "d1", "EMPTY"]
];
const discounts = [
  ["d0", "1", "0.27"],  // tipo 1: 27% off → 10 * 0.73 = 7.3 → round = 7
  ["d1", "2", "5"]      // tipo 2: -5 → 10 - 5 = 5
];

console.debug(findLowestPrice(products, discounts));