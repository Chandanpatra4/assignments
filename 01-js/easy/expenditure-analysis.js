/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (Array.isArray(transactions) && transactions.length > 0) {
    const categoryTotals = {};

    transactions.forEach(transaction => {
      if (transaction.category && typeof transaction.price === 'number') {
        if (!categoryTotals[transaction.category]) {
          categoryTotals[transaction.category] = 0;
        }
        categoryTotals[transaction.category] += transaction.price;
      }
    });

    return Object.entries(categoryTotals).map(([category, totalSpent]) => ({
      category,
      totalSpent
    }));
  }
  return [];
}




module.exports = calculateTotalSpentByCategory;
