// Data buah
const fruits = [
    { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
    { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
    { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
    { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
    { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
    { fruitId: 5, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
    { fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
  ];
  
  // 1. Buah apa saja yang dimiliki Andi?
  const uniqueFruits = [
    ...new Set(fruits.map((fruit) => fruit.fruitName.toLowerCase())),
  ];
  console.log("1. Buah yang dimiliki Andi:", uniqueFruits);
  
  // 2 Andi memisahkan buahnya menjadi beberapa wadah berdasarkan tipe buah (fruitType). Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
  const groupedFruits = fruits.reduce((acc, fruit) => {
    const type = fruit.fruitType;
    if (!acc[type]) acc[type] = [];
    acc[type].push(fruit.fruitName);
    return acc;
  }, {});
  
  console.log(
    "2. Jumlah wadah yang dibutuhkan:",
    Object.keys(groupedFruits).length
  );
  console.log("   Buah di masing-masing wadah:", groupedFruits);
  
  // 3. Berapa total stock buah yang ada di masing-masing wadah?
  const totalStockByType = fruits.reduce((acc, fruit) => {
    const type = fruit.fruitType;
    if (!acc[type]) acc[type] = 0;
    acc[type] += fruit.stock;
    return acc;
  }, {});
  
  console.log("3. Total stok di masing-masing wadah:", totalStockByType);
  
  // 4. Apakah ada komentar terkait kasus di atas?
  const duplicateIds = fruits.reduce((acc, fruit) => {
    acc[fruit.fruitId] = (acc[fruit.fruitId] || 0) + 1;
    return acc;
  }, {});
  
  const duplicateComments = Object.keys(duplicateIds)
    .filter((id) => duplicateIds[id] > 1)
    .map((id) => `Duplicate entry found for fruitId: ${id}`);
  
  if (duplicateComments.length > 0) {
    console.log("4. Komentar terkait kasus:", duplicateComments);
  } else {
    console.log("4. Komentar terkait kasus: Data is clean with no duplicates.");
  }
  
  